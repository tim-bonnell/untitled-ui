import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const LifeBuoy02 = (
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
      d="M8.818 8.818 5.636 5.636m0 12.728 3.182-3.182m6.364 0 3.182 3.1819m0-12.7279-3.182 3.182M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-4.5 0c0 2.4853-2.0147 4.5-4.5 4.5S7.5 14.4853 7.5 12 9.5147 7.5 12 7.5s4.5 2.0147 4.5 4.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(LifeBuoy02);
const Memo = memo(ForwardRef);
export default Memo;
