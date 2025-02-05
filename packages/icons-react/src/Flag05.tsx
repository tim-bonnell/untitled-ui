import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Flag05 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M14.1111 6.7222h6.0293c.4473 0 .671 0 .8018.094a.5.5 0 0 1 .2047.348c.0187.16-.0899.3555-.3071.7465l-1.4696 2.6452c-.0788.1418-.1182.2127-.1336.2878a.4986.4986 0 0 0 0 .2014c.0154.0751.0548.146.1336.2878l1.4696 2.6452c.2172.391.3258.5865.3071.7465a.5002.5002 0 0 1-.2047.348c-.1308.094-.3545.094-.8018.094h-7.5959c-.5601 0-.8401 0-1.054-.109a.9993.9993 0 0 1-.437-.437c-.109-.2139-.109-.4939-.109-1.054v-2.6222M7.25 21.5002 3.0278 4.6113m1.5834 6.3331h7.9c.56 0 .84 0 1.0539-.1089a1.0003 1.0003 0 0 0 .4371-.4371c.109-.2139.109-.4939.109-1.054V4.1c0-.56 0-.84-.109-1.054a1.0002 1.0002 0 0 0-.4371-.437c-.2139-.109-.4939-.109-1.0539-.109h-7.962c-.6984 0-1.0477 0-1.2866.1447a1 1 0 0 0-.4372.56c-.0825.2669.0022.6057.1716 1.2834l1.6142 6.4563Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Flag05);
const Memo = memo(ForwardRef);
export default Memo;
