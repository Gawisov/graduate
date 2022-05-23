import { Body, Controller, Post, Get, UseGuards, UsePipes } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import {ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from './users.model';
import { Roles } from '../auth/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { AddRoleDto } from "./dto/add-role.dto";
import { AddBulletinDto } from "./dto/add-bulletin.dto";

@ApiTags('Users')
@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({summary: 'User creation'})
  @ApiResponse({status: 200, type: User})
  @Roles("User")
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() userDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({summary: 'Get all users'})
  @ApiResponse({status: 200, type: [User]})
  @Roles("Admin")
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({summary: 'Give role'})
  @ApiResponse({status: 200})
  @Roles("Admin")
  @UseGuards(RolesGuard)
  @Post('role')
  addRole(@Body() dto: AddRoleDto) {
      return this.usersService.addRole(dto);
  }
  
  @ApiOperation({summary: 'Give bulletin'})
  @ApiResponse({status: 200})
  @Roles("User")
  @UseGuards(RolesGuard)
  @Post('bulletin')
  addBulletin(@Body() dto: AddBulletinDto) {
      return this.usersService.addBulletin(dto);
  }
}
