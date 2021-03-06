import axios from 'axios';

const _baseUrl = process.env.REACT_APP_API_URL;

export default class HttpClient {
    private static axios(){
        return axios.create({baseURL: _baseUrl});
    }

    public static async get<T>(url: string){
        return (await this.axios().get<T>(url)).data
    }
}