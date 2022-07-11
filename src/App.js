import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout         from "./pages/Layout";
import Home           from './pages/Home';
import AlbumPage      from './pages/AlbumPage';
import BandPage       from './pages/BandPage';
import MemberPage     from './pages/MemberPage';
import NotFoundPage   from './pages/404Page';

import 'antd/dist/antd.min.css';

import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="/album" element={<AlbumPage/>} />
              <Route path="/band" element={<BandPage/>} />
              <Route path="/member" element={<MemberPage/>} />
              <Route path="*" element={<NotFoundPage/>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
