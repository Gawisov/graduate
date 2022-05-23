import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateBulletinDto } from 'src/users/dto/create-bulletin.dto';
import { BulletinService } from './bulletin.service';


@Controller('bulletin')
export class BulletinController {
    constructor(private bulletinService: BulletinService){}

    @Post()
    create(@Body() dto: CreateBulletinDto){
        return this.bulletinService.createBulletin(dto);
    }

    @Get('/:title')
    getByTitle(@Param('title') title: string){
        return this.bulletinService.getBulletinByValue(title);
    }

}
