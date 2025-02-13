import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const FastBackward = (
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
      d="M21.9997 16.437c0 1.13 0 1.6951-.2283 1.9721a1 1 0 0 1-.8091.3633c-.3587-.0134-.781-.3888-1.6256-1.1395l-4.9917-4.4371c-.4653-.4136-.6979-.6204-.7836-.8646a.9997.9997 0 0 1 0-.6625c.0857-.2442.3183-.451.7836-.8646l4.9917-4.437c.8446-.7508 1.2669-1.1262 1.6256-1.1396a1 1 0 0 1 .8091.3634c.2283.277.2283.842.2283 1.972v8.8741Zm-11 0c0 1.13 0 1.6951-.2283 1.9721a1 1 0 0 1-.8091.3633c-.3587-.0134-.781-.3888-1.6256-1.1395L3.345 13.1958c-.4653-.4136-.698-.6204-.7837-.8646a.9998.9998 0 0 1 0-.6625c.0858-.2442.3184-.451.7837-.8646l4.9917-4.437c.8446-.7508 1.2669-1.1262 1.6256-1.1396a1 1 0 0 1 .8091.3634c.2283.277.2283.842.2283 1.972v8.8741Z"
    />
  </svg>
);
const ForwardRef = forwardRef(FastBackward);
const Memo = memo(ForwardRef);
export default Memo;
