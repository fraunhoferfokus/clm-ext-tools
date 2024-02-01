"use strict";
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
const clm_ext_learning_objects_1 = require("clm-ext-learning_objects");
const ToolDAO_1 = __importDefault(require("../models/Tool/ToolDAO"));
const ToolFDTO_1 = __importDefault(require("../models/Tool/ToolFDTO"));
const ToolModel_1 = __importDefault(require("../models/Tool/ToolModel"));
const ToolValidation_1 = require("../validationSchemas/ToolValidation");
/**
 * @openapi
 * components:
 *   schemas:
 *     AuthType:
 *       type: string
 *       enum: ["BEARER", "BASIC"]
 *       description: The authentication type of the tool.
 *     ToolType:
 *       type: string
 *       enum: ["LTI13", "LTI11", "CMI5"]
 *       description: The type of the tool.
 *     CustomProperty:
 *       type: object
 *       properties:
 *         in:
 *           type: string
 *           enum: ["HEADER", "QUERY", "FORM"]
 *           description: The location where the custom property should be applied.
 *         key:
 *           type: string
 *           description: The key for the custom property.
 *         value:
 *           type: string
 *           description: The value for the custom property.
 *     AvailabilityHistory:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique identifier for the availability history.
 *         id_tool:
 *           type: string
 *           description: The associated tool identifier.
 *         isSuccessful:
 *           type: boolean
 *           description: Indicates if the tool was successfully available.
 *         timestamp:
 *           type: string
 *           format: date-time
 *           description: Timestamp of the availability check.
 *     Tool:
 *       type: object
 *       properties:
 *         type:
 *           $ref: '#/components/schemas/ToolType'
 *         launchableUrl:
 *           type: string
 *           description: The URL where the tool is deployed.
 *         username:
 *           type: string
 *           description: Username to authenticate against the tool.
 *         password:
 *           type: string
 *           description: Password to authenticate against the tool.
 *         token:
 *           type: string
 *           description: Bearer/Basic token.
 *         authType:
 *           $ref: '#/components/schemas/AuthType'
 *         target:
 *           type: string
 *           description: How the tool should be launched.
 *           enum: ["iframe", "window"]
 *         displayName:
 *           type: string
 *           description: The display name to show on the frontend.
 *         activityId:
 *           type: string
 *           description: LTI 1.3 specific parameter.
 *         customProperties:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/CustomProperty'
 *         availabilityHistory:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/AvailabilityHistory'
 *         storageAccess:
 *           type: boolean
 *           description: If the tool has storage access or not.
 *         oidc_login_url:
 *           type: string
 *           description: OIDC login URL for LTI 1.3.
 *         target_link_uri:
 *           type: string
 *           description: LTI 1.3 specific parameter.
 *         client_id:
 *           type: string
 *           description: LTI 1.3 client ID the tool needs.
 *         key_set_url:
 *           type: string
 *           description: Tool's public key set URL.
 */
/**
 * @openapi
 * components:
 *   schemas:
 *     CreateTool:
 *       type: object
 *       required:
 *         - serviceProviderId
 *         - launchableUrl
 *         - type
 *         - displayName
 *       properties:
 *         serviceProviderId:
 *           type: string
 *           description: The Service Provider's ID. This should be a valid ID from the service provider database.
 *         launchableUrl:
 *           type: string
 *           description: The URL where the tool is deployed.
 *         username:
 *           type: string
 *           description: Username to authenticate against the tool.
 *         password:
 *           type: string
 *           description: Password to authenticate against the tool.
 *         type:
 *           type: string
 *           enum: [LTI13, LTI11, CMI5]
 *           description: The type of the tool.
 *         displayName:
 *           type: string
 *           description: The display name of the tool.
 *         customProperties:
 *           type: array
 *           description: Custom properties for the tool.
 *           items:
 *             $ref: '#/components/schemas/CustomProperty'
 *         activityId:
 *           type: string
 *           description: LTI 1.3 specific parameter.
 *         oidc_login_url:
 *           type: string
 *           description: OIDC login URL for LTI 1.3.
 *         target:
 *           type: string
 *           description: How the tool should be launched.
 *         client_id:
 *           type: string
 *           description: LTI 1.3 client_id required by the tool.
 *         storageAccess:
 *           type: boolean
 *           description: Indicates if the tool has storage access.
 *         key_set_url:
 *           type: string
 *           description: Tool's public key_set URL.
 */
class MgtmToolController extends clm_core_1.BaseModelController {
    constructor() {
        super(...arguments);
        this.getToolRelations = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const allRelations = yield clm_core_1.relationBDTOInstance.findAll();
                const relations = allRelations.filter(relation => relation.fromType === 'tool');
                return res.json(relations);
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
const controller = new MgtmToolController(ToolDAO_1.default, ToolModel_1.default, ToolFDTO_1.default);
controller.router.use(clm_core_1.AuthGuard.requireUserAuthentication());
/**
 * @openapi
 * /tools/mgmt/tools:
 *   get:
 *     tags:
 *       - mgmt-tools
 *     summary: 'Retrieve all tools the user has access to [Minimum Role: "Learner"]'
 *     description: Retrieve all tools the user has access to through the group enrollments.
 *     parameters:
 *      - $ref: '#/components/parameters/accessToken'
 *     responses:
 *       200:
 *         description: Successfully retrieved all tools
 *         content:
 *          application/json:
 *           schema:
 *              type: array
 *              items:
 *                  allOf:
 *                     - $ref: '#/components/schemas/Tool'
 *                     - type: object
 *                       properties:
 *                          _id:
 *                              type: string
 *                              description: The id of the tool.
 *                              example: "5f7b1a7b9b0b8a0017a7b1a7"
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *   post:
 *     tags:
 *       - mgmt-tools
 *     summary: 'Create a tool [Minimum Role: "Admin"]'
 *     description: Create a tool
 *     parameters:
 *      - $ref: '#/components/parameters/accessToken'
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                schema:
 *                  $ref: '#/components/schemas/CreateTool'
 *     responses:
 *       200:
 *         description: Successfully created tool
 *         content:
 *          application/json:
 *           schema:
 *              $ref: '#/components/schemas/Tool'
 *       400:
 *         description: Bad request - Invalid input or validation error
 *       401:
 *         description: Unauthorized
 */
controller.router.get('/', clm_core_1.AuthGuard.requireMinimumRole('INSTRUCTOR'));
controller.router.post('/', clm_core_1.AuthGuard.requireMinimumRole('ADMIN', [{
        containedIn: 'body',
        name: 'serviceProviderId',
        type: 'service',
    }]), ToolValidation_1.createToolValidation);
controller.router.get('/relations', clm_core_1.AuthGuard.requireMinimumRole('INSTRUCTOR'), controller.getToolRelations);
/**
 * @openapi
 *
 * /tools/mgmt/tools/{id}:
 *   put:
 *     tags:
 *       - mgmt-tools
 *     summary: 'Update an existing tool [Minimum Role: "Admin"]'
 *     description: Modify an existing tool's attributes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tool'
 *     parameters:
 *       - $ref: '#/components/parameters/accessToken'
 *       - in: path
 *         name: id
 *         description: The id of the tool
 *         required: true
 *         schema:
 *          type: string
 *     responses:
 *       200:
 *         description: Successfully updated tool
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tool'
 *       400:
 *         description: Bad request - Invalid input or validation error
 *       401:
 *         description: Unauthorized
 *
 *   patch:
 *     tags:
 *       - mgmt-tools
 *     summary: 'Update an existing tool [Minimum Role: "Admin"]'
 *     description:  Modify an existing tool's attribute
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tool'
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The id of the tool
 *         required: true
 *         schema:
 *          type: string
 *     responses:
 *       200:
 *         description: Successfully partially updated tool
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tool'
 *       400:
 *         description: Bad request - Invalid input or validation error
 *       401:
 *         description: Unauthorized
 *   delete:
 *     tags:
 *       - mgmt-tools
 *     summary: 'Deletes an existing tool [Minimum Role: "Admin"]'
 *     description:  Delete an existing tool
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The id of the tool
 *         required: true
 *         schema:
 *          type: string
 *     responses:
 *       204:
 *         description: Successfully deleted tool
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
controller.router.delete('/:id', clm_core_1.AuthGuard.requireMinimumRole('ADMIN'));
controller.router.put('/:id', clm_core_1.AuthGuard.requireMinimumRole('ADMIN'));
controller.router.patch('/:id', clm_core_1.AuthGuard.requireMinimumRole('ADMIN'), ToolValidation_1.updateToolValidation);
controller.router.post('/:id/learningObjects/:loId', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tool = yield ToolDAO_1.default.findById(req.params.id);
        const lo = yield clm_ext_learning_objects_1.loBDTOInstance.findById(req.params.loId);
        yield clm_core_1.relationBDTOInstance.createRelationship(new clm_core_1.RelationModel({
            fromId: tool._id,
            toId: lo._id,
            fromType: 'tool',
            toType: 'lo',
        }));
        return res.json({ message: 'Successfully created relationship' });
    }
    catch (err) {
        return next(err);
    }
}));
controller.router.delete('/:id/learningObjects/:loId', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tool = yield ToolDAO_1.default.findById(req.params.id);
        const lo = yield clm_ext_learning_objects_1.loBDTOInstance.findById(req.params.loId);
        const allRelations = yield clm_core_1.relationBDTOInstance.findAll();
        const myRelation = allRelations.find((relation) => {
            return relation.fromId === tool._id && relation.toId === lo._id;
        });
        clm_core_1.relationBDTOInstance.bulkDelete([myRelation]);
        return res.status(204).send();
    }
    catch (err) {
        return next(err);
    }
}));
controller.activateStandardRouting();
exports.default = controller;
