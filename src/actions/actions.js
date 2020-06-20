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

export const storeFormData = (nr) => {
    return {
        type : 'FORMDATA',
        payload: nr
    }
};

export const storeImageData = (nr) => {
    return {
        type : 'IMAGEDATA',
        payload: nr
    }
};
