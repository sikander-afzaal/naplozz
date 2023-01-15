import Connect from "./Connect";
import Hero from "./Hero";

const Chain = ({ loader }) => {
  return (
    <div>
      <Hero loader={loader} />
      <Connect />
    </div>
  );
};

export default Chain;
