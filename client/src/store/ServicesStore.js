import {makeAutoObservable} from "mobx";

export default class ServicesStore {
    constructor() {
        this._types = []
        this._lawyer = []
        this._services = []
        
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setLawyer(lawyer) {
        this._lawyer = lawyer
    }
    setServices(services) {
        this._services = services
    }

    setSelectedType(type) {
        this._selectedType = type
    }
    


    get types() {
        return this._types
    }

    get lawyer() {
        return this._lawyer
    }
    get services() {
        return this._services
    }
    get selectedType() {
        return this._selectedType
    }
    
}