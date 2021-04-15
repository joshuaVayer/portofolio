// pages/portfolio/[slug].jsx

import Layout from '../../components/Layout';
import fetchFromCMS from '../../lib/service';
const domain = 'https://serene-ravine-87571.herokuapp.com';
const PortfolioItem = ({ portfolio }) => {
  portfolio.Gallery.map( (e) => console.log(domain + e.url))
  return (
    <Layout>
      <div className="project">
        <div className="project__wrapper">
          <div className="container-fluid">
            <div className="details row">
              <div className="col">
                <div className="project__title">
                  <img src="/img/linea52.png" alt="LineTitle" />
                  <h1>{portfolio.Headline}</h1>
                </div>
                <div className="project__content">
                  <p id="content">
                    {portfolio.Content}
                  </p>
                  <h2>Technologie used:</h2>
                  <div className="techUsed">
                    <img className="img-fluid" src="/img/tech.png" alt="Logo" />
                  </div>
                </div>
              </div>
              <div className="col-lg carousel">
              <div class="gallery">
                {portfolio.Gallery.map( (e) =>
                  <div>
                    <img className="img-fluid image" src={domain + e.url} alt=""/>
                  </div>
                )}
              </div>
              </div>
            </div>
          </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
      </div>
    </Layout>
  );
};
export async function getStaticPaths() {
  const portfolios = await fetchFromCMS('portfolios');
  return {
    paths: portfolios.map((portfolio) => ({
      params: {
        slug: portfolio.slug,
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const portfolio = await fetchFromCMS(`portfolios?slug=${params.slug}`);
  return {
    props: { portfolio: portfolio[0] },
    revalidate: 1,
  };
}
export default PortfolioItem;