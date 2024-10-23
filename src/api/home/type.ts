//定义首页模块ts类型
export interface ResponseData {
    code: number;
    message: string;
    ok: boolean;
}

export interface Hospital {
    id: string;
    createTime: string;
    updateTime: string;
    isDeleted: number;
    param: {
        hostypeString: string;
        fullAddress: string;
    };
    hoscode: string;       // "1000_0"
    hosname: string;       // "北京人民医院"
    hostype: string;       // "1"
    provinceCode: string;  // "110000"
    cityCode: string;      // "110100"
    districtCode: string;  // "110102"
    address: string;       // "大望路"
    logoData: string;
    intro: boolean;
    route: string;
    status: number;
    BookingRule: {
        cycle: number;
        releaseTime: string;
        stopTime: string;
        quitDay: number;
        quitTime: string;
        rule: string[];
    };
}
//存储全部已有医院的数组
export type Content = Hospital[]

export interface HospitalResponseData extends ResponseData {
    data: {
        map(arg0: (item: any) => { value: any; }): unknown;
        content: Content;
        pageable: {
            sort: {
                sorted: boolean;
                unsorted: boolean;
                empty: boolean;
            };
            pageNumber: number;
            pageSize: number;
            offset: number;
            paged: boolean;
            unpaged: boolean;
        };
        totalPages: number;
        totalElements: number;
        last: boolean;
        number: number;
        size: number;
        sort: {
            sorted: boolean;
            unsorted: boolean;
            empty: boolean;
        };
        first: boolean;
        numberOfElements: number;
        empty: boolean;
    }
}

//存储医院等级
export interface HospitalLevel {
    createTime: string;
    dictCode: string;
    hasChildren: boolean;
    id: number;
    isDeleted: number;
    name: string;
    param: {};
    parentId: number;
    updateTime: string;
    value: string;
}

export type HospitalLevelArr = HospitalLevel[]
export interface HospitalLevelResponseData extends ResponseData {
    data: HospitalLevelArr
}