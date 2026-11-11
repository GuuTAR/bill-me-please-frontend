import { Bill } from '@/types/Bill'
import { Member } from '@/types/Member'

// Sample data shown until bills are loaded from the backend
export const DEMO_MEMBERS: Member[] = [
  { id: 'm1', name: 'ต้น' },
  { id: 'm2', name: 'ฝน' },
  { id: 'm3', name: 'เจ' },
  { id: 'm4', name: 'มิว' },
]

export const DEMO_BILLS: Bill[] = [
  {
    id: 'b1',
    title: 'ค่าที่พัก',
    payers: [{ memberId: 'm1', amount: 4800 }],
    participantIds: ['m1', 'm2', 'm3', 'm4'],
  },
  {
    id: 'b2',
    title: 'หมูกระทะ',
    payers: [{ memberId: 'm2', amount: 1560 }],
    participantIds: ['m1', 'm2', 'm3', 'm4'],
  },
  {
    id: 'b3',
    title: 'เครื่องดื่ม',
    payers: [{ memberId: 'm3', amount: 900 }],
    participantIds: ['m1', 'm3', 'm4'],
  },
]
