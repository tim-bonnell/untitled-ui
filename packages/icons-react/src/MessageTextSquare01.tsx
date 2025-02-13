import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const MessageTextSquare01 = (
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
      d="M7 8.5h5M7 12h8m-5.3163 6H16.2c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C21 15.7202 21 14.8802 21 13.2V7.8c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C18.7202 3 17.8802 3 16.2 3H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.2798 3 6.1198 3 7.8v12.5355c0 .5329 0 .7993.1092.9361a.5.5 0 0 0 .3913.1881c.1751-.0002.3832-.1666.7993-.4995l2.3854-1.9084c.4873-.3898.731-.5847 1.0023-.7233.2407-.123.497-.2129.7617-.2672C8.7477 18 9.0597 18 9.6838 18Z"
    />
  </svg>
);
const ForwardRef = forwardRef(MessageTextSquare01);
const Memo = memo(ForwardRef);
export default Memo;
