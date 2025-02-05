import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const User03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 20c2.3358-2.4774 5.507-4 9-4 3.493 0 6.6642 1.5226 9 4M16.5 7.5c0 2.4853-2.0147 4.5-4.5 4.5S7.5 9.9853 7.5 7.5 9.5147 3 12 3s4.5 2.0147 4.5 4.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(User03);
const Memo = memo(ForwardRef);
export default Memo;
