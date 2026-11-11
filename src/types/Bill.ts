import { BillPayer } from '@/types/BillPayer'

export type Bill = {
  id: string
  title: string
  payers: BillPayer[]
  participantIds: string[]
}
