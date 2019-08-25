import { getAllCars } from '../cars/carsMutations.js'
import config from '@/config/config'


const getAuthToken = () => localStorage.getItem('authtoken'); 

export default {
    getAll(context) {
        fetch(`https://baas.kinvey.com/appdata/${config.appKey}/cars`, {
            method: 'GET',
            headers: {
                'Authorization': `Kinvey ${getAuthToken()}`,
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => context.commit(getAllCars(data)));
    }
}
