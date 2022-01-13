export const GET_USERS = 'GET_USERS'
export const SET_USERS = 'SET_USERS'
export const DELETE_USER = 'DELETE_USER'

export const getUsers = () => {
    return {
        type: GET_USERS
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users
    }
}

export const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        payload: id
    }
}

const initState = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    }
]

export default (state = initState, action) => {
    switch (action.type) {
        case SET_USERS:
            return [...action.payload]
        case DELETE_USER:
            return state.filter((user) => user.id !== action.payload)
        default:
            return [...state]
    }
}