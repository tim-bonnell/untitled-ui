import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const BellRinging03 = (
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
      d="M13.7549 18.3c0 1.4912-1.2088 2.7-2.7 2.7s-2.7-1.2088-2.7-2.7m4.3169-11.4853a2.2427 2.2427 0 0 0 .6331-1.5647c0-1.2426-1.0073-2.25-2.25-2.25-1.2426 0-2.25 1.0074-2.25 2.25 0 .608.2412 1.1598.6332 1.5647m-6.891 1.876c-.013-1.3062.6913-2.526 1.829-3.168m15.1867 3.168c.0129-1.3062-.6913-2.526-1.829-3.168M16.4549 11.28c0-1.2412-.5689-2.4316-1.5816-3.3093C13.8606 7.0931 12.4871 6.6 11.0549 6.6s-2.8057.493-3.8184 1.3707C6.2238 8.8484 5.655 10.0388 5.655 11.28c0 2.0536-.5093 3.5555-1.1447 4.6302-.7243 1.2249-1.0864 1.8373-1.0721 1.9836.0164.1673.0465.2202.1822.3194.1187.0868.7148.0868 1.907.0868h11.0552c1.1923 0 1.7884 0 1.907-.0868.1357-.0992.1659-.1521.1822-.3194.0143-.1463-.3478-.7587-1.072-1.9836-.6355-1.0747-1.1448-2.5766-1.1448-4.6302Z"
    />
  </svg>
);
const ForwardRef = forwardRef(BellRinging03);
const Memo = memo(ForwardRef);
export default Memo;
