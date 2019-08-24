/* eslint-disable */
import config from '@/config/config'
const authString= btoa(`${config.appKey}:${config.appSecret}`)

const loginUser = user => {
    localStorage.setItem("username", user.username),
    localStorage.setItem("authtoken", user.authToken)

    return user;
}

export const carService = {
    data() {
        return {
                authToken: localStorage.getItem('authtoken')
        }
    },
    methods: {
        createCar(carBrand, carModel, price, carImage, description){
            return this.$http.post(`https://baas.kinvey.com/appdata/${config.appKey}/cars`, {
                carBrand, carModel, price, carImage, description
            })
        },
        getAllCars(){

        }
    },
    created() {
        this.$http.defaults.headers.post['Authorization'] = `Kinvey ${this.authToken}`
    }

}