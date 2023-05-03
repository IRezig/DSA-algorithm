import "./App.css"
import { TList } from "./components/List"
import { Dashboard } from "./components/Dashboard"
import { arrayDSA, arrayColumns } from "./constant/data"
import { Typography, styled, Grid } from "@mui/material"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  const Root = styled("div")(() => ({
    margin: "20px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }))

  return (
    <Router>
      <Root className="App">
        <Grid container flexDirection={"column"} alignContent="center">
          <Typography variant="h4" component="h1" gutterBottom>
            Data Structures and Algorithms
          </Typography>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/array" element={<TList items={arrayDSA} columns={arrayColumns} />}></Route>
          </Routes>
        </Grid>
      </Root>
    </Router>
  )
}

export default App
