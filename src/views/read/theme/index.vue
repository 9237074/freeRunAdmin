<template>
  <d2-container>
    <div style="width: 100%">
      <div class="inline">
        <el-input placeholder="主题" v-model="theme.theme">
          <template slot="prepend">主题</template>
        </el-input>
      </div>
      <div class="inline">
        <el-input placeholder="时间" v-model="theme.readTime">
          <template slot="prepend">时间</template>
        </el-input>
      </div>
      <div class="inline">
        <el-input placeholder="日期" v-model="theme.readDate">
          <template slot="prepend">日期</template>
        </el-input>
      </div>
      <div class="inline">
        <el-input placeholder="地点" v-model="theme.readSite">
          <template slot="prepend">地点</template>
        </el-input>
      </div>
      <div class="inline">
        <el-input placeholder="负责人" v-model="theme.peopleId">
          <template slot="prepend">负责人</template>
        </el-input>
      </div>

      <el-button style="width: 5vw; margin-left: 2vw" @click="add"
        >添加</el-button
      >
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="theme" label="主题" width="150"> </el-table-column>
      <el-table-column prop="readTime" label="时间" width="180">
      </el-table-column>
      <el-table-column prop="readDate" label="日期"> </el-table-column>
      <el-table-column prop="readSite" label="地点"> </el-table-column>
      <el-table-column prop="people" label="负责人"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="del(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </d2-container>
</template>

<script>
import readTheme from '@api/read/theme';
import editAddTheme from '@api/read/addtheme';
export default {
  name: 'theme',
  data () {
    return {
      theme: [
        {
          theme: '',
          readTime: '',
          readDate: '',
          readSite: '',
          peopleId: ''
        }
      ],
      tableData: []
    };
  },
  mounted: function () {
    readTheme().then((res) => {
      this.tableData = res.data;
      console.log(res);
    });
  },
  methods: {
    add () {
      editAddTheme({
        theme: this.theme.theme,
        readTime: this.theme.readTime,
        readDate: this.theme.readDate,
        readSite: this.theme.readSite,
        peopleId: this.theme.peopleId,
        change: 'add'
      }).then((res) => {
        console.log({ res });
        readTheme().then((res) => {
          this.tableData = res.data;
          console.log(res);
        });
      });
    },
    del (row) {
      console.log({ row });
      editAddTheme({
        theme: row.theme,
        readTime: row.readTime,
        readDate: row.readDate,
        readSite: row.readSite,
        peopleId: row.people,
        change: 'delete'
      }).then((res) => {
        console.log({ res });
        readTheme().then((res) => {
          this.tableData = res.data;
          console.log(res);
        });
      });
    }
  }
};
</script>
<style>
.inline {
  display: inline-block;
  width: 14vw;
}
</style>
