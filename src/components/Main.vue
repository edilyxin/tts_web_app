<template>
  <el-row class="max-h-[calc(100%+1rem)] bg-teal-50">
    <el-col :span="4">
      <h5>菜单</h5>
      <el-menu default-active="1" @open="handleOpen" @close="handleClose">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>模版管理</span>
          </template>
        </el-sub-menu>
        <el-sub-menu index="2">2222</el-sub-menu>
        <el-sub-menu index="3">3333</el-sub-menu>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <div class="head">
        <!-- 头部 -->
        this is header
      </div>
      <el-main height="100vh" class="bg-yellow-200">
        <!-- Main content -->
        <!-- <el-space wrap fill> -->
        <el-row>
          <el-col class=" bg-blue-100 h-10 items-center inline-flex" :span="8" :offset="0">
            <span class="ml-3 w-20 text-gray-600">模版名称</span>
            <el-input class="w-70" v-model="input" placeholder="请输入模版名称" size="normal" clearable @change="" />
          </el-col>
          <el-col class="bg-teal-200 h-10 items-center inline-flex" :span="8" :offset="0"><span
              class="ml-3 w-20 text-gray-600">模版类型</span>
            <el-select v-model="value" placeholder="请选择...">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select> </el-col>
          <el-col class="bg-purple-200 h-10 items-center inline-flex" :span="8" :offset="0"><span
              class="ml-3 w-20 text-gray-600">模版状态</span>
            <el-radio-group v-model="radio2">
              <el-radio-button label="全部" />
              <el-radio-button label="OK" />
              <el-radio-button label="NO" />
            </el-radio-group></el-col>
        </el-row>
        <el-row class="bg-light-800">
          <el-col :offset="0" class="h-10 items-center inline-flex">
            <span class="ml-3 w-20 text-gray-600">
              <el-space warp>
                <el-button type="primary" size="default" @click="">
                  查询
                </el-button>
                <el-button type="default" size="default" @click="">
                  新建
                </el-button>
                <el-button type="default" size="default" @click="">
                  删除
                </el-button>
              </el-space>
            </span>
          </el-col>
        </el-row>
        <el-row class="h-screen">
          <el-col>
            <el-auto-resizer>
              <template #default="{ height, width }">
              <el-table-v2 :height="height" :width="width" :columns="columns" :data="data" fixed/>
              </template>
            </el-auto-resizer>
          </el-col>
        </el-row>

        <!-- </el-space> -->
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
const value = ref('')
const radio2 = ref('全部')
const size = ref(5)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 1000)
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