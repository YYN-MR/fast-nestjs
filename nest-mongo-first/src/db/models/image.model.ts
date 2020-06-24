import { ModelOptions, Prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@ModelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Image {

  @ApiProperty({
    description: '图片类型',
    example: '10001'
  })
  @Prop()
  type:string;

  @ApiProperty({
    description: '图片路径',
    example: 'url'
  })
  @Prop()
  url:string;
}