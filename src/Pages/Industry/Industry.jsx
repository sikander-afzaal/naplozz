import Description from "./Description";
import SignUp from "./SignUp";
import Usage from "./Usage";

const Industry = ({ loader }) => {
  return (
    <div>
      <Usage loader={loader} />
      <Description />
      <SignUp />
    </div>
  );
};

export default Industry;
