import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const HardDrive = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3.45 11.2h17.1M6.6 14.8h3.6M9.27 4h5.46c.9692 0 1.4538 0 1.8816.1476a2.7 2.7 0 0 1 1.0088.6235c.3234.3166.5401.75.9735 1.617l1.9499 3.8998c.1701.3401.2552.5102.3151.6885.0533.1583.0918.3212.1149.4866.0261.1863.0261.3765.0261.7568V14.08c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799c-.5776.2943-1.3337.2943-2.8458.2943H7.32c-1.5121 0-2.2682 0-2.8458-.2943a2.6998 2.6998 0 0 1-1.18-1.1799C3 16.3482 3 15.5921 3 14.08v-1.8602c0-.3803 0-.5705.026-.7568a2.6993 2.6993 0 0 1 .115-.4866c.06-.1783.145-.3484.315-.6885l1.95-3.8999c.4334-.8668.6501-1.3003.9735-1.617a2.7 2.7 0 0 1 1.0088-.6234C7.8161 4 8.3007 4 9.2699 4Z"
    />
  </svg>
);
const ForwardRef = forwardRef(HardDrive);
const Memo = memo(ForwardRef);
export default Memo;
