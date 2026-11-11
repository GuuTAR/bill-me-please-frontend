import { LANGUAGE } from '@/enum/global'

export const TITLE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'All items',
  [LANGUAGE.THAI]: 'รายการทั้งหมด',
}

export const TOTAL: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Total',
  [LANGUAGE.THAI]: 'รวม',
}

export const EMPTY_TITLE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'No items yet',
  [LANGUAGE.THAI]: 'ยังไม่มีรายการ',
}

export const EMPTY_SUBTITLE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Add your first item to get started.',
  [LANGUAGE.THAI]: 'เพิ่มรายการแรกเพื่อเริ่มคำนวณ',
}

export const DELETE: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Delete item',
  [LANGUAGE.THAI]: 'ลบรายการ',
}
