import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Route = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M11.55 4.7h.391c2.7425 0 4.1137 0 4.6343.4926a1.8 1.8 0 0 1 .5278 1.6604c-.1405.7027-1.26 1.4946-3.499 3.0783l-3.6582 2.5874c-2.239 1.5837-3.3585 2.3756-3.499 3.0783a1.7999 1.7999 0 0 0 .5278 1.6604c.5206.4926 1.8918.4926 4.6343.4926h.841M8.4 4.7c0 1.4912-1.2088 2.7-2.7 2.7S3 6.1912 3 4.7 4.2088 2 5.7 2s2.7 1.2088 2.7 2.7ZM21 17.3c0 1.4912-1.2088 2.7-2.7 2.7s-2.7-1.2088-2.7-2.7 1.2088-2.7 2.7-2.7 2.7 1.2088 2.7 2.7Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Route);
const Memo = memo(ForwardRef);
export default Memo;
