<template>
  <d2-container>
    <el-table :data="gradeData" stripe>
      <el-table-column prop="department" label="院系" width="150">
      </el-table-column>
      <el-table-column prop="allTimes" label="总跑步次数" width="100">
      </el-table-column>
      <el-table-column prop="allmileage" label="总里程(米)" width="100">
      </el-table-column>
      <el-table-column prop="allPeople" label="总参与人数" width="100">
      </el-table-column>
      <el-table-column prop="avgmileage" label="人均里程(米)" width="110">
      </el-table-column>
      <!-- <el-table-column prop="avgTimes" label="有效人均次数" width="150"></el-table-column> -->
    </el-table>
  </d2-container>
</template>

<script>
import { runData } from '@/api/run/data'
export default {
  name: 'grade',
  data () {
    return {
      gradeData: []
    }
  },
  mounted: function () {
    console.log('加载完成')
    runData().then((a) => {
      console.log('this.gradeData', a)
      this.gradeData = a
    })
  },
  methods: {
    pageChange (res) {
      runData().then((a) => {
        this.gradeData = a
      })
    }
  }
}
</script>
<style>
</style>
