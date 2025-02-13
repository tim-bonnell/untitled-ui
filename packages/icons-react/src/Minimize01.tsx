import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Minimize01 = (
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
      d="M4 14h6m0 0v6m0-6-7 7m17-11h-6m0 0V4m0 6 7-7"
    />
  </svg>
);
const ForwardRef = forwardRef(Minimize01);
const Memo = memo(ForwardRef);
export default Memo;
