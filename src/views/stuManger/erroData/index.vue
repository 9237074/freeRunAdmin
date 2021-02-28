<template>
  <d2-container>
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
      <el-table-column
        prop="studentId"
        label="学号"
        width="110">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="80">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        width="50">
      </el-table-column>
      <el-table-column
        prop="grade"
        label="年级"
        width="75">
      </el-table-column>
      <el-table-column
        prop="Department"
        label="院系"
        width="130">
      </el-table-column>
      <el-table-column
        prop="profession"
        label="行政班级"
        width="130">
      </el-table-column>
    </el-table>
    <div style="margin-top:20px;">
      <span class="text">每页10条数据，共9999条</span>
      <span class="page">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="100">
        </el-pagination>
      </span>
		</div>
  </d2-container>
</template>

<script>
import { errData } from '@api/admin/errData'
export default {
  name: 'erroData',
  data () {
    return {
      tableData: [
        {
          studentId: '',
          name: '',
          gender: '',
          Department: '',
          profession: '',
          grade: ''
        }
      ]
    }
  },
  mounted: function () {
    this.btn()
  },
  methods: {
    btn () {
      errData({})
        .then(response => {
          console.log(response.msg)
          this.tableData = response.msg
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
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
  width: 62%!important; }
  .el-input__suffix {
  left: 120px;
}
.header ul {
  margin-bottom: 10px;
}
.el-table_1_column_1 , .el-table_1_column_2 , .el-table_1_column_3 , .el-table_1_column_4 , .el-table_1_column_5 ,.el-table_1_column_6 , .el-table_1_column_7 , .el-table_1_column_8 , .el-table_1_column_9 , .el-table_1_column_10 , .el-table_1_column_11 , .el-table_1_column_12 , .el-table_1_column_13  {
  border-right: 1px solid #EBEEF5;
}
.cell {
  text-align: center;
}
.el-table {
  margin-top: 15px;
  border-top: 1px solid #EBEEF5;
}
.foot {
  margin-top:0px;
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
