import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import Cta from '../components/Cta/index';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className='site__wrapper'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Cta />
      <Footer />
    </div>
  );
}

export default MainLayout;
