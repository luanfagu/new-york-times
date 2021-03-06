import { render, screen } from "@testing-library/react";
import NewsItem from ".";
import { NewsType } from "../../types/news";

describe('<NewsItem/>', () => {

    const fakeNews: NewsType = {
        abstract:
          "fake news description",
        section: "technology",
        multimedia: [
          {
            url:
              "fakenewsimage.png",
          },
        ],
        title: "fake news title",
        url:
          "fakenewspage.com",
      };

      it('renders the news correctly', async () => {
        render(<NewsItem news={fakeNews} selectNews={() => {}}/>,)
        
        expect(screen.getByText('fake news title')).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute('src', 'fakenewsimage.png');
      });
});