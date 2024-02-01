import { BaseDAO } from "clm-core";
import ToolModel from "./ToolModel";
declare class ToolDAO extends BaseDAO<ToolModel> {
    insert(payload: ToolModel, options: any): Promise<ToolModel>;
    deleteById(id: string): Promise<boolean>;
    updateById(id: string, payload: ToolModel): Promise<ToolModel>;
}
declare const _default: ToolDAO;
export default _default;
