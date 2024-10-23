<template>
    <div class="container">
        <div class="top">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">{{ workData.baseMap?.hosname }}</el-breadcrumb-item>
                <el-breadcrumb-item>
                    <a href="/">{{ workData.baseMap?.bigname }}</a>
                </el-breadcrumb-item>
                <el-breadcrumb-item>{{ workData.baseMap?.depname }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="date">
            <span>{{ workData.baseMap?.workDateString }}</span>
        </div>
        <div class="registerBox">
            <div class="registerItem"
                :class="{ active: item.status == -1 || item.availableNumber == -1, cur: item.workDate == workTime.value }"
                v-for="item in workData.bookingScheduleList" :key="item" @click="changeWorkDate(item.workDate)">
                <div class="top" :class="{ active: item.status == -1 || item.availableNumber == -1 }">{{
                    item.workDate
                    }} {{ item.dayOfWeek }} </div>
                <div class="bottom">
                    <div v-if="item.status == 1">即将放号</div>
                    <div v-if="item.status == -1">停止挂号</div>
                    <div v-if="item.status == 0 && item.availableNumber > 0">有号（{{ item.availableNumber }}）</div>
                    <div v-if="item.status == 0 && item.availableNumber == -1">约满了</div>
                </div>
            </div>
        </div>
        <div class="pagination"> <el-pagination v-model:current-page="pageNo" @current-change="currentChange"
                layout="prev, pager, next" :total="20" />
        </div>
        <div class="registerbottom">
            <!-- <div class="will">放号sxxx
            </div> -->
            <div class="morning">
                <div class="title">上午号源</div>
                <div class="doctorItem" v-for="item in morningArr" :key="item">
                    <div class="left">
                        <div class="doctorType">
                            <!-- 医师 -->
                            {{ item.title }}
                        </div>
                        <div class="work">
                            {{ item.skill }}
                        </div>
                    </div>
                    <div class="right">
                        <div class="money">￥{{ item.amount }}</div>
                        <el-button class="sumbit" @click="goTwo">{{ item.availableNumber }}</el-button>
                    </div>
                </div>
            </div>
            <div class="after">
                <div class="title">下午号源</div>
                <div class="doctorItem" v-for="item in afternoonArr" :key="item">
                    <div class="left">
                        <div class="doctorType">
                            <!-- 医师 -->
                            {{ item.title }}
                        </div>
                        <div class="work">
                            {{ item.skill }}
                        </div>
                    </div>
                    <div class="right">
                        <div class="money">￥{{ item.amount }}</div>
                        <el-button class="sumbit">{{ item.availableNumber }}</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, ref, computed } from 'vue';
import { reqHospitalWork, reqHospitalDoctor } from '@/api/hospital';
import { useRoute, useRouter } from 'vue-router';
const $router = useRouter();
const $route = useRoute();
let pageNo = ref<number>(1)
let limit = ref<number>(5)
// 存储医院科室挂号时间
let workTime = ref<string>('')
// 存储医院科室挂号数据
let workData = ref<any>({})
let docotrArr = ref<any>([])
const feachWorkData = async () => {
    let result = await reqHospitalWork(pageNo.value, limit.value, $route.query.hoscode as string, $route.query.depcode as string)
    if (result.data.code === 200) {
        workData.value = result.data.data
        workTime = workData.value.bookingScheduleList[0]
        getDoctorWordData()

    }

}
onMounted(() => {
    feachWorkData()
})

const changeWorkDate = (item: any) => {
    workTime.value = item
    getDoctorWordData()
}

const currentChange = (val: number) => {
    pageNo.value = val
    feachWorkData()

}

// 获取某一天医生排班数据
const getDoctorWordData = async () => {
    let result = await (await reqHospitalDoctor($route.query.hoscode as string, $route.query.depcode as string, workTime.value)).data
    if (result.code === 200)
        docotrArr.value = result.data

}

const morningArr = computed(() => {
    return docotrArr.value.filter((item: any) => item.workTime == 0)
})

const afternoonArr = computed(() => {
    return docotrArr.value.filter((item: any) => item.workTime == 1)
})

const goTwo = () => {
    $router.push({ path: '/hospital/rePartTwo' })
}
</script>

<style lang="scss" scoped>
.container {
    padding: 0 20px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    .registertop {
        width: 100%;
        // margin-top: 30px;
    }

    .date {
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 18px;
        margin-top: 30px;
        margin-bottom: 30px;
        // justify-content: flex-end;
    }

    .registerBox {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-bottom: 30px;

        .registerItem {
            width: 160px;
            height: 80px;
            // background-color: bisque;
            border-radius: 12px;
            overflow: hidden;
            /* 确保子元素不会超出父元素的边界 */
            cursor: pointer;
            border: 1px skyblue solid;
            transition: background-color 0.5s, transform 0.5s, box-shadow 0.5s;

            &.active {
                border: 1px black solid;
            }

            &.cur {
                background-color: bisque;
            }

            .top {
                width: 100%;
                height: 30px;
                background-color: skyblue;
                text-align: center;
                line-height: 30px;

                &.active {
                    background-color: #f0f0f0;
                }
            }

            .bottom {
                width: 100%;
                height: 50px;
                // background-color: #f0f0f0;
                text-align: center;
                line-height: 50px;
            }
        }

        .registerItem:hover {
            background-color: #f0f0f0;
            transform: scale(1.1);
            box-shadow: 0 0 3px black;
        }
    }



    .pagination {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .registerbottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        .title {
            font-size: 18px;
            margin-bottom: 20px;
            color: skyblue;
        }

        .will {
            display: flex;
            justify-content: center;
        }

        .doctorItem {
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;

            .left {
                display: flex;
                flex-direction: column;

                .doctorType {
                    font-size: 18px;
                    color: rgb(24, 116, 201);
                    margin-bottom: 10px;
                }

                .work {
                    font-size: 16px;
                    color: #666;
                }
            }

            .right {
                display: flex;
                align-items: center;
                /* 垂直居中对齐 */

                .money {
                    font-size: 14px;
                    color: rgb(24, 116, 201);
                    text-align: center;
                    /* 水平居中对齐 */
                    line-height: 1;
                    /* 确保行高为 1 */
                }

                .sumbit {
                    width: 45px;
                    margin-left: 30px;
                    text-align: center;
                    /* 水平居中对齐 */
                    line-height: 1;
                    padding: 0 45px;
                    /* 确保行高为 1 */
                }
            }
        }
    }
}
</style>