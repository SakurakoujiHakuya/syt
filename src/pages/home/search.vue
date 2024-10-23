<template>
    <div class="content">
        <el-autocomplete :trigger-on-focus="false" clearable placeholder="请输入医院名称" v-model="hospitalName"
            :fetch-suggestions="fetchData" @select="goDetail" />
        <el-button :icon="Search" type="primary" />
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';
import { reqHospitalSearch } from '@/api/home';
import type { HospitalResponseData } from '@/api/home/type';
import { useRouter } from 'vue-router';

let $router = useRouter();

const hospitalName = ref<string>('');
//顶部组件的回调
const fetchData = async (keyword: string, cb: any) => {
    let result: HospitalResponseData = (await reqHospitalSearch(keyword)).data;
    //整理数据形式

    let showData = result.data.map(item => {
        return {
            value: item.hosname,
            hoscode: item.hoscode
        }
    })
    // console.log(showData)
    cb(showData)
}

const goDetail = (item: any) => {
    $router.push({ path: '/hospital/register', query: { hoscode: item.hoscode } })
}
</script>

<style scoped lang="scss">
.content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 50px 0;
}

::v-deep .el-autocomplete {
    width: 600px; // 设置输入框宽度为300px
}
</style>