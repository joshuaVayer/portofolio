// pages/index.js
import Layout from "../components/Layout";

export default function Home() {
    return (
        <Layout>
            <div className="portofolio">
                <div className="portofolio__title">
                    <img src="/img/linea52.png" alt="LineTitle" />
                    <h1>Projects</h1>
                </div>
                <div className="projects">
                    <div className="project">
                        <a href="#">
                            <img className="project__image" src="img/project1.png" />
                            <div className="grid__overlay">
                                <h3>Sage Yoga</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}