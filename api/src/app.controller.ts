import { Controller, Get, } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service'; // import UserService
import { CreateUserDto } from './user/dto/create-user.dto'; // import CreateUserDto

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
}
