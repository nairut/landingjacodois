import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from '../../components';
import Main from '../Main';
import Thanks from '../Thanks';
import Terms from '../Terms';

function Home() {
  
  return (
    <div className="App">
      <BrowserRouter >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main
        titulo="Serviço de Tradução Técnica"
        />} />


<Route path='/en/financeira' element={<Main
        titulo="Serviço de Tradução Financeira"
        />} />



        <Route path='/obrigado' element={<Thanks />} />
        <Route path='/Quotation' element={<Navigate to={'/obrigado'} />} />
        <Route path='/termos' element={<Terms />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Home;
