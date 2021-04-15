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
                In 2020, in the difficult context of the Pandemia, I seized the opportunity to train as a Web Developer. I had decided to make my passion, my job! I then started to train in Computer Science, more precisely in Web Development.<br/>
                Beyond the technical part, this job brings together many aspects that I find very exciting, such as Project Management ,Team Work, Exciting Technology and Problem Solving. I also enjoy the ongoing opportunity to study so that I keep updating my skills; there is no limit to this work !                
              </p>
              <p className="mb-5">
                I specialize in Javascript, as such I am able to master specific tools like DOM, AJAX, Callbacks, Objects and many other features inherent to ES6. I am also fluent with technologies like HTML, CSS (Sass), Bootstrap, Git and PHP.<br/>
                I would be very happy to meet you in order to discuss further my skills as indeed, I would be very keen to work as a Developer within your organization. Please find below details of the technical knowledge that I have already acquired as well as the cursus of the different topics that I am currently studying.<br/>
                Please feel free to check my Github out, where various projects of mine are hosted.
              </p>
            </div>
            <div className="about__secondSection">
              <div className="about__title">
                <img src="/img/linea52.png" alt="LineTitle" />
                <h1>Skills</h1>
              </div>
              <div className="skills row">
                <div className="card mr-2 col-md border-0">
                  <div className="card-body">
                    <h4 className="card-title">Acquired Skills</h4>
                    <img src="/img/linea5.png" alt="Line" />
                    <ul className="mt-2">
                      <li><img src="https://img.icons8.com/color/48/000000/javascript.png" /> Javascript</li>
                      <div className="progress" style={{ width: "70%", height: "3px" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "85%", backgroundColor: "#FFD600" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <li><img src="https://img.icons8.com/color/48/000000/html-5--v1.png" /> HTML</li>
                      <div className="progress" style={{ width: "70%", height: "3px" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "100%", backgroundColor: "#FF6D00" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <li><img src="https://img.icons8.com/color/48/000000/css3.png" /> CSS (Sass)</li>
                      <div className="progress" style={{ width: "70%", height: "3px" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "70%", backgroundColor: "#0277BD" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <li><img src="https://img.icons8.com/color/48/000000/bootstrap.png" /> Bootstrap</li>
                      <div className="progress" style={{ width: "70%", height: "3px" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "90%", backgroundColor: "#673AB7" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <li><img src="https://img.icons8.com/color/48/000000/git.png" /> Git and github</li>
                      <div className="progress" style={{ width: "70%", height: "3px" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "70%", backgroundColor: "#F4511E" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <li><img src="https://img.icons8.com/officel/48/000000/php-logo.png" /> PHP</li>
                      <div className="progress" style={{ width: "70%", height: "3px" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "50%", backgroundColor: "#8B75A1" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <li><img src="https://img.icons8.com/color/48/000000/wordpress.png" /> Wordpress</li>
                      <div className="progress" style={{ width: "70%", height: "3px" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "60%", backgroundColor: "#01579B" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <li><img src="https://img.icons8.com/color/48/000000/c-programming.png" /> C#</li>
                      <div className="progress" style={{ width: "70%", height: "3px" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: "30%", backgroundColor: "#6610f2" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="card ml-2 col-md border-0">
                  <div className="card-body">
                    <h4 className="card-title">Skills being stuided</h4>
                    <img src="/img/linea5.png" alt="Line" />
                    <ul className="mt-2">
                      <li><img src="https://img.icons8.com/color/48/000000/angularjs.png" /> Angular</li>
                      <li><img src="https://img.icons8.com/color/48/000000/react-native.png" /> React</li>
                      <li><img src="https://img.icons8.com/color/48/000000/mongodb.png" /> Mongo DB</li>
                      <li><img src="https://img.icons8.com/color/48/000000/python.png" />Python</li>
                      <li><img src="https://img.icons8.com/color/48/000000/vue-js.png" /> VueJS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <a className="btn btn-secondary rounded-pill" href="https://github.com/joshuaVayer" target="_blank">
              <i class="bi bi-github"></i> My github page
            </a>
          </div>
          <div className="about__firstSection-right">
            <img className="img-fluid" src="/img/joshuafull.jpg" alt="Joshua" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
