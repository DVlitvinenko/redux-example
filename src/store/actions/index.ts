import * as cashActions from "./cashActions";
import * as customerActions from "./customerActions";

export const actions = { ...cashActions, ...customerActions };
