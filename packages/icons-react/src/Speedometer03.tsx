import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Speedometer03 = (
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
      d="M5.7 12c0-3.4794 2.8206-6.3 6.3-6.3m4.0499 2.25-4.05 4.05M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-8.1 0a.9.9 0 0 1-.9.9.9.9 0 0 1-.9-.9.9.9 0 0 1 .9-.9.9.9 0 0 1 .9.9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Speedometer03);
const Memo = memo(ForwardRef);
export default Memo;
