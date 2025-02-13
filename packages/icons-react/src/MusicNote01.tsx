import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const MusicNote01 = (
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
      d="M9 18V6.3554c0-.4816 0-.7223.0876-.9176a1 1 0 0 1 .3587-.4234c.1782-.1185.4157-.1581.8907-.2373l8.8-1.4666c.6409-.1069.9614-.1603 1.2112-.0675a.9997.9997 0 0 1 .5192.4399C21 3.9139 21 4.2389 21 4.8887V16M9 18c0 1.6568-1.3431 3-3 3s-3-1.3432-3-3c0-1.6569 1.3431-3 3-3s3 1.3431 3 3Zm12-2c0 1.6568-1.3431 3-3 3s-3-1.3432-3-3c0-1.6569 1.3431-3 3-3s3 1.3431 3 3Z"
    />
  </svg>
);
const ForwardRef = forwardRef(MusicNote01);
const Memo = memo(ForwardRef);
export default Memo;
