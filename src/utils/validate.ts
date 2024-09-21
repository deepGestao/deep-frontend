import {User} from "../types/User";

type Error = {
    [key: string]: string;
};

export const validate = (data: User) => {
    const errors: Error = {};


    if(!data.email){
        errors["email"] = "O email é obrigatório";
    }

    if(!data.password){
        errors["senha"] = "A senha é obrigatório";
    }
    return errors
}