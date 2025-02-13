import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ArrowCircleBrokenUpLeft = (
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
      d="M13.3306 20.6946c-3.0026.8018-6.339.0249-8.6946-2.3306-3.5147-3.5148-3.5147-9.2132 0-12.728 3.5148-3.5147 9.2132-3.5147 12.728 0 2.3555 2.3556 3.1324 5.692 2.3306 8.6946m-11.3944.3695v-5.4m0 0h5.4m-5.4 0L17.3 18.3"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowCircleBrokenUpLeft);
const Memo = memo(ForwardRef);
export default Memo;
