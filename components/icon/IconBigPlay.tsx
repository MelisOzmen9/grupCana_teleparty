import { FC } from "react"
import Icon, { IconProps } from "./Icon"

const IconBigPlay: FC<IconProps> = ({ className = "" }) => {
  return (
    <Icon className={className} sizeClassName={"h-10 w-10"}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
      />
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </Icon>
  )
}

export default IconBigPlay
