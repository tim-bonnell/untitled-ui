import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Star07 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M21 11h-1.8m-.8361 6.364-1.2728-1.2728M4.8 11H3m3.9086-5.0911L5.6358 4.636M12 3.8V2m5.0911 3.9089 1.2728-1.2728M12 20v-1.8m-6.3642-.836 1.2728-1.2728M12 6.5l1.3905 2.817 3.1095.4545-2.25 2.1915.531 3.096L12 13.5965 9.219 15.059l.531-3.096L7.5 9.7715l3.1095-.4545L12 6.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Star07);
const Memo = memo(ForwardRef);
export default Memo;
