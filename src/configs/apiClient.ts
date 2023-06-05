import axios from "axios";
import {notification} from "antd";
import { CustomHttpRequestStatus, RequestStatusType } from "../types/customTypes";
import * as constants from "../utils/constants.ts";


export default class {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    success: any;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    error: any;

    axiosInstance = axios.create({
        baseURL: constants.BASE_URL,
    });

    requestStatus: RequestStatusType = CustomHttpRequestStatus.IDLE;

    constructor(base_url?: string) {
        base_url && (this.axiosInstance.defaults.baseURL = base_url);
        this.axiosInstance.interceptors.response.use(
            this.successInterceptor,
            this.rejectedInterceptor,
        );
    }

    successInterceptor = (response: any ) => {
        this.requestStatus = CustomHttpRequestStatus.FULFILLED;
        this.success = response.data.data;
        return response;
    };

    rejectedInterceptor = (error: { response: any }) => {
        this.requestStatus = CustomHttpRequestStatus.REJECTED;
        const response = error?.response;
        const status = response?.status;
        if (response) {
            if (status === 400) {
                const message = response?.data?.message || response?.data?.detail || 'Something unexpected occuried, try again';
                notification.error({
                    message: "",
                    description: message,
                });
            }
        }
        this.success = null;
        this.error = status;
        return Promise.reject({ status });
    };

    // useApi = () => {
    //     this.axiosInstance.defaults.headers.common["hibp-api-key"] = constants.API_KEY;
    //     // with credentials to true
    //     this.axiosInstance.defaults.withCredentials = true;
    //     this.axiosInstance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    //     console.log(this.axiosInstance.defaults.headers.common);
    //     return this;
    // };

    getInstance = (base_url?: string) => {
        base_url && (this.axiosInstance.defaults.baseURL = base_url);
        return this.axiosInstance;
    };

    get = (params: string) => this.axiosInstance.get(params);
}
