// pages/portfolio/[slug].jsx
import Layout from '../../components/Layout';
const PortfolioItem = () => {
  return (
    <Layout>
      <div className="row">
        <div className="portfolio-image text-center mb-4">
          <div className="col-md-12">
            <img src="https://via.placeholder.com/1000x500" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="portfolio-content">
          <div className="col-md-12">
            <div className="portfolio-headline text-center m-2">
              <h1>Project</h1>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
              et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
              quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem i
              psum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
              modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
              enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
              reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default PortfolioItem;