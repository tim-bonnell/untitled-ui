import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Trophy01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 13.7c-2.9823 0-5.4-2.4177-5.4-5.4v-5c0-.3725 0-.5587.0543-.7078a.9.9 0 0 1 .5379-.538C7.3413 2 7.5275 2 7.9 2h8.2c.3725 0 .5587 0 .7078.0543a.9.9 0 0 1 .5379.5379c.0543.1491.0543.3353.0543.7078v5c0 2.9823-2.4177 5.4-5.4 5.4Zm0 0v2.7m5.4-12.6h2.25c.4193 0 .629 0 .7944.0685a.9003.9003 0 0 1 .4871.487C21 4.521 21 4.7307 21 5.15v.45c0 .837 0 1.2555-.092 1.5988a2.7 2.7 0 0 1-1.9092 1.9092c-.3433.092-.7618.092-1.5988.092M6.6 3.8H4.35c-.4193 0-.629 0-.7944.0685a.9.9 0 0 0-.487.487C3 4.521 3 4.7307 3 5.15v.45c0 .837 0 1.2555.092 1.5988A2.7 2.7 0 0 0 5.0012 9.108C5.3445 9.2 5.763 9.2 6.6 9.2M7.9 20h8.2a.4.4 0 0 0 .4-.4c0-1.7673-1.4327-3.2-3.2-3.2h-2.6c-1.7673 0-3.2 1.4327-3.2 3.2a.4.4 0 0 0 .4.4Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Trophy01);
const Memo = memo(ForwardRef);
export default Memo;
