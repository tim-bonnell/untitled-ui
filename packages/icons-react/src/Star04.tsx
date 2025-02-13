import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Star04 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m12 2 1.8108 4.708c.2538.6599.3807.9898.578 1.2674a2.699 2.699 0 0 0 .6358.6358c.2776.1973.6075.3242 1.2674.578L21 11l-4.708 1.8108c-.6599.2538-.9898.3807-1.2674.578a2.699 2.699 0 0 0-.6358.6358c-.1973.2776-.3242.6075-.578 1.2674L12 20l-1.8108-4.708c-.2538-.6599-.3807-.9898-.578-1.2674a2.6996 2.6996 0 0 0-.6358-.6358c-.2776-.1973-.6075-.3242-1.2674-.578L3 11l4.708-1.8108c.6599-.2538.9898-.3807 1.2674-.578a2.701 2.701 0 0 0 .6358-.6358c.1973-.2776.3242-.6075.578-1.2674L12 2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Star04);
const Memo = memo(ForwardRef);
export default Memo;
