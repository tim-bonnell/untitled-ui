import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const LogOut04 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m17.4 7.5 3.6 3.6m0 0-3.6 3.6m3.6-3.6H9.3m5.4-7.0164C13.5527 3.3945 12.2207 3 10.8 3 6.4922 3 3 6.6265 3 11.1s3.4922 8.1 7.8 8.1c1.4207 0 2.7527-.3944 3.9-1.0836"
    />
  </svg>
);
const ForwardRef = forwardRef(LogOut04);
const Memo = memo(ForwardRef);
export default Memo;
