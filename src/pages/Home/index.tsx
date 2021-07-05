import Navbar from '../../components/Navbar';
import {ReactComponent as MainImage} from '../../assets/vaccines.svg';
import './styles.css'

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">Vaccines and Covid cases</div>
          <div className="home-image-container">
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
