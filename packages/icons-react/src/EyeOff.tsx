import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const EyeOff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10.7429 5.0923A8.588 8.588 0 0 1 12.0004 5c5.105 0 8.4549 4.5048 9.5803 6.2868.1362.2157.2043.3235.2424.4899.0287.1249.0286.322 0 .4469-.0382.1663-.1067.2749-.2439.492a17.5188 17.5188 0 0 1-1.3627 1.8649M6.7243 6.715c-2.162 1.4667-3.6299 3.5044-4.3032 4.5703-.1368.2166-.2052.3249-.2434.4912-.0286.1249-.0286.3219 0 .4469.0381.1663.1062.2741.2424.4898C3.5455 14.4952 6.8954 19 12.0004 19c2.0584 0 3.8315-.7324 5.2884-1.7234M3.0004 3l18 18M9.8791 9.8787c-.5429.5429-.8787 1.2929-.8787 2.1213 0 1.6569 1.3432 3 3 3 .8284 0 1.5784-.3358 2.1213-.8787"
    />
  </svg>
);
const ForwardRef = forwardRef(EyeOff);
const Memo = memo(ForwardRef);
export default Memo;
