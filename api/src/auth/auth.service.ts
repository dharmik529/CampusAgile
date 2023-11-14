import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/sign-in.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto): Promise<any> {
    const user = await this.usersService.getUserByEmail(signInDto.email);

    if (!user) {
      console.error('User not found');
      throw new NotFoundException('User not found');
    }

    const isPasswordValid = await this.validatePassword(signInDto.password, user.password);

    if (isPasswordValid) {
      const token = this.jwtService.sign({ userId: user.id, fullName: `${user.full_name}` });

      console.log('User successfully authenticated:', user);
      return { user, token };
    }

    console.error('Invalid password');
    throw new UnauthorizedException('Invalid credentials');
  }

  async getUserById(userId: number): Promise<User> {
    const user = await this.usersService.viewUser(userId);
  
    if (!user) {
      throw new NotFoundException('User not found');
    }
  
    return user;
  }

  private async validatePassword(plainTextPassword: string, storedPassword: string): Promise<boolean> {
    try {
      const isPasswordValid = await bcrypt.compare(plainTextPassword, storedPassword);
      return isPasswordValid;
    } catch (error) {
      console.error('Error verifying password:', error);
      return false;
    }
  }
}
