import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { UserBulletin } from './user-bulletin.model';
import { User } from "src/users/users.model";


interface BulletinCreationAttrs {
  title: string;
  price: DoubleRange;
}

@Table({ tableName: "bulletin" })
export class Bulletin extends Model<Bulletin, BulletinCreationAttrs> {
  @ApiProperty({ example: "1", description: "Uniq id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Iphone 13 on android", description: "Bulletin Title" })
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  title: string;

  @ApiProperty({ example: "Best phone", description: "Bulletin description" })
  @Column({ type: DataType.STRING, allowNull: true })
  description: string;

  @ApiProperty({ example: "http://randomurl.com/pic.jpg", description: "Photo url" })
  @Column({ type: DataType.STRING, allowNull: true })
  photo: string;

  @ApiProperty({ example: "300 ($)", description: "Bulletin price" })
  @Column({ type: DataType.DOUBLE, allowNull: false })
  price: DoubleRange;

  @BelongsToMany(()=> User, () => UserBulletin)
  user: User[];
}
