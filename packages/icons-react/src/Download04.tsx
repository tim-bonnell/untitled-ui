import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Download04 = (
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
      d="m8.4 11.0654 3.6 3.6m0 0 3.6-3.6m-3.6 3.6v-8.28c0-1.2516 0-1.8774-.4955-2.578-.3292-.4656-1.277-1.0402-1.842-1.1168-.8504-.1152-1.1733.0533-1.8192.3902C4.965 4.5822 3 7.5944 3 11.0654c0 4.9706 4.0294 9 9 9s9-4.0294 9-9c0-3.3312-1.8099-6.2398-4.5-7.796"
    />
  </svg>
);
const ForwardRef = forwardRef(Download04);
const Memo = memo(ForwardRef);
export default Memo;
