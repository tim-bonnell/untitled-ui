import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const UserX01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m16.5 16 5 5m0-5-5 5M12 15.5H7.5c-1.3956 0-2.0934 0-2.6611.1722a4.0001 4.0001 0 0 0-2.6667 2.6667C2 18.9067 2 19.6044 2 21M14.5 7.5c0 2.4853-2.0147 4.5-4.5 4.5S5.5 9.9853 5.5 7.5 7.5147 3 10 3s4.5 2.0147 4.5 4.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(UserX01);
const Memo = memo(ForwardRef);
export default Memo;
