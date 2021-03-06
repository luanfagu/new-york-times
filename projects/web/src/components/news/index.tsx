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
    return (
      <div>
        <div className="row">
          {this.state.news.map((news: NewsType, index) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-3">
                <NewsItem key={index} news={news} selectNews={this.selectNews}></NewsItem>
              </div>
            )
          })}        
        </div>
        <NewsModal
          visible={this.state.modalVisible}
          handleModalHide={this.unselectNews}
          selectedNews={this.state.selectedNews}
        ></NewsModal>
      </div>
    );
  }
}

export default News;