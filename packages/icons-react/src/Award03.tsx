import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Award03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M7.8687 15.4599 7 22l4.5884-2.753c.1497-.0898.2245-.1347.3044-.1523a.5.5 0 0 1 .2144 0c.0799.0176.1547.0625.3044.1523L17 22l-.8681-6.5429m.294-11.2082c.1544.3735.4509.6704.8241.8254l1.3089.5422a1.5246 1.5246 0 0 1 .8251 1.9919l-.5418 1.308a1.522 1.522 0 0 0 .0005 1.1673l.5408 1.3076a1.5247 1.5247 0 0 1-.8253 1.9926l-1.3079.5417a1.5247 1.5247 0 0 0-.8254.8242l-.5422 1.309a1.5244 1.5244 0 0 1-1.9918.825l-1.3079-.5418a1.5247 1.5247 0 0 0-1.1664.0009l-1.3089.5414a1.5244 1.5244 0 0 1-1.9906-.8245l-.5423-1.3094a1.5245 1.5245 0 0 0-.8242-.8254l-1.3089-.5422a1.5241 1.5241 0 0 1-.8254-1.9909l.5418-1.308a1.5245 1.5245 0 0 0-.0009-1.1664l-.541-1.31a1.5246 1.5246 0 0 1 .8253-1.9924l1.308-.5418a1.5245 1.5245 0 0 0 .825-.8233l.5421-1.3089a1.5245 1.5245 0 0 1 1.9918-.825l1.308.5417c.3735.1544.7931.154 1.1664-.0008l1.3094-.5401a1.5245 1.5245 0 0 1 1.9915.825l.5423 1.3093-.0001-.0023Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Award03);
const Memo = memo(ForwardRef);
export default Memo;
