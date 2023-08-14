import { Switch } from "react-router/cjs/react-router"

const initState = {
    users: [
        { id: 1, name: "hung" },
        { id: 2, name: "Mu Quang" }
    ],
    post: []
}
const RootReducer = (state = initState, action) => {

    switch (action.type) {
        case "DELETE_USER":
            let users = state.users
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            }
        case "CREATEUSER":
            let id = Math.floor(Math.random() * 10000)
            let user = { id: id, name: "ramdomm - " + id }
            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state;
    }

}
export default RootReducer