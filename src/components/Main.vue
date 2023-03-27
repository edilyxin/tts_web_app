<template>
  <el-row>
    <el-col :span="4">
      <h5>菜单</h5>
      <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>模版管理</span>
          </template>
          1111</el-sub-menu>
        <el-sub-menu index="2">2222</el-sub-menu>
        <el-sub-menu index="3">3333</el-sub-menu>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <div class="head">
        <!-- 头部 -->
        this is header
      </div>
      <el-main height="100vh" class="content">
        <!-- Main content -->
        <el-row>
          <el-col class="ml-5" :span="8" :offset="0">
            <span class="ml-3 w-35 text-gray-600 inline-flex items-center">Using attributes</span>
            <el-input class="w-40" v-model="input" placeholder="请输入模版名称" size="normal" clearable @change="" />
          </el-col>
          <el-col :span="8" :offset="0">234</el-col>
          <el-col :span="8" :offset="0">345</el-col>
        </el-row>
      </el-main>
    </el-col>
  </el-row>

  <!-- 菜单 -->
  <div></div>
  <!-- 主面板 -->
  <div></div>
</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

import { ref } from 'vue';
const input = ref('')
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
  
<style scoped>
.head {
  width: 100%;
  height: 40px;
  background-color: grey;
}

.content {
  width: 100%;
  height: 100vh;
  background-color: purple;
}
</style>