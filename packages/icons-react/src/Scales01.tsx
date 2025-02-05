import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Scales01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 15.6v-.1352c0-.2848 0-.4272.0218-.566a1.8 1.8 0 0 1 .0958-.3606c.0499-.1313.1205-.2549.2619-.5023L6.6 8.4M3 15.6c0 1.9882 1.6118 3.6 3.6 3.6 1.9882 0 3.6-1.6118 3.6-3.6m-7.2 0v-.18c0-.252 0-.378.049-.4743a.4502.4502 0 0 1 .1967-.1967c.0963-.049.2223-.049.4743-.049h5.76c.252 0 .378 0 .4743.049a.4505.4505 0 0 1 .1967.1967c.049.0963.049.2223.049.4743v.18M6.6 8.4l3.2205 5.6359c.1414.2474.212.371.2619.5023.0444.1166.0765.2374.0958.3606.0218.1388.0218.2812.0218.566V15.6M6.6 8.4l10.8-1.8m-3.6 7.2v-.1352c0-.2848 0-.4272.0218-.566a1.7928 1.7928 0 0 1 .0958-.3606c.0499-.1313.1205-.2549.2619-.5023L17.4 6.6m-3.6 7.2c0 1.9882 1.6118 3.6 3.6 3.6 1.9882 0 3.6-1.6118 3.6-3.6m-7.2 0v-.18c0-.252 0-.378.049-.4743a.4505.4505 0 0 1 .1967-.1967c.0963-.049.2223-.049.4743-.049h5.76c.252 0 .378 0 .4743.049a.4505.4505 0 0 1 .1967.1967c.049.0963.049.2223.049.4743v.18m-3.6-7.2 3.2205 5.6359c.1414.2474.212.371.2619.5023.0444.1166.0765.2374.0958.3606.0218.1388.0218.2812.0218.566V13.8M12 3v4.5"
    />
  </svg>
);
const ForwardRef = forwardRef(Scales01);
const Memo = memo(ForwardRef);
export default Memo;
