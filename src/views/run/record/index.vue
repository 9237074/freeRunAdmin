<template>
  <d2-container>
	<div style="display: inline-block;">
		<el-input placeholder="请输入学号" v-model="stuId">
		    <template slot="prepend">学号</template>
		</el-input>
		
	</div>
	<div style="display: inline-block;margin-left: 20px;">
		<el-input placeholder="请输入院系" v-model="Department">
		    <template slot="prepend">院系</template>
		</el-input>
	</div>
	<div class="block" style="display: inline-block;margin-left: 20px;">
	    <el-date-picker
	      v-model="switchDate"
		  value-format="yyyy-MM-dd"
	      type="daterange"
	      range-separator="至"
	      start-placeholder="开始日期"
	      end-placeholder="结束日期">
	    </el-date-picker>
	</div>
	<div style="display: inline-block;margin-left: 40px;">
		<el-button type="primary" size="medium" icon="el-icon-search" @click="search">搜索</el-button>
		<el-button type="primary" size="medium" @click="reset">重置</el-button>
	</div>
    <el-table
    :data="tableData"
    stripe
    style="height: 550px;">
      <el-table-column
        prop="uid"
        label="学号"
        width="110">
      </el-table-column>
	  <el-table-column
	    prop="Rs.Department"
	    label="学院"
	    width="130">
	  </el-table-column>
      <el-table-column
        prop="runTime"
        label="跑步时间"
        width="110">
      </el-table-column>
      <el-table-column
        prop="spendTime"
        label="用时"
        width="110">
      </el-table-column>
      <el-table-column
        prop="mileage"
        label="里程"
        width="110">
      </el-table-column>
      <el-table-column
        prop="stepCount"
        label="步数"
        width="120">
      </el-table-column>
      <el-table-column
        prop="speed"
        label="速度"
        width="180">
      </el-table-column>
	  <el-table-column
	    prop="detail"
	    label="备注"
	    width="200">
	  </el-table-column>
	  <el-table-column
	    prop="status"
	    label="状态"
	    width="100">
	  </el-table-column>
    </el-table>
    <div style="margin-top:20px;">
      <span class="text">每页10条数据，共{{length}}条</span>
      <span class="page">
        <el-pagination
          background
		  @current-change="currentChange"
          layout="prev, pager, next"
          :total="length">
        </el-pagination>
      </span>
		</div>
  </d2-container>
</template>

<script>
// import axios from 'axios'
import { stuData } from '@/api/admin/stuData'
import { conditionalQuery } from '@/api/conditionalQuery/conditionalQuery'
export default {
  name: 'record',
  data () {
    return {
		stuId :null,
		Department:null,
		page:0,
		tableData: [
		  {
		    studentId: '',
		    name: '',
		    gender: '',
		    Department: '',
		    profession: '',
		    grade: ''
		  }
		],
		length:null,
		switchDate:null
    }
  },
  mounted: function () {
    this.search()
  },
  methods: {
	reset(){
		this.stuId = null;
		this.Department = null;
		this.switchDate = null;
		this.search();
	},
	search(){
		let data = {}
		if(this.switchDate == null){
			data.startTime = '2000-01-01'
		}else{
			data.startTime = this.switchDate[0]
		}
		if(this.switchDate == null){
			data.endTime = '9999-01-01'
		}else{
			data.endTime = this.switchDate[1]
		}
		data.page = this.page
		data.table = 'runrecord'
		data.stuId = this.stuId
		data.department = this.Department
		
		conditionalQuery(data).then((res)=>{console.log(res);this.tableData = res.data;this.length = res.length})
	},
	currentChange(e){
		console.log('page:',e)
		this.page = e-1
		console.log('page1:',this.page)
		this.search();
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
