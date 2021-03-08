<template>
  <d2-container>
    <div class="headerOne">
      <a href="#" style="">规则配置</a>
      <a href="#">分数配置</a>
    </div>
    <div class="headerTwo">
      <div class="block">
        <span class="demonstration">本学期时段：&nbsp;</span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :change="btn1()"
          readonly
        >
        </el-date-picker>
      </div>
    </div>
    <div class="subject">
      <div class="subject-headerOne">学期合格标准</div>
      <table class="tableOne">
        <tr>
          <th style="width: 150px"></th>
          <th>男生</th>
          <th>女生</th>
        </tr>
        <tr>
          <th style="width: 150px">规则时间:</th>
          <th>2019-03-14至2019-07-05</th>
          <th>2019-03-14至2019-07-05</th>
        </tr>
        <tr>
          <th style="width: 150px">总次数:</th>
          <th>{{ manrule.runTimes }}次</th>
          <th>{{ womanrule.runTimes }}次</th>
        </tr>
        <tr>
          <th style="width: 150px">单日标准:</th>
          <th>
            <el-button type="text" @click="dialogVisible = true"
              >查看详情</el-button
            >
            <el-dialog
              title="每日规则"
              :visible.sync="dialogVisible"
              width="30%"
            >
              <span>{{ manrule.dayRule }}}</span>
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false"
                  >确 定</el-button
                >
              </span>
            </el-dialog>
          </th>
          <th>
            <el-button type="text" @click="dialogVisible = true"
              >查看详情</el-button
            >
            <el-dialog
              title="每日规则"
              :visible.sync="dialogVisible"
              width="30%"
            >
              <span>{{ womanrule.dayRule }}</span>
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false"
                  >确 定</el-button
                >
              </span>
            </el-dialog>
          </th>
        </tr>
      </table>
    </div>
  </d2-container>
</template>

<script>
import { runrule } from '@api/run/rule'
export default {
  name: 'rule',
  data () {
    return {
      input: '',
      dialogVisible: false,
      manrule: {
        ruleTime: '',
        runTimes: '',
        minMileage: '',
        maxMileage: '',
        dayRule: ``,
        punchPoints: '',
        range: '',
        miniDistance: ''
      },
      womanrule: {
        ruleTime: '',
        runTimes: '',
        minMileage: '',
        maxMileage: '',
        dayRule: '',
        punchPoints: '',
        range: '',
        miniDistance: ''
      },
      value1: ['2019-09-01T16:00:00.000Z', '2020-01-09T16:00:00.000Z']
    }
  },
  created: function () {
    runrule({})
      .then((response) => {
        console.log(response.msg[0][0])
        this.manrule = response.msg[0][0]
        this.womanrule = response.msg[1][0]
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    btn1 () {
      console.log('asd:', JSON.stringify(this.value1))
    }
  }
}
</script>
<style>
.headerOne {
  height: 50px;
  border-bottom: 1px solid #ccc;
}
.headerOne > a {
  display: inline-block;
  height: 50px;
  line-height: 84px;
  width: 160px;
  text-align: center;
  text-decoration: none;
  color: #000;
}
.tableOne a {
  text-decoration: none;
  color: #000;
}
.headerOne > a:first-child {
  margin-left: 20px;
  border-bottom: 2px solid #548c31;
}
.headerTwo {
  height: 80px;
  border-bottom: 1px solid #ebeef5;
  line-height: 80px;
}
.subject-headerOne {
  height: 30px;
  background-color: #ebeef5;
  margin-top: 10px;
  line-height: 30px;
}
.tableOne {
  margin: 10px 0 10px 30px;
}
.tableTwo {
  margin: 10px 0 10px 30px;
}
.tableOne th {
  width: 300px;
  font-size: 14px;
  color: #8f8f8f;
  height: 30px;
  text-align: left;
}
.tableTwo th {
  width: 300px;
  font-size: 14px;
  color: #8f8f8f;
  height: 30px;
  text-align: left;
}
#app {
  height: 1000px;
}
</style>
