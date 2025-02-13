import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const LineChartDown01 = (
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
      d="M21 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C3 20.2401 3 19.9601 3 19.4V3m17 12-3.9189-4.1827c-.1485-.1585-.2227-.2377-.3123-.2787a.4996.4996 0 0 0-.2528-.0433c-.0981.0089-.1945.0589-.3873.159l-3.2574 1.6914c-.1928.1001-.2892.1501-.3873.159a.4996.4996 0 0 1-.2528-.0433c-.0896-.041-.1638-.1202-.3123-.2787L7 8"
    />
  </svg>
);
const ForwardRef = forwardRef(LineChartDown01);
const Memo = memo(ForwardRef);
export default Memo;
