import { Controller, Get } from '@nestjs/common';
import { Option } from 'src/db/models/option.model';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
    model: Option
})
@ApiTags('组件配置管理接口')
@Controller('option')
export class OptionController {
    //注入User模型;
    constructor(@InjectModel(Option) private readonly model) { }

    @Get("/query-options")
    queryOptions() {
        const sizeValue = '';
        const DIC = {
            VAILD: [
                {
                    label: "真",
                    value: "true"
                },
                {
                    label: "假",
                    value: "false"
                }
            ],
            SEX: [
                {
                    label: "男",
                    value: 0
                },
                {
                    label: "女",
                    value: 1
                }
            ]
        }
        return {
            size: 'data.sizeValue',
            mockBtn: true,
            submitText: "完成",
            printBtn: true,
            column: [
                {
                    label: "姓名2",
                    prop: "name",
                    mock: {
                        type: "name"
                    },
                    span: 8
                },
                {
                    label: "类型",
                    prop: "type",
                    type: "select",
                    dicData: [
                        {
                            label: "真1",
                            value: "true"
                        },
                        {
                            label: "假2",
                            value: "false"
                        }
                    ],
                    span: 6,
                    mock: {
                        type: "dic"
                    }
                }
            ]
        }
    }
}
