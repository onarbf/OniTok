interface Props {
  fill?: string
}
export default function Heart ({ fill = 'currentColor' }: Props): JSX.Element {
  return (
        <svg viewBox="0 0 48 48" fill={fill} xmlns="http://www.w3.org/2000/svg" width="32px">
            <g filter="url(#Icon_Color-Like_Shadow_Alt_1_svg__b)" clipPath="url(#Icon_Color-Like_Shadow_Alt_1_svg__a)">
                <path fillRule="evenodd" clipRule="evenodd" d="M15 4.5c6 0 9 4 9 4s3-4 9-4c7 0 12 5.5 12 12.5 0 8-6.54 15.13-12.5 20.5C28.82 40.81 26 43 24 43s-4.9-2.2-8.5-5.5C9.64 32.13 3 25 3 17 3 10 8 4.5 15 4.5Z" fill="#fff" fillOpacity="0.9" shapeRendering="crispEdges">
                </path>
            </g>
        </svg>
  )
}
