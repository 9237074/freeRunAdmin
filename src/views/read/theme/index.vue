<template>
  <d2-container>
      <div style="width:100%;">
        <div class="inline">
            <el-input
            placeholder="主题"
            v-model="theme.theme"
            >
            <template slot="prepend">主题</template>
            </el-input>
        </div>
        <div class="inline">
            <el-input
            placeholder="时间"
            v-model="theme.readTime"
            >
            <template slot="prepend">时间</template>
            </el-input>
        </div>
        <div class="inline">
            <el-input
            placeholder="日期"
            v-model="theme.readDate"
            >
            <template slot="prepend">日期</template>
            </el-input>
        </div>
        <div class="inline">
            <el-input
            placeholder="地点"
            v-model="theme.readSite"
            >
            <template slot="prepend">地点</template>
            </el-input>
        </div>
        <div class="inline">
            <el-input
            placeholder="负责人"
            v-model="theme.people"
            >
            <template slot="prepend">负责人</template>
            </el-input>
        </div>

        <el-button style="width:5vw;margin-left: 2vw;" @click="add">添加</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="theme"
        label="主题"
        width="150">
      </el-table-column>
      <el-table-column
        prop="readTime"
        label="时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="readDate"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="readSite"
        label="地点">
      </el-table-column>
      <el-table-column
        prop="people"
        label="负责人">
      </el-table-column>
      <el-table-column
        label="操作">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
      </template>
      </el-table-column>
    </el-table>
  </d2-container>
</template>

<script>
import { readTheme } from '@/api/read/theme'
import { readAddTheme } from '@/api/read/addtheme'
export default {
  name: 'theme',
  data () {
    return {
      theme: [{
        theme: '',
        readTime: '',
        readDate: '',
        readSite: '',
        people: ''
      }],
      tableData: []
    }
  },
  mounted: function () {
    readTheme('', 0).then(data => { if (data === '参数有误') { console.log('主题参数错误') } else { this.tableData = data.msg } })
  },
  methods: {
    add () {
      if (this.theme.theme === '' || this.theme.readTime === '' || this.theme.readDate === '' || this.theme.readSite === '' || this.theme.people === '' || this.theme.theme === undefined || this.theme.readTime === undefined || this.theme.readDate === undefined || this.theme.readSite === undefined || this.theme.people === undefined) {
        this.$message('内容不能为空')
      } else if (this.theme.readTime[5] !== '-') {
        this.$message('时间格式有误。如 07:20-08:20')
      } else {
        readAddTheme('', 0, 'add', this.theme.theme, this.theme.readTime, this.theme.readDate, this.theme.readSite, this.theme.people).then(
          data => {
            console.log(data)
            this.$message(data.msg)
            readTheme('', 0).then(data => { this.tableData = data.msg })
            this.theme.theme = this.theme.readTime = this.theme.readDate = this.theme.readSite = this.theme.people = ''
          }
        )
      }
    },
    del (row) {
      readAddTheme('a', '0', 'delete', row.theme, row.readTime, row.readDate, row.readSite, row.people)
        .then(data => {
          console.log(data)
          this.$message(data.msg)
          readTheme('', 0).then(data => {
            this.tableData = data.msg
          })
        })
      // row.theme,row.readTheme,row.readDate,row.readSite,row.people
    }
  }
}
</script>
<style>
.inline{
    display: inline-block;
    width: 14vw;
}
</style>
