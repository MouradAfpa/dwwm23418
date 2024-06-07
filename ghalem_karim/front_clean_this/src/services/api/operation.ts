import api from "./_api";
import type { Operation } from './../../model'


const url = "operation";

const find = (): Promise<Operation[]> => api.get<Operation[]>(url);

const operation = { find };
export default operation;
