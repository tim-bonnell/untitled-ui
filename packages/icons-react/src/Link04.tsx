import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Link04 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M7.95 7H7.5C5.0147 7 3 9.0147 3 11.5S5.0147 16 7.5 16h1.8c2.4853 0 4.5-2.0147 4.5-4.5m2.25 4.5h.45c2.4853 0 4.5-2.0147 4.5-4.5S18.9853 7 16.5 7h-1.8c-2.4853 0-4.5 2.0147-4.5 4.5"
    />
  </svg>
);
const ForwardRef = forwardRef(Link04);
const Memo = memo(ForwardRef);
export default Memo;
