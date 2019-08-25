export const GET_ALL_CARS = 'GET_ALL_CARS'

export const getAllCars = data => {
        return {
            type: GET_ALL_CARS,
            cars: data
        }
}

export default {
    [GET_ALL_CARS] (state,payload) {
         state.cars = payload.cars;
    } 
}