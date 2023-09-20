import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Signal01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M15.8184 7.4745c2.1088 2.1089 2.1088 5.528 0 7.6368m-7.6368 0c-2.1088-2.1089-2.1088-5.528 0-7.6368M5.636 17.657c-3.5147-3.5147-3.5147-9.2132 0-12.728m12.728.0001c3.5147 3.5147 3.5147 9.2132 0 12.7279M13.8 11.293c0 .9941-.8059 1.8-1.8 1.8-.9941 0-1.8-.8059-1.8-1.8 0-.9941.8059-1.8 1.8-1.8.9941 0 1.8.8059 1.8 1.8Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Signal01);
const Memo = memo(ForwardRef);
export default Memo;
