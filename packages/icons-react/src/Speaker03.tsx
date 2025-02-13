import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Speaker03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M16.5 17.4v2.16c0 .504 0 .7561-.0981.9486a.9006.9006 0 0 1-.3933.3933C15.8161 21 15.564 21 15.06 21H7.14c-.504 0-.756 0-.9486-.0981a.9003.9003 0 0 1-.3933-.3933C5.7 20.3161 5.7 20.064 5.7 19.56V17.4m5.4-7.2h.009M7.32 17.4h7.56c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799c.2943-.5776.2943-1.3337.2943-2.8458V7.32c0-1.5121 0-2.2682-.2943-2.8458a2.6998 2.6998 0 0 0-1.1799-1.18C17.1482 3 16.3921 3 14.88 3H7.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C3 5.0517 3 5.8078 3 7.32v5.76c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799.5775.2943 1.3336.2943 2.8457.2943Zm8.28-7.2c0 2.4853-2.0147 4.5-4.5 4.5s-4.5-2.0147-4.5-4.5 2.0147-4.5 4.5-4.5 4.5 2.0147 4.5 4.5Zm-4.05 0a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Speaker03);
const Memo = memo(ForwardRef);
export default Memo;
