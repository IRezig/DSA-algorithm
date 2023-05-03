import React from "react"
import { Typography, styled } from "@mui/material"
import clsx from "clsx"

const PREFIX_DOCUMENTATION_CARD = "TagCard"

const classes = {
  headerButton: `${PREFIX_DOCUMENTATION_CARD}-header-button`,
  orange: `${PREFIX_DOCUMENTATION_CARD}-category-orange`,
  purple: `${PREFIX_DOCUMENTATION_CARD}-category-purple`,
  blue: `${PREFIX_DOCUMENTATION_CARD}-category-blue`,
  green: `${PREFIX_DOCUMENTATION_CARD}-category-green`,
}
const Tag = styled("div")(() => ({
  borderRadius: "8px",
  padding: "4px 8px",
  fontSize: "10px",
  fontWeight: 600,
  marginRight: "5px",
  [`&.${classes.orange}`]: {
    backgroundColor: "#FFF9F2",
    color: "#ff9c4d",
  },
  [`&.${classes.purple}`]: {
    backgroundColor: "#F5F2FF",
    color: "#794dff",
  },
  [`&.${classes.blue}`]: {
    backgroundColor: "#e5ebff",
    color: "#1d38d4",
  },
  [`&.${classes.green}`]: {
    backgroundColor: "#edfff6",
    color: "#02b359",
  },
}))

export interface TagProps {
  name: string
  color: string
}
export const TagCard = (props: TagProps) => {
  const { color } = props

  return (
    <Tag
      className={clsx(
        color === "purple" && classes.purple,
        color === "orange" && classes.orange,
        color === "blue" && classes.blue,
        color === "green" && classes.green
      )}>
      <Typography>{props.name}</Typography>
    </Tag>
  )
}
