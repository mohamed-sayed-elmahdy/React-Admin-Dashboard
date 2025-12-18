export default function OverviewHeader() {
  return (
    <div className="flex items-center justify-between mt-4">
      <div>
        <h1 className="text-2xl font-bold">Overview</h1>
        <p className="text-sm text-muted-foreground">Dashboard performance & analytics</p>
      </div>
      <button className=" bg-(--primary) text-white px-4 py-2 rounded-lg hover:opacity-90 transition">Download Report</button>
    </div>
  );
}
