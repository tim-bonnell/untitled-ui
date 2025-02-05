import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Umbrella02 = (
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
      d="M7.5 17.66C7.5 18.9523 8.5074 20 9.75 20S12 18.9523 12 17.66V10.1m0 0c-1.4492 0-3.6.9-3.6.9s-1.2508-.9-2.7-.9c-1.4492 0-2.7.9-2.7.9 0-4.9706 4.0294-9 9-9s9 4.0294 9 9c0 0-1.2508-.9-2.7-.9-1.4492 0-2.7.9-2.7.9s-2.1508-.9-3.6-.9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Umbrella02);
const Memo = memo(ForwardRef);
export default Memo;
