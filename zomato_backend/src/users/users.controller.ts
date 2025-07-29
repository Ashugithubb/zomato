import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, BadRequestException, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt.auth';
import { UsersService } from './users.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post('signup')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('info')
  findOne(@Req() req) {
    return this.userService.findOne(+req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update')
  update( @Body() updateUserDto: UpdateUserDto,@Req() req) {
    console.log("Body received:",updateUserDto);

    return this.userService.update(+req.user.id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

    @UseGuards(JwtAuthGuard)
  @Get('bus')
  async findBusId(@Req() req){
   return this.userService.findBus(+req.user.id);
  }

}