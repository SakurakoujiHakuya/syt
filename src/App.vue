<template>
  <div class="container">
    <!-- 顶部全局组件 -->
    <HospitalTop />
    <div class="content">
      <!-- <p>content</p> -->
      <router-view></router-view>
    </div>
    <HospitalBottom />
    <!-- 登陆组件 -->
    <Login v-if="userStore.visiable === true" />
  </div>
</template>

<script setup lang="ts">
import useUserStore from './store/modules/user';
const userStore = useUserStore();
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: steelblue;

  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 900px;
    // background-color: red;
    // background-color: aquamarine;
    // border-top: 1px black solid;
  }
}
</style>