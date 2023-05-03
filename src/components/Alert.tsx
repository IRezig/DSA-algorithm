import React, { useState } from "react"
import Snackbar from "@mui/material/Snackbar"
import { Alert } from "@mui/material"

export interface SnackProps {
  open: boolean
  setOpen: (open: boolean) => void
  severity: "success" | "info" | "warning" | "error" | undefined
  message: string
}

export const Snack = (props: SnackProps) => {
  const handleClose = () => {
    props.setOpen(false)
  }
  return (
    <Snackbar
      open={props.open}
      onClose={handleClose}
      security={props.severity}
      autoHideDuration={6000}
      message={props.message}>
      <Alert onClose={handleClose} severity={props.severity} sx={{ width: "100%" }}>
        {props.message}
      </Alert>
    </Snackbar>
  )
}
