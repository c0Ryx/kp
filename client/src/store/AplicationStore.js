import {makeAutoObservable} from "mobx";
import AplicationService from "../service/AplicationService";

export default class AplicationStore {
    constructor() {
        this._aplication = {}
        this._aplicationList = []
        makeAutoObservable(this)
    }

   setAplication(aplication) {
        this._aplication = aplication
    }
    setAplicationList(list) {
        this._aplicationList = list
    }



    async create(serviceId, userId, price){
        try {
            const {data} = await AplicationService.create(serviceId, userId, price)
            this.setAplication(data)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }

    }

    async getAll() {
        try {
            const {data} = await AplicationService.getAll()
            this.setAplicationList(data)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }

    }

    async getOne(id) {
        try {
            const {data} = await AplicationService.getOne(id)
            this.setAplication(data)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async updUser(id, userId) {
        try {
            const {data} = await AplicationService.updUserId(id, userId)
            this.setAplication(data)
            console.log(data)
            return data
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }

    async updService(id, serviceId) {
        try {
            const {data} = await AplicationService.updServiceId(id, serviceId)
            this.setAplication(data)
            console.log(data)
            return data
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }



    async delAplication(id) {
        try {
            const {data} = await AplicationService.delAplication(id)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
}