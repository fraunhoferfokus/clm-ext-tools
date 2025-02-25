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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toolBDTOInstance = exports.ToolBDTO = void 0;
const clm_core_1 = require("clm-core");
const ToolModel_1 = require("./ToolModel");
const ToolDAO_1 = __importDefault(require("./ToolDAO"));
/**
 * Extends {@link https://gitlab.fokus.fraunhofer.de/learning-technologies/clm-framework/clm-core/-/blob/dev/docs/clm-core.basebackenddto.md|BaseBackendDTO}
 * An instance is provided {@link toolBDTOInstance}
 * Uses as default MariaDB Adapter
 * @public
 */
class ToolBDTO extends clm_core_1.BaseBackendDTO {
    createMetadataTool(payload, serviceProviderId) {
        return ToolDAO_1.default.insert(Object.assign(Object.assign({}, payload), { type: ToolModel_1.ToolType.METADATA }), { serviceProviderId });
    }
    deleteById(toolId) {
        return ToolDAO_1.default.deleteById(toolId);
    }
}
exports.ToolBDTO = ToolBDTO;
/**
 * Instance of {@link ToolBDTO}
 * @public
 */
exports.toolBDTOInstance = new ToolBDTO(ToolDAO_1.default);
