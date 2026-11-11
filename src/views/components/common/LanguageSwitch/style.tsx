import { Paper, styled, Switch, Typography } from '@mui/material'

import TranslateIcon from '@mui/icons-material/Translate'

type LanguageLabelProps = {
  isActive?: boolean
}

export const Root = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  padding: theme.spacing(0.5, 1.5, 0.5, 1.25),
  borderRadius: 32,
  background: theme.palette.background.paper,
  color: theme.palette.text.secondary,
}))

export const LanguageIcon = styled(TranslateIcon)(({ theme }) => ({
  fontSize: 18,
  marginRight: theme.spacing(0.5),
}))

export const LanguageLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<LanguageLabelProps>(({ theme, isActive }) => ({
  fontWeight: isActive ? 700 : 400,
  color: isActive ? theme.palette.primary.dark : theme.palette.text.secondary,
}))

export const LanguageToggle = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    color: theme.palette.background.paper,
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    background: theme.palette.text.disabled,
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    opacity: 1,
    background: theme.palette.secondary.light,
  },
}))
