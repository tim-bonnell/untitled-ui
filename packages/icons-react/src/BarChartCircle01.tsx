import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const BarChartCircle01 = (
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
      d="M8.4 11.9v3.6m7.2-5.4v5.4m-3.6-9v9m9-4.5c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(BarChartCircle01);
const Memo = memo(ForwardRef);
export default Memo;
