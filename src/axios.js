import axios from "axios";

const instance = axios.create({
    baseUrl: 'http://localhost:5001/fir-aa8ca/us-central1/api'  ///the api url (cloud Function)
});




export default instance;