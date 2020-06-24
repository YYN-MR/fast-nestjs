import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions } from '@typegoose/typegoose';

/**
 * 文章内容信息页面
 */
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Content {

  @ApiProperty({
    description: '标题内容',
    example: '这里是一个标题内容！'
  })
  title: string;

  @ApiProperty({
    description: '作者',
    example: 'Sky'
  })
  author: string;

  @ApiProperty({
    description: '文章内容',
    example: '这里是正文内容...'
  })
  content: string;


  @ApiProperty({
    description: '文章类型',
    example: '0'
  })
  type: string;

}