import Flow from "./Flow";
import Hero from "./Hero";
import Programs from "./Programs";
import Roadmap from "./Roadmap";
import SignUp from "./SignUp";
import Solutions from "./Solutions";
import Token from "./Token";
import Tokenomics from "./Tokenomics";
import Utilities from "./Utilities";
import Whitepaper from "./Whitepaper";

const Explore = ({ loader, once, setOnce }) => {
  return (
    <>
      <Hero loader={loader} />
      <Solutions />
      <Token />
      <Flow />
      <Utilities />
      <Programs />
      <Tokenomics once={once} setOnce={setOnce} />
      <Whitepaper />
      <Roadmap />
      <SignUp />
    </>
  );
};

export default Explore;
