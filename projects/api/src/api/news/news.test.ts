import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import request from 'supertest';
import { server } from '../../server';


const axiosInstance = axios.create({
  baseURL: process.env.NYT_API_BASE_URL,
  params: {'api-key': process.env.NYT_API_KEY}
});

const axiosMock = new MockAdapter(axiosInstance)

describe('news endpoint', () => {
    const news = [{
        "section": "health",
        "subsection": "",
        "title": "The Virus Spread Where Restaurants Reopened or Mask Mandates Were Absent",
        "abstract": "C.D.C. researchers found that coronavirus infections and death rates rose in U.S. counties permitting in-person dining or not requiring masks.",
        "url": "https://www.nytimes.com/2021/03/05/health/coronavirus-restaurant-dining-masks.html",
        "uri": "nyt://article/2e6bfed8-b003-531d-a992-2f5154ac56cc",
        "byline": "By Roni Caryn Rabin",
        "item_type": "Article",
        "updated_date": new Date("2021-03-06T06:03:36-05:00"),
        "created_date": new Date("2021-03-06T06:03:36-05:00"),
        "published_date": new Date("2021-03-06T06:03:36-05:00"),
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "your-feed-science",
          "Coronavirus Risks and Safety Concerns",
          "Workplace Hazards and Violations",
          "Coronavirus (2019-nCoV)",
          "Deaths (Fatalities)",
          "Restaurants",
          "Vaccination and Immunization",
          "Coronavirus Reopenings",
          "Hygiene and Cleanliness",
          "Heating, Ventilation and Cooling (HVAC)",
          "Research"
        ],
        "org_facet": [
          "Centers for Disease Control and Prevention"
        ],
        "per_facet": [
          "Biden, Joseph R Jr"
        ],
        "geo_facet": [
          "Connecticut",
          "New York City",
          "United States"
        ],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2021/03/05/science/05VIRUS-MASKS-RESTAURANTS1/merlin_181425342_21d80306-59a2-45fd-91f4-f75189016f5d-superJumbo.jpg",
            "format": "superJumbo",
            "height": 1365,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "“You have decreases in cases and deaths when you wear masks, and you have increases in cases and deaths when you have in-person restaurant dining,” Dr. Rochelle Walensky, the C.D.C. director, said Friday.",
            "copyright": "Ringo H.W. Chiu/Associated Press"
          }
        ],
        "short_url": "https://nyti.ms/3qmO1N0"
      },
      {
        "section": "well",
        "subsection": "",
        "title": "L.G.B.T.Q. People Face Increased Risks From Covid, but Many Don’t Want the Vaccine",
        "abstract": "Evidence suggests that some sexual and gender minorities — especially people of color — are hesitant to get vaccinated due to mistrust of the medical establishment.",
        "url": "https://www.nytimes.com/2021/03/05/well/lgbtq-covid-19-vaccine.html",
        "uri": "nyt://article/cd19617e-449f-5e6d-ac21-bc20133e4fc5",
        "byline": "By Christina Caron",
        "item_type": "Article",
        "updated_date": new Date("2021-03-06T06:03:36-05:00"),
        "created_date": new Date("2021-03-06T06:03:36-05:00"),
        "published_date": new Date("2021-03-06T06:03:36-05:00"),
        "material_type_facet": "",
        "kicker": "",
        "des_facet": [
          "Black People",
          "Minorities",
          "Coronavirus (2019-nCoV)",
          "Vaccination and Immunization",
          "Homosexuality and Bisexuality",
          "Transgender and Transsexuals"
        ],
        "org_facet": [],
        "per_facet": [],
        "geo_facet": [],
        "multimedia": [
          {
            "url": "https://static01.nyt.com/images/2021/03/02/well/00well-lgbtq/00well-lgbtq-superJumbo-v2.jpg",
            "format": "superJumbo",
            "height": 1366,
            "width": 2048,
            "type": "image",
            "subtype": "photo",
            "caption": "",
            "copyright": "Derek Abella"
          }
        ],
        "short_url": "https://nyti.ms/30eGkOz"
      }];

  it('should return the correct news', async () => {
    axiosMock.onGet(`/technology.json`).reply(200, { results: [news[0]] })
    axiosMock.onGet(`/science.json`).reply(200, { results: [news[1]] })

    const res = await request(server).get('/news')
    expect(res.body).toMatchObject({ news })
  })
})