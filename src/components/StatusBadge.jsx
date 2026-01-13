export default function StatusBadge({ status }) {
  const styles = {
    Paid: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    Pending: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    Failed: "bg-rose-500/10 text-rose-500 border-rose-500/20",
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${styles[status]}`}
    >
      {status}
    </span>
  )
}