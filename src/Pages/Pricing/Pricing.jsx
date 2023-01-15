import Detailed from "./Detailed";
import Hero from "./Hero";
import Subscription from "./Subscription";
import Signup from "../Explore/SignUp";

const Pricing = ({ loader }) => {
  return (
    <div>
      <Hero loader={loader} />
      <Subscription />
      <Detailed />
      <Signup />
    </div>
  );
};

export default Pricing;
