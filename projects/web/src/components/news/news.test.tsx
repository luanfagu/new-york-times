import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import News from ".";
import { NewsType } from "../../types/news";

const axiosMock = new MockAdapter(axios);

describe('<News/>', () => {

    const fakeNews: NewsType[] = [{
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
      }, {
        abstract:
          "fake news description 2",
        multimedia: [
          {
            url:
              "fakenewsimage2.png",
          },
        ],
        title: "fake news title 2",
        url:
          "fakenewspage2.com",
      }];

      it('renders the news correctly', async () => {
        render(<News/>,)
        
        axiosMock.onGet('/news').reply(200, fakeNews);
        
        expect(await screen.findByText('fake news title')).toBeInTheDocument();
        expect(await screen.findByText('fake news title 2')).toBeInTheDocument();
      });
});