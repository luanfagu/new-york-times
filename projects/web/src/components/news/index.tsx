import React from "react";
import NewsService from "../../services/news-service";
import { NewsType } from "../../types/news";
import NewsItem from "../news-item";
import NewsModal from "../news-modal";

import './news.scss';

export interface NewsProps {}

export interface NewsState {
  modalVisible: boolean;
  selectedNews: NewsType | undefined;
  news: NewsType[];
}

class News extends React.Component<NewsProps, NewsState> {
  constructor(props: NewsProps) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedNews: undefined,
      news: [],
    };
  }

  componentDidMount() {
    NewsService.list().then((news: NewsType[]) => {
      this.setState({ news })
    });
  }

  selectNews = (clickedNews: NewsType) => {
    this.setState({ selectedNews: clickedNews, modalVisible: true });
  };

  unselectNews = () => {
    this.setState({ selectedNews: undefined, modalVisible: false });
  };

  render() {
    const {news, modalVisible, selectedNews} = this.state;
    return (
      <div className="news-container">
        <div className="news-header">
          <span className="news-title">NEWS</span>
          <span className="news-subtitle">Tech and science related news from The New York Times</span>
        </div>
        <div className="row news-body">
          {news.map((news: NewsType, index) => {
            return (
              <div key={index} className="col-sm-12 col-md-6 col-lg-3">
                <NewsItem news={news} selectNews={this.selectNews}></NewsItem>
              </div>
            )
          })}        
        </div>
        <NewsModal
          visible={modalVisible}
          handleModalHide={this.unselectNews}
          selectedNews={selectedNews}
        ></NewsModal>
      </div>
    );
  }
}

export default News;