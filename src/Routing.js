import { BrowserRouter,Route } from "react-router-dom";
// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
// import PlaceOrder from "./components/booking/PlaceOrder";
// import ViewOrder from "./components/booking/ViewOrder";
import Detail from "./Details/Detail";
import Home1 from "./Home/Home1";
 import Filter from "./Filter/Filter";
// import Footer from "./Footer";
import Header from "./Header";
const Routing = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
       {/* <Home1/> */}

   
 <Route exact path="/" component={Home1} />
     
        <Route path="/listing/:mealId" component={Filter} />
        <Route path="/details" component={Detail} />
        {/* <Route path="/placeOrder/:restName" component={PlaceOrder} />
        <Route path="/viewBooking" component={ViewOrder} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default Routing;