import {ApiProperty} from "@nestjs/swagger";
import {IsString, Length} from "class-validator";

export class CreateUserDto{
    @ApiProperty({ example: "SS", description: "Login" })
    @IsString({message: 'Must be a string'})
    readonly login: string;
    @ApiProperty({ example: "Das_Dritte_Reich", description: "Password" })
    @IsString({message: 'Must be a string'})
    @Length(4, 16, {message: 'Not less than 4 and not more than 16'})
    readonly password: string;
    @ApiProperty({ example: "Adolf", description: "Name" })
    @IsString({message: 'Must be a string'})
    readonly name: string;
    @ApiProperty({ example: "Gitler", description: "Surname" })
    @IsString({message: 'Must be a string'})
    readonly surname: string;
    @ApiProperty({ example: "1488", description: "id_city" })
    readonly id_city: number;
}