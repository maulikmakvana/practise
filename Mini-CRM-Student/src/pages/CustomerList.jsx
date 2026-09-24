import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import StatusBadge from "../components/StatusBadge";

export default function CustomerList({ customers, setCustomers }) {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(searchParams.get("status") || "All");
  const [sort, setSort] = useState("new");

  let data = customers.filter(c => {
    const text = `${c.customerName} ${c.contactPerson} ${c.phone} ${c.email}`.toLowerCase();
    return text.includes(search.toLowerCase()) && (status === "All" || c.leadStatus === status);
  });

  data.sort((a, b) => sort === "new" ? b.id - a.id : a.id - b.id);

  function remove(id) {
    if (window.confirm("Delete this customer?")) {
      setCustomers(customers.filter(c => c.id !== id));
    }
  }

  return (
    <Layout>
      <div className="title"><h1>Customers</h1><Link className="primary linkBtn" to="/add">+ Add Customer</Link></div>

      <div className="filters">
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search name, contact, phone or email" />
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option>All</option><option>New</option><option>Contacted</option><option>Interested</option><option>Follow-up</option><option>Converted</option><option>Lost</option>
        </select>
        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="new">Newest</option><option value="old">Oldest</option>
        </select>
      </div>

      <section className="box">
        <table>
          <thead><tr><th>Customer</th><th>Contact</th><th>Phone</th><th>Status</th><th>Follow-up</th><th>Action</th></tr></thead>
          <tbody>
            {data.map(c =>
              <tr key={c.id}>
                <td>{c.customerName}</td><td>{c.contactPerson}</td><td>{c.phone}</td>
                <td><StatusBadge status={c.leadStatus}/></td><td>{c.followUpDate || "-"}</td>
                <td className="actions"><Link to={`/customers/${c.id}`}>View</Link> <button onClick={() => remove(c.id)}>Delete</button></td>
              </tr>
            )}
          </tbody>
        </table>
        <p className="small">Showing {data.length} customers</p>
      </section>
    </Layout>
  );
}