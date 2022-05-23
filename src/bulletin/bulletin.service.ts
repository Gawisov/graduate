import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateBulletinDto } from "src/users/dto/create-bulletin.dto";
import { Bulletin } from "./bulletin.model";

@Injectable()
export class BulletinService {
  constructor(@InjectModel(Bulletin) private bulletinRepository: typeof Bulletin) {}

  async createBulletin(dto: CreateBulletinDto) {
    const bulletin = await this.bulletinRepository.create(dto);
    return bulletin;
  }

  async getBulletinByValue(title: string) {
    const bulletin = await this.bulletinRepository.findOne({ where: { title } });
    return bulletin;
  }
}
