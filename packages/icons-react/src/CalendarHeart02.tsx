import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CalendarHeart02 = (
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
      d="M19.2 10.2H3m16.2 1.35V9.12c0-1.5121 0-2.2682-.2943-2.8458a2.6998 2.6998 0 0 0-1.1799-1.18C17.1482 4.8 16.3921 4.8 14.88 4.8H7.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C3 6.8517 3 7.6078 3 9.12v7.56c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799C5.0517 21 5.8078 21 7.32 21h4.23M14.7 3v3.6M7.5 3v3.6m8.5478 8.7407c-.6298-.7012-1.68-.8898-2.4691-.2477-.7891.6421-.9002 1.7157-.2805 2.4751.6197.7594 2.7496 2.5319 2.7496 2.5319s2.13-1.7725 2.7497-2.5319c.6196-.7594.5221-1.8397-.2805-2.4751-.8027-.6354-1.8394-.4535-2.4692.2477Z"
    />
  </svg>
);
const ForwardRef = forwardRef(CalendarHeart02);
const Memo = memo(ForwardRef);
export default Memo;
