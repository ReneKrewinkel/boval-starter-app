import config from "../config/config";

export const fetchUserKey = () => new Promise( (resolve,reject) => {
    reject(false)
    //resolve(true)
})

export const userLogin = (username, password) => new Promise( (resolve,reject) => {

    fetch(config.loginUrl)
        .then( result => result.json())
        .then( result => {
            resolve({
                user: username,
                login: true,
                token: "from-the-server",
                data: result
            })
        })
        .catch( err => {
            reject(err)
        })

})


