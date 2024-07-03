import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Map from './pages/Map';
import Account from './pages/Account';
import Wallet from './pages/Wallet';
import Home from './pages/Home';
import Layout from './components/Layout';
import Activity from './pages/Activity';
import Groups from './pages/Groups';
import { Theme } from '@radix-ui/themes';
import '@smastrom/react-rating/style.css';
import Rewards from './pages/Rewards';

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path='/map'
            element={
              <Layout>
                <Map />
              </Layout>
            }
          />
          <Route
            path='/account'
            element={
              <Layout>
                <Account />
              </Layout>
            }
          />
          <Route
            path='/wallet'
            element={
              <Layout>
                <Wallet />
              </Layout>
            }
          />
          <Route
            path='/activity'
            element={
              <Layout>
                <Activity />
              </Layout>
            }
          />
          <Route
            path='/groups'
            element={
              <Layout>
                <Groups />
              </Layout>
            }
          />
          <Route
            path='/rewards'
            element={
              <Layout>
                <Rewards />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
