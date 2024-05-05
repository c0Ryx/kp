import {makeAutoObservable} from "mobx";
import ServicesService from "../service/ServicesService";

export default class ServicesStore {
    constructor() {
        this._service = {}
        this._serviceList = []
        makeAutoObservable(this)
    }

    setService(service) {
        this._service = service
    }
    setServiceList(list) {
        this._serviceList = list
    }



    async create(name, price, description){
        try {
            const {data} = await ServicesService.create(name, price, description)
            this.setService(data)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }

    }

    async getAll() {
        try {
            const {data} = await ServicesService.getAll()
            this.setServiceList(data)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }

    }

    async getOne(id) {
        try {
            const {data} = await ServicesService.getOne(id)
            this.setService(data)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }


    async delService(id) {
        try {
            const {data} = await ServicesService.delService(id)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
}