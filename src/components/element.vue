<template>
  <el-container class="el-wrap">
    <!-- 侧边栏 -->
    <el-aside>
      <el-menu>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组二">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>导航二</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组二">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item-group index="2-4-1">选项4-1</el-menu-item-group>
          </el-submenu>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title"><i class="el-icon-share"></i>导航三</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group slot="分组二">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title"><i class="el-icon-upload"></i>导航四</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="4-1">选项1</el-menu-item>
            <el-menu-item index="4-2">选项2</el-menu-item>
            <el-menu-item index="4-3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <!-- 顶部 -->
      <el-header style="text-align: right; font-size: 12px;">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>admin</span>
      </el-header>
      <!-- 主要区域 -->
      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" style="width: 140px; text-align: center;"></el-table-column>
          <el-table-column prop="name" label="姓名" style="width: 120px;"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data () {
      let date = new Date()
      let year = date.getFullYear()
      let month = date.getMonth()
      let days = date.getDate()
      let hours = date.getHours()
      let minutes = date.getMinutes()
      let seconds = date.getSeconds()
      month = month > 9 ? month : '0' + month
      days = days > 9 ? days : '0' + days
      hours = hours > 9 ? hours : '0' + hours
      minutes = minutes > 9 ? minutes : '0' + minutes
      seconds = seconds > 9 ? seconds : '0' + seconds
      let dateValue = year + '-' + month + '-' + days + ' ' + hours + ':' + minutes + ':' + seconds
      const item = {
        date: dateValue,
        name: 'admin',
        address: '辽宁省沈阳市浑南新区远航西路3号'
      }
      return {
        tableData: Array(1).fill(item) // 使用指定值填充数组
      }
    },
    mounted: function () {
      let self = this
      let newArr = self.tableData[0]
      let cycle = setInterval(() => {
        self.tableData.push(newArr)
        if (self.tableData.length > 5) {
          clearInterval(cycle)
        }
      }, 1000)
    }
  }
</script>

<style scoped>
  .el-wrap {
    height: 500px;
    border: 1px solid #eee;
    margin-top: 50px;
  }

  .el-aside {
    width: 200px !important;
    background: rgb(238, 241, 246);
    color: #333;
  }

  .el-header {
    background: #b3c0d1;
    color: #333;
    line-height: 60px;
  }
</style>
