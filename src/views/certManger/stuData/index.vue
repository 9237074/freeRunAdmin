<template>
  <d2-container>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">全部</el-menu-item>
      <el-menu-item index="2">2019级</el-menu-item>
      <el-menu-item index="3">2018级</el-menu-item>
      <el-menu-item index="4">2017级</el-menu-item>
      <el-menu-item index="5">2016级</el-menu-item>
    </el-menu>
    <div class="line"></div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="number" label="院系" width="110">
      </el-table-column>
      <el-table-column prop="name" label="年级" width="100"> </el-table-column>
      <el-table-column prop="Gender" label="总人数" width="110">
      </el-table-column>
      <el-table-column prop="grade" label="已认证" width="110">
      </el-table-column>
      <el-table-column prop="department" label="未认证" width="130">
      </el-table-column>
      <el-table-column label="操作" width="280">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >已认证名单</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >未认证名单</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="foot">
      <div>
        <span class="text">每页12条数据，共95条</span>
        <span class="page">
          <el-pagination background layout="prev, pager, next" :total="100">
          </el-pagination>
        </span>
      </div>
    </div>
  </d2-container>
</template>

<script>
export default {
  name: 'stuData',
  data () {
    return {
      input: '',
      activeIndex: '1',
      activeIndex2: '1',
      handleSelect: '',
      tableData: [
        {
          number: '汇总',
          name: '全部',
          Gender: '9929',
          grade: '3882',
          department: '6047'
        },
        {
          number: '汇总',
          name: '全部',
          Gender: '9929',
          grade: '3882',
          department: '6047'
        },
        {
          number: '汇总',
          name: '全部',
          Gender: '9929',
          grade: '3882',
          department: '6047'
        },
        {
          number: '汇总',
          name: '全部',
          Gender: '9929',
          grade: '3882',
          department: '6047'
        },
        {
          number: '汇总',
          name: '全部',
          Gender: '9929',
          grade: '3882',
          department: '6047'
        },
        {
          number: '汇总',
          name: '全部',
          Gender: '9929',
          grade: '3882',
          department: '6047'
        },
        {
          number: '汇总',
          name: '全部',
          Gender: '9929',
          grade: '3882',
          department: '6047'
        },
        {
          number: '汇总',
          name: '全部',
          Gender: '9929',
          grade: '3882',
          department: '6047'
        },
        {
          number: '汇总',
          name: '全部',
          Gender: '9929',
          grade: '3882',
          department: '6047'
        },
        {
          number: '汇总',
          name: '全部',
          Gender: '9929',
          grade: '3882',
          department: '6047'
        },

        {
          number: '汇总',
          name: '全部',
          Gender: '9929',
          grade: '3882',
          department: '6047'
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
p {
  font-size: 12px;
  color: #cccccc;
}
</style>
