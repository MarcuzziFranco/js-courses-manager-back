import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './dto/User.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async login(@Body() userDto: UserDto) {
    console.log(userDto);
    return userDto;
  }
}
