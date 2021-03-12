// // reducer
// export default function user(state = []) {
//     return state; // nothing to do here, but we need products node in redux store
// }

// selectors
export function getUser(state, props) {
    return state.user;
}

// actions
const LOG_IN   = 'log/IN';
const LOG_OUT = 'log/OUT';

// reducer
const initialState = {
    username: 'NO_USER', 
    role: 'NO_ROLE'
};

export default function user(state = initialState, action = {}) {
    switch (action.type) {
        case LOG_IN:
            return handleLogIn(state, action.payload);
        case LOG_OUT:
            return handleLogOut(state, action.payload);
        default:
            return state;
    }
}

function handleLogIn(state, payload) {
    return {
        ...state,
        username:  payload.username ,
        role: payload.role 
    };
}

function handleLogOut(state, payload) {
    return {
        ...state,
        username:  payload.username ,
        role:  payload.role 
    };
}

// action creators
export function logIn(user) {
    return {
        type: LOG_IN,
        payload: {
            username: user.username,
            role: user.role
        }
    }
}

// action creators
export function logOut(user) {
    return {
        type: LOG_IN,
        payload: {
            username: user.username,
            role: user.role
        }
    }
}

