import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  public getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }  

  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOneBy({ email });
  }

  async createUser(createUserDto: CreateUserDto): Promise<String> {
    const user: User = new User();
    user.full_name = createUserDto.full_name;
    user.username = createUserDto.username;
    user.email = createUserDto.email;

    // Hash the password
    const saltRounds = 10; // You can adjust the number of salt rounds as needed
    const hashedPassword = await bcrypt.hash(createUserDto.password, saltRounds);

    user.password = hashedPassword;
    user.role = createUserDto.role;
    user.category = createUserDto.category;
    user.created_at = new Date();
    user.last_login = new Date();

    await this.userRepository.save(user);
    return `User created successfully`;
  }


  async findAllUsers() {
    return this.userRepository.find();
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }

  async viewUser(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOneBy({ id }); // Corrected findOneBy to findOne

    if (!user) {
      throw new Error('User not found');
    }

    if (updateUserDto.full_name !== undefined) {
      user.full_name = updateUserDto.full_name;
    }

    if (updateUserDto.username !== undefined) {
      user.username = updateUserDto.username;
    }

    if (updateUserDto.email !== undefined) {
      user.email = updateUserDto.email;
    }

    if (updateUserDto.role !== undefined) {
      user.role = updateUserDto.role;
    }

    if (updateUserDto.category !== undefined) {
      user.category = updateUserDto.category;
    }

    return this.userRepository.save(user);
  }

  async updatePassword(id: number, newPassword: string): Promise<void> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new Error('User not found');
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    user.password = hashedPassword;
    await this.userRepository.save(user);
  }

  async removeUser(id: number): Promise<string> {
    const user = await this.userRepository.findOneBy({ id });
  
    if (!user) {
      throw new Error('User not found');
    }
  
    await this.userRepository.delete(id);
    return 'User deleted successfully';
  }

}
