// components/Layout.jsx
import Navbar from './shared/Navbar';
const Layout = ({ children }) => (
  <main>
    <div class="wrapper" id="home">
      <div class="wrapper__landing">
        <div className="header">
        <Navbar />
        </div>
          {children}
      </div>
    </div>
    <script src="/js/main.js"></script>
  </main>
)
export default Layout;