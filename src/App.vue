<script setup>
import DeHeader from "./components/DeHeader.vue";
</script>

<template>
  <el-container>
    <el-header>
      <de-header :items="['Setup', 'Components']" title="devecorui" />
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer> </el-footer>
  </el-container>
</template>

<style scoped>
.el-footer {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
}

@media (min-width: 960px) {
  .el-main {
    width: 960px;
    align-self: center;
  }
}
</style>
