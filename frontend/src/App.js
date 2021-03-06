
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Screens/Home'
import ProductScreen from './Screens/ProductScreen'
import CartScreen from './Screens/CartScreen'
import LoginScreen from './Screens/LoginScreen'
import ProfileScreen from './Screens/ProfileScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ShippingScreen from './Screens/ShippingScreen'
import PaymentScreen from './Screens/PaymentScreen'
import PlaceOrderScreen from './Screens/PlaceOrderScreen'
import UserListScreen from './Screens/UserListScreen'
import ProductListScreen from './Screens/ProductListScreen'
import OrderListScreen from './Screens/OrderListScreen'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Container } from 'react-bootstrap'


function App() {
  return (
    <Router>
   
      <Header />
      <main className="py-3">
        <Container>
        <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/payment' component={PaymentScreen} />
        <Route path='/shipping' component={ShippingScreen} />
         <Route path='/login' component={LoginScreen} />
         <Route path='/register' component={RegisterScreen} />
         <Route path='/profile' component={ProfileScreen}/>
         <Route path='/product/:id' component={ProductScreen} />
         <Route path='/cart/:id?' component={CartScreen} />   
         <Route path='/admin/userlist' component={UserListScreen} />  
         <Route path='/admin/productlist' component={ProductListScreen} />  
         <Route path='/admin/orderlist' component={OrderListScreen} />  
             
         <Route path='/' component={Home} exact/>   
        </Container>
      </main>
      <Footer />
    
    </Router>
  );
}

export default App;
