
import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { BulletinModule } from './bulletin/bulletin.module';
import { UserBulletin } from './bulletin/user-bulletin.model';
import { Bulletin } from './bulletin/bulletin.model';


@Module({
  controllers: [],
  providers: [],
  imports: [
      ConfigModule.forRoot({
         envFilePath: `.${process.env.NODE_ENV}.env`
      }),

      SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.POSTGRESS_HOST,
          port: Number(process.env.POSTGRESS_PORT),
          username: process.env.POSTGRESS_USER,
          password: process.env.POSTGRESS_PASSWORD,
          database: process.env.POSTGRESS_DB,
          models: [User, Role, UserRoles, UserBulletin, Bulletin],
          autoLoadModels: true
      }),
      UsersModule,
      RolesModule,
      AuthModule,
      BulletinModule
      
  ]
})
export class AppModule {}
