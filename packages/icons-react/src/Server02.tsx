import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Server02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6.6 7.6h.009M6.6 14.8h.009M6.6 11.2h10.8m-10.8 0C4.6118 11.2 3 9.5882 3 7.6 3 5.6118 4.6118 4 6.6 4h10.8C19.3882 4 21 5.6118 21 7.6c0 1.9882-1.6118 3.6-3.6 3.6m-10.8 0c-1.9882 0-3.6 1.6118-3.6 3.6 0 1.9882 1.6118 3.6 3.6 3.6h10.8c1.9882 0 3.6-1.6118 3.6-3.6 0-1.9882-1.6118-3.6-3.6-3.6"
    />
  </svg>
);
const ForwardRef = forwardRef(Server02);
const Memo = memo(ForwardRef);
export default Memo;
