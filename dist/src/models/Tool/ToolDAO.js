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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clm_core_1 = require("clm-core");
const ToolModel_1 = __importDefault(require("./ToolModel"));
class ToolDAO extends clm_core_1.BaseDAO {
    insert(payload, options) {
        return super.insert(payload).then((doc) => Promise.all([
            clm_core_1.relationBDTOInstance.createRelationship(new clm_core_1.RelationModel({ fromId: options.serviceProviderId, fromType: 'service', toType: 'tool', toId: doc._id })),
            doc
        ])).then(([, doc]) => doc);
    }
    deleteById(id) {
        return super.deleteById(id).then(() => __awaiter(this, void 0, void 0, function* () {
            const toolRelations = (yield clm_core_1.relationBDTOInstance.findAll())
                .filter((relation) => relation.fromId === id || relation.toId === id);
            yield clm_core_1.relationBDTOInstance.bulkDelete(toolRelations.map((relation) => (Object.assign(Object.assign({}, relation), { _deleted: true }))));
            return true;
        }));
    }
    updateById(id, payload) {
        return super.updateById(id, payload);
    }
}
exports.default = new ToolDAO('tool', ToolModel_1.default);
