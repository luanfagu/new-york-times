import React from 'react'
import { NewsType } from '../../types/news';

import './news-item.scss'
export interface NewsItemProps {
    news: NewsType,
    selectNews: Function
}
class NewsItem extends React.Component<NewsItemProps, {}> {
    render() { 
        const {selectNews, news} = this.props;
        return ( 
            <div onClick={() => selectNews(news)} className="card card-style" style={{width: '18rem'}}>
                <img src={news?.multimedia[0]?.url} className="card-img-top" role="img" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{news.title}</h5>
                </div>
            </div>
         );
    }
}
 
export default NewsItem;