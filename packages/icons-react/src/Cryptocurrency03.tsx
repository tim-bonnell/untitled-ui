import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Cryptocurrency03 = (
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
      d="m3 2 1.8 1.8M21 2l-1.8 1.8M21 20l-1.8-1.8M3 20l1.8-1.8M3 14.6h1.35M8.4 2v1.35M21 7.4h-1.35M15.6 20v-1.35m1.8-4.05h3.15M15.6 2v3.6M3 7.4h3.6M8.4 20v-3.6m7.2-5.4c0 1.9882-1.6118 3.6-3.6 3.6-1.9882 0-3.6-1.6118-3.6-3.6 0-1.9882 1.6118-3.6 3.6-3.6 1.9882 0 3.6 1.6118 3.6 3.6Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Cryptocurrency03);
const Memo = memo(ForwardRef);
export default Memo;
