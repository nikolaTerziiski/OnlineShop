// import config from '@/config/config'
// const authString= btoa(`${config.appKey}:${config.appSecret}`)
// /* eslint-disable */

// export const authService = {
//     data() {
//         return {
//                 authToken: localStorage.getItem('authtoken')
//         }
//     },
//     computed: {
//         isAuthenticated(){
//             return this.authToken !== null;
//         }
//     },
//     created(){
//         this.$root.$on('logged-in', authtoken => this.authToken = authtoken);
//     }
// }

// /* eslint-disable */

// export const authenticate = {

//     created() {
//         this.$http.defaults.headers.post['Authorization'] = `Basic ${authString}`
//     }
// }
import config from '@/config/config'
const authString= btoa(`${config.appKey}:${config.appSecret}`)

const loginUser = user => {
    localStorage.setItem("username", user.username),
    localStorage.setItem("authtoken", user.authToken)

    return user;
}

export const authService = {
    data() {
        return {
                authToken: localStorage.getItem('authtoken')
        }
    },
    computed: {
        isAuthenticated(){
            return this.authToken !== null;
        }
    },
    created(){
        this.$root.$on('logged-in', authtoken => this.authToken = authtoken);
    }
}

/* eslint-disable */

export const authenticate = {
    methods: {
        registerUser(username, password){
            return this.authenticate(`/user/${config.appKey}`, username, password)
        },
        loginUser(username, password){
            return this.authenticate(`/user/${config.appKey}/login`, username, password)
        },
        authenticate(url, username, password){
            return this.$http.post(url,{
                username, password
            }).then(({data}) => loginUser({
                username: data.username,
                authToken: data._kmd.authtoken 
            }));
        }
    },
    created() {
        this.$http.defaults.headers.post['Authorization'] = `Basic ${authString}`
    }
}