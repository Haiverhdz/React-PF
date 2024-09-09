import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import BaseLayout from './assets/layout'
import Home from './assets/pages/Home'
import Store from './assets/pages/Store'
import Detail from './assets/pages/Detail'



function App() {

  return (
    <>
    <BrowserRouter>
      <BaseLayout>
          <Routes>
            <Route exact path='/Home' element={<Home/>}/>
            <Route exact path='/Store' element={<Store/>}/>
            <Route exact path='/Detail/:id' element={<Detail/>}/>
          </Routes>
      </BaseLayout>
    </BrowserRouter>
      
    </>
  )
};

export default App


// <Navbar/>
// <Title heading='h3' text='¡La mejor tienda que encontraras en la web!' />
// {/* <Counter /> */}
// {/* <Item title='Item 1' description='Sin descripcion' link={{href:'https://www.pornhub.com', text:'Ir al enlace'}} type="secondary" />
// <Item title='Wisin' description='DJ' link={{href:'https://www.redtube.com', text:'visitar web'}} type='primary'/> */}
// <SearchApi/>