import { BaseFrontendDTO, iBaseFrontendDTO } from "clm-core";
import { AuthType, ToolType } from './ToolModel';
interface iCochToolFDTO extends iBaseFrontendDTO {
    type: ToolType;
    launchableUrl: string;
    username: string;
    password: string;
    token?: string;
    authType: AuthType;
    client_id?: string;
    target_link_uri?: string;
    target: string;
    oidc_login_url?: string;
    displayName: string;
    activityId?: string;
    customProperties: [
        {
            in: ('HEADER' | 'QUERY' | 'FORM');
            key: string;
            value: string;
        }
    ];
    availabilityHistory: [
        {
            _id: string;
            id_tool: string;
            isSuccessful: boolean;
            timestamp: Date;
        }
    ];
    storageAccess: boolean;
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
export default class CouchToolFDTO extends BaseFrontendDTO implements iCochToolFDTO {
    constructor(payload: iCochToolFDTO);
    key_set_url?: string;
    redirect_uris?: string[] | undefined;
    deployment_id?: string | undefined;
    jwks_url?: string | undefined;
    storageAccess: boolean;
    type: ToolType;
    launchableUrl: string;
    username: string;
    password: string;
    token?: string;
    authType: AuthType;
    client_id?: string;
    target_link_uri?: string;
    target: string;
    oidc_login_url?: string;
    displayName: string;
    activityId?: string;
    customProperties: [{
        in: 'HEADER' | 'QUERY' | 'FORM';
        key: string;
        value: string;
    }];
    availabilityHistory: [{
        _id: string;
        id_tool: string;
        isSuccessful: boolean;
        timestamp: Date;
    }];
}
export {};
