import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 89577192b5cc2901ce5634382e9ca92731545a54513deda75f1f634e1a80fe83'
    }
})