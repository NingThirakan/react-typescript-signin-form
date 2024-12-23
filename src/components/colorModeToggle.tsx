import { DarkMode, LightMode } from "@mui/icons-material"
import { FormControlLabel, Radio, radioClasses, RadioGroup, useColorScheme } from "@mui/material"

export const ColorModeToggle = () => {
  const { mode, setMode } = useColorScheme()

  if (!mode) {
    return null
  }

  return (
    <RadioGroup
      defaultValue="dark"
      row
      aria-label="Color scheme"
      name="color-scheme-segmented-control"
      sx={{
        display: "flex",
        gap: '4px',
        "& svg": { transform: "scale(0.8)", transition: "0.2s" },
        [`& .${radioClasses.checked} svg`]: { transform: "scale(1)" },
        [`& .${radioClasses.root}`]: {
          width: '44px',
          height: '44px',
          border: "1px solid transparent",
          borderRadius: "8px",
          [`&.${radioClasses.checked}`]: {
            border: "1px solid",
            borderColor: "divider",
            color: "text.primary",
          },
        },
        "& label": { margin: 0 },
      }}
      onChange={(event) => setMode(event.target.value as "light" | "dark")}
    >
      <FormControlLabel
        value="light"
        control={
          <Radio
            color="default"
            disableTouchRipple
            checkedIcon={<LightMode />}
            icon={<LightMode />}
          />
        }
        label=""
      />
      <FormControlLabel
        value="dark"
        control={
          <Radio
            color="default"
            disableTouchRipple
            checkedIcon={<DarkMode />}
            icon={<DarkMode />}
          />
        }
        label=""
      />
    </RadioGroup>
  )
}