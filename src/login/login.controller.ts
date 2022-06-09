import { Body, Controller, Post } from "@nestjs/common";
import { Logindto } from "./login.dto";
import { LoginService } from "./login.service";

@Controller('login')
export class LoginController{
    constructor(private readonly loginservice:LoginService){}
    
    @Post()
    logincheck(
        @Body() logindto:Logindto){
        const loginresult = this.loginservice.login(logindto);
        return { authenticated : loginresult };
    }
}