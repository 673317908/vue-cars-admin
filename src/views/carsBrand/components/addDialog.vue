<template>
  <div>
    <el-dialog
      title="新增车辆品牌"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose"
      append-to-body
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="车辆品牌">
          <el-input v-model="form.cardBrand"></el-input>
        </el-form-item>
        <el-form-item label="品牌型号">
          <el-input v-model="form.brandModel"></el-input>
        </el-form-item>
        <el-form-item label="LOGO">
          <div class="brandLogoImg">
            <div class="upload">
              <img
                src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2319952241,907910870&fm=26&gp=0.jpg"
                alt
              />
            </div>
            <div class="imgList">
              <ul>
                <li>
                  <img
                    src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2319952241,907910870&fm=26&gp=0.jpg"
                    alt
                  />
                </li>
                <li>
                  <img
                    src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2319952241,907910870&fm=26&gp=0.jpg"
                    alt
                  />
                </li>
                <li>
                  <img
                    src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2319952241,907910870&fm=26&gp=0.jpg"
                    alt
                  />
                </li>
                <li>
                  <img
                    src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2319952241,907910870&fm=26&gp=0.jpg"
                    alt
                  />
                </li>
                <li>
                  <img
                    src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2319952241,907910870&fm=26&gp=0.jpg"
                    alt
                  />
                </li>
                <li>
                  <img
                    src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2319952241,907910870&fm=26&gp=0.jpg"
                    alt
                  />
                </li>
                <li>
                  <img
                    src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2319952241,907910870&fm=26&gp=0.jpg"
                    alt
                  />
                </li>
              </ul>
            </div>
          </div>
        </el-form-item>
        <el-form-item>
          <el-radio-group v-model="form.radio">
            <el-radio :label="3">启用</el-radio>
            <el-radio :label="6">禁用</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="ok">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogVisible: false,
      form: {
        cardBrand: "",
        cardBrand: "",
        radio: ""
      }
    };
  },
  watch: {
    visible(n) {
      this.dialogVisible = n;
    }
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
      this.$emit("update:visible", false);
    },
    ok() {
      this.dialogVisible = false;
      this.$emit("update:visible", false);
    },
    cancel() {
      this.dialogVisible = false;
      this.$emit("update:visible", false);
    }
  }
};
</script>

<style scoped lang="scss">
.brandLogoImg {
  display: flex;
  .upload {
    position: relative;
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    box-sizing: border-box;
    width: 148px;
    height: 148px;
    cursor: pointer;
    line-height: 146px;
    vertical-align: top;
    text-align: center;
    &:before {
      content: "+";
      font-size: 50px;
      color: #ccc;
      font-weight: 300;
    }
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  .imgList {
    flex: 1;
    margin-left: 30px;
    ul {
      li {
        float: left;
        width: 60px;
        height: 60px;
        margin: 0 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>