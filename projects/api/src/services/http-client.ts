import axios from 'axios';

const _baseUrl = process.env.NYT_API_BASE_URL;
const _ApiKey = process.env.NYT_API_KEY;

export default class HttpClient {
    private static axios(){
        const params = new URLSearchParams([['api-key', _ApiKey ?? '']]);
        return axios.create({baseURL: _baseUrl, params});
    }

    public static async get<T>(url: string){
        return (await this.axios().get<T>(url)).data
    }
}