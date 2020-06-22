<template>
  <div class="hello">
    <el-row style="margin-bottom:20px">
      <el-radio-group v-model="sizeValue">
        <el-radio label>默认</el-radio>
        <el-radio label="small">small</el-radio>
        <el-radio label="mini">mini</el-radio>
      </el-radio-group>
    </el-row>
    <avue-form
      v-if="systemOption"
      ref="form"
      v-model="obj"
      :option="systemOption"
      @reset-change="emptytChange"
      @submit="submit"
    >
      <template slot="menuForm">
        <el-button @click="tip">自定义按钮</el-button>
      </template>
    </avue-form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      DIC: {
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
      },
      obj: {},
      sizeValue: "mini",
      systemOption: {}
    };
  },
  computed: {
    option() {
      return {
        size: "",
        mockBtn: true,
        submitText: "完成",
        printBtn: true,
        column: [
          {
            label: "姓名",
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
                label: "真",
                value: "true"
              },
              {
                label: "假",
                value: "false"
              }
            ],
            span: 6,
            mock: {
              type: "dic"
            }
          }
        ]
      };
    }
  },
  mounted() {
    this.obj.username = "smallwei";
    this.obj.switch = 0;
    this.obj.phone = "17547400800";
    this.fetchOptions();
  },
  methods: {
    async fetchOptions() {
      const result = await this.$http.get("./option/query-options");
      console.log(result.data.size);
      console.log(eval(result.data.size));
      this.systemOption = result.data;

      // this.$set(this,'systemOption',result.data)
      return result;
    },
    emptytChange() {
      this.$message.success("清空方法回调");
    },
    submit() {
      this.$message.success("当前数据" + JSON.stringify(this.obj));
    },
    tip() {
      this.$message.success("自定义按钮");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
