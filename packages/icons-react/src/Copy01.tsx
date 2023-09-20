import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Copy01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5.7 14.7c-.8387 0-1.258 0-1.5888-.137a1.8 1.8 0 0 1-.9742-.9742C3 13.258 3 12.8387 3 12V5.88c0-1.008 0-1.5121.1962-1.8972a1.8 1.8 0 0 1 .7866-.7866C4.3678 3 4.872 3 5.88 3H12c.8387 0 1.258 0 1.5888.137a1.8 1.8 0 0 1 .9742.9742c.137.3308.137.7501.137 1.5888M12.18 21h5.94c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866C21 19.6321 21 19.1281 21 18.12v-5.94c0-1.0081 0-1.5121-.1962-1.8972a1.8001 1.8001 0 0 0-.7866-.7866C19.6321 9.3 19.1281 9.3 18.12 9.3h-5.94c-1.0081 0-1.5121 0-1.8972.1962a1.8001 1.8001 0 0 0-.7866.7866C9.3 10.6679 9.3 11.1719 9.3 12.18v5.94c0 1.0081 0 1.5121.1962 1.8972.1726.3387.448.614.7866.7866C10.6679 21 11.1719 21 12.18 21Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Copy01);
const Memo = memo(ForwardRef);
export default Memo;
