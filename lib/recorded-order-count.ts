/** مفتاح التخزين المحلي لعدد الطلبات المسجّلة بنجاح على هذا المتصفح */
export const RECORDED_ORDER_COUNT_KEY = "glc_recorded_order_count" as const

export const RECORDED_ORDER_COUNT_EVENT = "glc:recorded-order-count" as const

export type RecordedOrderCountDetail = { count: number }

export function getRecordedOrderCount(): number {
  if (typeof window === "undefined") return 0
  const raw = window.localStorage.getItem(RECORDED_ORDER_COUNT_KEY)
  const n = raw === null ? 0 : Number.parseInt(raw, 10)
  return Number.isFinite(n) && n >= 0 ? n : 0
}

/** يزيد العدّاد بعد كل إدراج ناجح في قاعدة الطلبات ويعيد القيمة الجديدة */
export function incrementRecordedOrderCount(): number {
  const next = getRecordedOrderCount() + 1
  window.localStorage.setItem(RECORDED_ORDER_COUNT_KEY, String(next))
  return next
}

export function emitRecordedOrderCount(count: number): void {
  window.dispatchEvent(
    new CustomEvent<RecordedOrderCountDetail>(RECORDED_ORDER_COUNT_EVENT, {
      detail: { count },
    }),
  )
}
