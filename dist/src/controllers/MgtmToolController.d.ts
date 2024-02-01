import { BaseModelController } from "clm-core";
import ToolDAO from "../models/Tool/ToolDAO";
import ToolFDTO from "../models/Tool/ToolFDTO";
import ToolModel from "../models/Tool/ToolModel";
import express from 'express';
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
declare class MgtmToolController extends BaseModelController<typeof ToolDAO, ToolModel, ToolFDTO> {
    getToolRelations: express.Handler;
}
declare const controller: MgtmToolController;
export default controller;
