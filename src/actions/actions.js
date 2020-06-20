export const editAction = (nr) => {
    return {
        type : 'EDIT',
        payload: nr
    }
};

export const deleteAction = (nr) => {
    return {
        type : 'DELETE',
        payload: nr
    }
};


export const storeContent = (nr) => {
    return {
        type : 'CONTENT',
        payload: nr
    }
};

