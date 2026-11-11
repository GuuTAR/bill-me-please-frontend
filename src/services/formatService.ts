class FormatService {
  /**
   * Formats an amount as Thai baht, rounded to at most 2 decimal places.
   *
   * @example
   * formatBaht(1200)    // "฿1,200"
   * formatBaht(533.333) // "฿533.33"
   */
  public formatBaht = (amount: number): string => {
    const rounded: number = Math.round(amount * 100) / 100
    return `฿${rounded.toLocaleString('th-TH', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`
  }
}

export const formatService = new FormatService()
