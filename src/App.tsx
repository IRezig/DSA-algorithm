import "./App.css"
import { TList } from "./components/List"
import { arrayDSA, arrayColumns } from "./constant/data"
import { Typography, styled, Grid } from "@mui/material"

function App() {
  const Root = styled("div")(() => ({
    margin: "20px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }))

  return (
    <Root className="App">
      <Grid container flexDirection={"column"} alignContent="center">
        <Typography variant="h4" component="h1" gutterBottom>
          Data Structures and Algorithms
        </Typography>
        <TList items={arrayDSA} columns={arrayColumns} />
      </Grid>
    </Root>
  )
}

export default App
