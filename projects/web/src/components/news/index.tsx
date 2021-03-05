import React, { useState } from "react";
import { NewsType } from "../../types/news";
import NewsItem from "../news-item";
import NewsModal from "../news-modal";

export interface NewsProps {}

export interface NewsState {
  activeNews: NewsType | undefined;
}

class News extends React.Component<NewsProps, NewsState> {
  constructor(props: NewsProps) {
    super(props);
    this.state = { activeNews: undefined };
  }

  render() {
    const fakeNews: NewsType = {
      abstract:
        "The social network had prohibited political ads on its site indefinitely after the November election. Such ads have been criticized for spreading misinformation.",
      section: "technology",
      multimedia: [
        {
          url:
            "https://static01.nyt.com/images/2021/03/04/business/03facebook-politics/merlin_179206905_31d2ccf6-5f26-4c5e-8cb0-16c522a5b336-superJumbo.jpg",
        },
      ],
      title: "Facebook Ends Ban on Political Advertising",
      url:
        "https://www.nytimes.com/2021/03/03/technology/facebook-ends-ban-on-political-advertising.html",
    };

    const activateNews = (clickedNews: NewsType) => {
        this.setState({ activeNews: clickedNews });
        console.log(!!this.state.activeNews)
    };

    const unselectNews = () => {
      this.setState({ activeNews: undefined });
    };

    return (
      <div>
        <NewsItem news={fakeNews} activateNews={activateNews}></NewsItem>
        <NewsModal
          visible={!!this.state.activeNews}
          handleModalHide={unselectNews}
          activeNews={this.state.activeNews}
        ></NewsModal>
      </div>
    );
  }
}

export default News;

// function News () {

//     const [activeNews, setActiveNews] = useState<NewsType>();

//     const fakeNews: NewsType = {
//         abstract: 'The social network had prohibited political ads on its site indefinitely after the November election. Such ads have been criticized for spreading misinformation.',
//         section: 'technology',
//         multimedia: [{
//             url: 'https://static01.nyt.com/images/2021/03/04/business/03facebook-politics/merlin_179206905_31d2ccf6-5f26-4c5e-8cb0-16c522a5b336-superJumbo.jpg'
//         }],
//         title: 'Facebook Ends Ban on Political Advertising',
//         url: 'https://www.nytimes.com/2021/03/03/technology/facebook-ends-ban-on-political-advertising.html'
//     };

//     const activateNews = (clickedNews: NewsType) => {
//         setActiveNews(clickedNews)
//     }

//     return (
//         <div>
//             <NewsItem news={fakeNews} activateNews={activateNews}></NewsItem>
//             <NewsModal visible={!!activateNews} handleModalHide={() => setActiveNews(undefined)} activeNews={activeNews}></NewsModal>
//         </div>
//     );
// }

// export default News;
