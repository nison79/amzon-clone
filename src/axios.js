import axios from "axios";

const instance = axios.create({

    //THE API cloud function URL
    
    baseUrl: 'http://localhost:5001/fir-aa8ca/us-central1/api'  
});




export default instance;