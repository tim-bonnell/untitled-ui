import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ArrowBlockDown = (
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
      d="M9 3.8c0-.28 0-.42.0545-.527a.5.5 0 0 1 .2185-.2185C9.38 3 9.52 3 9.8 3h4.4c.28 0 .42 0 .527.0545a.4996.4996 0 0 1 .2185.2185C15 3.38 15 3.52 15 3.8V14h4l-7 7-7-7h4V3.8Z"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowBlockDown);
const Memo = memo(ForwardRef);
export default Memo;
