<template>
  <d2-container>
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="ID"
      label="管理员ID"
      width="100">
    </el-table-column>
    <el-table-column
      prop="name"
      label="管理员姓名"
      width="100">
    </el-table-column>
    <el-table-column
      prop="records"
      label="操作记录"
      width="200">
    </el-table-column>
    <el-table-column
      prop="classification"
      label="操作分类"
      width="180">
    </el-table-column>
    <el-table-column
      prop="time"
      label="操作时间"
      width="180">
    </el-table-column>
  </el-table>
				  <div class="foot">
				      <div>
                          <span class="text">每页10条数据，共95条</span>
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
export default {
  name: 'log',
  data () {
    return {
      input: '',
      select: '',
      tableData: [{
        ID: '28',
        name: '郑佩佩',
        records: '修改跑步分数配置',
        classification: '校园乐跑',
        time: '2019-07-06 10:33:29'
      }, {
        ID: '28',
        name: '郑佩佩',
        records: '修改跑步分数配置',
        classification: '校园乐跑',
        time: '2019-07-06 10:33:29'
      }, {
        ID: '28',
        name: '郑佩佩',
        records: '修改跑步分数配置',
        classification: '校园乐跑',
        time: '2019-07-06 10:33:29'
      }, {
        ID: '28',
        name: '郑佩佩',
        records: '修改跑步分数配置',
        classification: '校园乐跑',
        time: '2019-07-06 10:33:29'
      }, {
        ID: '28',
        name: '郑佩佩',
        records: '修改跑步分数配置',
        classification: '校园乐跑',
        time: '2019-07-06 10:33:29'
      }, {
        ID: '28',
        name: '郑佩佩',
        records: '修改跑步分数配置',
        classification: '校园乐跑',
        time: '2019-07-06 10:33:29'
      }, {
        ID: '28',
        name: '郑佩佩',
        records: '修改跑步分数配置',
        classification: '校园乐跑',
        time: '2019-07-06 10:33:29'
      }, {
        ID: '28',
        name: '郑佩佩',
        records: '修改跑步分数配置',
        classification: '校园乐跑',
        time: '2019-07-06 10:33:29'
      }, {
        ID: '28',
        name: '郑佩佩',
        records: '修改跑步分数配置',
        classification: '校园乐跑',
        time: '2019-07-06 10:33:29'
      }, {
        ID: '28',
        name: '郑佩佩',
        records: '修改跑步分数配置',
        classification: '校园乐跑',
        time: '2019-07-06 10:33:29'
      } ]
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
	width: 150px!important;
}
.header ul li {
	float: left;
	margin: 0 8px;
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
.el-table_1_column_1 , .el-table_1_column_2 , .el-table_1_column_3 , .el-table_1_column_4{
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
