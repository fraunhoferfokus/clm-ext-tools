"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const clm_core_1 = require("clm-core");
class CouchToolFDTO extends clm_core_1.BaseFrontendDTO {
    constructor(payload) {
        super(payload);
        this.launchableUrl = payload.launchableUrl;
        this.client_id = payload.client_id;
        this.target = payload.target;
        this.oidc_login_url = payload.oidc_login_url;
        this.target_link_uri = payload.target_link_uri;
        this.activityId = payload.activityId;
        this.customProperties = payload.customProperties;
        this.availabilityHistory = payload.availabilityHistory;
        this.customProperties = payload.customProperties;
        this.availabilityHistory = payload.availabilityHistory;
        this.type = payload.type;
        this.username = payload.username;
        this.password = payload.password;
        this.displayName = payload.displayName;
        this.authType = payload.authType;
        this.storageAccess = payload.storageAccess;
        this.key_set_url = payload.key_set_url;
        // lti 1.3 parameters
        this.jwks_url = payload.jwks_url;
        this.redirect_uris = payload.redirect_uris;
        this.oidc_login_url = payload.oidc_login_url;
        this.deployment_id = payload.deployment_id;
        this.target_link_uri = payload.target_link_uri || payload.launchableUrl;
        this.key_set_url = payload.key_set_url;
        this.client_id = payload.client_id;
    }
}
exports.default = CouchToolFDTO;
