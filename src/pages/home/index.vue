<template>
    <Carousel />
    <Search />
    <el-row :gutter="20">
        <el-col :span="20">
            <level :changeLevel="changeLevel" :changeRegion="changeregion" />
            <div class="hospital">
                <Card class="item" v-for="(item, index) in hasHospitalArr" :key="index" :hospitalInfo="item" />
            </div>
            <div class="demo-pagination-block">
                <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize4"
                    :page-sizes="[10, 20, 30, 40]" :background="true" layout="prev,pager,next,jumper,->,sizes,total"
                    :total="total" @current-change="currentChange" @size-change="sizeChange" />
            </div>

        </el-col>
        <el-col :span="4">
            <Tip />
        </el-col>
    </el-row>
</template>


<script setup lang="ts">
import Carousel from './carousel.vue'
import Search from './search.vue'
import Level from './level.vue';
import Card from './card.vue';
import Tip from './tip.vue';
import { onMounted, ref } from 'vue';
import { reqHospital } from '@/api/home';
import type { Content, HospitalResponseData } from '@/api/home/type';

let pageNo = ref<number>(1);
let pageSize4 = ref<number>(10);
let hasHospitalArr = ref<Content>([])
let total = ref<number>(0)
let hostype = ref<string>(''); // 新增的响应式变量
let districtCode = ref<string>(''); // 新增的响应式变量

onMounted(() => {
    getHospitalInfo()
})
const getHospitalInfo = async () => {
    let result: any
    // 获取医院的数据，默认一页，一页十个数据
    result = await reqHospital(pageNo.value, pageSize4.value, hostype.value, districtCode.value);
    let RES: HospitalResponseData = result.data;
    if (RES.code === 200) {
        hasHospitalArr.value = RES.data.content;
        total.value = RES.data.totalElements;
    }
}


//分页器页码发生变化
const currentChange = (val: number) => {
    pageNo.value = val
    getHospitalInfo()
}

//分页器大小发生变化
const sizeChange = (val: number) => {
    pageSize4.value = val
    getHospitalInfo()
}

const changeLevel = (val: string) => {
    hostype.value = val
    getHospitalInfo()
}
const changeregion = (val: string) => {
    districtCode.value = val
    getHospitalInfo()
}

</script>

<style scoped lang="scss">
.hospital {
    display: flex;
    flex-wrap: wrap;

    .item {
        width: 48%;
        margin: 0.5% 1% 0.5% 0;
        cursor: pointer;
    }
}
</style>