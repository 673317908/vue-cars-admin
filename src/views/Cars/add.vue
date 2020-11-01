<template>
  <div class="parking-add">
    <el-form ref="form" :rules="rules" :model="form" label-width="120px">
      <el-form-item label="汽车品牌" prop="cartBrand">
        <el-select placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="车辆型号" prop="cartModel">
        <el-select placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="停车场" prop="cartPark">
        <el-select placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="车牌号">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="车架号">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="发动机号">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="年检">
        <el-radio-group>
          <el-radio :label="3">已检</el-radio>
          <el-radio :label="6">未检</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="保养日期">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-input style="width:100%;"></el-input>
          </el-col>
          <el-col :span="17">
            <span>下次保养日期：2020-08-20</span>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="挡位">
        <el-radio-group>
          <el-radio :label="3">自动挡</el-radio>
          <el-radio :label="6">手动挡</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="能源类型">
        <el-radio-group v-model="form.enery">
          <el-radio :label="3">电</el-radio>
          <el-radio :label="6">油</el-radio>
          <el-radio :label="9">混合动力</el-radio>
        </el-radio-group>
        <div class="cart_progress" v-if="form.enery==6 || form.enery==9">
          <el-row :gutter="10">
            <el-col :span="1">
              <span>油量：</span>
            </el-col>
            <el-col :span="5">
              <div class="progress_bar">
                <span style="width:60%;">
                  <label>90%</label>
                </span>
              </div>
            </el-col>
            <el-col :span="2">
              <el-input size="small" value="100"></el-input>
            </el-col>
          </el-row>
        </div>
        <div class="cart_progress" v-if="form.enery==3 || form.enery==9">
          <el-row :gutter="10">
            <el-col :span="1">
              <span>电量：</span>
            </el-col>
            <el-col :span="5">
              <div class="progress_bar">
                <span style="width:60%;">
                  <label>90%</label>
                </span>
              </div>
            </el-col>
            <el-col :span="2">
              <el-input size="small" value="100"></el-input>
            </el-col>
          </el-row>
        </div>
      </el-form-item>
      <el-form-item label="座位">
        <el-radio-group>
          <el-radio :label="3">2人座</el-radio>
          <el-radio :label="6">4人座</el-radio>
          <el-radio :label="9">7人座</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="禁启用">
        <el-radio-group>
          <el-radio :label="3">启用</el-radio>
          <el-radio :label="6">禁用</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="车辆属性">
        <div v-for="(item,index) in type" :key="index">
          <el-row :gutter="10">
            <el-col :span="2">
              <el-input value="100" v-model="item.cartValue"></el-input>
            </el-col>
            <el-col :span="3">
              <el-input value="100" v-model="item.info"></el-input>
            </el-col>
            <el-col :span="2">
              <el-button type="primary" v-if="index==0" @click="addType">+</el-button>
              <el-button v-else>-</el-button>
            </el-col>
          </el-row>
        </div>
      </el-form-item>
      <el-form-item label="车辆描述">
        <div ref="editorDom" style="text-align:left;"></div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Editor from "wangeditor"
export default {
  data() {
    return {
      editor: null,
      options: [],
      status: [],
      type: [],
      form: {
        enery: 3
      },
      type: [
        { cartValue: 11, info: 11 },
        { cartValue: 22, info: 22 },
        { cartValue: 33, info: 33 }
      ],
      // 表单验证规则
      rules: {}
      // 按钮加载
    };
  },
  components: {},
  mounted() {
      this.createEditor()
  },
  methods: {
    addType() {
      this.type.push({ cartValue: "", info: "" });
    },
    createEditor() {
      this.editor = new Editor(this.$refs.editorDom);
      this.editor.customConfig.onchange = html => {};
      this.editor.create();
    }
  }
};
</script>

<style lang="scss" scoped>
.address-map {
  width: 100%;
  height: 500px;
}

// .cart_progress {
//   display: flex;
//   align-items: center;
// }
.progress_bar {
  height: 20px;
  width: 100%;
  border-radius: 50px;
  background-color: #cccccc;
  margin-top: 10px;
  span {
    display: block;
    border-radius: 50px;
    height: 100%;
    background-color: #409eff;
    position: relative;
    label {
      position: absolute;
      right: 0;
      bottom: -50%;
    }
  }
}
</style>