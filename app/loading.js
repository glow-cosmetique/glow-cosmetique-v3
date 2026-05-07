export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="h-10 w-10 rounded-full border-4 border-[var(--card-border)] border-t-[var(--btn-bg)] animate-spin" />
        <p className="text-sm font-semibold text-[var(--hero-sub)]">جاري تحميل الصفحة...</p>
      </div>
    </div>
  )
}
