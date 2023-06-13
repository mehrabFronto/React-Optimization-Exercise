import { memo } from "react";

const Title = () => {
   console.log("rendering  Title");
   return <h2>useCallback Demo</h2>;
};

export default memo(Title);
