<template>
  <d2-container>
    <el-table :data="gradeData" stripe>
      <el-table-column prop="department" label="院系" width="150">
      </el-table-column>
      <el-table-column prop="allTimes" label="总晨读次数" width="100">
      </el-table-column>
      <el-table-column prop="allPeople" label="总参与人数" width="100">
      </el-table-column>
      <el-table-column prop="avgTimes" label="人均次数" width="150">
      </el-table-column>
    </el-table>
  </d2-container>
</template>

<script>
import getReadData from '@/api/read/data';
export default {
  name: 'grade',
  data () {
    return {
      gradeData: []
    };
  },
  mounted: function () {
    console.log('加载完成');
    getReadData().then((res) => {
      this.gradeData = res.data;
    });
  },
  methods: {
    pageChange (res) {
      getReadData().then((res) => {
        this.gradeData = res.data;
      });
    }
  }
};
</script>
<style>
</style>
