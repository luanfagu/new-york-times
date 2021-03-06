import { NewsType } from "../types/news";
import HttpClient from "./http-client";

export default class NewsService{
    public static list(){
        return HttpClient.get<NewsType[]>('/news')
    }
}