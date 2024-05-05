import { $authHost, $host } from "../http"

const LawyerService = {

    async create(aplicationId, userId){
        return new Promise((resolve, reject) => {
            resolve($authHost.post("api/lawyer/", {aplicationId, userId}))
        })
    },

    async getAll(){
        return new Promise((resolve, reject) => {
            resolve($host.get("api/lawyer/"))
        })
    },

    async getOne(id){
        return new Promise((resolve, reject) => {
            resolve($authHost.get("api/lawyer/" + id))
        })
    },

    async delLawyer(id){
        return new Promise((resolve, reject) => {
            resolve($authHost.delete("api/lawyer/", {id}))
        })
    },

    async updUserId(id, userId){
        return new Promise((resolve, reject) => {
            resolve($authHost.put("api/lawyer/", {id, userId}))
        })
    },


}

export default LawyerService;