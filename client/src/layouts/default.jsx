
import { Outlet } from 'react-router-dom';
import Header from '../components/header/header.jsx';
// import Footer from './components/Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};