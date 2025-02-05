import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Modem01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M16.2427 4.7573c2.3431 2.3432 2.3431 6.1422 0 8.4853m-8.4854 0c-2.3431-2.3431-2.3431-6.1421 0-8.4853M4.8583 16C1.0236 12.0894 1.047 5.8106 4.9287 1.929m14.1426 0c3.8816 3.8816 3.9051 10.1604.0704 14.071M12 16V9M5 22h14c.9319 0 1.3978 0 1.7653-.1522a2.0001 2.0001 0 0 0 1.0824-1.0824C22 20.3978 22 19.9319 22 19c0-.9319 0-1.3978-.1523-1.7654a2.0001 2.0001 0 0 0-1.0824-1.0824C20.3978 16 19.9319 16 19 16H5c-.932 0-1.3979 0-1.7654.1522-.49.203-.8794.5924-1.0824 1.0824C2 17.6022 2 18.0681 2 19c0 .9319 0 1.3978.1522 1.7654.203.49.5923.8794 1.0824 1.0824C3.6022 22 4.0681 22 5 22Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Modem01);
const Memo = memo(ForwardRef);
export default Memo;
