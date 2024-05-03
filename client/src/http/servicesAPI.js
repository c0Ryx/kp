import { $authHost, $host } from "./index";
import {jwtDecode} from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchType = async () => {
    const {data} = await $host.get('api/type')
    return data
}
export const createLawyer = async (lawyer) => {
    const {data} = await $authHost.post('api/lawyer', lawyer)
    return data
}

export const fetchLawyer = async () => {
    const {data} = await $host.get('api/lawyer')
    return data
}
export const createServices = async (services) => {
    const {data} = await $authHost.post('api/services', services)
    return data
}

export const fetchServices = async () => {
    const {data} = await $host.get('api/services')
    return data
}
export const fetchOneServices = async (id) => {
    const {data} = await $host.get('api/services' + id)
    return data
}

