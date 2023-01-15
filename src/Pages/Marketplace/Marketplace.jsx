import Contact from "./Contact";
import Hero from "./Hero";
import Mid from "./Mid";

const Marketplace = ({ loader }) => {
  return (
    <div>
      <Hero loader={loader} />
      <Mid />
      <Contact />
    </div>
  );
};

export default Marketplace;
