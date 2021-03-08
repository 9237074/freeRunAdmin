<template>
  <d2-container>
    <el-header style="">
      <div>学期管理</div>
    </el-header>
    <div class="partitionLine"></div>
    <el-main>
      <div>当前学年： 0</div>
      <br />
      <p>当前学期： 2018~2019学年下学期</p>
      <el-button type="info">新增新学期</el-button>
    </el-main>
  </d2-container>
</template>

<script>
export default {
  name: 'exam'
}
</script>
<style>
header div {
  font-weight: bolder;
  font-size: 18px;
  padding: 22px 0 0 32px;
}
.partitionLine {
  height: 2px;
  background-color: #ccc;
}
main {
  margin-left: 18px;
}
main p {
  margin-bottom: 56px;
}
</style>
