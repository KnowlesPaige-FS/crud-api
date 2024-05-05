// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// const signup = (email, password) => {
//     return axios.post('https://flickfiction-app-c9bea273c5ae.herokuapp.com/v1/app/auth', {
//         email, password
//     })
//     .then(response => {
//         if(response.data.token){
//             AsyncStorage.setItem('user', JSON.stringify({
//                 userId: response.data.user_id,
//                 token: response.data.token
//             }))
//         }
//         return response.data
//     })
// }

// const login = (email, password) => {
//     return axios.post(`https://flickfiction-app-c9bea273c5ae.herokuapp.com/v1/app/auth/signin`, {
//         email, password
//     })
//     .then(response => {
//         if(response.data.token){
//             AsyncStorage.setItem('user', JSON.stringify({
//                 userId: response.data.user_id,
//                 token: response.data.token
//             }))
//         }
//         return response.data
//     })
// }

// const logout = () => {
//     AsyncStorage.removeItem('user')
// }

// const getCurrentUser = async () => {
//     try {
//         const user = await AsyncStorage.getItem('user')
//         return user ? JSON.parse(user) : null
//     } catch (err) {
//         console.error('Error getting user', err)
//     }
// }

// const authService = {
//     signup,
//     login,
//     logout,
//     getCurrentUser
// }

// export default authService;


import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://flickfiction-app-c9bea273c5ae.herokuapp.com/v1/app/auth/';

const signup = async (email, password) => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Failed to sign up');
        }
        if (data.token) {
            await AsyncStorage.setItem('user', JSON.stringify({
                userId: data.user_id,
                token: data.token
            }));
        }
        return data;
    } catch (error) {
        console.error('Signup request failed:', error);
        throw error;
    }
};

const login = async (email, password) => {
    try {
        const response = await fetch(`${API_URL}signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Unable to login');
        }
        if (data.token) {
            await AsyncStorage.setItem('user', JSON.stringify({
                userId: data.user_id,
                token: data.token
            }));
        }
        return data;
    } catch (error) {
        console.error('Login request failed:', error);
        throw error;
    }
};

const logout = async () => {
    await AsyncStorage.removeItem('user');
};

const getCurrentUser = async () => {
    try {
        const user = await AsyncStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    } catch (error) {
        console.error('Error getting user:', error);
        throw error;
    }
};

const authService = {
    signup,
    login,
    logout,
    getCurrentUser
};

export default authService;

