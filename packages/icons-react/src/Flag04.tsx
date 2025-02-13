import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Flag04 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M13.5 6.5h6.2056c.4286 0 .6429 0 .772.0903a.5.5 0 0 1 .208.3366c.023.1558-.0728.3475-.2645.7309l-1.2523 2.5045c-.062.1241-.093.1862-.1062.2514a.5017.5017 0 0 0-.004.1754c.0102.0657.0384.1291.0947.2559L20.5 13.8751c.1667.3749.25.5623.2227.7137a.5004.5004 0 0 1-.2111.3248C20.3844 15 20.1793 15 19.769 15H12.1c-.5601 0-.8401 0-1.054-.109a.9998.9998 0 0 1-.437-.437c-.109-.2139-.109-.4939-.109-1.054V11M3 21V3.5M3 11h8.9c.5601 0 .8401 0 1.054-.109a.9998.9998 0 0 0 .437-.437c.109-.2139.109-.494.109-1.054V4.1c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C12.7401 2.5 12.4601 2.5 11.9 2.5H4.6c-.56 0-.84 0-1.054.109a1.0001 1.0001 0 0 0-.437.437C3 3.26 3 3.54 3 4.1V11Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Flag04);
const Memo = memo(ForwardRef);
export default Memo;
