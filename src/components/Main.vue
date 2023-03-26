<template>
 
  <el-row>
    <el-col :span="4">
      <h5>菜单</h5>
      <el-menu>
        <el-sub-menu index="1">1111</el-sub-menu>
        <el-sub-menu index="2">2222</el-sub-menu>
        <el-sub-menu index="3">3333</el-sub-menu>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <div class="head">
         <!-- 头部 -->
        this is header
      </div>
      <div class="content">
         <!-- 头部 -->
        this is header
      </div>
    </el-col>
  </el-row>

  <!-- 菜单 -->
  <div></div>
  <!-- 主面板 -->
  <div></div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.head {
  width: 100%;
  height: 40px;
  background-color: grey;
}
.content{
  width: 100%;
  height: 100vh;
  background-color: purple;
}
</style>