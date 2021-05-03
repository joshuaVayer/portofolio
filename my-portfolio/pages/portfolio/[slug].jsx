// pages/portfolio/[slug].jsx

import Layout from '../../components/Layout';
import fetchFromCMS from '../../lib/service';
const PortfolioItem = ({ portfolio }) => {
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
                  <div className="links">
                    {checkProject(portfolio.Project)}
                    {checkStudy(portfolio.caseStudy)}
                  </div>
                  <h2>Technologie used:</h2>
                  <div className="techUsed">
                    <img className="img-fluid" src={portfolio.Tech.url} alt="Logo" />
                  </div>
                </div>
              </div>
              <div className="col-lg carousel">
                <div class="gallery">
                  {portfolio.Gallery.map((e) =>
                    <div>
                      <img className="img-fluid image" src={e.url} alt="" />
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

function checkProject(project){
  if(project != undefined){
    let block = <a className="btn btn-primary rounded-pill" href={project} target="_blank">
    <i class="bi bi-github"></i> See Project
    </a>
    return block;
  }
}
function checkStudy(caseStudy){
  if(caseStudy != undefined){
    let block = <a className="btn btn-secondary rounded-pill" href={caseStudy} target="_blank">
    Case Study
    </a>
    return block;
  }
}