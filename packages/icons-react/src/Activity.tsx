import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Activity = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M21 11.1h-3.6l-2.7 8.1L9.3 3l-2.7 8.1H3"
    />
  </svg>
);
const ForwardRef = forwardRef(Activity);
const Memo = memo(ForwardRef);
export default Memo;
