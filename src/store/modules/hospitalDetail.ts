import { defineStore } from "pinia";
import { reqHospitalDetail, reqHospitalDepartment } from "@/api/hospital";
import { Department } from "@/api/hospital/type";
const useDettailStore = defineStore('detail', {
    state() {
        return {
            hospitalInfo: {} as any,
            departmentArr: [] as Department[]
        }
    },
    actions: {
        async getHospitalDetail(hoscode: string) {
            let result = (await reqHospitalDetail(hoscode)).data
            if (result.code === 200)
                this.hospitalInfo = result.data
        },
        async getHospitalDepartment(hoscode: string) {
            let result = (await reqHospitalDepartment(hoscode)).data
            if (result.code === 200)
                this.departmentArr = result.data
        }
    }
})
export default useDettailStore