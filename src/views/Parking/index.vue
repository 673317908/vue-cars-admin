<template>
  <div>
    <div class="cart_parking_search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-row>
          <el-col :xl="2" :lg="2">
            <el-form-item>
              <el-button type="primary" @click="addPraking({name:'ParkingAdd'})">新增停车场</el-button>
            </el-form-item>
          </el-col>
          <el-col :xl="{span:22,push:1}" :lg="{span:22,push:1}">
            <el-form-item label="区域">
              <CityArea ref="cityArea" :mapLocation="true" :cityAreaValue.sync="formInline.area" />
            </el-form-item>
            <el-form-item label="类型">
              <el-select v-model="formInline.type" placeholder="类型">
                <el-option label="室内" value="shanghai"></el-option>
                <el-option label="室外" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="禁启用">
              <el-select v-model="formInline.status" placeholder="请选择">
                <el-option
                  :label="item.label"
                  :value="item.value"
                  v-for="item in statusOptions"
                  :key="item.value"
                >{{item.label}}</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="关键字">
              <el-select v-model="keyword" placeholder="关键字" @change="selectKey">
                <el-option
                  :label="item.label"
                  :value="item.value"
                  v-for="item in keyOptions"
                  :key="item.value"
                >{{item.label}}</el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-input v-model="formInline.searchText" placeholder="输入关键字"></el-input>
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
      <el-table-column prop="parkingName" label="停车场名称" width="220" align="center"></el-table-column>
      <el-table-column prop="type" label="类型" width="180" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.type==1?'室内':'室外'}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="区域" width="300" align="center"></el-table-column>
      <el-table-column prop="carsNumber" label="可停放车辆" width="180" align="center"></el-table-column>
      <el-table-column prop="status" label="禁启用" width="180" align="center">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.status" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="lnglat" label="查看位置" width="250" align="center">
        <template slot-scope="scope">
          <el-button @click="checkAddress(scope.row)" type="success">查看位置</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="194" align="center">
        <template>
          <el-button type="primary">编辑</el-button>
          <el-button type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="total, prev, pager, next"
      :total="total"
      style="margin-top:20px;float:right;"
    ></el-pagination>
    <addressDialog :visible.sync="addressDialogShow" :addressRow="addressRow" />
  </div>
</template>

<script>
import { prakingList } from "@/api/parking.js";
import CityArea from "@c/common/cityArea";
import addressDialog from "@c/addressDialog";
export default {
  components: { CityArea, addressDialog },
  data() {
    return {
      addressRow: {},
      addressDialogShow: false,
      pageSize: 10,
      pageNumber: 1,
      total: 0,
      formInline: {
        searchText: "",
        area: "",
        type: "",
        status: ""
      },
      keyword: "",
      // 禁启用数据
      statusOptions: [
        {
          value: 1,
          label: "禁用"
        },
        {
          value: 2,
          label: "启用"
        }
      ],
      // 关键字数据
      keyOptions: [
        {
          value: "parkingName",
          label: "停车场名称"
        },
        {
          value: "address",
          label: "详细地址"
        }
      ],
      tableData: []
    };
  },
  mounted() {
    this.getPrakingList();
  },
  methods: {
    selectKey(value) {
      console.log(value);
    },
    onSubmit() {
      this.getPrakingList();
    },
    addPraking(route) {
      this.$router.push(route);
    },
    // 获取停车场列表
    getPrakingList() {
      const resData = {
        pageSize: this.pageSize,
        pageNumber: this.pageNumber
      };
      const filterData = JSON.parse(JSON.stringify(this.formInline));
      for (let key in filterData) {
        if (filterData[key]) {
          resData[key] = filterData[key];
        }
      }
      if (this.keyword && this.formInline.searchText) {
        resData[this.keyword] = this.formInline.searchText;
      }
      prakingList(resData).then(response => {
        if (response.data) {
          this.tableData = response.data.data;
        }
        if (response.data.total) {
          this.total = response.data.data.total;
        }
      });
    },
    checkAddress(row) {
      this.addressDialogShow = true;
      this.addressRow = row;
    }
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