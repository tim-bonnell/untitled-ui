import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Rss01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4 11a9.0002 9.0002 0 0 1 9 9M4 4a16 16 0 0 1 16 16M6 19c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Rss01);
const Memo = memo(ForwardRef);
export default Memo;
