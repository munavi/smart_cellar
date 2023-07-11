import { StateSchema } from 'app/providers/StoreProvider';

export const getAddNewItemText = (state: StateSchema) => state.addNewItem?.text;
export const getAddNewItemError = (state: StateSchema) => state.addNewItem?.error;
