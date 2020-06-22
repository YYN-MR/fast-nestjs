import { Module, Global } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';
import { Option } from './models/option.model';


const models = TypegooseModule.forFeature([User, Option]);


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
