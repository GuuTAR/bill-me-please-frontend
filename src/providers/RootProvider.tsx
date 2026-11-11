'use client'

import { ReactNode } from 'react'

import { ThemeProvider } from '@mui/material'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { theme } from '@/theme/theme'

import { AppDataProvider } from '@/providers/AppDataProvider'
import { BillDataProvider } from '@/providers/BillDataProvider'

import Notification from '@/views/components/core/Notification'
import Rendering from '@/views/components/core/Rendering'

type Props = {
  children: ReactNode
}

export default function RootProvider({ children }: Props) {
  return (
    <AppRouterCacheProvider>
      <AppDataProvider>
        <BillDataProvider>
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Rendering>{children}</Rendering>
              <Notification />
            </LocalizationProvider>
          </ThemeProvider>
        </BillDataProvider>
      </AppDataProvider>
    </AppRouterCacheProvider>
  )
}
