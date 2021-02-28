<template>
  <d2-container>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">全部</el-menu-item>
      <el-menu-item index="2">待审核</el-menu-item>
      <el-menu-item index="3" >审核通过</el-menu-item>
      <el-menu-item index="4">审核拒绝</el-menu-item>
    </el-menu>
    <el-table
      :data="activeData"
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
      width="65">
    </el-table-column>
    <el-table-column
      prop="Department"
      label="院系"
      width="130">
    </el-table-column>
    <el-table-column
      prop="status"
      label="审核状态"
      width="90">
    </el-table-column>
    <el-table-column
      label="操作"
      width="90">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>

  </el-table>
    <div class="foot">
			<div>
        <span class="text">每页12条数据，共95条</span>
        <span class="page">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="100">
          </el-pagination>
        </span>
		  </div>
	  </div>
  </d2-container>
</template>

<script>
import { certStu } from '@api/cert/stu'
import { certStu0 } from '@api/cert/stu0'
import { certStu1 } from '@api/cert/stu1'
import { certStu2 } from '@api/cert/stu2'
export default {
  name: 'stu',
  methods: {
    handleClick (row) {
      console.log(row)
    },
    handleSelect (key, keyPath) {
      if (key == 1) {
        this.activeData = this.tableData
      } else if (key == 2) {
        this.activeData = this.tableData0
      } else if (key == 3) {
        this.activeData = this.tableData1
      } else if (key == 4) {
        this.activeData = this.tableData2
      }
    },
    btn () {
      certStu({})
        .then(response => {
          console.log(response.msg)
          this.tableData = response.msg
          this.activeData = this.tableData
        })
        .catch(err => {
          console.log(err)
        })
      certStu0({})
        .then(response => {
          console.log(response.msg)
          this.tableData0 = response.msg
        })
        .catch(err => {
          console.log(err)
        })
      certStu1({})
        .then(response => {
          console.log(response.msg)
          this.tableData1 = response.msg
        })
        .catch(err => {
          console.log(err)
        })
      certStu2({})
        .then(response => {
          console.log(response.msg)
          this.tableData2 = response.msg
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted: function () {
    this.btn()
  },
  data () {
    return {
      input: '',
      activeIndex: '1',
      activeData: [],
      tableData: [
        {
          studentId: '',
          name: '',
          gender: '',
          Department: '',
          profession: '',
          grade: '',
          status: ''
        }
      ],
      tableData0: [
        {
          studentId: '0',
          name: '',
          gender: '',
          Department: '',
          profession: '',
          grade: '',
          status: ''
        }
      ],
      tableData1: [
        {
          studentId: '1',
          name: '',
          gender: '',
          Department: '',
          profession: '',
          grade: '',
          status: ''
        }
      ],
      tableData2: [
        {
          studentId: '2',
          name: '',
          gender: '',
          Department: '',
          profession: '',
          grade: '',
          status: ''
        }
      ]
    }
  }
}
</script>
<style>
.partitionLine {
	height: 1px;
	background-color: #ccc;
}
input{
	width: 150px!important;
}
.header ul li {
	float: left;
	margin: 0 28px;
}
.el-input {
  width: 62%!important;
}
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
.foot div .text {
  font-size: 12px;
  color: #ccc;
  position: absolute;
  bottom: 0px;
  left: 26px;
}
.foot div .page {
  position: absolute;
  right: 20px;
  top: 32px;
}
</style>
