import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Detail, Posts } from './page';
import { Header } from './components';

function App () {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/posts' element={<Posts />} />
          <Route path='/posts/:id' element={<Detail />} />
          <Route path='/*' element={<Navigate to='/posts' replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
