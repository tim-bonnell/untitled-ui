import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CpuChip01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9.3 2v1.8M14.7 2v1.8M9.3 18.2V20m5.4-1.8V20m4.5-11.7H21m-1.8 4.5H21M3 8.3h1.8M3 12.8h1.8m4.32 5.4h5.76c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799c.2943-.5776.2943-1.3337.2943-2.8458V8.12c0-1.5121 0-2.2682-.2943-2.8458a2.6998 2.6998 0 0 0-1.1799-1.18C17.1482 3.8 16.3921 3.8 14.88 3.8H9.12c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C4.8 5.8517 4.8 6.6078 4.8 8.12v5.76c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799.5775.2943 1.3336.2943 2.8457.2943Zm1.62-4.5h2.52c.504 0 .7561 0 .9486-.0981a.9006.9006 0 0 0 .3933-.3933c.0981-.1925.0981-.4446.0981-.9486V9.74c0-.504 0-.756-.0981-.9486a.9003.9003 0 0 0-.3933-.3933C14.0161 8.3 13.764 8.3 13.26 8.3h-2.52c-.504 0-.756 0-.9486.098a.9.9 0 0 0-.3933.3934C9.3 8.984 9.3 9.236 9.3 9.74v2.52c0 .504 0 .7561.098.9486a.9003.9003 0 0 0 .3934.3933c.1925.0981.4446.0981.9486.0981Z"
    />
  </svg>
);
const ForwardRef = forwardRef(CpuChip01);
const Memo = memo(ForwardRef);
export default Memo;
