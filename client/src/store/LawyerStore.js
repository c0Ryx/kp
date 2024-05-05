import {makeAutoObservable} from "mobx";
import LawyerService from "../service/LawyerService";

export default class LawyerStore {
    constructor() {
        this._lawyer = {}
        this._lawyerList = []
        makeAutoObservable(this)
    }

    setLawyer(lawyer) {
        this._lawyer = lawyer
    }
    setLawyerList(list) {
        this._lawyerList = list
    }



    async create(aplicationId, userId){
        try {
            const {data} = await LawyerService.create(aplicationId, userId)
            this.setLawyer(data)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }

    }

    async getAll() {
        try {
            const {data} = await LawyerService.getAll()
            this.setLawyerList(data)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }

    }

    async getOne(id) {
        try {
            const {data} = await LawyerService.getOne(id)
            this.setLawyer(data)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async updUser(id, userId) {
        try {
            const {data} = await LawyerService.updUserId(id, userId)
            this.setLawyer(data)
            console.log(data)
            return data
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }



    async delLawyer(id) {
        try {
            const {data} = await LawyerService.delLawyer(id)
            return data
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
}