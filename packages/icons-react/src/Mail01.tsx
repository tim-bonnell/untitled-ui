import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Mail01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m3 6.7 7.3484 5.1439c.5951.4165.8926.6248 1.2162.7055.2859.0712.5849.0712.8708 0 .3236-.0807.6211-.289 1.2162-.7055L21 6.7M7.32 18.4h9.36c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799C21 16.3482 21 15.5921 21 14.08V8.32c0-1.5121 0-2.2682-.2943-2.8458a2.6998 2.6998 0 0 0-1.1799-1.18C18.9482 4 18.1921 4 16.68 4H7.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C3 6.0517 3 6.8078 3 8.32v5.76c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799.5775.2943 1.3336.2943 2.8457.2943Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Mail01);
const Memo = memo(ForwardRef);
export default Memo;
