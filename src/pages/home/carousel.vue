<template>
    <div class="block">
        <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
        <el-carousel height="350px">
            <el-carousel-item v-for="item in 4" :key="item">
                <!-- <h3 class="small">{{ item }}</h3> -->
                <img src="../../assets/images/web-banner-1.png" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
img {
    width: 100%;
    height: 350px;
    // object-fit: cover;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>