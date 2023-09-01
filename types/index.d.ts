declare const speedfix: {
    checkType: (value: any) => string;
    downloadBlob: (data: BlobPart, fileName: string, type: string) => void;
    getCookie: (key: string) => string;
    getStorage: (key: string, type?: string | undefined) => any;
    isArray: (value: any) => boolean;
    isBoolean: (value: any) => boolean;
    isChinese: (val: string) => boolean;
    isEmail: (val: string) => boolean;
    isEmptyList: (data: any[]) => boolean;
    isEmptyObject: (data: object) => boolean;
    isEmptyValue: (value: any) => boolean;
    isFunction: (value: any) => boolean;
    isNull: (value: any) => boolean;
    isNumber: (value: any) => boolean;
    isObject: (value: any) => boolean;
    isPhoneNum: (val: string | number) => boolean;
    isString: (value: any) => boolean;
    isUndefined: (value: any) => boolean;
    listDeduplicate: (target: any[], key?: string | number | undefined, type?: string | undefined) => any[];
    listGroup: (target: any[], key: string | number) => any[] | Error;
    listInsert: (target: any[], data: any, filter?: number | Object | undefined, dir?: string | undefined) => any[] | null;
    listRemove: (target: any[], filter?: any, count?: number | undefined) => Error | [] | null;
    objectCopy: (target: object, type?: string | undefined) => any;
    objectMerge: (target: any[], type?: string | undefined) => {};
    objectToQuery: (target: {
        [s: string]: unknown;
    } | ArrayLike<unknown>, limit?: string) => string | Error;
    queryToObject: (target: string, limit?: string) => {
        [p: string]: string;
    };
    setCookie: (key: any, value: string | number | boolean, options?: {}) => undefined;
    setStorage: (key: string, value: any, options?: {
        expires?: number | undefined;
        mode?: string | undefined;
    }) => void;
    sort: (target: any[], filter?: string | undefined, key?: string | number | undefined) => any[];
    toArray: (target: any) => any[];
    toDate: (target: any, format?: string | undefined) => any;
    toThousands: (target: string | number) => string;
};
export default speedfix;
