import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { User } from 'src/db/models/user.model';
import { InjectModel } from 'nestjs-typegoose';

/**
 * 实现通用CRUD接口;
 * 声明使用的model为User
 */
@Crud({
    model: User
})
@ApiTags('用户管理接口')
@Controller('users')
export class UsersController {
    //注入User模型;
    constructor(@InjectModel(User) private readonly model) { }

}
