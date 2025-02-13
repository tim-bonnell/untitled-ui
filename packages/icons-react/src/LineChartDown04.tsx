import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const LineChartDown04 = (
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
      d="m3 9 6.6553 4.7538a.5.5 0 0 0 .6442-.0533l3.401-3.401a.5.5 0 0 1 .6442-.0533L21 15M6 21h12c1.6569 0 3-1.3431 3-3V6c0-1.6569-1.3431-3-3-3H6C4.3431 3 3 4.3431 3 6v12c0 1.6569 1.3431 3 3 3Z"
    />
  </svg>
);
const ForwardRef = forwardRef(LineChartDown04);
const Memo = memo(ForwardRef);
export default Memo;
