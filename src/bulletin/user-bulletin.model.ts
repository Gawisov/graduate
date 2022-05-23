import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "src/users/users.model";
import { Bulletin } from "./bulletin.model";

@Table({ tableName: "user_bulletin", createdAt: true, updatedAt: true})
export class UserBulletin extends Model<UserBulletin> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Bulletin)
  @Column({ type: DataType.INTEGER})
  bulletinID: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER})
  userID: number;

}
