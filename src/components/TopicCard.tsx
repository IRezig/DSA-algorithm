import * as React from "react"
import { Link } from "react-router-dom"
import { styled, Typography, Grid } from "@mui/joy"

import { TagCard } from "./TagCard"

export interface TopicCardProps {
  topic: { id: number; name: string; link: string; totalQuestions: number }
}

export const TopicCard = (props: TopicCardProps) => {
  const Root = styled(Grid)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }))

  const StyledCard = styled(Link)(() => ({
    width: 380,
    height: 200,
    border: "1px solid #ccc",
    borderRadius: "10px",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "#f5f5f5",
    },
  }))

  const { topic } = props
  return (
    <Root>
      <StyledCard to={topic.link}>
        <Grid sx={{ padding: "20px" }}>
          <Grid container flex="flex" flexDirection="row" justifyContent="space-between">
            <Typography level="h6" component="h2" gutterBottom>
              {topic.name}
            </Typography>
            <TagCard name="Solve Now" color="purple" />
          </Grid>
          <Typography level="h6" component="h2" gutterBottom>
            Total Questions: {topic.totalQuestions}
          </Typography>
        </Grid>
      </StyledCard>
    </Root>
  )
}
