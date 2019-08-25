import config from '@/config/config'
const authString= btoa(`${config.appKey}:${config.appSecret}`)

const loginUser = user => {
    localStorage.setItem("username", user.username),
    localStorage.setItem("authtoken", user.authToken)
    return user;
}
const clearToken = () => {
    localStorage.removeItem("username"),
    localStorage.removeItem("authtoken")
}
/* eslint-disable */
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
        onRegisterUser(username, password){
            return this.authenticate(`/user/${config.appKey}`, username, password)
        },
        onLoginUser(username, password){
            return this.authenticate(`/user/${config.appKey}/login`, username, password)
        },
        authenticate(url, username, password){
            this.$http.defaults.headers.post['Authorization'] = `Basic ${authString}`
            return this.$http.post(url,{
                username, password
            }).then(({data}) => loginUser({
                username: data.username,
                authToken: data._kmd.authtoken 
            }));
        },
        logout(){
            return fetch(`https://baas.kinvey.com/user/${config.appKey}/_logout`,{
            method: 'POST',
            headers: {
                'Authorization': `Kinvey ${this.authToken}`,
                'Content-Type': 'application/json'
            },
            data: null
            }).then(res => clearToken())
        }
    },
}