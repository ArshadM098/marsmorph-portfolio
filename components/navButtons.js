import Link from 'next/link';
import buttonStyle from "../styles/Base.module.css";


export default function NavButton({label,href,responsive}){
  var s1 = "self-start"
  if(responsive === false){
    s1 = "self-end"
  }
  var W= label.length *10 + 50;
  var H= 50;
  var X = 5;
  var d = "M"+ W + " " + H + "H0V" + X + "L" + X + " 0h" + W + "v" + (H-X) + "Z";
  // console.log(d)
return (
    <svg className={s1 + " md:self-end"}
     width={W+X} height={H} >
        <filter id='inset-shadow'>
  <feOffset
    dx='0'
    dy='0'
  />

  {/* <!-- Shadow blur --> */}
  <feGaussianBlur
    stdDeviation='5'
    result='offset-blur'
  />

  {/* <!-- Invert drop shadow to make an inset shadow --> */}
  <feComposite
    operator='out'
    in='SourceGraphic'
    in2='offset-blur'
    result='inverse'
  />
  
  {/* <!-- Cut color inside shadow --> */}
  <feFlood
    floodColor='black'
    floodOpacity='.95'
    result='color'
  />
  <feComposite
    operator='in'
    in='color'
    in2='inverse'
    result='shadow'
  />

  {/* <!-- Placing shadow over element --> */}
  <feComposite
    operator='over'
    in='shadow'
    in2='SourceGraphic'
  />
</filter>
        <Link href={href} className="hover:no-underline">
        <g transform="matrix(1, 0, 0, 1, 0, 0)">
          <path className="fill-[#1e1e1e] transition-all hover:fill-[#20babe]" d={d}/>
        </g>
        <text x={W/2 + 3}
          y={H/2 + 8}
          fontSize="20"
          fill="#FFFFFF"
          textAnchor="middle"
          className="pointer-events-none"
          // alignment-baseline="middle"
          >
        {label}
        </text>
        </Link>
    </svg>
)
}
