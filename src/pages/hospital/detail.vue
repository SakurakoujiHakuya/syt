<template>
    <!-- <h1>我是detail</h1> -->
    <div class="detail">{{ hospitalStore.hospitalInfo?.hospital?.intro }}</div>
</template>

<script setup lang='ts'>
import useDettailStore from '@/store/modules/hospitalDetail';
let hospitalStore = useDettailStore();
// console.log(hospitalStore.hospitalInfo?.hospital);
</script>

<style lang="scss" scoped></style>