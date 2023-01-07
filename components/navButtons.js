import buttonStyle from "../styles/Base.module.css"

export default function NavButton({label,href}){
  var W= label.length *10 + 50;
  var H= 50;
  var X = 5;
  var d = "M"+ W + " " + H + "H0V" + X + "L" + X + " 0h" + W + "v" + (H-X) + "Z";
  console.log(d)
return (
    <svg className={buttonStyle.svgStyle} width={W+X+5} height={H} viewBox={"0 0 ${W+X} ${H}"}>
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
    flood-color='black'
    flood-opacity='.95'
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
        <a href={href}>
        <g transform="matrix(1, 0, 0, 1, 0, 0)">
          <path d={d}/>
        </g>
        <text x={W/2 + 3}
          y={H/2 + 8}
          fontSize="20"
          fill="#FFFFFF"
          text-anchor="middle"
          alignment-baseline="middle">
        {label}
        </text>
        </a>
    </svg>
)
}
