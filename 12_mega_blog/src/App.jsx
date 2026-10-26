import './App.css'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // who's the current user?
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, []);


  return !loading ? (
    <>
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full '>
            <Header/>
              <main>
                TODO: {/* <Outlet> is coming from react router dom in future */}
              </main>
            <Footer/>
        </div>
      </div>
    </>
  ) : null

};

export default App    