export const ADD_FILTER = "ADD_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

export const addFiltre = (filter) => ({
    type: ADD_FILTER,
    filter
});

export const removeFiltre = (filter) => ({
    type: REMOVE_FILTER,
    filter
});

export const clearFiltre = {
    type: CLEAR_FILTER
};