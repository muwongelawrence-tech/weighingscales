import http from "./httpService";
import config from "../../../config.json";


const apiEndpoint = config.apiURl + "/shoes";


export  function getShoes(){
    return http.get(apiEndpoint);
}
  
export function getShoe(shoeId){
      return http.get(`${apiEndpoint}/${shoeId}`);
}
  
export function updateShoe(shoe){
      // console.log(shoe);
      if(shoe._id){
          const body = {...shoe }
          delete body._id;
        
         // console.log(body);

          return http.put(`${apiEndpoint}/${shoe._id}`,body);
      }
     
      return http.post(apiEndpoint,shoe);
}

