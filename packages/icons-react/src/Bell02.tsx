import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Bell02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M14 21h-4m8-13A6 6 0 1 0 6 8c0 3.0902-.7795 5.206-1.6503 6.6054-.7346 1.1805-1.1018 1.7707-1.0884 1.9354.015.1823.0536.2518.2005.3608C3.5945 17 4.1926 17 5.3888 17h13.2224c1.1962 0 1.7944 0 1.927-.0984.147-.109.1856-.1785.2005-.3608.0135-.1647-.3538-.7549-1.0883-1.9354C18.7795 13.206 18 11.0902 18 8Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Bell02);
const Memo = memo(ForwardRef);
export default Memo;
