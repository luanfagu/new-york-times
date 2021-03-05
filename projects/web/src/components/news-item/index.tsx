import React from 'react'
import { NewsType } from '../../types/news';

import './news-item.scss'

export interface NewsItemProps {
    news: NewsType,
    activateNews: Function
}
  
class NewsItem extends React.Component<NewsItemProps, {}> {
    constructor(props: NewsItemProps) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( 
            <div onClick={() => this.props.activateNews(this.props.news)} className="card card-style" style={{width: '18rem'}}>
                <img src={this.props.news?.multimedia[0]?.url} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.news.title}</h5>
                </div>
            </div>
         );
    }
}
 
export default NewsItem;