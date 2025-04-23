import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { UserService } from './providers/users.service';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UserService
    ) {

    }


    @Get()
    public getUsers() {
        return this.usersService.findAll()
    }

    @Get("/:id/")
    public getNewUser(@Param('id', ParseIntPipe) id: number, @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number) {
        return this.usersService.findOnyById(id)
    }

    @Post()
    public postUser(@Body() req: any) {
        console.log(req)
        return "You send the post request to the user route"
    }
}
