import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Speaker02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 11h.009M17.4 5.6h.009M6.6 5.6h.009M17.4 16.4h.009M6.6 16.4h.009M7.32 20h9.36c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799C21 17.9482 21 17.1921 21 15.68V6.32c0-1.5121 0-2.2682-.2943-2.8458a2.6998 2.6998 0 0 0-1.1799-1.18C18.9482 2 18.1921 2 16.68 2H7.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C3 4.0517 3 4.8078 3 6.32v9.36c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799C5.0517 20 5.8078 20 7.32 20Zm5.13-9a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0Zm4.05 0c0 2.4853-2.0147 4.5-4.5 4.5S7.5 13.4853 7.5 11 9.5147 6.5 12 6.5s4.5 2.0147 4.5 4.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Speaker02);
const Memo = memo(ForwardRef);
export default Memo;
