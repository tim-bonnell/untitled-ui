import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Users02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M15.6 3.421c1.3335.6627 2.25 2.0388 2.25 3.629 0 1.5902-.9165 2.9663-2.25 3.629m1.8 4.7107c1.3603.6156 2.5853 1.6188 3.6 2.9103m-18 0c1.7518-2.2297 4.1303-3.6 6.75-3.6s4.9982 1.3703 6.75 3.6M13.8 7.05c0 2.2367-1.8132 4.05-4.05 4.05-2.2367 0-4.05-1.8133-4.05-4.05S7.5133 3 9.75 3c2.2368 0 4.05 1.8133 4.05 4.05Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Users02);
const Memo = memo(ForwardRef);
export default Memo;
