import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Airplay = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5.7 16.5c-1.4912 0-2.7-1.2088-2.7-2.7V7.32c0-1.5121 0-2.2682.2943-2.8458a2.7 2.7 0 0 1 1.18-1.18C5.0517 3 5.8078 3 7.32 3h9.36c1.5121 0 2.2682 0 2.8458.2943.508.2588.9211.6719 1.1799 1.18C21 5.0517 21 5.8078 21 7.32v6.48c0 1.4912-1.2088 2.7-2.7 2.7m-9.2628 2.7h5.9256c.4903 0 .7355 0 .8593-.1a.4501.4501 0 0 0 .1671-.3568c-.0024-.1591-.1594-.3474-.4733-.7241l-2.9628-3.5554c-.1899-.2279-.2849-.3419-.3986-.3834a.4497.4497 0 0 0-.309 0c-.1137.0415-.2087.1555-.3986.3834l-2.9628 3.5554c-.314.3767-.4709.565-.4733.7241a.45.45 0 0 0 .1671.3568c.1238.1.369.1.8593.1Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Airplay);
const Memo = memo(ForwardRef);
export default Memo;
