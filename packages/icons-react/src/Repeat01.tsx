import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Repeat01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m15.6 3 3.6 3.6m0 0-3.6 3.6m3.6-3.6H7.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C3 8.6517 3 9.4078 3 10.92v.18m0 6.3h11.88c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799c.2943-.5776.2943-1.3337.2943-2.8458v-.18M3 17.4 6.6 21M3 17.4l3.6-3.6"
    />
  </svg>
);
const ForwardRef = forwardRef(Repeat01);
const Memo = memo(ForwardRef);
export default Memo;
