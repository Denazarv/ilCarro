import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://rent-cars-app.herokuapp.com/',
    headers: {
        "Authorization": "TOKEN"
    }
})

export const authAPI = {
    loginUser() {
        return instance.get('user/login')
    },
    updateUser(){
        return instance.put('user')
    },
    deleteUser(){
        return instance.delete('user')
    },
    registerNewUser(){
        return instance.post('registration')

    }


}