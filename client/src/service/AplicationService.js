import { $authHost, $host } from "../http"

const AplicationService = {
    
    async create(serviceId, userId, price){
        return new Promise((resolve, reject) => {
            resolve($authHost.post("api/aplication/", {serviceId, userId, price}))
        })
    },

    async getAll(){
        return new Promise((resolve, reject) => {
            resolve($host.get("api/aplication/"))
        })
    },

    async getOne(id){
        return new Promise((resolve, reject) => {
            resolve($authHost.get("api/aplication/" + id))
        })
    },

    async delAplication(id){
        return new Promise((resolve, reject) => {
            resolve($authHost.delete("api/aplication/", {id}))
        })
    },

    async updServiceId(id, serviceId){
        return new Promise((resolve, reject) => {
            resolve($authHost.put("api/aplication/updServiceId", {id, serviceId}))
        })
    },

    async updUserId(id, userId){
        return new Promise((resolve, reject) => {
            resolve($authHost.put("api/aplication/updUserId", {id, userId}))
        })
    }
}

export default AplicationService;