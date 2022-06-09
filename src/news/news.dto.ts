import { IsNotEmpty, IsString, IsUrl, IsDateString } from "class-validator";

export class Newsdto{
    @IsNotEmpty()
    @IsString()
    headline: String;

    @IsString()
    summary: String;

    @IsUrl()
    image: string;

    @IsDateString()
    date: Date;
}