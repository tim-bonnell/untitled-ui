import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Modem02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6.2047 10.5578c-.479-1.7883-.1176-3.7547 1.084-5.2741m10.5065 5.274c.479-1.7882.1177-3.7547-1.0839-5.274M2.3418 11.5995c-.838-3.1248-.1364-6.5764 2.1047-9.1538m17.2082 9.1538c.8379-3.1248.1364-6.5764-2.1047-9.1538M12 15V9m-6.5 9.5h4M5.2 22h13.6c1.1201 0 1.6801 0 2.108-.218a2.0001 2.0001 0 0 0 .874-.874C22 20.4802 22 19.9201 22 18.8v-.6c0-1.1201 0-1.6801-.218-2.108a2.0007 2.0007 0 0 0-.874-.874C20.4801 15 19.9201 15 18.8 15H5.2c-1.1201 0-1.6802 0-2.108.218a2.0003 2.0003 0 0 0-.874.874C2 16.5198 2 17.0798 2 18.1999v.6c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874.4278.218.9879.218 2.108.218Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Modem02);
const Memo = memo(ForwardRef);
export default Memo;
