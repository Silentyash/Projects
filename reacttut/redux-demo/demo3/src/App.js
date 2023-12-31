import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';

function App() {

  const cartShown=useSelector(state=>state.ui.cartShowing);
  const cart= useSelector((state)=>state.cart)

  useEffect(()=>{

  },[]);


  return (
    <Layout>
      {cartShown && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
