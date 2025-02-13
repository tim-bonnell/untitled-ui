import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Diamond01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M2.4995 9h19m-11.5-6-2 6 4 11.5 4-11.5-2-6m-1.3854 17.2625 8.9586-10.7503c.1519-.1822.2278-.2734.2568-.375a.4996.4996 0 0 0 0-.2744c-.029-.1017-.1049-.1928-.2568-.375l-4.3333-5.2c-.0882-.1058-.1322-.1587-.1863-.1967a.5002.5002 0 0 0-.1578-.074C16.8314 3 16.7626 3 16.6248 3H7.3742c-.1377 0-.2066 0-.2704.0172a.5.5 0 0 0-.1578.074c-.054.038-.0982.0908-.1863.1966l-4.3334 5.2c-.1518.1822-.2277.2733-.2567.375a.5001.5001 0 0 0 0 .2744c.029.1016.1049.1928.2567.375l8.9587 10.7503c.211.2533.3165.3799.4429.4261a.5002.5002 0 0 0 .3433 0c.1263-.0462.2319-.1728.4429-.4261Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Diamond01);
const Memo = memo(ForwardRef);
export default Memo;
