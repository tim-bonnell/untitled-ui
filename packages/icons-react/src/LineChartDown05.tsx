import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const LineChartDown05 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6.6 9.2 3.0909 3.0909c.1782.1782.2673.2673.37.3007a.4512.4512 0 0 0 .2782 0c.1027-.0334.1918-.1225.37-.3007l2.5818-2.5818c.1782-.1782.2673-.2673.37-.3007a.4502.4502 0 0 1 .2782 0c.1027.0334.1918.1225.37.3007L17.4 12.8M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(LineChartDown05);
const Memo = memo(ForwardRef);
export default Memo;
