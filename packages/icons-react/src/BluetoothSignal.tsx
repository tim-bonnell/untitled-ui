import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const BluetoothSignal = (
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
      d="m2 7.5 10.8 9L7.4 21V3l5.4 4.5-10.8 9m16.3301-9.45c1.0022 1.3932 1.5925 3.1027 1.5925 4.95 0 1.8473-.5903 3.5568-1.5925 4.95M15.5 9.1715a4.927 4.927 0 0 1 .8872 2.8286 4.927 4.927 0 0 1-.8872 2.8286"
    />
  </svg>
);
const ForwardRef = forwardRef(BluetoothSignal);
const Memo = memo(ForwardRef);
export default Memo;
