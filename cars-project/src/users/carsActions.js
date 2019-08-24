import { getAllMovies } from '../cars/movieMutations.js'
import config from './node_modules/@/config/config'


const getAuthToken = () => localStorage.getItem('authtoken'); 

export default {
    getAll(context) {
        fetch(`https://baas.kinvey.com/appdata/${config.appKey}/movies`, {
            method: 'GET',
            headers: {
                'Authorization': `Kinvey ${getAuthToken()}`,
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(data => context.commit(getAllMovies(data)));
    }
