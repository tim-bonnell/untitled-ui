import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Hand = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6.56 11.5V14m0-2.5v-6c0-.8284.685-1.5 1.53-1.5s1.53.6716 1.53 1.5m-3.06 6c0-.8284-.685-1.5-1.53-1.5s-1.53.6716-1.53 1.5v2c0 4.1421 3.425 7.5 7.65 7.5 4.225 0 7.65-3.3579 7.65-7.5v-5c0-.8284-.685-1.5-1.53-1.5s-1.53.6716-1.53 1.5m-6.12-3V11m0-5.5v-1c0-.8284.685-1.5 1.53-1.5s1.53.6716 1.53 1.5v1m0 0V11m0-5.5c0-.8284.685-1.5 1.53-1.5s1.53.6716 1.53 1.5v3m0 0V11"
    />
  </svg>
);
const ForwardRef = forwardRef(Hand);
const Memo = memo(ForwardRef);
export default Memo;
