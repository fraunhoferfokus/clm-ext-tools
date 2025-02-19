/* -----------------------------------------------------------------------------
 *  Copyright (c) 2023, Fraunhofer-Gesellschaft zur Förderung der angewandten Forschung e.V.
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as published by
 *  the Free Software Foundation, version 3.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program. If not, see <https://www.gnu.org/licenses/>.  
 *
 *  No Patent Rights, Trademark Rights and/or other Intellectual Property
 *  Rights other than the rights under this license are granted.
 *  All other rights reserved.
 *
 *  For any other rights, a separate agreement needs to be closed.
 *
 *  For more information please contact:  
 *  Fraunhofer FOKUS
 *  Kaiserin-Augusta-Allee 31
 *  10589 Berlin, Germany
 *  https://www.fokus.fraunhofer.de/go/fame
 *  famecontact@fokus.fraunhofer.de
 * -----------------------------------------------------------------------------
 */

import { BaseDatamodel, iBaseDatamodel } from "clm-core";
import { v4 as uuid } from 'uuid'

/**
 * @public 
 * Part of the payload of {@link iToolModel}
 */
export enum AuthType {
    "BEARER" = "BEARER",
    "BASIC" = "BASIC"
}

/**
 * @public 
 * Part of the payload of {@link iToolModel}
 */
export enum ToolType {
    "LTI13" = "LTI13",
    "LTI11" = "LTI11",
    "CMI5" = "CMI5",
    "METADATA" = "METADATA",
}

/**
 * @public 
 * Part of the payload of {@link iToolModel}
 */
export interface CustomProperty {
    in: ('HEADER' | 'QUERY' | 'FORM'),
    key: string,
    value: string
}

/**
 * @public 
 * Part of the payload of {@link iToolModel}
 */
export interface AvailabilityHistory {
    _id: string,
    id_tool: string,
    isSuccessful: boolean,
    timestamp: Date
}
/**
 * @public
 * The payload which is passed to the constructor of {@link ToolModel}
 */
export interface iToolModel extends iBaseDatamodel {
    /**
     * The type of the tool
     */
    type: ToolType,
    /**
     * The url where the tool is deployed
     */
    launchableUrl: string,
    /**
     * Username to authenticate against the tool
     */
    username: string,
    /**
     * Password to authenticate against the tool
     */
    password: string,
    /**
     * Bearer/Basic token
     */
    token?: string,
    /**
     * The authentication type 
     */
    authType: AuthType,


    /**
     * How the tool should be launched
     */
    target: string,
    /**
     * The display name which should show on the frontend
     */
    displayName: string,
    /**
     * LTI 1.3 specific parameter
     */
    activityId?: string,
    /**
     * Custom properties to be used for the tool. Can be contained in the body, header or params
     */
    customProperties?: CustomProperty[],
    /**
     * History of the availability of the tool
     */
    availabilityHistory?: AvailabilityHistory[],
    /**
     * If the tool has storage access or not
     */
    storageAccess?: boolean

    /**
     * OIDC login url for LTI 1.3
     */
    oidc_login_url?: string;
    /**
    * LTI 1.3 specific parameter
    */
    target_link_uri?: string,

    /**
    * LTI 1.3 client_id the tool needs to 
    */
    client_id?: string,
    /**
     * tools public key_set url 
     */
    key_set_url?: string
    /**
 * tools public key_set url 
 */
    jwks_url?: string
    /**
* tools public key_set url 
*/
    deployment_id?: string
    /**
* tools public key_set url 
*/
    redirect_uris?: string[]

}







/**
 * @public
 * Tool datamodel which is used by {@link ToolBDTO}
 */
export default class ToolModel extends BaseDatamodel implements iToolModel {

    constructor(payload: iToolModel) {
        super(payload)
        this.launchableUrl = payload.launchableUrl
        this.client_id = payload.client_id
        this.target = payload.target
        this.activityId = payload.activityId
        this.type = payload.type
        this.username = payload.username
        this.password = payload.password
        this.displayName = payload.displayName
        this.authType = payload.authType
        this.storageAccess = payload.storageAccess

        this.customProperties = payload.customProperties
        this.availabilityHistory = payload.availabilityHistory

        // lti 1.3 parameters
        this.jwks_url = payload.jwks_url
        this.redirect_uris = payload.redirect_uris
        this.oidc_login_url = payload.oidc_login_url
        this.deployment_id = payload.deployment_id
        this.target_link_uri = payload.target_link_uri || payload.launchableUrl
        this.key_set_url = payload.key_set_url
        this.client_id = payload.client_id
        if (payload.type === 'LTI13' && this.client_id === 'undefined') this.client_id = uuid()
    }
    key_set_url?: string;
    redirect_uris?: string[] | undefined;
    deployment_id?: string | undefined;
    jwks_url?: string | undefined;
    customProperties?: CustomProperty[]
    availabilityHistory?: AvailabilityHistory[]
    storageAccess?: boolean;
    authType: AuthType;
    launchableUrl: string;
    client_id?: string;
    target: string;
    activityId?: string;
    type: ToolType;
    username: string;
    password: string;
    token?: string;
    displayName: string;
    client_secret?: string;
    oidc_login_url?: string;
    target_link_uri?: string

}

