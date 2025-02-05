import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Diamond02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4.7166 21h12.6M2.4666 8.4h17.1M9.2166 3l-1.8 5.4 3.6 9.45 3.6-9.45-1.8-5.4m-1.2672 14.714 8.0456-8.8502c.1494-.1644.2242-.2466.254-.3402a.45.45 0 0 0 .0054-.2543c-.0257-.0948-.0968-.1801-.239-.3508l-3.8829-4.6594c-.0794-.0953-.119-.1429-.1677-.1771a.4505.4505 0 0 0-.142-.0665C15.3653 3 15.3033 3 15.1794 3H6.8538c-.124 0-.1859 0-.2433.0154a.45.45 0 0 0-.1421.0666c-.0487.0342-.0883.0818-.1677.177L2.418 7.9186c-.1423.1707-.2134.256-.2391.3508a.45.45 0 0 0 .0055.2543c.0297.0936.1045.1758.254.3402l8.0456 8.8502c.1846.2031.277.3047.3855.3423.0954.033.199.033.2944 0 .1085-.0376.2009-.1392.3856-.3423Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Diamond02);
const Memo = memo(ForwardRef);
export default Memo;
