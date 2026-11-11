import { LANGUAGE } from '@/enum/global'

export const PAID_BY: Record<LANGUAGE, (payer: string) => string> = {
  [LANGUAGE.ENGLISH]: (payer) => `Paid by ${payer}`,
  [LANGUAGE.THAI]: (payer) => `${payer} จ่าย`,
}

export const SPLIT_COUNT: Record<LANGUAGE, (count: number) => string> = {
  [LANGUAGE.ENGLISH]: (count) => `Split ${count} ways`,
  [LANGUAGE.THAI]: (count) => `หาร ${count} คน`,
}

export const PER_PERSON: Record<LANGUAGE, (amount: string) => string> = {
  [LANGUAGE.ENGLISH]: (amount) => `${amount} each`,
  [LANGUAGE.THAI]: (amount) => `คนละ ${amount}`,
}

export const NO_PARTICIPANTS: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'No one to split',
  [LANGUAGE.THAI]: 'ไม่มีคนหาร',
}

export const NOT_COUNTED: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Not counted',
  [LANGUAGE.THAI]: 'ไม่นำมาคิด',
}

export const NO_PARTICIPANTS_LONG: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'No one to split (not counted)',
  [LANGUAGE.THAI]: 'ไม่มีคนหาร (ไม่นำมาคิด)',
}

export const UNKNOWN_MEMBER: string = '?'
