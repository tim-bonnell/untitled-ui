import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Cube04 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M20.5 16H8m0 0V3.5M8 16l-4.5 4.5M3.5 8H16m0 0v12.5M16 8l4.5-4.5m.5 11.8373V3.8c0-.28 0-.42-.0545-.527a.4996.4996 0 0 0-.2185-.2185C20.62 3 20.48 3 20.2 3H8.6627c-.2445 0-.3668 0-.482.0276a1 1 0 0 0-.289.1198c-.1009.0618-.1874.1483-.3603.3212L3.4686 7.5314c-.173.173-.2594.2594-.3212.3603a1 1 0 0 0-.1198.289C3 8.296 3 8.4183 3 8.6628V20.2c0 .28 0 .42.0545.527a.4996.4996 0 0 0 .2185.2185C3.38 21 3.52 21 3.8 21h11.5373c.2445 0 .3668 0 .4819-.0276a.9981.9981 0 0 0 .2891-.1198c.1009-.0618.1874-.1483.3603-.3212l4.0628-4.0628c.1729-.1729.2594-.2594.3212-.3603a.9981.9981 0 0 0 .1198-.2891C21 15.7041 21 15.5818 21 15.3373Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Cube04);
const Memo = memo(ForwardRef);
export default Memo;
