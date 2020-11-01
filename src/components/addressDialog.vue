<template>
  <div>
    <el-dialog
      :title="addressRow.parkingName"
      :visible.sync="dialogVisible"
      width="70%"
      :before-close="handleClose"
      @opened="opened"
    >
      <div style="height:500px;">
        <Amap ref="aMap" />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="ok">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Amap from "../views/amap/index";
export default {
  components: { Amap },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    addressRow: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  watch: {
    visible: {
      deep: true,
      handler(n) {
        this.dialogVisible = n;
      }
    }
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
      this.$emit("update:visible", false);
      this.$refs.aMap.mapDestory(langlat);
    },
    cancel() {
      this.dialogVisible = false;
      this.$emit("update:visible", false);
      this.$refs.aMap.mapDestory(langlat);
    },
    ok() {
      this.dialogVisible = false;
      this.$emit("update:visible", false);
      this.$refs.aMap.mapDestory(langlat);
    },
    opened() {
      this.$nextTick(() => {
        const splitLnglat = this.addressRow.lnglat.split(",");
        const lnglat = {
          lng: splitLnglat[0],
          lat: splitLnglat[1]
        };
        this.$refs.aMap.setMarker(lnglat);
      });
    }
  }
};
</script>

<style scoped>
</style>