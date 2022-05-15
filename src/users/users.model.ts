import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger"; 
import { Role } from '../roles/roles.model';
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
  login: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: "1", description: "Uniq id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Adolf", description: "User Name" })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ example: "Gitler", description: "User Surname" })
  @Column({ type: DataType.STRING, allowNull: false })
  surname: string;

  @ApiProperty({ example: "0-5", description: "User rating" })
  @Column({ type: DataType.DOUBLE })
  rating: DoubleRange;

  @ApiProperty({ example: "1488", description: "City ID" })
  @Column({ type: DataType.NUMBER, allowNull: false })
  id_city: number;

  @ApiProperty({ example: "SS", description: "Login" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  login: string;
  
  @ApiProperty({ example: "Das_Dritte_Reich", description: "Password" })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @BelongsToMany(()=> Role, () => UserRoles)
  roles: Role[];

}
