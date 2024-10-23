<template>
    <div class="hospital-bottom">
        <div class="content">
            <div class="left">
                <p>© 2024 Hospital Management System</p>
            </div>
            <div class="right">
                <p>Powered by Vue 3.0</p>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.hospital-bottom {
    // height: 1000px;
    width: 100%;
    height: 50px;
    background-color: #f0f2f5;
    display: flex;
    justify-content: center;

    .content {
        width: 1200px;
        // height: 50px;
        height: 100%;
        // background-color: yellow;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
    }
}
</style>