import axios from 'axios';

export  async function fetchDataFromApi() {
    
    const res = await axios.get('https://intense-tor-76305.herokuapp.com/merchants');
    console.log(res.data);
    
    return await res.data;
}

