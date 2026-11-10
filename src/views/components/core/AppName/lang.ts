import { LANGUAGE } from '@/enum/global'

export const APP_NAME: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Bill Me Please!',
  [LANGUAGE.THAI]: 'คิดตังเถอะ',
}

export const APP_DESCRIPTION: Record<LANGUAGE, string> = {
  [LANGUAGE.ENGLISH]: 'Bill calculator for group activities',
  [LANGUAGE.THAI]: 'ตัวคำนวณค่าใช้จ่ายสำหรับกิจกรรมกลุ่ม',
}
