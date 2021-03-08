<template>
  <d2-container>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="name" label="用户名" width="101">
      </el-table-column>
      <el-table-column prop="content" label="操作内容" width="350">
      </el-table-column>
      <el-table-column prop="remarks" label="备注" width="200">
      </el-table-column>
      <el-table-column prop="time" label="操作时间" width="180">
      </el-table-column>
    </el-table>
  </d2-container>
</template>

<script>
export default {
  name: 'sportLog',
  data () {
    return {
      input: '',

      tableData: [
        {
          name: 'admin-zj',
          content: 'admin-zj将182619123(罗)的成绩修改为有效成绩',
          remarks: '暂无',
          time: '2019-07-06 10:33:29'
        },
        {
          name: 'admin-zj',
          content: 'admin-zj将182619123(罗)的成绩修改为有效成绩',
          remarks: '暂无',
          time: '2019-07-06 10:33:29'
        },
        {
          name: 'admin-zj',
          content: 'admin-zj将182619123(罗)的成绩修改为有效成绩',
          remarks: '暂无',
          time: '2019-07-06 10:33:29'
        },
        {
          name: 'admin-zj',
          content: 'admin-zj将182619123(罗)的成绩修改为有效成绩',
          remarks: '暂无',
          time: '2019-07-06 10:33:29'
        },
        {
          name: 'admin-zj',
          content: 'admin-zj将182619123(罗)的成绩修改为有效成绩',
          remarks: '暂无',
          time: '2019-07-06 10:33:29'
        },
        {
          name: 'admin-zj',
          content: 'admin-zj将182619123(罗)的成绩修改为有效成绩',
          remarks: '暂无',
          time: '2019-07-06 10:33:29'
        },
        {
          name: 'admin-zj',
          content: 'admin-zj将182619123(罗)的成绩修改为有效成绩',
          remarks: '暂无',
          time: '2019-07-06 10:33:29'
        },
        {
          name: 'admin-zj',
          content: 'admin-zj将182619123(罗)的成绩修改为有效成绩',
          remarks: '暂无',
          time: '2019-07-06 10:33:29'
        },
        {
          name: 'admin-zj',
          content: 'admin-zj将182619123(罗)的成绩修改为有效成绩',
          remarks: '暂无',
          time: '2019-07-06 10:33:29'
        },
        {
          name: 'admin-zj',
          content: 'admin-zj将182619123(罗)的成绩修改为有效成绩',
          remarks: '暂无',
          time: '2019-07-06 10:33:29'
        }
      ]
    }
  }
}
</script>
<style>
ul {
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
  width: 150px !important;
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
.el-table_1_column_4 {
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
