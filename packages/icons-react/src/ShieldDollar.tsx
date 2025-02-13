import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ShieldDollar = (
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
      d="M9.213 14.5001c.3122.5945.9356 1 1.6537 1H13c1.1046 0 2-.8954 2-2s-.8954-2-2-2h-2c-1.1046 0-2-.8954-2-2 0-1.1045.8954-2 2-2h2.1333c.7181 0 1.3415.4055 1.6537 1M12 6.0001v1.5m0 8v1.5m8-5c0 4.9085-5.354 8.4784-7.302 9.6149-.2214.1292-.3321.1937-.4883.2272-.1213.026-.2981.026-.4194 0-.1562-.0335-.2669-.098-.4883-.2272C9.354 20.4785 4 16.9086 4 12.0001V7.2177c0-.7995 0-1.1993.1308-1.5429a2 2 0 0 1 .5469-.7892c.2758-.243.6501-.3834 1.3987-.6641l5.3618-2.0107c.2079-.078.3118-.117.4188-.1324a1.0002 1.0002 0 0 1 .286 0c.107.0155.2109.0544.4188.1324l5.3618 2.0107c.7486.2807 1.1229.421 1.3987.6641.2437.2148.4314.4857.5469.7892C20 6.0184 20 6.4182 20 7.2178V12Z"
    />
  </svg>
);
const ForwardRef = forwardRef(ShieldDollar);
const Memo = memo(ForwardRef);
export default Memo;
