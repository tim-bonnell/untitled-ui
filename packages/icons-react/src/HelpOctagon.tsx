import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const HelpOctagon = (
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
      d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01M3 7.9414v8.1171c0 .3427 0 .514.0505.6668a.9999.9999 0 0 0 .2141.3639c.109.1184.2588.2016.5584.368l7.4 4.1111c.2836.1575.4254.2363.5755.2672.133.0273.27.0273.403 0 .1501-.0309.2919-.1097.5755-.2672l7.4-4.1111c.2996-.1664.4493-.2496.5584-.368a.9998.9998 0 0 0 .2141-.3639C21 16.5725 21 16.4012 21 16.0585v-8.117c0-.3427 0-.514-.0505-.6669a1 1 0 0 0-.2141-.3639c-.1091-.1183-.2588-.2015-.5584-.368l-7.4-4.111c-.2836-.1576-.4254-.2364-.5755-.2673a1.0007 1.0007 0 0 0-.403 0c-.1501.031-.2919.1097-.5755.2672l-7.4 4.1112c-.2995.1664-.4493.2496-.5584.3679a1.0002 1.0002 0 0 0-.2141.364C3 7.4273 3 7.5986 3 7.9413Z"
    />
  </svg>
);
const ForwardRef = forwardRef(HelpOctagon);
const Memo = memo(ForwardRef);
export default Memo;
