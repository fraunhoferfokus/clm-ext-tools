"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolType = exports.AuthType = void 0;
const clm_core_1 = require("clm-core");
const uuid_1 = require("uuid");
/**
 * @public
 * Part of the payload of {@link iToolModel}
 */
var AuthType;
(function (AuthType) {
    AuthType["BEARER"] = "BEARER";
    AuthType["BASIC"] = "BASIC";
})(AuthType || (exports.AuthType = AuthType = {}));
/**
 * @public
 * Part of the payload of {@link iToolModel}
 */
var ToolType;
(function (ToolType) {
    ToolType["LTI13"] = "LTI13";
    ToolType["LTI11"] = "LTI11";
    ToolType["CMI5"] = "CMI5";
    ToolType["METADATA"] = "METADATA";
})(ToolType || (exports.ToolType = ToolType = {}));
/**
 * @public
 * Tool datamodel which is used by {@link ToolBDTO}
 */
class ToolModel extends clm_core_1.BaseDatamodel {
    constructor(payload) {
        super(payload);
        this.launchableUrl = payload.launchableUrl;
        this.client_id = payload.client_id;
        this.target = payload.target;
        this.activityId = payload.activityId;
        this.type = payload.type;
        this.username = payload.username;
        this.password = payload.password;
        this.displayName = payload.displayName;
        this.authType = payload.authType;
        this.storageAccess = payload.storageAccess;
        this.customProperties = payload.customProperties;
        this.availabilityHistory = payload.availabilityHistory;
        // lti 1.3 parameters
        this.jwks_url = payload.jwks_url;
        this.redirect_uris = payload.redirect_uris;
        this.oidc_login_url = payload.oidc_login_url;
        this.deployment_id = payload.deployment_id;
        this.target_link_uri = payload.target_link_uri || payload.launchableUrl;
        this.key_set_url = payload.key_set_url;
        this.client_id = payload.client_id;
        if (payload.type === 'LTI13' && this.client_id === 'undefined')
            this.client_id = (0, uuid_1.v4)();
    }
}
exports.default = ToolModel;
