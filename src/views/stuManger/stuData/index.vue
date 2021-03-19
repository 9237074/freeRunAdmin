<template>
  <d2-container>
    <div style="display: inline-block">
      <el-input placeholder="请输入学号" v-model="stuId">
        <template slot="prepend">学号</template>
      </el-input>
    </div>
    <div style="display: inline-block; margin-left: 20px">
      <el-input placeholder="请输入院系" v-model="Department">
        <template slot="prepend">院系</template>
      </el-input>
    </div>
    <div style="display: inline-block; margin-left: 40px">
      <el-button
        type="primary"
        size="medium"
        icon="el-icon-search"
        @click="search"
        >搜索</el-button
      >
      <el-button type="primary" size="medium" @click="reset">重置</el-button>
    </div>
    <el-table :data="tableData" stripe style="height: 550px">
      <el-table-column prop="studentId" label="学号" width="110">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="110"> </el-table-column>
      <!-- <el-table-column prop="gender" label="性别" width="110"> -->
      </el-table-column>
      <el-table-column prop="grade" label="年级" width="110"> </el-table-column>
      <el-table-column prop="department" label="院系" width="150">
      </el-table-column>
      <el-table-column prop="profession" label="专业" width="200">
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <span class="text">每页10条数据，共{{ length }}条</span>
      <span class="page">
        <el-pagination
          background
          @current-change="currentChange"
          layout="prev, pager, next"
          :total="length"
        >
        </el-pagination>
      </span>
    </div>
  </d2-container>
</template>

<script>
import { conditionalQuery } from '@/api/conditionalQuery/conditionalQuery';
import getStuData from '@api/admin/stuData';
export default {
  name: 'stuData',
  data () {
    return {
      stuId: null,
      Department: null,
      page: 0,
      tableData: [
        {
          studentId: '',
          name: '',
          gender: '',
          department: '',
          profession: '',
          grade: ''
        }
      ],
      length: null
    };
  },
  mounted: function () {
    this.search();
  },
  methods: {
    reset () {
      this.stuId = null;
      this.department = null;
    },
    search () {
      getStuData().then((res) => {
        this.tableData = res.data;
        this.length = res.count;
      });
    },
    currentChange (e) {
      console.log('page:', e);
      this.page = e - 1;
      console.log('page1:', this.page);
      this.search();
    }
  }
};
</script>
<style>
.partitionLine {
  height: 1px;
  background-color: #ccc;
}
.header ul li {
  float: left;
  margin: 0 28px;
}
.el-input {
  width: 62% !important;
}
.el-input__suffix {
  left: 120px;
}
.header ul {
  margin-bottom: 10px;
}
.el-table_1_column_1,
.el-table_1_column_2,
.el-table_1_column_3,
.el-table_1_column_4,
.el-table_1_column_5,
.el-table_1_column_6,
.el-table_1_column_7,
.el-table_1_column_8,
.el-table_1_column_9,
.el-table_1_column_10,
.el-table_1_column_11,
.el-table_1_column_12,
.el-table_1_column_13 {
  border-right: 1px solid #ebeef5;
}
.cell {
  text-align: center;
}
.el-table {
  margin-top: 15px;
  border-top: 1px solid #ebeef5;
}
.foot {
  margin-top: 0px;
}
div .text {
  font-size: 12px;
  color: #ccc;
  bottom: 0px;
  left: 26px;
}
div .page {
  position: absolute;
  right: 20px;
}
</style>
