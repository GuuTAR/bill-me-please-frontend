import { Bill } from '@/types/Bill'
import { BillMeta } from '@/types/BillMeta'
import { LANGUAGE } from '@/enum/global'

import { formatService } from '@/services/formatService'

import * as BillLanguage from '@/lang/bill'

class BillService {
  /**
   * Returns the total of a bill, which is the sum of every payer's amount.
   *
   * @example
   * getBillTotal({ ..., payers: [{ memberId: 'm1', amount: 300 }, { memberId: 'm2', amount: 200 }] }) // 500
   */
  public getBillTotal = (bill: Bill): number => {
    return bill.payers.reduce((sum, payer) => sum + payer.amount, 0)
  }

  /**
   * Returns the summary text shown under a bill: who paid, how many people split it, and the amount per person.
   * `full` is the one-line desktop version; `mobileLineA` and `mobileLineB` are the two-line tablet & mobile version.
   *
   * @example
   * getBillMeta({ ..., payers: [{ memberId: 'm1', amount: 900 }], participantIds: ['m1', 'm2', 'm3'] }, ['ต้น'], LANGUAGE.ENGLISH)
   * // { full: 'Paid by ต้น · Split 3 ways · ฿300 each', mobileLineA: 'Paid by ต้น · Split 3 ways', mobileLineB: '฿300 each' }
   */
  public getBillMeta = (bill: Bill, payerNames: string[], language: LANGUAGE): BillMeta => {
    const paidBy: string = BillLanguage.PAID_BY[language](
      payerNames.length ? payerNames.join(', ') : BillLanguage.UNKNOWN_MEMBER,
    )
    const count: number = bill.participantIds.length

    if (!count) {
      return {
        full: `${paidBy} · ${BillLanguage.NO_PARTICIPANTS_LONG[language]}`,
        mobileLineA: `${paidBy} · ${BillLanguage.NO_PARTICIPANTS[language]}`,
        mobileLineB: BillLanguage.NOT_COUNTED[language],
      }
    }

    const splitCount: string = BillLanguage.SPLIT_COUNT[language](count)
    const perPerson: string = BillLanguage.PER_PERSON[language](
      formatService.formatBaht(this.getBillTotal(bill) / count),
    )
    return {
      full: `${paidBy} · ${splitCount} · ${perPerson}`,
      mobileLineA: `${paidBy} · ${splitCount}`,
      mobileLineB: perPerson,
    }
  }
}

export const billService = new BillService()
