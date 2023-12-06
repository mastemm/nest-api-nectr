import { ApiProperty } from '@nestjs/swagger';
import {IsDate, IsString, Length } from 'class-validator';

export class CreateUserDto {
    
    @ApiProperty({
    description: "This field represents the user's pseudo",
    maxLength: 20,        
    })
    @IsString()
    @Length(3, 20)
    user_pseudo: string;


    @ApiProperty({
    description: "This field represents the user's username",
    maxLength: 30,
    })
    @IsString()
    @Length(3, 30)
    username: string;


    @ApiProperty({
    description: "This field represents the user's password"
    })
    @IsString()
    @Length(72, 72)
    user_password: string;


    @ApiProperty({
    description: "This field represents the date at which this user was created"
    })
    @IsDate()
    create_at: Date;
}