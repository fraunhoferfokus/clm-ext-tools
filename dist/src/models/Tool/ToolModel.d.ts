import { BaseDatamodel, iBaseDatamodel } from "clm-core";
/**
 * @public
 * Part of the payload of {@link iToolModel}
 */
export declare enum AuthType {
    "BEARER" = "BEARER",
    "BASIC" = "BASIC"
}
/**
 * @public
 * Part of the payload of {@link iToolModel}
 */
export declare enum ToolType {
    "LTI13" = "LTI13",
    "LTI11" = "LTI11",
    "CMI5" = "CMI5",
    "METADATA" = "METADATA"
}
/**
 * @public
 * Part of the payload of {@link iToolModel}
 */
export interface CustomProperty {
    in: ('HEADER' | 'QUERY' | 'FORM');
    key: string;
    value: string;
}
/**
 * @public
 * Part of the payload of {@link iToolModel}
 */
export interface AvailabilityHistory {
    _id: string;
    id_tool: string;
    isSuccessful: boolean;
    timestamp: Date;
}
/**
 * @public
 * The payload which is passed to the constructor of {@link ToolModel}
 */
export interface iToolModel extends iBaseDatamodel {
    /**
     * The type of the tool
     */
    type: ToolType;
    /**
     * The url where the tool is deployed
     */
    launchableUrl: string;
    /**
     * Username to authenticate against the tool
     */
    username: string;
    /**
     * Password to authenticate against the tool
     */
    password: string;
    /**
     * Bearer/Basic token
     */
    token?: string;
    /**
     * The authentication type
     */
    authType: AuthType;
    /**
     * How the tool should be launched
     */
    target: string;
    /**
     * The display name which should show on the frontend
     */
    displayName: string;
    /**
     * LTI 1.3 specific parameter
     */
    activityId?: string;
    /**
     * Custom properties to be used for the tool. Can be contained in the body, header or params
     */
    customProperties?: CustomProperty[];
    /**
     * History of the availability of the tool
     */
    availabilityHistory?: AvailabilityHistory[];
    /**
     * If the tool has storage access or not
     */
    storageAccess?: boolean;
    /**
     * OIDC login url for LTI 1.3
     */
    oidc_login_url?: string;
    /**
    * LTI 1.3 specific parameter
    */
    target_link_uri?: string;
    /**
    * LTI 1.3 client_id the tool needs to
    */
    client_id?: string;
    /**
     * tools public key_set url
     */
    key_set_url?: string;
    /**
 * tools public key_set url
 */
    jwks_url?: string;
    /**
* tools public key_set url
*/
    deployment_id?: string;
    /**
* tools public key_set url
*/
    redirect_uris?: string[];
}
/**
 * @public
 * Tool datamodel which is used by {@link ToolBDTO}
 */
export default class ToolModel extends BaseDatamodel implements iToolModel {
    constructor(payload: iToolModel);
    key_set_url?: string;
    redirect_uris?: string[] | undefined;
    deployment_id?: string | undefined;
    jwks_url?: string | undefined;
    customProperties?: CustomProperty[];
    availabilityHistory?: AvailabilityHistory[];
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
    target_link_uri?: string;
}
