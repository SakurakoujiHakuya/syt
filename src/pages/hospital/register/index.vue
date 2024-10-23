<template>
    <div class="register">
        <div class="top">
            <div class="title">{{ hospitalStore.hospitalInfo?.hospital?.hosname }}</div>
            <div class="level">
                <el-icon>
                    <Medal />
                </el-icon>
                <span>{{ hospitalStore.hospitalInfo?.hospital?.param.hostypeString }}</span>
            </div>
        </div>
        <div class="foot">
            <div class="logo">
                <img :src="`data:image/jpeg;base64,` + hospitalStore.hospitalInfo?.hospital?.logoData" alt="">
            </div>
        </div>
        <div class="department">
            <div class="left">
                <ul>
                    <li v-for="(department, index) in hospitalStore.departmentArr" :key="department.depcode"
                        :class="{ active: index === currentIndex }" @click="changeActive(index)">{{
                            department.depname }}
                    </li>
                </ul>
            </div>
            <div class="right">
                <div class="showDepartment" v-for="(department, index) in hospitalStore.departmentArr"
                    :key="department.depcode">
                    <h1 class="cur">{{ department.depname }}</h1>
                    <ul>
                        <li v-for="item in department.children" :key="item.depcode" @click="showlogin(item)">{{
                            item.depname
                        }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { useRouter, useRoute } from 'vue-router';
const $router = useRouter();
const $route = useRoute();
// 引入医院详情仓库的数据
import useDettailStore from '@/store/modules/hospitalDetail';
let hospitalStore = useDettailStore();
import { ref } from 'vue';
//控制科室高亮的响应式数据
let currentIndex = ref<number>(0)
const changeActive = (index: number) => {
    currentIndex.value = index
    //点击导航获取右侧科室h1标题
    let allH1 = document.querySelectorAll('.cur');
    //滚动到对应科室的位置
    allH1[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

import useUserStore from '@/store/modules/user';
let userStore = useUserStore();

const login = () => {
    userStore.visiable = true;
}

const showlogin = (item: any) => {
    $router.push({ path: '/hospital/rePartOne', query: { hoscode: $route.query.hoscode, depcode: item.depcode } })
}
</script>

<style lang="scss" scoped>
.register {
    display: flex;
    flex-direction: column;

    .top {
        display: flex;
    }

    .department {
        width: 100%;
        height: 500px;
        display: flex;
        margin-top: 20px;

        .left {
            width: 80px;
            height: 100%;

            ul {
                width: 100%;
                height: 100%;
                background-color: rgb(248, 248, 248);
                display: flex;
                flex-direction: column;

                li {
                    flex: 1;
                    text-align: center;
                    color: #7f7f7f;
                    font-size: 14px;
                    line-height: 30px;
                    cursor: pointer;

                    /* 添加鼠标指针样式 */
                    &.active {
                        border-left: 1px solid red;
                        color: red;
                        background-color: white;
                    }
                }


            }
        }

        .right {
            flex: 1;
            margin-left: 20px;
            height: 100%;
            overflow: auto;

            &::-webkit-scrollbar {
                display: none;
            }

            h1 {
                background-color: rgb(248, 248, 248);
                color: #7f7f7f;
            }

            ul {
                display: flex;
                flex-wrap: wrap;

                li {
                    width: 33%;
                    color: #7f7f7f;
                    line-height: 30px;
                    cursor: pointer;
                }

                li:hover {
                    color: red;
                }
            }
        }
    }
}
</style>