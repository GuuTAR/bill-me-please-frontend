import { createContext, ReactNode, useCallback, useContext, useState } from 'react'

import { Bill } from '@/types/Bill'
import { Member } from '@/types/Member'

import { DEMO_BILLS, DEMO_MEMBERS } from '@/data/bill'

type BillDataContextType = {
  members: Member[]
  bills: Bill[]
  handleDeleteBill: (billId: string) => void
}

const BillDataContext = createContext<BillDataContextType>({} as BillDataContextType)

type Props = {
  children: ReactNode
}

export const BillDataProvider = ({ children }: Props) => {
  const [members] = useState<Member[]>(DEMO_MEMBERS)
  const [bills, setBills] = useState<Bill[]>(DEMO_BILLS)

  const handleDeleteBill = useCallback((billId: string): void => {
    setBills((prev) => prev.filter((bill) => bill.id !== billId))
  }, [])

  return (
    <BillDataContext.Provider
      value={{
        members,
        bills,
        handleDeleteBill,
      }}
    >
      {children}
    </BillDataContext.Provider>
  )
}

export const useBillData = () => useContext(BillDataContext)
