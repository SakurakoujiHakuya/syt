<template>
    <div class="hospital">
        <div class="menu">
            <el-col>
                <el-menu :default-active="$route.path" class="el-menu-vertical-demo">



                    <el-menu-item index="/hospital/register" @click="changeActive('/hospital/register')">
                        <el-icon>
                            <Stamp />
                        </el-icon><span>预约挂号</span>
                    </el-menu-item>




                    <el-menu-item index="/hospital/detail" @click="changeActive('/hospital/detail')">
                        <el-icon>
                            <List />
                        </el-icon><span>医院详情</span>
                    </el-menu-item>



                    <el-menu-item index="/hospital/notice" @click="changeActive('/hospital/notice')">
                        <el-icon>
                            <BellFilled />
                        </el-icon><span>预约须知</span>
                    </el-menu-item>

                    <el-menu-item index="/hospital/stop" @click="changeActive('/hospital/stop')">
                        <el-icon>
                            <el-icon>
                                <Failed />
                            </el-icon>
                        </el-icon>
                        <span>停诊信息</span>
                    </el-menu-item>




                    <el-menu-item index="/hospital/search" @click="changeActive('/hospital/search')">
                        <el-icon>
                            <Search />
                        </el-icon>
                        <span>查询/取消</span>
                    </el-menu-item>


                </el-menu>
            </el-col>
        </div>
        <div class="content">
            <RouterView></RouterView>
        </div>
    </div>

</template>

<script setup lang="ts">
// import router from '@/router';
import { useRoute, useRouter } from 'vue-router';
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'


import { onMounted } from 'vue';
import useDetailStore from '@/store/modules/hospitalDetail';

//组件挂载完毕，通知pinia仓库发请求获取医院详情的数据，存储仓库当中
let detailStore = useDetailStore();
onMounted(() => {
    //获取医院详情
    detailStore.getHospitalDetail($route.query.hoscode as string);
    //获取科室数据
    detailStore.getHospitalDepartment($route.query.hoscode as string);
})
let $route = useRoute()
let $router = useRouter()
const changeActive = (path: string) => {

    $router.push({ path, query: { hoscode: $route.query.hoscode } })
}
</script>

<style scoped lang="scss">
.hospital {
    display: flex;
    margin-top: 40px;

    .menu {
        width: 20%;
        flex: 2;

        .mb-2 {
            margin-bottom: 20px;
        }
    }

    .content {
        flex: 8;
    }
}
</style>