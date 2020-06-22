
import { Prop, ModelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Option设置数据
 */
@ModelOptions({
    schemaOptions: {
        timestamps: true
    }
})
export class Option {

    @ApiProperty({
        description: '参数数据',
        example: '{}'
    })
    @Prop()
    json: string;


}