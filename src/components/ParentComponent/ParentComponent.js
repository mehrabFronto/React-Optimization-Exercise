import { memo, useCallback, useState } from "react";
import Button from "../Button/Button";
import Count from "../Count/Count";
import Title from "../Title/Title";

const ParentComponent = () => {
   const [age, setAge] = useState(0);
   const [score, setScore] = useState(0);

   const ageHandler = useCallback(() => {
      setAge(age + 1);
   }, [age]);

   const scoreHandler = useCallback(() => {
      setScore(score + 1);
   }, [score]);

   return (
      <div>
         <Title />
         <Count
            text="Age"
            count={age}
         />
         <Button handleClick={ageHandler}>Age</Button>
         <Count
            text="Score"
            count={score}
         />
         <Button handleClick={scoreHandler}>Score</Button>
      </div>
   );
};

export default memo(ParentComponent);
