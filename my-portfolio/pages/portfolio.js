// pages/portfolio.js
import Layout from "../components/Layout";
import fetchFromCMS from '../lib/service';
import Link from 'next/link';


export default function Portfolio({portfolioItems}) {
    // Reversing array wih shallow copy
    let temp = portfolioItems.slice();
    portfolioItems = temp.reverse();
    return (
        <Layout>
            <div className="portofolio">
                <div className="portofolio__title">
                    <img src="/img/linea52.png" alt="LineTitle" />
                    <h1>Projects</h1>
                </div>
                <div className="projects">
                    {portfolioItems.map((portfolio) => (
                        <div className="project">
                            <Link as={`/portfolio/${portfolio.slug}`} href="/portfolio/[id]">
                            <a>
                                <img className="project__image" src= {portfolio.Image.url}/>
                                <div className="grid__overlay">
                                    <h3>{portfolio.Headline}</h3>
                                </div>
                            </a>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
export async function getStaticProps() {
    const portfolioItems = await fetchFromCMS('portfolios');
    return {
      props: { portfolioItems },
      revalidate: 1,
    };
  }