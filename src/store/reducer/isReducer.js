export const actionsTypes = {
    AXIOS_USER: 'AXIOS_USER',
    AXIOS_CITY: 'AXIOS_CITY',
    SET_USER: 'SET_USER',
    SET_CITY: 'SET_CITY',
    SET_NEW_USER: 'SET_NEW_USER'
}

const initialState = {
    allCity: null,
    allUser: null,
    currUser: null,
    currCite: null,
}

export const isReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.AXIOS_CITY:
            return {
                ...state,
                allCity: action.payload,
            };
        case actionsTypes.AXIOS_USER:
            return {
                ...state,
                allUser: action.payload,
            };
        case actionsTypes.SET_NEW_USER:
            return {
                ...state,
                allUser: [...state.allUser, action.payload],
            };
        case actionsTypes.SET_USER:
            return {
                ...state,
                currUser: action.payload,
            };
        case actionsTypes.SET_CITY:
            return {
                ...state,
                currCity: action.payload,
            };
        default:
            return state;
    }
};