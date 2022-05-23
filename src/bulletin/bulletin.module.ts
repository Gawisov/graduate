import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { BulletinController } from './bulletin.controller';
import { Bulletin } from './bulletin.model';
import { BulletinService } from './bulletin.service';
import { UserBulletin } from './user-bulletin.model';


@Module({
  controllers: [BulletinController],
  providers: [BulletinService],
  imports: [SequelizeModule.forFeature([Bulletin, User, UserBulletin])],
  exports:[
    BulletinService
  ]
})
export class BulletinModule {}
