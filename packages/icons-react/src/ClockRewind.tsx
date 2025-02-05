import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ClockRewind = (
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
      d="m22.7 13.5-1.9995-2-2.0005 2M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9c3.3019 0 6.1885 1.7781 7.7545 4.429M12 7v5l3 2"
    />
  </svg>
);
const ForwardRef = forwardRef(ClockRewind);
const Memo = memo(ForwardRef);
export default Memo;
