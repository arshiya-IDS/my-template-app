import './App.css';
import AboutUs from "./pages/AboutUs";
import AdminAll from './pages/admin-all-product';
import Home from "./pages/Home";
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auction from './pages/Auction';
import Contact from './pages/Contact';
import Help from './pages/Help';
import AuctionWinner from './pages/AuctionWinner';
import AddSubscription from './pages/AddSubscription';
import AuctionWinnerBilling from './pages/AuctionWinnerBilling';
import BillingPage from './pages/BillingPage';
import BillingPageGold from './pages/Billing-page-gold';
import BillingPageplatinum from './pages/Billing-Page-platinum';
import Billingpagesilver from './pages/Billing-page-silver';
import Checkout from './pages/Checkout';
import Itemdetails from './pages/Itemdetails';
import Login from './pages/Login';
import Privacypolicy from './pages/Privacypolicy';
import SignUp from './pages/SignUp';
import Subscription from './pages/Subscription';
import TermsCondition from './pages/TermsCondition';
import Category from './pages/category';
import Subscriptiondetails from './pages/subscriptiondetails';
import Subscriptionfree from './pages/Subscriptionfree';
import SubscriptionGold from './pages/subscriptionGold';
import Subscriptionplatinum from './pages/subscriptionplatinum';
import Winbid from './pages/winbid';


function App() {
  return (
    <>
      <Header />  
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/admin-all" element={<AdminAll />} />    
          <Route path="/auction" element={<Auction/>}/>    
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/auction-winner' element={<AuctionWinner/>}/>
          <Route path='/add-subscription' element={<AddSubscription/>}/>
          <Route path='/auction-winner-billing' element={<AuctionWinnerBilling/>}/>
          <Route path='/billing-page' element={<BillingPage/>}/>
          <Route path='/billing-page-gold' element={<BillingPageGold/>}/>
          <Route path='/billing-page-platinum' element={<BillingPageplatinum/>}/>
          <Route path='/billing-page-silver' element={<Billingpagesilver/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/item-details' element={<Itemdetails/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/privacy-policy' element={<Privacypolicy/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/subscription' element={<Subscription/>}/>
          <Route path='/subscription-details' element={<Subscriptiondetails/>}/>
          <Route path='/subscription-free' element={<Subscriptionfree/>}/>
          <Route path='/subscription-gold' element={<SubscriptionGold/>}/>
          <Route path='/subscription-platinum' element={<Subscriptionplatinum/>}/>
          <Route path='/terms-condition' element={<TermsCondition/>}/>
          <Route path='/winbid' element={<Winbid/>}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
