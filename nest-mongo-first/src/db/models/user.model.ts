
import { Prop, ModelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@ModelOptions({
    schemaOptions: {
        timestamps: true
    }
})
export class User {

    @ApiProperty({
        description: '用户名',
        example: 'Sky'
    })
    @Prop()
    username: string;

    @ApiProperty({
        description: '密码',
        example: 'Admin@123'
    })
    @Prop()
    password: string;

    @ApiProperty({
        description: '性别',
        example: 0
    })
    @Prop()
    sex: number;

}