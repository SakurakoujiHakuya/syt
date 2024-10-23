<template>
    <el-card shadow="hover">
        <template #header>
            <div class="card-header">
                <span>鲁大海</span>
                <span><el-icon>
                        <EditPen />
                    </el-icon></span>
            </div>
        </template>
        <p>证件类型：身份证</p>
        <p>证件号码：370982199912121212</p>
        <p>用户性别：女</p>
        <p>出生日期：1145.22.22</p>
        <p>手机号码：12345678901</p>
        <p>婚姻状况：女</p>
        <p>当前住址：dfd</p>
        <p>详细地址：sadsad</p>

    </el-card>

</template>

<script setup lang='ts'>

</script>

<style lang="scss" scoped>
.card-header {
    display: flex;
    justify-content: space-between;
}
</style>