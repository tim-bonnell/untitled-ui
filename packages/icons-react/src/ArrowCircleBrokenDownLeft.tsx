import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ArrowCircleBrokenDownLeft = (
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
      d="M9.3002 8.3v5.4001m0 0h5.4m-5.4 0 8.9998-9m2.3946 3.9694c.8018 3.0025.0249 6.339-2.3306 8.6945-3.5148 3.5147-9.2132 3.5147-12.728 0-3.5147-3.5147-3.5147-9.2132 0-12.7279 2.3556-2.3556 5.692-3.1324 8.6946-2.3306"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowCircleBrokenDownLeft);
const Memo = memo(ForwardRef);
export default Memo;
