import config from '@/config/config'
const authString= btoa(`${config.appKey}:${config.appSecret}`)
const loginUser = user => {

    localStorage.setItem("username", user.username),
    localStorage.setItem("authtoken", user.authToken)

    return user;
}
/* eslint-disable */
export default {
    registerUser(context, username, password){

        fetch(`https://baas.kinvey.com/user/${config.appKey}`, {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                ['Authorization'] : `Basic ${authString}`,
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json()).then(res => 
            loginUser({
            username: res.username,
            authToken: res._kmd.authtoken
        }));

    },
    logInUser(context, username, password){
        fetch(`https://baas.kinvey.com/user/${config.appKey}/login`, {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                ['Authorization'] : `Basic ${authString}`,
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json()).then(res => 
            loginUser({
            username: res.username,
            authToken: res._kmd.authtoken
        }));
    }
}