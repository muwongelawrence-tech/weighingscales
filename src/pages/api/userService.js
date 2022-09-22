import http from "./httpService";
import config from "../../../config.json";


const apiEndpoint = config.apiURl + "/users";

export function register(user){
    return http.post(apiEndpoint,{
        name: user.username,
        email: user.email,
        password:user.password

    });

}