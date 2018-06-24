<template>
  <div>
    <div id="loadform">
      <el-form :model="ruleForm2" label-width="100px" ref="ruleForm2" class="demo-ruleForm">
        <el-form-item label="用户名" prop="user">
          <el-input
            v-model="ruleForm2.user"
            auto-complete="off"
            placeholder="admin"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm2.password"
            auto-complete="off"
            placeholder="admin"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="loadtag">
      <div class="loadusertag loadaligntag">
        <el-tag>用户名：{{ ruleForm2.user }}</el-tag>
      </div>
      <div class="loadaligntag">
        <el-tag>密码：{{ ruleForm2.password }}</el-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm2: {
        user: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      if (this.ruleForm2.user === 'admin' && this.ruleForm2.password === 'admin') {
        alert('登录成功!')
      } else {
        alert('用户名/密码错误!')
      }
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
#loadform {
  float: left;
  width: 300px;
  margin-right: 20px;
}
.loadtag {
  float: left;
}
.loadusertag {
  margin-bottom: 10px;
}
.loadaligntag {
  text-align: left;
}
</style>
