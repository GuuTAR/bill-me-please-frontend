import { Paper, Stack, styled, Typography } from '@mui/material'

export const Root = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2.25),
}))

export const Header = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  gap: theme.spacing(1.5),
}))

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.text.primary,
}))

export const Total = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'baseline',
  gap: theme.spacing(0.5),
}))

export const TotalLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}))

export const TotalAmount = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.text.primary,
}))

export const EmptyState = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  gap: theme.spacing(0.5),
  padding: theme.spacing(3, 0),
  textAlign: 'center',
}))

export const EmptyTitle = styled(Typography)(() => ({
  fontWeight: 700,
}))

export const EmptySubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}))

export const BillItem = styled(Stack)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(0.5, 0),

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0.25, 0),
  },
}))

// Desktop: icon | title + meta | amount | actions
// Tablet & mobile: two-row grid with meta and actions under the title and amount
export const BillRow = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1.5),

  [theme.breakpoints.down('md')]: {
    display: 'grid',
    gridTemplateColumns: '32px minmax(0, 1fr) auto',
    gridTemplateAreas: '"icon main amount" "icon meta actions"',
    columnGap: theme.spacing(1.25),
    rowGap: theme.spacing(0.25),
    padding: theme.spacing(1, 0.5),
  },
}))

export const BillIcon = styled(Stack)(({ theme }) => ({
  width: 38,
  height: 38,
  flex: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 11,
  background: theme.palette.background.default,
  color: theme.palette.text.secondary,

  [theme.breakpoints.down('md')]: {
    gridArea: 'icon',
    width: 32,
    height: 32,
    borderRadius: 9,
  },
}))

export const BillMain = styled(Stack)(({ theme }) => ({
  flex: '1 1 auto',
  minWidth: 0,
  gap: theme.spacing(0.25),

  [theme.breakpoints.down('md')]: {
    gridArea: 'main',
    alignSelf: 'end',
  },
}))

export const BillTitle = styled(Typography)(() => ({
  fontWeight: 700,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}))

export const BillMetaDesktop = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

export const BillMetaMobile = styled(Stack)(({ theme }) => ({
  display: 'none',
  color: theme.palette.text.secondary,

  [theme.breakpoints.down('md')]: {
    display: 'flex',
    gridArea: 'meta',
    alignSelf: 'start',
  },
}))

export const BillMetaLine = styled(Typography)(() => ({
  lineHeight: 1.45,
}))

export const BillAmount = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  whiteSpace: 'nowrap',

  [theme.breakpoints.down('md')]: {
    gridArea: 'amount',
    justifySelf: 'end',
    alignSelf: 'end',
  },
}))

export const BillActions = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  flex: 'none',
  gap: theme.spacing(0.25),

  [theme.breakpoints.down('md')]: {
    gridArea: 'actions',
    justifySelf: 'end',
    alignSelf: 'start',
    marginRight: theme.spacing(-0.75),

    '& .MuiIconButton-root': {
      width: 32,
      height: 32,
    },
  },
}))
