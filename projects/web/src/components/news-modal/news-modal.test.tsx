import { render, screen } from "@testing-library/react";
import NewsModal from ".";
import { NewsType } from "../../types/news";

describe('<NewsModal/>', () => {

    const fakeNews: NewsType = {
        abstract:
          "fake news description",
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
        render(<NewsModal selectedNews={fakeNews} visible={true} handleModalHide={() => {}}/>,)
        
        expect(screen.getByText('fake news title')).toBeInTheDocument();
        expect(screen.getByText('fake news description')).toBeInTheDocument();
        expect(screen.getByRole('img-modal')).toHaveAttribute('src', 'fakenewsimage.png');
        expect(screen.getByRole('btn')).toHaveAttribute('href', 'fakenewspage.com');
      });
});