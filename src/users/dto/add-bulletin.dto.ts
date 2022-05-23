import {IsNumber, IsString} from "class-validator";

export class AddBulletinDto {
    @IsString({message: "Must be string"})
    readonly title: string;
    @IsNumber({}, {message: "Must be number"})
    readonly userId: number;
}