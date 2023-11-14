import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('findAll')
  findAll() {
    return this.userService.findAllUsers();
  }

  @Post('create')
  async create(@Body() userData: CreateUserDto) {
    return this.userService.createUser(userData);
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: string) {
    return this.userService.viewUser(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(+id, updateUserDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    const deletedUserId = +id;
    this.userService.removeUser(deletedUserId);
    return { message: `User with ID ${deletedUserId} deleted successfully` };
  }


  @Patch('updatePassword/:id')
  async updatePassword(@Param('id') id: string, @Body('password') newPassword: string) {
    await this.userService.updatePassword(+id, newPassword);
    return { message: 'Password updated successfully' };
  }

  @Get('findByEmail/:email')
  async findUserByEmail(@Param('email') email: string) {
    const user = await this.userService.findUserByEmail(email);

    if (user) {
      return { id: user.id };
    } else {
      throw new NotFoundException('User not found');
    }
    }
}
