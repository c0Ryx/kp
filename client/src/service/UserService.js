import { $authHost, $host } from "../http"

const UserService = {
    async registration(phone, fullName, password, role){
        return new Promise((resolve, reject) => {
            resolve($host.post("api/user/registration", {phone, fullName, password, role}))
        })
    },

    async add(phone, fullName, password, role){
        return new Promise((resolve, reject) => {
            resolve($authHost.post("api/user/add", {phone, fullName, password, role}))
        })
    },

    async login(phone, password){
        return new Promise((resolve, reject) => {
            resolve($host.post("api/user/login", {phone, password}))
        })
    },

    async auth(){
        return new Promise((resolve, reject) => {
            resolve($authHost.get("api/user/auth"))
        })
    },

    async getAllLawyers(){
        return new Promise((resolve, reject) => {
            resolve($authHost.get("api/user/getLawyers"))
        })
    },

    async deleteUser(id){
        return new Promise((resolve, reject) => {
            resolve($authHost.delete("api/user/delUser", {id}))
        })
    },

    async logout(id){
        return new Promise((resolve, reject) => {
            resolve($authHost.post("api/user/logout", {id}))
        })
    }
}

export default UserService;