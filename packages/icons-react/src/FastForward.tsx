import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const FastForward = (
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
      d="M13 16.437c0 1.13 0 1.6951.2283 1.9721a1 1 0 0 0 .8091.3633c.3587-.0134.781-.3888 1.6256-1.1395l4.9917-4.4371c.4653-.4136.6979-.6204.7836-.8646a.9997.9997 0 0 0 0-.6625c-.0857-.2442-.3183-.451-.7836-.8646l-4.9917-4.437c-.8446-.7508-1.2669-1.1262-1.6256-1.1396a1 1 0 0 0-.8091.3634C13 5.8679 13 6.4329 13 7.5629v8.8741Zm-11 0c0 1.13 0 1.6951.2283 1.9721a1 1 0 0 0 .8091.3633c.3587-.0134.781-.3888 1.6256-1.1395l4.9917-4.4371c.4653-.4136.6979-.6204.7836-.8646a.9997.9997 0 0 0 0-.6625c-.0857-.2442-.3183-.451-.7836-.8646L4.663 6.3671c-.8446-.7508-1.267-1.1262-1.6256-1.1396a1 1 0 0 0-.8091.3634C2 5.8679 2 6.4329 2 7.5629v8.8741Z"
    />
  </svg>
);
const ForwardRef = forwardRef(FastForward);
const Memo = memo(ForwardRef);
export default Memo;
