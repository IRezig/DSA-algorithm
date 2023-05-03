import React from "react"
import Snackbar from "@mui/material/Snackbar"
import { Alert } from "@mui/material"
import Slide, { SlideProps } from "@mui/material/Slide"

interface SnackProps {
  open: boolean
  setOpen: (open: boolean) => void
  severity: "success" | "info" | "warning" | "error" | undefined
  message: string
}

export const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction="right" />
}

export const Snack = (props: SnackProps) => {
  const handleClose = () => props.setOpen(false)
  return (
    <Snackbar
      open={props.open}
      onClose={handleClose}
      security={props.severity}
      autoHideDuration={6000}
      TransitionComponent={SlideTransition}
      message={props.message}>
      <Alert onClose={handleClose} severity={props.severity} sx={{ width: "100%" }}>
        {props.message}
      </Alert>
    </Snackbar>
  )
}
