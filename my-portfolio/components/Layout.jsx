// components/Layout.jsx
import Head from "next/head"
import Navbar from './shared/Navbar';



const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Joshua Vayer</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css"></link>
    </Head>
    <main>
      <div class="wrapper" id="home">
        <div class="wrapper__landing">
          <div className="header">
            <Navbar />
          </div>
          {children}
        </div>
      </div>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    <script src="/js/main.js"></script>
  </div>
)
export default Layout;