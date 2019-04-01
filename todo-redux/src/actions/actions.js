export const haha = () => {
    return {
        type: 'HAHA'
    }
}

export const updateItem = (content,id) => {
    return {
        type: 'UPDATEITEM',
        content,
        id
    }
}

export const removeItem = (id) => {
    return {
        type: 'REMOVEITEM',
        id
    }
}

export const changeItem = (id) => {
    return {
        type: 'CHANGEITEM',
        id
    }
}

export const addItem = (content) => {
    return {
        type: 'ADDITEM',
        content
    }
}