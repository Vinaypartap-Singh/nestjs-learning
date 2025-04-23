import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UserService } from './providers/users.service';

@ApiTags("Users")
@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UserService) { }

    @Get()
    @ApiOperation({
        summary: "Get All User Here"
    })
    public getUsers() {
        return this.usersService.findAll()
    }
    @Get("/:id/")
    @ApiOperation({
        summary: "Get Specific User"
    })
    @ApiParam({
        name: "id",
        type: "number",
        required: false,
        description: "User Id to Get Information of sepcific user",
        example: 109812
    })
    @ApiQuery({
        name: "limit",
        type: "number",
        required: false,
        description: "The number of enteries returned per request",
        example: 10
    })
    public getNewUser(@Param('id', ParseIntPipe) id: number, @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
    limit: number) {
        return this.usersService.findOnyById(id)
    }

    @Post()
    @ApiOperation({
        summary: "Add Users To Website"
    })
    public postUser(@Body() req: any) {
        console.log(req)
        return "You send the post request to the user route"
    }
}
