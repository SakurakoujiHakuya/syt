//统一管理首页模块接口
import request from "@/utils/request";
// import type { HospitalResponseData } from "./type";
//通过枚举管理首页模块的接口地址

enum API {
    //获取已有的医院的数据接口地址
    HOSPITAL_URL = '/hosp/hospital/',
    HOSPITALLEVEL_URL = '/cmn/dict/findByDictCode/',
    HOSPITALSEARCH_URL = '/hosp/hospital/findByHosname/'
}

//获取医院的数据
export const reqHospital = (page: number, limit: number, hostype?: string, districtCode?: string) => {
    let url = API.HOSPITAL_URL + page + '/' + limit + '?' + 'hostype=' + hostype + '&' + 'districtCode=' + districtCode;
    return request.get<any>(url);
}


//获取医院等级的数据
export const reqHospitalLevel = (dictCode: string) =>
    request.get<any>(API.HOSPITALLEVEL_URL + dictCode);

export const reqHospitalSearch = (hosname: string) =>
    request.get<any>(API.HOSPITALSEARCH_URL + hosname);