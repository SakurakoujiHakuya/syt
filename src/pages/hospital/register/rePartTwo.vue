<template>
    <div class="container">
        <h1 class="tip">确认挂号信息</h1>
        <el-card class="boxCard">
            <template #header>
                <div class="card-header">
                    <span>请选择就诊人</span>
                    <el-button type="primary" size="default">管理就诊人</el-button>
                </div>
            </template>
            <div class="patient">
                <patien v-for="item in 4" :key="item" class="itemm" />
            </div>
        </el-card>
        <el-card class="doctor">
            <template #header>
                <div class="card-header">
                    <span>挂号信息</span>
                </div>
            </template>
            <el-descriptions class="margin-top" :column="2" border>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            就诊日期：
                        </div>
                    </template>
                    XXXX-XX-XX
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            就诊医院：
                        </div>
                    </template>
                    XXXX-XX-XX
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            就诊科室：
                        </div>
                    </template>
                    XXXX-XX-XX
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            医生姓名：
                        </div>
                    </template>
                    XXXX-XX-XX
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            医生职称：
                        </div>
                    </template>
                    XXXX-XX-XX
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            医生专长：
                        </div>
                    </template>
                    XXXX-XX-XX
                </el-descriptions-item>
                <el-descriptions-item>
                    <template #label>
                        <div class="cell-item">
                            医事服务费：
                        </div>
                    </template>
                    XXXX-XX-XX
                </el-descriptions-item>
            </el-descriptions>
        </el-card>
        <div class="rebuton"> <el-button type="primary" class="reb">确认挂号</el-button></div>

    </div>
</template>

<script setup lang='ts'>
import patien from './patien.vue';

</script>

<style lang="scss" scoped>
.container {
    padding-left: 20px;

    .tip {
        font-weight: 900;
        color: #7f7f7f;
        font-size: 20px;
        margin-bottom: 30px;
    }

    .boxCard {
        width: 950px;
        // background-color: aqua;

        .card-header {
            // width: 900px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .patient {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .itemm {
                width: 32%;
                height: 350px;
                // background-color: skyblue;
                margin-bottom: 20px;
            }
        }
    }

    .doctor {
        margin-top: 30px;
    }

    .rebuton {
        margin: 30px 0;
        display: flex;
        justify-content: center;

        .reb {
            width: 200px;
        }
    }
}
</style>