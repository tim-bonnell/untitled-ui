import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const FlipBackward = (
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
      d="M3 9h13.5c2.4853 0 4.5 2.0147 4.5 4.5S18.9853 18 16.5 18H12M3 9l4-4M3 9l4 4"
    />
  </svg>
);
const ForwardRef = forwardRef(FlipBackward);
const Memo = memo(ForwardRef);
export default Memo;
