import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Droplets02 = (
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
      d="M12 21.5a6.9997 6.9997 0 0 0 4.9497-2.0503A6.9997 6.9997 0 0 0 19 14.5c0-2-1-3.9-3-5.5s-3.5-4-4-6.5C11.5 5 10 7.4 8 9c-2 1.6-3 3.5-3 5.5a6.9998 6.9998 0 0 0 7 7Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Droplets02);
const Memo = memo(ForwardRef);
export default Memo;
