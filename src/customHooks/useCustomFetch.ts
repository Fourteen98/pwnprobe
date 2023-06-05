import { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";
import { CustomHttpRequestStatus, RequestStatusType } from "../types/customTypes";

const useCustomFetch = (
    asyncFunc: () => Promise<AxiosResponse<any, any>>,
    triggerOnLoad = true,
    onSuccess?: (data: any) => void
) => {
    const [status, setStatus] = useState<RequestStatusType>(
        CustomHttpRequestStatus.IDLE
    );
    const [trigger, setTrigger] = useState<boolean>(triggerOnLoad);
    const [error, setError] = useState<any>(null);
    const [data, setData] = useState<any>(null);

    const fetchHandler = useCallback(() => {
        setStatus(CustomHttpRequestStatus.PENDING);
        asyncFunc()
            .then((response) => {
                setData(response.data);
                onSuccess && onSuccess(response.data);
                setStatus(CustomHttpRequestStatus.FULFILLED);
            })
            .catch((error) => {
                setError(error);
                setStatus(CustomHttpRequestStatus.REJECTED);
            });
    }, [setData, setStatus, setError, asyncFunc]);

    useEffect(() => {
        trigger && fetchHandler();
        return () => setTrigger(false);
    }, [trigger]);

    return {
        loading: status === CustomHttpRequestStatus.PENDING,
        data,
        error,
        triggerFetch: () => setTrigger(true),
    };
};

export default useCustomFetch;
