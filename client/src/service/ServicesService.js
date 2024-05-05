import { $authHost, $host } from "../http"

const ServicesService = {
    async create(name, price, description){
        return new Promise((resolve, reject) => {
            resolve($authHost.post("api/services/create", {name, price, description}))
        })
    },

    async getAll(){
        return new Promise((resolve, reject) => {
            resolve($host.get("api/services/getAll"))
        })
    },

    async getOne(id){
        return new Promise((resolve, reject) => {
            resolve($authHost.get("api/services/getOne/" + id))
        })
    },

    async delService(id){
        return new Promise((resolve, reject) => {
            resolve($authHost.delete("api/services/delServices", {id}))
        })
    },

}

export default ServicesService;