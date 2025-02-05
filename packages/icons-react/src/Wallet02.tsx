import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Wallet02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M16 7.9998V4.5005c0-.8318 0-1.2476-.1752-1.5032a1.0002 1.0002 0 0 0-.657-.4204c-.3055-.052-.6831.1223-1.4383.4708L4.859 7.1418c-.6735.3109-1.0103.4663-1.2569.7073a2 2 0 0 0-.4866.7606C3 8.9347 3 9.3055 3 10.0473v4.9525m13.5-.5h.01M3 11.1998v6.6c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874.4278.218.9879.218 2.108.218h11.6c1.1201 0 1.6802 0 2.108-.218a1.9996 1.9996 0 0 0 .874-.874c.218-.4278.218-.9879.218-2.108v-6.6c0-1.1201 0-1.6801-.218-2.108a1.9997 1.9997 0 0 0-.874-.874c-.4278-.218-.9879-.218-2.108-.218H6.2c-1.1201 0-1.6802 0-2.108.218a2 2 0 0 0-.874.874C3 9.5198 3 10.0798 3 11.1999Zm14 3.3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Wallet02);
const Memo = memo(ForwardRef);
export default Memo;
