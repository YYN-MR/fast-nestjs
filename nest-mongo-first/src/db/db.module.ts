import { Module, Global } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';
import { Option } from './models/option.model';
import { Content } from './models/content.model';

/**
 * 引入Model层
 */
const models = TypegooseModule.forFeature([User, Option,Content]);


@Global()
@Module({
    imports: [
        TypegooseModule.forRoot('mongodb://localhost:27017/nestjs', {
            useCreateIndex: true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        }),
        models
    ],
    exports: [models]
})
export class DbModule {

}
