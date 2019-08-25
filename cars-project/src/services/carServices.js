/* eslint-disable */
import config from '@/config/config'
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';
const authString= btoa(`${config.appKey}:${config.appSecret}`)

const setCars = cars => {

    return cars;
}

export const carService = {
    data() {
        return {
                authToken: localStorage.getItem('authtoken')
        }
    },
    methods: {
        createCar(carBrand, carModel, price, carImage, description){

            this.$http.defaults.headers.post['Authorization'] = `Kinvey ${this.authToken}`

             return this.$http.post(`https://baas.kinvey.com/appdata/${config.appKey}/cars`, {
                carBrand, carModel, price, carImage, description
            })
        },
        getAllCars(){
            this.$http.defaults.headers.get['Authorization'] = `Kinvey ${this.authToken}`
             return this.$http.get(`https://baas.kinvey.com/appdata/${config.appKey}/cars`)
        },
        
    },
}