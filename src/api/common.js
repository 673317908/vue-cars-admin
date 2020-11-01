import service from "../utils/request"

export function getCity(data= {} ){
    return service.request({
        method:"post",
        url:"/cityPicker/",
        data
    })
}