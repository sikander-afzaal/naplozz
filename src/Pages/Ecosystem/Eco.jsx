import Hero from "./Hero";
import SignUp from "./SignUp";

const Eco = ({ loader }) => {
  return (
    <div>
      <Hero loader={loader} />
      <SignUp />
    </div>
  );
};

export default Eco;
