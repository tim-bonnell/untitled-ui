import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const BarChart05 = (
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
      d="M3 17v4M15 8v13m-6-8v8M21 3v18"
    />
  </svg>
);
const ForwardRef = forwardRef(BarChart05);
const Memo = memo(ForwardRef);
export default Memo;
