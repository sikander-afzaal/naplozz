import Ecosystem from "./Ecosystem";
import Solutions from "./Solutions";
import Helps from "./Helps";
import Hero from "./Hero";
import Partners from "./Partners";

const Home = ({ loader }) => {
  return (
    <div>
      <Hero loader={loader} />
      <Solutions />
      <Ecosystem />
      <Partners />
      <Helps />
    </div>
  );
};

export default Home;
