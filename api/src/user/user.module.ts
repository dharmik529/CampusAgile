import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // <- This is crucial!
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService] // if you plan on using it outside this module
})
export class UserModule {}
