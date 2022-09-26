import config from "../../config";

import { UserLoginInterface } from "./API.interface"

export const fetchUserKey = () => new Promise( (resolve,reject) => {
    reject(false)
    //resolve(true)
})

export const userLogin = (loginName: string, password: string) => new Promise( (resolve, reject) => {

    fetch(config.loginUrl)
        .then( result => result.json())
        .then( result => {
            resolve({
                user: loginName,
                login: true,
                token: "from-the-server",
                data: result
            })
        })
        .catch( err => {
            reject(err)
        })

})


