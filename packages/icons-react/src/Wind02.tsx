import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Wind02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9.5093 4.6667A1.995 1.995 0 0 1 11 4c1.1046 0 2 .8954 2 2s-.8954 2-2 2H2m10.5093 11.3333A1.9949 1.9949 0 0 0 14 20c1.1046 0 2-.8954 2-2s-.8954-2-2-2H2m14.764-9c.5493-.6137 1.3476-1 2.2361-1 1.6569 0 3 1.3431 3 3s-1.3431 3-3 3H2"
    />
  </svg>
);
const ForwardRef = forwardRef(Wind02);
const Memo = memo(ForwardRef);
export default Memo;
