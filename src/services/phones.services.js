import service from "./config.services";

const getAllPhonesService = () => {
    return service.get("/phones")
}

const getPhonesDetailsService = (id) => {
    return service.get(`/phones/${id}`)
}

export {
    getAllPhonesService,
    getPhonesDetailsService
}