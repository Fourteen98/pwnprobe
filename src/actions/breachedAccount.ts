import ApiClient from "../configs/apiClient";
import * as constants from "../utils/constants";

export default class extends ApiClient {
    public static fetchBreachedAccounts = async (payload: string) => {
        const api = new ApiClient(constants.BASE_URL);
        return api.get( `${constants.BREACHED_ACCOUNTS}${payload}/`);
    }
}

