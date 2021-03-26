// pages/index.js
import Layout from "../components/Layout";
import Landing from "../components/Landing";
export default function Home() {
  return (
    <Layout>
      <Landing />
      <div className="wrapper" id="about">
        <div className="wrapper-higher">
          <div className="wrapper__about">
            <div className="content">
              <a href="/about">
                <h1 className="content-white">About me</h1>
              </a>
              <h2 className="content-white">Want to know more about <span>me</span> and my <span>skills</span> ? Check this section</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper" id="portofolio">
        <div className="wrapper-higher">
          <div className="wrapper__portofolio">
            <div className="content">
              <a href="/portofolio">
                <h1 className="content-white">Portfolio</h1>
              </a>
              <h2 className="content-white">Let my work speak for me. Check my latest projects !</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper" id="contact">
        <div className="wrapper-higher">
          <div className="wrapper__contact">
            <div className="content">
              <a className="content-dark" href="joshua.vayer@gmail.com">
                <h1>Contact</h1>
              </a>
              <h2>joshua.vayer@gmail.com</h2>
                <img className="p-4" src="img/separator.png" alt="separator"/>
                <h2>07.66.31.08.10</h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
