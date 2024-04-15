import Navbar from '../../components/navbar/Navbar';
import './layout.css';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <main className='layout'>
      <div className='wrapper'>
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
