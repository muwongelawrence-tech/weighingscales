import http from "./httpService";
import config from '../../../config.json';

//const apiEndpoint = `${apiURl}/materials`;
const apiEndpoint = config.apiURl + "/materials";


export  function getRawMaterials(){
    return http.get(apiEndpoint);
}
  
export function getRawMaterial(materialId){
      return http.get(`${apiEndpoint}/${materialId}`);
}
  
export function updateRawMaterial(material){
    if(material._id){
        const body = {...material }
        delete body._id;
    

       return http.put(`${apiEndpoint}/${material._id}`,body);
    }

    return http.post(apiEndpoint,material);
}