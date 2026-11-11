import { useMemo } from 'react'

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'

import { BillMeta } from '@/types/BillMeta'

import { billService } from '@/services/billService'
import { formatService } from '@/services/formatService'

import { useAppData } from '@/providers/AppDataProvider'
import { useBillData } from '@/providers/BillDataProvider'

import CoreIconButton from '@/views/components/core/CoreIconButton'

import * as BillLanguage from '@/lang/bill'

import * as Language from './lang'
import * as Styles from './style'

export default function BillListSection() {
  const { language } = useAppData()
  const { members, bills, handleDeleteBill } = useBillData()

  const memberNames: Record<string, string> = useMemo(
    () => Object.fromEntries(members.map((member) => [member.id, member.name])),
    [members],
  )

  const total: number = useMemo(() => bills.reduce((sum, bill) => sum + billService.getBillTotal(bill), 0), [bills])

  return (
    <Styles.Root>
      <Styles.Header>
        <Styles.Title variant="h6">{Language.TITLE[language]}</Styles.Title>
        <Styles.Total>
          <Styles.TotalLabel variant="body2">{Language.TOTAL[language]}</Styles.TotalLabel>
          <Styles.TotalAmount variant="body2">{formatService.formatBaht(total)}</Styles.TotalAmount>
        </Styles.Total>
      </Styles.Header>

      {!bills.length ? (
        <Styles.EmptyState>
          <Styles.EmptyTitle variant="body1">{Language.EMPTY_TITLE[language]}</Styles.EmptyTitle>
          <Styles.EmptySubtitle variant="body2">{Language.EMPTY_SUBTITLE[language]}</Styles.EmptySubtitle>
        </Styles.EmptyState>
      ) : null}

      {bills.map((bill) => {
        const payerNames: string[] = bill.payers.map((payer) => memberNames[payer.memberId] ?? BillLanguage.UNKNOWN_MEMBER)
        const meta: BillMeta = billService.getBillMeta(bill, payerNames, language)

        return (
          <Styles.BillItem key={bill.id}>
            <Styles.BillRow>
              <Styles.BillIcon>
                <ReceiptLongIcon fontSize="small" />
              </Styles.BillIcon>
              <Styles.BillMain>
                <Styles.BillTitle variant="body1">{bill.title}</Styles.BillTitle>
                <Styles.BillMetaDesktop variant="caption">{meta.full}</Styles.BillMetaDesktop>
              </Styles.BillMain>
              <Styles.BillAmount variant="body1">
                {formatService.formatBaht(billService.getBillTotal(bill))}
              </Styles.BillAmount>
              <Styles.BillMetaMobile>
                <Styles.BillMetaLine variant="caption">{meta.mobileLineA}</Styles.BillMetaLine>
                <Styles.BillMetaLine variant="caption">{meta.mobileLineB}</Styles.BillMetaLine>
              </Styles.BillMetaMobile>
              <Styles.BillActions>
                <CoreIconButton
                  aria-label={Language.DELETE[language]}
                  color="error"
                  onClick={() => handleDeleteBill(bill.id)}
                >
                  <DeleteOutlinedIcon fontSize="small" />
                </CoreIconButton>
              </Styles.BillActions>
            </Styles.BillRow>
          </Styles.BillItem>
        )
      })}
    </Styles.Root>
  )
}
