import { DarkMode, LightMode } from "@mui/icons-material"
import { IconButton, Menu, MenuItem, useColorScheme } from "@mui/material"
import { useCallback, useState } from "react"

export const ColorModeToggle = () => {
  const { mode, setMode } = useColorScheme()
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)

  // const icon = {
  //   light: <LightMode />,
  //   dark: <DarkMode />,
  // }[resolvedMode]

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }, [])

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [])

  const handleMode = useCallback((mode: 'light' | 'dark') => () => {
    setMode(mode)
    handleClose()
  }, [handleClose, setMode])

  if (!mode) {
    return null
  }

  return (
    <>
      <IconButton
        onClick={handleClick}
        disableRipple
        size="small"
        sx={{
          borderRadius: "4px",
          "&:hover, &:focus": {
            backgroundColor: "action.hover",
          },
        }}
        aria-controls={open ? "color-scheme-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {/* {icon} */}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            variant: "outlined",
            sx: {
              my: "4px",
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem selected={mode === "light"} onClick={handleMode("light")}>
          Light
        </MenuItem>
        <MenuItem selected={mode === "dark"} onClick={handleMode("dark")}>
          Dark
        </MenuItem>
      </Menu>
    </>
  )
}