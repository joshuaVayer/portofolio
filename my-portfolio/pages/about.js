// pages/index.js
import Layout from "../components/Layout";
export default function About() {
  return (
    <Layout>
      <div className="about">
        <div className="about__firstSection">
          <div className="about__firstSection-left">
            <div className="about__title">
              <img src="/img/linea52.png" alt="LineTitle" />
              <h1>About me</h1>
            </div>
            <div className="about-content">
              <p>
                We are in 2020, in the context that we all know. That's when I
                decide to make my passion my job. I then start a training in
                computer science, more precisely in web development. Beyond the
                technical part, this job brings together many aspects that I
                love: project management, the continual need to learn, problem
                solving, teamwork and much more... I also love to go deep into
                things and that's what the developer job brings me too, there is
                no limit in this work !
              </p>
              <p>
                Specialized in Javascript, I know many aspects of the language
                like DOM manipulation, AJAX, Callbacks, Objects manipulations
                and many elements brought by ES6. I also know very well other
                technologies like HTML, CSS (Sass), Bootstrap, Git and PHP. I'm
                currently looking for a first job as a developer or an
                internship to put my skills into practice. You can find below
                the aspects of the job I already master (in more details) as
                well as what I am looking to learn. Don't hesitate to have a
                look at my Github, where you can find a project for each skills
                I mention bellow.
              </p>
            </div>
            <a className="btn btn-secondary rounded-pill" href="https://github.com/joshuaVayer" target="_blank">
              <i class="bi bi-github"></i> My github page
            </a>
          </div>
          <div className="about__firstSection-right">
            <img className="img-fluid" src="/img/joshuafull.jpg" alt="Joshua" />
          </div>
        </div>
        <div className="about__secondSection">
          <div className="about__title">
            <img src="/img/linea52.png" alt="LineTitle" />
            <h1>Skills</h1>
          </div>
          <div className="skills row">
            <div className="card col-lg mr-2 border-0">
              <div className="card-body">
                <h4 className="card-title">What I know</h4>
                <img src="/img/linea5.png" alt="Line" />
                <ul className="dashed">
                  <li> Javascript</li>
                  <p>
                    As a Javascript developer i am comfotable in almost every
                    aspects of the language (ES6, POO, AJAX, Canva, Objects and
                    array manipulation).
                  </p>
                  <li> HTML</li>
                  <p>
                    Full knowledge of the language and best pratices. Fully able
                    to write HTML content and deploy wihtout assitance.
                  </p>
                  <li> CSS (Sass)</li>
                  <p>
                    Perfect knowledge of CSS and able to shape any site model in a
                    web page. I also master Sass.
                  </p>
                  <li> Bootstrap</li>
                  <p>
                    I fully master the bootstrap framework, the
                    grid, all dinamycs elements and personalizing elements to fit
                    my needs
                  </p>
                  <li> Git and github</li>
                  <p>
                    I know any commons features of Git and
                    Github
                  </p>
                  <li> PHP</li>
                  <p>
                    Basic knowledge of the language, capable to connect to a SQL
                    database and do CRUD manipulation on it.
                  </p>
                  <li> C#</li>
                  <p>
                    Basic knowledge of the language, I can do a basic program.
                  </p>
                  <li> Wordpress</li>
                  <p>
                    I can build a complete website using
                    elmentor
                  </p>
                </ul>
              </div>
            </div>
            <div className="card ml-2 col-lg border-0">
              <div className="card-body">
                <h4 className="card-title">What i will be learning</h4>
                <img src="/img/linea5.png" alt="Line" />
                <ul>
                  <li>Angular</li>
                  <li>React</li>
                  <li>Mongo DB</li>
                  <li>Python</li>
                  <li>VueJS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
