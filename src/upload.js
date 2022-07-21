import axios from 'axios'; 

const upload = axios.create({
    baseURL: 'http://localhost:8000/',
});


export default upload;