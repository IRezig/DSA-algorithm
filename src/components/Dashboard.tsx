import React from "react"
import { Typography, styled, Grid } from "@mui/material"
import { TopicCard } from "./TopicCard"
import { topics } from "../constant/data"

export const Dashboard = () => {
  const Root = styled(Grid)(() => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    width: "80%",
    margin: "0 auto",
  }))

  return (
    <Root container spacing={2}>
      {topics.map(topic => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={topic.id}>
          <TopicCard topic={topic} />
        </Grid>
      ))}
    </Root>
  )
}
