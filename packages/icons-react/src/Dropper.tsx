import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Dropper = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m10.5 6.4998 7 7m-15.5 8.5s4.5-.5 7-3l12-12c1.1046-1.1045 1.1046-2.8954 0-4-1.1046-1.1045-2.8954-1.1046-4 0l-12 12c-2.5 2.5-3 7-3 7Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Dropper);
const Memo = memo(ForwardRef);
export default Memo;
