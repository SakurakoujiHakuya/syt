//为什么对aixo进行二次封装
//1.统一处理请求异常
//2.统一处理请求loading
//3.统一处理请求结果
//4.统一处理请求参数
//5.统一处理请求url
//6.统一处理请求方式
//7.统一处理请求超时
//8.统一处理请求跨域
//9.统一处理请求拦截
//10.统一处理请求响应
//11.统一处理请求取消
//12.统一处理请求重试
//13.统一处理请求缓存
//14.统一处理请求重定向
//15.统一处理请求重写
//16.统一处理请求重置
//17.统一处理请求重载
//18.统一处理请求重发
//19.统一处理请求重连
//20.统一处理请求重试
//21.统一处理请求重复
import axios from "axios";
import useUserStore from "@/store/modules/user";
// import { config } from "process";
import { ElMessage } from "element-plus";



//利用axios.create创建一个axios实例：可以设置基础路劲，超时的时间设置
const request = axios.create({
    baseURL: '/api',
    timeout: 5000
});

//请求拦截器
request.interceptors.request.use((config) => {

    // token是公共参数，一些功能要用token
    const userStore = useUserStore();
    if (userStore.userInfo.token) {
        config.headers.token = userStore.userInfo.token;
        // console.log('token:', userStore.userInfo.token);
    }
    //config是请求拦截器回调注入的对象（配置对象），配置对象的身上最重要的事是headers属性
    //headers属性是一个对象，对象中存放的是请求头信息
    return config;
});

request.interceptors.response.use((response) => {
    //response是响应拦截器回调注入的对象（响应对象），响应对象的身上最重要的事是data属性
    //相应拦截器成功的回调一般会进行简化数据
    return response;
}, (error) => {
    let status = error.response.status;
    console.log(error);
    switch (status) {
        case 404:
            ElMessage({
                message: "请求资源不存在",
                type: "error"
            })
            break;
        case 500:
            ElMessage({
                message: "服务器错误",
                type: "error"
            })
            break;
        case 503:
            ElMessage({
                message: "服务器繁忙",
                type: "error"
            })
            break;
        default:
            ElMessage({
                message: "未知错误",
                type: "error"
            })
            break;
    }
    return Promise.reject(new Error(error.message));
});

export default request;