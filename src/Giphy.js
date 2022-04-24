import Axios from "axios";

const API_KEY='r16Y2HfWKfk7WijsTROswgesRZogbz9k';
const getUrl=async(keyword)=>{

try{
  let response= await Axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=1`);
 
 return response?.data.data[0].images.downsized.url;

}
catch(err){
console.log(err);

}

}

export default getUrl;