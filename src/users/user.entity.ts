import { IsNotEmpty, IsString } from 'class-validator';

export class User {
  id: number;

  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  name: string;
  email: string;
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
  completeName: string;
  ingressDate: Date;
}