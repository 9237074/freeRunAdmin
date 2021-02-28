<template>
  <d2-container>
    <el-button type="info" style="margin-left: 3%">添加角色</el-button>
             <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="number"
      label="id"
      width="110">
    </el-table-column>
    <el-table-column
      prop="name"
      label="角色名称"
      width="100">
    </el-table-column>
    <el-table-column
      prop="Gender"
      label="角色描述"
      width="130">
    </el-table-column>
    <el-table-column
      prop="grade"
      label="创建时间"
      width="210">
    </el-table-column>
    <el-table-column label="操作" width="350">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">分配角色</el-button>
          <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">修改账号</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除账号</el-button>
      </template>
    </el-table-column>

  </el-table>
				  <div class="foot">
				      <div>
                          <span class="text">每页10条数据，共6条</span>
                          <soan class="page">
						<el-pagination
						  background
						  layout="prev, pager, next"
						  :total="100">
						</el-pagination>
                          </soan>
				      </div>
				  </div>
  </d2-container>
</template>

<script>
export default {
  name: 'role',
  data () {
    return {
      input: '',

      tableData: [{
        number: '6022',
        name: '超级管理员',
        Gender: '拥有所有权限',
        grade: '2019-03-06 11：22：11'
      }, {
        number: '6022',
        name: '超级管理员',
        Gender: '拥有所有权限',
        grade: '2019-03-06 11：22：11'
      }, {
        number: '6022',
        name: '超级管理员',
        Gender: '拥有所有权限',
        grade: '2019-03-06 11：22：11'
      }, {
        number: '6022',
        name: '超级管理员',
        Gender: '拥有所有权限',
        grade: '2019-03-06 11：22：11'
      }, {
        number: '6022',
        name: '超级管理员',
        Gender: '拥有所有权限',
        grade: '2019-03-06 11：22：11'
      }, {
        number: '6022',
        name: '超级管理员',
        Gender: '拥有所有权限',
        grade: '2019-03-06 11：22：11'
      }]
    }
  }
}
</script>
<style>
ul{
	  padding: 0px;
	  margin: 0px;
}
ul li {
		list-style: none;
}
.partitionLine {
	  height: 1px;
	  background-color: #ccc;
}
input {
	width: 130px!important;
}
.header ul li {
	float: left;
	margin: 0 28px;
}
.el-input {
  width: 60%!important;
}
.el-input__suffix {
  left: 100px;
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
  height: 200px;
}
.foot div {
	height: 50px;
	position: relative;
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
