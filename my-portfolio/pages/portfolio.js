// pages/index.js
import Layout from "../components/Layout";

export default function Portfolio() {
    const projects = ['Sage Yoga', 'Anne Schouler','Projet Fitt', 'Mini games'];
    return (
        <Layout>
            <div className="portofolio">
                <div className="portofolio__title">
                    <img src="/img/linea52.png" alt="LineTitle" />
                    <h1>Projects</h1>
                </div>
                <div className="projects">
                    {projects.map((project) => (
                        <div className="project">
                            <a href="/portfolio/project">
                                <img className="project__image" src="/img/project1.png" />
                                <div className="grid__overlay">
                                    <h3>{project}</h3>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}