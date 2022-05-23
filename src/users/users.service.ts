import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from '../roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { AddBulletinDto } from './dto/add-bulletin.dto';
import { BulletinService } from '../bulletin/bulletin.service';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User, 
        private roleService: RolesService, private bulletinService: BulletinService){}

    async createUser(dto: CreateUserDto){
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue("User")
        await user.$set('roles', [role.id])
        user.roles = [role]
        return user;
    }

    async getAllUsers(){
        const user = await this.userRepository.findAll({include: {all: true}});
        return user;
    }
    
    async getUserByLogin(login: string){
        const user = await this.userRepository.findOne({where: {login}, include: {all: true}})
        return user;
    }

    async addBulletin(dto:AddBulletinDto){
        const user = await this.userRepository.findByPk(dto.userId);
        const bulletin = await this.bulletinService.getBulletinByValue(dto.title);
        if (bulletin && user) {
            await user.$add('bulletin', bulletin.id);
            return dto;
        }
    }
    
    async addRole(dto:AddRoleDto){
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if (role && user) {
            await user.$add('role', role.id);
            return dto;
        }
        throw new HttpException('User or role not found', HttpStatus.NOT_FOUND);
    }
}