import {makeAutoObservable} from "mobx";
import {jwtDecode} from "jwt-decode";
import UserService from "../service/UserService";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._userList = []
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    setUserList(userList) {
        this._userList = userList
    }

    async registration(phone, fullName, password, role){
        const {data}=await UserService.registration(phone, fullName, password, role)
        localStorage.setItem('token', data.token)
        const response = jwtDecode(data.token)
        this.setUser(response)
        this.setIsAuth(true)
        return response
    }

    async add(phone, fullName, password, role){
        const {data}=await UserService.add(phone, fullName, password, role)
        return data
    }

    async login(phone, password){
        try {
            const {data} = await UserService.login(phone, password)
            localStorage.setItem('token', data.token)
            const response = jwtDecode(data.token)
            this.setUser(response)
            this.setIsAuth(true)
            return response
        } catch (e) {
            console.log(e.response?.data?.message)
        }

    }


    async logout(id) {
        try {
            const {data} = await UserService.logout(id)
            localStorage.removeItem('token')
            this.setIsAuth(false)
            this.setUser({})
            return true
        } catch (e) {
            console.log(e.response?.data?.message)
        }

    }

    async checkAuth() {
        try {
            const {data} = await UserService.auth()
            localStorage.setItem('token', data.token)
            const response = jwtDecode(data.token)
            this.setUser(response)
            this.setIsAuth(true)
            return response
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async getAllLawyers() {
        try {
            const {data} = await UserService.getAllLawyers()
            this.setUserList(data)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }

    }

    async deleteUser(id) {
        try {
            const {data} = await UserService.deleteUser(id)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }

    }

    get isAuth() {
        return this._isAuth
    }
    
    get user() {
        return this._user
    }

    get userList() {
        return this._userList
    }
}