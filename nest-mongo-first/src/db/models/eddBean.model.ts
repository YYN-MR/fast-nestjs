import { ApiProperty } from '@nestjs/swagger';
import { ModelOptions, Prop } from '@typegoose/typegoose';

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})

// "{"fundingSource":"2,6","revenueSource":"1","hasDebt":true,"debtArray":[0],"hasDebtcrisis":false}"
export class EddBean {
  @ApiProperty({
    description: '图片类型',
    example: '10001',
  })
  @Prop()
  fundingSource: string;


  @ApiProperty({
    description: '图片类型',
    example: '10001',
  })
  @Prop()
  revenueSource: string;

  @ApiProperty({
    description: '图片类型',
    example: '10001',
  })
  @Prop()
  hasDebt: boolean;


  @ApiProperty({
    description: '图片类型',
    example: '10001',
  })
  @Prop()
  debtArray: [];

  @ApiProperty({
    description: '图片类型',
    example: '10001',
  })
  @Prop()
  hasDebtcrisis: boolean;
}