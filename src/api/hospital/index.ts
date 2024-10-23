import request from "@/utils/request";
// import type { HospitalDetail } from "./type";
enum API {
    HOSPITALDETAIL_URL = '/hosp/hospital/',
    //获取某一个医院科室数据
    DEPARTMENT_URL = '/hosp/hospital/department/',
    //获取验证码接口
    GETUSERCODE_URL = '/sms/send/',
    //获取用户信息接口
    USERLOGIN_URL = '/user/login/',
    //获取医院科室挂号服务
    HOSPITALWORK_URL = '/hosp/hospital/auth/getBookingScheduleRule/',
    // 获取医院某一个科室某一天医院的排班数据
    HOSPITALDOCTOR_URL = '/hosp/hospital/auth/findScheduleList/',

}

//获取医院详情接口

export const reqHospitalDetail = (hoscode: string) => request.get<any>(API.HOSPITALDETAIL_URL + hoscode);

export const reqHospitalDepartment = (hoscode: string) => request.get<any>(API.DEPARTMENT_URL + hoscode);
export const reqCode = (phone: string) => request.get<any, any>(API.GETUSERCODE_URL + phone);

export const reqUserLogin = (data: any) => request.post<any>(API.USERLOGIN_URL, data);

//获取预约挂号数据
export const reqHospitalWork = (page: number, limit: number, hoscode: string, depcode: string) => request.get<any>(API.HOSPITALWORK_URL + `${page}/${limit}/${hoscode}/${depcode}`);

//获取医院某一个科室某一天医院的排班数据
export const reqHospitalDoctor = (hoscode: string, depcode: string, workDate: string) => request.get<any>(API.HOSPITALDOCTOR_URL + `${hoscode}/${depcode}/${workDate}`);