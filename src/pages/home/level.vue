<template>
    <div class="container">
        <h1>医院</h1>
        <div class="level">
            <div class="content">
                <div class="left">等级：</div>
                <ul>
                    <li :class="{ active: levelActive === '' }" @click="changeLevel('')">全部</li>
                    <li v-for="item in levelArr" :key="item.value" :class="{ active: levelActive === item.value }"
                        @click="changeLevel(item.value)">{{ item.name }}</li>
                </ul>
            </div>
        </div>
        <div class="region">
            <div class="content">
                <div class="left">地区：</div>
                <ul>
                    <li :class="{ active: regionActive === '' }" @click="changeRegion('')">全部</li>
                    <li v-for="item in regionArr" :key="item.value" :class="{ active: regionActive === item.value }"
                        @click="changeRegion(item.value)">{{ item.name }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Level',
}
</script>


<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { reqHospitalLevel } from '@/api/home';
import type { HospitalLevelArr, HospitalLevelResponseData } from '@/api/home/type';
import { defineProps } from 'vue';


//控制医院等级高亮的响应式数据
let levelActive = ref<string>('')
let regionActive = ref<string>('')
let props = defineProps(['changeLevel', 'changeRegion'])

const changeLevel = (val: string) => {
    levelActive.value = val
    props.changeLevel(val)
}

const changeRegion = (val: string) => {
    regionActive.value = val
    props.changeRegion(val)

}


let levelArr = ref<HospitalLevelArr>([])
let regionArr = ref<HospitalLevelArr>([])
onMounted(() => {
    getHospitalLevel()
    getHospitalRegion()
})

const getHospitalLevel = async () => {
    let result: HospitalLevelResponseData = (await reqHospitalLevel('hostype')).data
    if (result.code === 200) {
        levelArr.value = result.data
    }
    // console.log(levelArr.value);
}

const getHospitalRegion = async () => {
    let result: HospitalLevelResponseData = (await reqHospitalLevel('beijin')).data
    if (result.code === 200) {
        regionArr.value = result.data
    }
    // console.log(regionArr.value);
}
</script>

<style lang="scss" scoped>
.container {
    color: gray;
    display: flex;
    flex-direction: column;

    h1 {
        margin-bottom: 10px;
    }

    .level,
    .region {
        display: flex;
        // align-items: center;
        /* 使内容垂直居中 */
        margin-top: 10px;
        /* 添加间距 */

        .content {
            display: flex;

            // align-items: center;

            /* 使内容垂直居中 */
            // flex-wrap: wrap;
            /* 允许内容换行 */
            .left {
                margin-right: 10px;
                white-space: nowrap;
                /* 确保内容在一行内显示 */
            }

            ul {
                display: flex;
                flex-wrap: wrap;

                /* 允许内容换行 */
                li {
                    margin-right: 10px;
                    margin-bottom: 10px;
                    cursor: pointer;

                    &.active {
                        color: #409eff;
                    }
                }

                &.active {
                    color: #409eff;
                }

                li:hover {
                    color: #409eff;
                }
            }
        }




    }
}
</style>