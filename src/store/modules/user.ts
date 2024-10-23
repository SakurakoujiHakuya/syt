//定义用户相关的仓库
import { reqCode, reqUserLogin } from "@/api/hospital";
import { defineStore } from "pinia";
const useUserStore = defineStore('user', {
    state() {
        return {
            visiable: false,//用于控制登录组件的dialog显示与隐藏
            code: '',//存储用户的验证码
            userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo') as string) : {} //存储用户的信息，如果本地有存储，则从本地拿，没有则为空
        }
    },
    actions: {
        //获取验证码的方法
        async getCode(phone: string) {
            //在想服务器携带手机号码，获取验证码
            //正常开发的时候,只需要发一个请求，后台就会将验证码推送到用户手机设备当中
            //当然咱们目前服务器不能向用户手机设备推送验证码(花钱)
            let result = (await reqCode(phone)).data;
            // console.log(result)
            if (result.code == 200) {
                this.code = result.data;
                return 'ok';
            } else {
                return Promise.reject(new Error(result.message));
            }

        },
        async userLogin(loginData: any) {
            let result = (await reqUserLogin(loginData)).data
            if (result.code === 200) {
                this.userInfo = result.data;
                localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
                return 'ok';
            }
            else {
                return Promise.reject(new Error(result.message));
            }

        },
        async userLogout() {
            this.userInfo = {};
            localStorage.removeItem('userInfo');
        }
    },
    getters: {}
})
export default useUserStore