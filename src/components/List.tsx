import React, { useState } from "react"
import { styled } from "@mui/material"
import { Link, Checkbox } from "@mui/material"
import LinkedIn from "../icons/LinkedIn"
import { Snack } from "./Alert"

export interface ListProps {
  items: { id: number; name: string; link: string }[]
  columns: { field: string; headerName: string; width: number }[]
}

const Table = styled("table")(() => ({
  border: "1px solid #ccc",
  borderCollapse: "collapse",
  width: "700px",
}))

const Line = styled("tr")(() => ({
  padding: "10px",
  border: "1px solid #ccc",
}))

const Header = styled("th")(() => ({
  height: "40px",
  padding: "10px",
  border: "1px solid #ccc",
}))

const Item = styled("td")(() => ({
  padding: "10px",
  border: "1px solid #ccc",
}))

export const TList = (props: ListProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Table>
      <Snack open={open} setOpen={setOpen} severity="success" message={"Question is marked as done"} />
      <Line>
        <Header>Done</Header>
        <Header>ID</Header>
        <Header>Questions</Header>
        <Header>Links</Header>
      </Line>
      {props.items.map((item, index) => (
        <Line key={index}>
          <Item>
            <Checkbox
              onClick={() => {
                setOpen(true)
              }}
            />
          </Item>
          <Item>{item.id}</Item>
          <Item>
            <Link target="_blank" href={item.link}>
              {item.name}
            </Link>
          </Item>
          <Item>
            <Link target="_blank" href={item.link}>
              <LinkedIn />
            </Link>
          </Item>
        </Line>
      ))}
    </Table>
  )
}
