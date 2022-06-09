import { Injectable } from "@nestjs/common";
import { Logindto } from "./login.dto";

@Injectable()
export class LoginService{
    private user ={
        email: 'intern@revyrieglobal.com',
        password: 'intern@123'
    }
    login(logindto:Logindto){
        if(logindto.email == this.user.email && logindto.password == this.user.password){ 
            return true;
        }
        else{
            return false;
        }
    }
}