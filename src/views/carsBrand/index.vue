<template>
  <div>
    <div class="cart_parking_search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-row>
          <el-col :xl="13" :lg="13">
            <el-form-item>
              <el-button type="primary" @click="addPraking">新增车辆品牌</el-button>
            </el-form-item>
          </el-col>
          <el-col :xl="11" :lg="11">
            <el-form-item label="车辆品牌">
              <el-select v-model="formInline.cartBrand" placeholder="车辆品牌">
                <el-option label="室内" value="shanghai"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="品牌型号">
              <el-input v-model="formInline.brandModel" placeholder="品牌型号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">搜索</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <!-- 表格数据 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="45" align="center"></el-table-column>
      <el-table-column prop="name" label="LOGO" width="220" align="center"></el-table-column>
      <el-table-column prop="type" label="汽车品牌" width="180" align="center"></el-table-column>
      <el-table-column prop="area" label="品牌型号" width="300" align="center"></el-table-column>
      <el-table-column prop="status" label="禁启用" width="180" align="center">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.status" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="194" align="center">
        <template>
          <el-button type="primary">编辑</el-button>
          <el-button type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <addDialog :visible.sync="addDialogShow" @closeDialog="closeDialog" />
    <el-pagination
      background
      layout="total, prev, pager, next"
      :total="1000"
      style="margin-top:20px;float:right;"
    ></el-pagination>
  </div>
</template>

<script>
import addDialog from "./components/addDialog";

export default {
  components: { addDialog },
  data() {
    return {
      addDialogShow: false,
      formInline: {
        cartBrand: "",
        brandModel: ""
      },
      tableData: [
        {
          name: "天河停车场",
          type: "室外",
          area: "广州市 天河区 广汕一路",
          cartNum: 20,
          status: 1,
          address: "156.545611,234.156416"
        }
      ]
    };
  },
  methods: {
    onSubmit() {},
    addPraking() {
      this.addDialogShow = true;
    },
    closeDialog() {
      this.addDialogShow = false;
    },
    
  },
  mounted() {
    this.getPrakingList();
  }
};
</script>

<style scoped lang="scss">
.el-form--inline {
  .el-form-item {
    margin-right: 19px !important;
  }
}
</style>