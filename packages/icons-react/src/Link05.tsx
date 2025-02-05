import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Link05 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9.3 16H7.5C5.0147 16 3 13.9853 3 11.5S5.0147 7 7.5 7h1.8m-.9 4.5h9m-2 4.5h1.1c2.4853 0 4.5-2.0147 4.5-4.5S18.9853 7 16.5 7h-1.1a.7.7 0 0 0-.7.7v7.6a.7.7 0 0 0 .7.7Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Link05);
const Memo = memo(ForwardRef);
export default Memo;
