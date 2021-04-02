// pages/portfolio/[slug].jsx
import Layout from '../../components/Layout';
const PortfolioItem = () => {
  return (
    <Layout>
      <div className="project">
        <div className="project__wrapper">
          <div className="container-fluid">
            <div className="details row">
              <div className="col">
                <div className="project__title">
                  <img src="/img/linea52.png" alt="LineTitle" />
                  <h1>Sage Yoga</h1>
                </div>
                <div className="project__content">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem repudiandae nesciunt ut
                    reiciendis? Inventore delectus impedit, atque amet obcaecati neque nam laboriosam accusamus
                    eaque. Quod velit vitae dolores eaque corrupti, ipsa nostrum cumque repellat neque cum a,
                    sapiente hic pariatur quidem. Voluptatem beatae explicabo id vel blanditiis, asperiores unde
                    voluptas molestias ad nesciunt dolorem.
                  </p>
                  <h2>Technologie used:</h2>
                  <div className="techUsed">
                    <img className="img-fluid" src="/img/tech.png" alt="Logo" />
                  </div>
                </div>
              </div>
              <div className="col-lg carousel">
                <div className="container">
                  <div className="mySlides">
                    <div className="numbertext">1 / 6</div>
                    <img src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"  />
                  </div>

                  <div className="mySlides">
                    <div className="numbertext">2 / 6</div>
                    <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"  />
                  </div>

                  <div className="mySlides">
                    <div className="numbertext">3 / 6</div>
                    <img src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"  />
                  </div>

                  <div className="mySlides">
                    <div className="numbertext">4 / 6</div>
                    <img src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"  />
                  </div>

                  <div className="arrows">
                    <a className="prev" id="prev"><i class="bi bi-caret-left-fill"></i></a>
                    <a className="next" id="next"><i class="bi bi-caret-right-fill"></i></a>
                  </div>
                  
                  <div className="row images-row">
                    <div className="column">
                      <img className="demo cursor" src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                      alt="The Woods" />
                    </div>
                    <div className="column">
                      <img className="demo cursor" src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"  
                      alt="Cinque Terre" />
                    </div>
                    <div className="column">
                      <img className="demo cursor" src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"  alt="Mountains and fjords" />
                    </div>
                    <div className="column">
                      <img className="demo cursor" src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                      alt="Northern Lights" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
            
              <div className="details details-bottom">
                <div className="col">
                <div className="project__content">
                <h2>Description: </h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem repudiandae nesciunt ut
                    reiciendis? Inventore delectus impedit, atque amet obcaecati neque nam laboriosam accusamus
                    eaque. Quod velit vitae dolores eaque corrupti, ipsa nostrum cumque repellat neque cum a,
                    sapiente hic pariatur quidem. Voluptatem beatae explicabo id vel blanditiis, asperiores unde
                    voluptas molestias ad nesciunt dolorem. Veritatis ullam similique vel enim natus ratione
                    dignissimos ipsa nisi deserunt debitis aliquam laboriosam ea, non eveniet, beatae temporibus
                    harum incidunt. Vero id maxime quae beatae rem quis pariatur laudantium, alias, obcaecati
                    eaque ducimus. Facere, libero expedita. Id ad ullam perspiciatis perferendis officia aliquid
                    qui modi adipisci, repellat consequuntur cupiditate deleniti minus, maiores nam! Neque
                    expedita consectetur quas voluptas, vero provident voluptate sit, eos officia eaque sapiente
                    facilis fugit consequatur sunt! Quia nostrum a nobis exercitationem eius, quos, sapiente
                    temporibus possimus commodi veritatis nesciunt facere? Amet quis, officia atque libero
                    veniam enim aliquam sint in! Voluptatum?
                  </p>
                  </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default PortfolioItem;