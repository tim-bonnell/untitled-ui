import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Cube02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 2.5v9.5001m0 0 8.5-4.7223M12 12 3.5 7.2778M12 12v9.5m8.5-4.7778-7.723-4.2905c-.2836-.1576-.4254-.2364-.5755-.2673a1.0013 1.0013 0 0 0-.4029 0c-.1502.0309-.292.1097-.5756.2673L3.5 16.7223m17.5-.6637v-8.117c0-.3427 0-.514-.0505-.6668a1 1 0 0 0-.2141-.364c-.1091-.1183-.2588-.2015-.5584-.368l-7.4-4.111c-.2836-.1576-.4254-.2364-.5755-.2673a1.0002 1.0002 0 0 0-.4029 0c-.1502.031-.292.1097-.5756.2673l-7.4 4.111c-.2995.1665-.4493.2497-.5584.368a1.0002 1.0002 0 0 0-.2141.364C3 7.4276 3 7.5988 3 7.9415v8.1171c0 .3427 0 .514.0505.6668a.999.999 0 0 0 .2141.3639c.109.1184.2588.2016.5584.368l7.4 4.1111c.2836.1576.4254.2363.5756.2672a.9977.9977 0 0 0 .4029 0c.1501-.0309.2919-.1096.5755-.2672l7.4-4.1111c.2996-.1664.4493-.2496.5584-.368a.999.999 0 0 0 .2141-.3639C21 16.5726 21 16.4013 21 16.0586Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Cube02);
const Memo = memo(ForwardRef);
export default Memo;
