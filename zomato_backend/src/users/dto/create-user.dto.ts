import { IsEnum, IsInt, IsNotEmpty, IsString, Length, Max, Min } from 'class-validator';
import { Gender, Role } from '../enum/user.enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 30)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 30)
  lastName: string;

  @IsString()
  email: string

  @IsEnum(Gender)
  gender: Gender;

  @IsInt()
  @Min(13)
  @Max(120)
  age: number;

  @IsString()
  @Length(6, 50)
  password: string;

  @IsEnum(Role)
  role: Role;
}
