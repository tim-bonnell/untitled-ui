import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Sale02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9.3 8.3h.009m5.391 5.4h.009m.891-6.3-7.2 7.2M7.8004 3.6368a3.449 3.449 0 0 0 1.9626-.813c1.2891-1.0984 3.1849-1.0984 4.474 0a3.449 3.449 0 0 0 1.9626.813c1.6882.1347 3.0289 1.4753 3.1636 3.1636a3.4488 3.4488 0 0 0 .8129 1.9626c1.0985 1.2891 1.0985 3.1849 0 4.474a3.449 3.449 0 0 0-.8129 1.9626c-.1347 1.6882-1.4754 3.0289-3.1636 3.1636a3.449 3.449 0 0 0-1.9626.8129c-1.2891 1.0985-3.1849 1.0985-4.474 0a3.4488 3.4488 0 0 0-1.9626-.8129c-1.6883-.1347-3.0288-1.4754-3.1636-3.1636a3.449 3.449 0 0 0-.813-1.9626c-1.0984-1.2891-1.0984-3.1849 0-4.474a3.449 3.449 0 0 0 .813-1.9626c.1348-1.6883 1.4753-3.0288 3.1636-3.1636ZM9.75 8.3a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0Zm5.4 5.4a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Sale02);
const Memo = memo(ForwardRef);
export default Memo;
