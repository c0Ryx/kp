import {makeAutoObservable} from "mobx";

export default class ServicesStore {
    constructor() {
        this._types = [
            {id: 1, name: "Семейное право"},
            {id: 2, name: "Налоговые услуги"}
        ]
        this._lawyer = [
            {id: 1, name: "Начинающий специалист"},
            {id: 2, name: "Специалист среднего уровня"}
        ]
        this._services = [
            {id: 1, name: "Консультация по опеке", price: 2000, img: "073d3bf2-ac0f-4360-8ccc-0c81ff227f7c.jpg"}
        ]
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

    get types() {
        return this._types
    }

    get lawyer() {
        return this._lawyer
    }
    get services() {
        return this._services
    }
}