import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Eraser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m17.9995 13-7-7m10 15h-13m2.9373-.9372 8.6686-8.6687c1.1881-1.188 1.7821-1.782 2.0047-2.467a3.0011 3.0011 0 0 0 0-1.8541c-.2226-.685-.8166-1.279-2.0047-2.467l-.2117-.2119c-1.1881-1.188-1.7821-1.782-2.4671-2.0046a3 3 0 0 0-1.8541 0c-.685.2226-1.279.8166-2.4671 2.0046L4.3937 12.606c-1.188 1.188-1.7821 1.782-2.0047 2.467a3 3 0 0 0 0 1.8541c.2226.685.8166 1.279 2.0047 2.467l.6686.6687c.3459.3459.5188.5188.7207.6425a2 2 0 0 0 .578.2395C6.5913 21 6.8358 21 7.325 21h1.349c.4892 0 .7338 0 .964-.0552.204-.049.3992-.1298.5781-.2395.2019-.1237.3748-.2966.7207-.6425Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Eraser);
const Memo = memo(ForwardRef);
export default Memo;
