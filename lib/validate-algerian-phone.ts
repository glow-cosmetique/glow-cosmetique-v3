/**
 * Normalizes and validates Algerian mobile numbers (05 / 06 / 07).
 * Accepts common user input: spaces, dashes, +213, 213, leading 0 optional.
 */

const MOBILE_10 = /^0[567]\d{8}$/

function stripSeparators(raw: string): string {
  return raw.trim().replace(/[\s\-().]/g, "")
}

/** Rejects sequences that are almost never real subscriber numbers. */
function isObviouslyInvalid(normalized: string): boolean {
  if (/^(\d)\1{9}$/.test(normalized)) return true
  const rest = normalized.slice(2)
  if (/^(\d)\1{7}$/.test(rest)) return true
  return false
}

/**
 * @returns Normalized 10-digit string (0[567]XXXXXXXX) or null if invalid.
 */
export function normalizeAlgerianMobilePhone(raw: string): string | null {
  let s = stripSeparators(raw)
  if (!s) return null

  if (s.startsWith("+213")) {
    s = "0" + s.slice(4)
  } else if (s.startsWith("00213")) {
    s = "0" + s.slice(5)
  } else if (s.startsWith("213") && s.length >= 11) {
    s = "0" + s.slice(3)
  }

  if (/^[567]\d{8}$/.test(s)) {
    s = "0" + s
  }

  if (!MOBILE_10.test(s)) return null
  if (isObviouslyInvalid(s)) return null

  return s
}

export const ALGERIAN_PHONE_INVALID_MESSAGE =
  "رقم الجوال غير صالح. استخدمي رقمًا جزائريًا يبدأ بـ 05 أو 06 أو 07 (10 أرقام). مثال: 0555123456"

/** أرقام فقط في placeholder لتجنب مشاكل العرض مع RTL؛ التوضيح بالعربية تحت الحقل */
export const ALGERIAN_PHONE_PLACEHOLDER = "0555123456"
