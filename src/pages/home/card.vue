<template>
    <el-card shadow="hover" @click="goDetail">
        <div class="content">
            <div class="left">
                <div class="hospitalName">
                    {{ props.hospitalInfo.hosname }}
                </div>
                <div class="tip">

                    <div class="hospitalLevel">
                        <el-icon>
                            <Medal />
                        </el-icon>
                        {{ props.hospitalInfo.param.hostypeString }}
                    </div>
                    <div class="time">
                        <el-icon>
                            <Calendar />
                        </el-icon>
                        每天{{ props.hospitalInfo.bookingRule.releaseTime }}放号
                    </div>
                </div>

            </div>
            <div class="right">
                <img :src="`data: image / jpeg; base64,${props.hospitalInfo.logoData}`" alt="">
            </div>
        </div>
    </el-card>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';
let props = defineProps(['hospitalInfo'])

let $router = useRouter();


//医院卡片的跳转
const goDetail = () => {
    $router.push({ path: '/hospital/register', query: { hoscode: props.hospitalInfo.hoscode } })
}
</script>

<style lang="scss" setup scoped>
.content {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    // cursor: pointer;

    .left {
        width: 60%;
        color: #7f7f7f;

        .tip {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;

            .hospitalLevel,
            .time {
                display: flex;
                align-items: center;
            }
        }


    }

    .right {
        img {
            width: 50px;
            height: 50px;
        }
    }
}
</style>