import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const ForwardRef = forwardRef((props, ref) => {
  return <input type="text" placeholder="forwardRef" ref={ref} {...props} />;
});

export default ForwardRef;
