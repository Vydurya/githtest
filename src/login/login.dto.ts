import { IsEmail, IsNotEmpty} from "class-validator";

export class Logindto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}
