import Team from "./Team";
import Partners from "../Home/Partners";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
const About = ({ loader }) => {
  return (
    <div>
      <Team loader={loader} />
      <Partners />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default About;
