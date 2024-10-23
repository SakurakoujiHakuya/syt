<template>
    <div class="container">
        <el-dialog v-model="userStore.visiable" title="用户登录">
            <!-- 对话框身体部分结构 -->
            <el-row>
                <!-- 左侧结构，输入框，微信登录 -->
                <el-col :span="12">
                    <div class="login" v-show="showWechat === false">
                        <el-form :model="loginParam" :rules="rules" ref="form">
                            <el-form-item prop="phone">
                                <el-input v-model="loginParam.phone" placeholder="请输入手机号码"
                                    :prefix-icon="User"></el-input>
                            </el-form-item>


                            <el-form-item prop="code">
                                <el-input v-model="loginParam.code" placeholder="请输入手机验证码"
                                    :prefix-icon="Lock"></el-input>
                            </el-form-item>


                            <el-form-item>
                                <el-button @click="getCode">获取验证码</el-button>
                            </el-form-item>
                        </el-form>
                        <div class="bottom">
                            <el-button type="primary" style="width:90%" :disabled="isPhone === false"
                                @click="login">用户登录</el-button>
                            <p>微信扫码登录</p>
                            <svg t="1729008229908" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="4316" width="50" height="50"
                                @click="showWechat = true">
                                <path
                                    d="M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308661 107.924012 15.308661 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262612l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z"
                                    fill="#5D5D5D" p-id="4317"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="weChat" v-show="showWechat === true">
                        <h1>微信扫码页面</h1>
                        <el-button type="primary" @click="showWechat = false">返回</el-button>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="right">
                        <div class="top">
                            <div class="item">
                                <img src="../assets/images/code_login_wechat.png" alt="">
                                <svg t="1729008229908" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="4316" width="30" height="30">
                                    <path
                                        d="M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308661 107.924012 15.308661 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262612l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z"
                                        fill="#5D5D5D" p-id="4317"></path>
                                </svg>
                                <p>微信扫一扫关注</p>
                                <p>快速预约挂号</p>
                            </div>
                            <div class="item">

                                <img src="../assets/images/code_login_wechat.png" alt="">
                                <svg t="1729008879717" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="5361" width="30" height="30">
                                    <path
                                        d="M820.409449 797.228346q0 25.19685-10.07874 46.866142t-27.716535 38.299213-41.322835 26.204724-50.897638 9.574803l-357.795276 0q-27.212598 0-50.897638-9.574803t-41.322835-26.204724-27.716535-38.299213-10.07874-46.866142l0-675.275591q0-25.19685 10.07874-47.370079t27.716535-38.80315 41.322835-26.204724 50.897638-9.574803l357.795276 0q27.212598 0 50.897638 9.574803t41.322835 26.204724 27.716535 38.80315 10.07874 47.370079l0 675.275591zM738.771654 170.330709l-455.559055 0 0 577.511811 455.559055 0 0-577.511811zM510.992126 776.062992q-21.165354 0-36.787402 15.11811t-15.622047 37.291339q0 21.165354 15.622047 36.787402t36.787402 15.622047q22.173228 0 37.291339-15.622047t15.11811-36.787402q0-22.173228-15.11811-37.291339t-37.291339-15.11811zM591.622047 84.661417q0-8.062992-5.03937-12.598425t-11.086614-4.535433l-128 0q-5.03937 0-10.582677 4.535433t-5.543307 12.598425 5.03937 12.598425 11.086614 4.535433l128 0q6.047244 0 11.086614-4.535433t5.03937-12.598425z"
                                        p-id="5362"></path>
                                </svg>
                                <p>扫一扫下载</p>
                                <p>预约挂号app</p>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-dialog>
    </div>
</template>

<script setup lang='ts'>
import { ref, watch, reactive } from 'vue';
//获取user仓库的数据visiable
import useUserStore from '@/store/modules/user';
let userStore = useUserStore();
import { Lock, Phone, User } from '@element-plus/icons-vue'
let showWechat = ref<boolean>(false)

import { countdownEmits, ElMessage } from 'element-plus';

let form = ref<any>()

let loginParam = reactive({
    phone: "", //收集手机号码
    code: "", //收集验证码
});
const isPhone = ref(false);

// 检测手机号是否正确的正则表达式
const phoneRegex = /^1[3-9]\d{9}$/;
watch(() => loginParam.phone, (newVal: string) => {
    isPhone.value = phoneRegex.test(newVal);
});

const validatePhone = (rule: any, value: string, callback: any) => {
    if (!value) {
        callback(new Error('请输入手机号码'));
    } else if (!phoneRegex.test(value)) {
        callback(new Error('手机号码格式不正确'));
    } else {
        callback();
    }
};
const validateCode = (rule: any, value: string, callback: any) => {
    if (!value) {
        callback(new Error('请输入验证码'));
    } else if (value.length !== 6) {
        callback(new Error('验证码格式不正确'));
    } else {
        callback();
    }
};

//自定义表单校验
const rules = {
    //手机号码校验规则
    //required:代表当前字段务必进行校验
    //message:代表的校验错误的提示信息
    //trigger:代表表单校验触发的时机  change:文本发生变化的时候进行校验  blur:失却焦点的时候触发校验
    //min:代表的是最小位数
    //max:代表的是最大的位置
    // phone: [{ required: true, message: "手机号码务必11位", trigger: "change", min: 11 }],
    // code: [{ required: true, message: "验证码务必6位", trigger: "blur", min: 6 }],

    phone: [{ trigger: "change", validator: validatePhone }],
    code: [{ trigger: "change", validator: validateCode }],
};

//获取验证码
const getCode = async () => {
    try {
        await userStore.getCode(loginParam.phone);
        ElMessage.success('验证码发送成功');
        loginParam.code = userStore.code
    } catch (error) {
        ElMessage.error('验证码发送失败');
    }

}



const login = async () => {
    // 下面这行很重要，检验表单是否通过，不通过后面的代码不会执行
    await form.value.validate()
    try {
        await userStore.userLogin(loginParam);
        ElMessage.success('登录成功');
        userStore.visiable = false; // 关闭对话框
        console.log(userStore.userInfo.name);
    } catch (error) {
        ElMessage.error('登录失败');
    }
}
</script>

<style lang="scss" scoped>
.container {

    :deep(.el-dialog__body) {
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }

    .login {
        padding: 20px;
        border: 1px solid #ccc;

        .bottom {
            display: flex;
            flex-direction: column;
            // justify-content: center;
            align-items: center;

            p {
                margin: 10px 0;
            }

            svg {
                cursor: pointer;
            }
        }
    }

    .right {
        .top {
            padding: 20px 0;
            display: flex;
            justify-content: space-around;

            .item {
                display: flex;
                flex-direction: column;
                align-items: center;
                // justify-content: center;

                img {
                    width: 150px;
                    height: 150px;
                    margin-bottom: 20px;
                }

                p {
                    margin: 6px 0;
                }
            }
        }
    }
}
</style>