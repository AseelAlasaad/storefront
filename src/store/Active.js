export const activeCategory = name => {
    return {
        type: 'ACTIVE',
        payload: name,
    }
};

export const ADD = name => {
    return {
        type: 'ADD',
        payload: name,
    }
};

export const Decrease = name => {
    return {
        type: 'decrease',
        payload: name,
    }

    
}

export const Delete = name => {
    return {
        type: 'delete',
        payload: name,
    }

    
}
  