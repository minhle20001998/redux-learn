import axios from "axios";

export function getUsersFromAPI() {
    return axios.get("https://jsonplaceholder.typicode.com/users");
}