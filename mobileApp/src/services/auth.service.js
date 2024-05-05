import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const signup = (email, password) => {
    return axios.post('https://flickfiction-app-c9bea273c5ae.herokuapp.com/v1/app/auth', {
        email, password
    })
    .then(response => {
        if(response.data.token){
            AsyncStorage.setItem('user', JSON.stringify({
                userId: response.data.user_id,
                token: response.data.token
            }))
        }
        return response.data
    })
}

const login = (email, password) => {
    return axios.post(`https://flickfiction-app-c9bea273c5ae.herokuapp.com/v1/app/auth/signin`, {
        email, password
    })
    .then(response => {
        if(response.data.token){
            AsyncStorage.setItem('user', JSON.stringify({
                userId: response.data.user_id,
                token: response.data.token
            }))
        }
        return response.data
    })
}

const logout = () => {
    AsyncStorage.removeItem('user')
}

const getCurrentUser = async () => {
    try {
        const user = await AsyncStorage.getItem('user')
        return user ? JSON.parse(user) : null
    } catch (err) {
        console.error('Error getting user', err)
    }
}

const authService = {
    signup,
    login,
    logout,
    getCurrentUser
}

export default authService;

// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const API_URL = 'https://flickfiction-app-c9bea273c5ae.herokuapp.com/v1/app/auth/';

// const login = (email, password) => {
//     return axios.post(`${API_URL}signin`, { email, password })
//         .then(response => {
//             if (response.data.token) {
//                 AsyncStorage.setItem('user', JSON.stringify({
//                     userId: response.data.user_id,
//                     token: response.data.token
//                 }));
//             }
//             return response.data;
//         });
// };

// const signup = (email, password) => {
//     return axios.post(`${API_URL}signup`, { email, password })
//         .then(response => {
//             if (response.data.token) {
//                 AsyncStorage.setItem('user', JSON.stringify({
//                     userId: response.data.user_id,
//                     token: response.data.token
//                 }));
//             }
//             return response.data;
//         });
// };

// const logout = () => {
//     AsyncStorage.removeItem('user');
// };

// const authService = {
//     login,
//     signup,
//     logout
// };

// export default authService;
