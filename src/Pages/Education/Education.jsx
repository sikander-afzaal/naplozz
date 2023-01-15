import SignUp from "../Ecosystem/SignUp";
import Hero from "./Hero";

const Education = ({ loader }) => {
  return (
    <div>
      <Hero loader={loader} />
      <SignUp />
    </div>
  );
};

export default Education;
