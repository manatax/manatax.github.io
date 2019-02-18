export const UPDATE_PAGE_ONE = "UPDATE_PAGE_ONE";
export const UPDATE_PAGE_TWO = "UPDATE_PAGE_TWO";

export const updatePageOne = value => {
    return {
        type: UPDATE_PAGE_ONE,
        payload: value
    }
}

export const updatePageTwo = value => {
    return {
        type: UPDATE_PAGE_TWO,
        payload: value
    }
}