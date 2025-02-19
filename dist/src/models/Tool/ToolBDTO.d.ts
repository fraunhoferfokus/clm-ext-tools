import { BaseBackendDTO } from "clm-core";
import ToolModel from './ToolModel';
/**
 * Extends {@link https://gitlab.fokus.fraunhofer.de/learning-technologies/clm-framework/clm-core/-/blob/dev/docs/clm-core.basebackenddto.md|BaseBackendDTO}
 * An instance is provided {@link toolBDTOInstance}
 * Uses as default MariaDB Adapter
 * @public
 */
export declare class ToolBDTO extends BaseBackendDTO<ToolModel> {
    createMetadataTool(payload: ToolModel, serviceProviderId: string): Promise<ToolModel>;
    deleteById(toolId: string): Promise<boolean>;
}
/**
 * Instance of {@link ToolBDTO}
 * @public
 */
export declare const toolBDTOInstance: ToolBDTO;
