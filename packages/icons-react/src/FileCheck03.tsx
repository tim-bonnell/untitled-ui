import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const FileCheck03 = (
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
      d="M13 3.2426V6.96c0 .504 0 .756.0981.9486a.9003.9003 0 0 0 .3933.3933c.1925.098.4446.098.9486.098h3.7175M8.5 15.6l1.8 1.8 4.05-4.05M13 3H8.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C4 5.0517 4 5.8078 4 7.32v9.36c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799C6.0517 21 6.8078 21 8.32 21h5.76c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799c.2943-.5776.2943-1.3337.2943-2.8458V8.4L13 3Z"
    />
  </svg>
);
const ForwardRef = forwardRef(FileCheck03);
const Memo = memo(ForwardRef);
export default Memo;
