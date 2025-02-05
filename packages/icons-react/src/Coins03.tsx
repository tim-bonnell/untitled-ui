import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Coins03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10.2909 3.8C11.4272 2.6865 12.9834 2 14.7 2 18.1794 2 21 4.8206 21 8.3c0 1.7166-.6866 3.2729-1.8001 4.4091M15.6 13.7c0 3.4794-2.8206 6.3-6.3 6.3C5.8206 20 3 17.1794 3 13.7c0-3.4794 2.8206-6.3 6.3-6.3 3.4794 0 6.3 2.8206 6.3 6.3Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Coins03);
const Memo = memo(ForwardRef);
export default Memo;
