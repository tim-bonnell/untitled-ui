import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ThermometerWarm = (
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
      d="M12 8.3a3.5998 3.5998 0 0 0-3.3702 5.0099A3.6 3.6 0 0 0 10.2 15.05M12 2.9v1.8M7.14 16.76l-1.26 1.26M4.8 11.9H3m4.14-4.86L5.88 5.78m13.32 7.5016V3.8c0-.9941-.8059-1.8-1.8-1.8-.9941 0-1.8.8059-1.8 1.8v9.4816c-1.076.6225-1.8 1.7859-1.8 3.1184 0 1.9882 1.6118 3.6 3.6 3.6 1.9882 0 3.6-1.6118 3.6-3.6 0-1.3325-.724-2.4959-1.8-3.1184Z"
    />
  </svg>
);
const ForwardRef = forwardRef(ThermometerWarm);
const Memo = memo(ForwardRef);
export default Memo;
