<template>
  <d2-container>
    <div>
      <el-input v-model="oldpw" placeholder="请输入原密码">
        <template slot="prepend">原密码</template>
      </el-input>
    </div>
    <div>
      <el-input v-model="newpw0" placeholder="请输入新密码" show-password>
        <template slot="prepend">新密码</template>
      </el-input>
    </div>
    <div>
      <el-input v-model="newpw1" placeholder="请输入再次确认" show-password>
        <template slot="prepend">新密码</template>
      </el-input>
    </div>
    <div style="margin-top:10px;">
      <el-button style="margin-left:40px">重置</el-button>
      <el-button @click="sumbit">提交</el-button>
    </div>
  </d2-container>
</template>
<script>
export default {
  name: 'admin',
  data () {
    return {
      oldpw: '',
      newpw0: '',
      newpw1: ''
    }
  },
  methods: {
    sumbit () {
      this.$alert('等待下一版本更新', '温馨提示', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    }
  }
}
</script>
<style>
.el-input__suffix{
  width: 250px;
}
</style>
