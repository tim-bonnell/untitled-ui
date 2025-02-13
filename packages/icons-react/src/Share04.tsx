import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Share04 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M21 9V3m0 0h-6m6 0-8 8m-3-6H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 7.2798 3 8.1198 3 9.8v6.4c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21h6.4c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C19 18.7202 19 17.8802 19 16.2V14"
    />
  </svg>
);
const ForwardRef = forwardRef(Share04);
const Memo = memo(ForwardRef);
export default Memo;
