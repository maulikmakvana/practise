import Layout from "../components/Layout";
import StatusBadge from "../components/StatusBadge";

export default function Dashboard({ customers }) {
  const today = new Date().toISOString().slice(0, 10);
  const newLeads = customers.filter(c => c.leadStatus === "New").length;
  const interested = customers.filter(c => c.leadStatus === "Interested").length;
  const todayFollow = customers.filter(c => c.followUpDate === today).length;
  const overdue = customers.filter(c => c.followUpDate && c.followUpDate < today && c.leadStatus !== "Converted").length;
  const converted = customers.filter(c => c.leadStatus === "Converted").length;

  const statuses = ["New", "Contacted", "Interested", "Follow-up", "Converted", "Lost"];

  return (
    <Layout>
      <h1>Dashboard</h1>

      <div className="cards">
        <div>Total Customers<strong>{customers.length}</strong></div>
        <div>New Leads<strong>{newLeads}</strong></div>
        <div>Interested<strong>{interested}</strong></div>
        <div>Follow-ups Today<strong>{todayFollow}</strong></div>
        <div>Overdue<strong>{overdue}</strong></div>
        <div>Converted<strong>{converted}</strong></div>
      </div>

      <div className="grid2">
        <section className="box">
          <h3>Lead Status</h3>
          {statuses.map(s => {
            const count = customers.filter(c => c.leadStatus === s).length;
            return <div className="barRow" key={s}>
              <span>{s}</span><div className="bar"><i style={{width: `${customers.length ? count / customers.length * 100 : 0}%`}} /></div><b>{count}</b>
            </div>
          })}
        </section>

        <section className="box">
          <h3>Upcoming Follow-ups</h3>
          {customers.filter(c => c.followUpDate).slice(0, 4).map(c =>
            <div className="follow" key={c.id}><b>{c.customerName}</b><span>{c.followUpDate}</span></div>
          )}
        </section>
      </div>

      <section className="box">
        <h3>Recent Customers</h3>
        <table>
          <thead><tr><th>Name</th><th>Contact</th><th>Status</th><th>Follow-up</th></tr></thead>
          <tbody>
            {customers.slice(0, 5).map(c =>
              <tr key={c.id}><td>{c.customerName}</td><td>{c.contactPerson}</td><td><StatusBadge status={c.leadStatus}/></td><td>{c.followUpDate || "-"}</td></tr>
            )}
          </tbody>
        </table>
      </section>
    </Layout>
  );
}