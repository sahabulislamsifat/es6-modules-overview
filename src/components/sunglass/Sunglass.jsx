"./sunglass.css";

import {
  calculation,
  multiply,
  calculateTheFirstNumberDivideByTheSecondNumber as divide,
} from "../../utilities/calculation";

// import calculation from "../../utilities/calculation";

const Sunglass = () => {
  const Sunglass = () => {
    const first = 100;
    const second = 200;
    const sum = calculation(first, second);
    const sum2 = multiply(first, second);
    const sum3 = divide(first, second);
  };

  return (
    <div>
      <h2>Sunglass.com</h2>
    </div>
  );
};

export default Sunglass;
