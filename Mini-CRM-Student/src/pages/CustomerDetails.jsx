import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import StatusBadge from "../components/StatusBadge";

export default function CustomerDetails({ customers, setCustomers }) {
  const {id} = useParams();
  const navigate = useNavigate();
  const old = customers.find(c => String(c.id) === id);
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState(old || {});

  if (!old) return <Layout><h2>Customer not found</h2></Layout>;

  function change(e) { setForm({...form, [e.target.name]: e.target.value}); }

  function update(e) {
    e.preventDefault();
    if (!form.customerName || !form.contactPerson || !form.phone || !form.email) return alert("Fill required fields");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return alert("Enter valid email");
    if (!/^\d{10}$/.test(form.phone)) return alert("Phone must be 10 digits");

    const updated = {...form, updatedAt: new Date().toISOString().slice(0,10)};
    setCustomers(customers.map(c => c.id === old.id ? updated : c));
    setEdit(false);
    alert("Customer updated");
  }

  function remove() {
    if (confirm("Delete this customer?")) {
      setCustomers(customers.filter(c => c.id !== old.id));
      navigate("/customers");
    }
  }

  return (
    <Layout>
      <button onClick={() => navigate("/customers")}>← Back</button>
      {!edit ? (
        <section className="box details">
          <div className="title"><h1>{old.customerName}</h1><StatusBadge status={old.leadStatus}/></div>
          <p><b>Created:</b> {old.createdAt}</p>
          <p><b>Contact Person:</b> {old.contactPerson}</p>
          <p><b>Phone:</b> {old.phone}</p>
          <p><b>Email:</b> {old.email}</p>
          <p><b>Address:</b> {old.address || "-"}</p>
          <p><b>Follow-up:</b> {old.followUpDate || "-"}</p>
          <p><b>Notes:</b> {old.notes || "-"}</p>
          <button className="primary" onClick={() => setEdit(true)}>Edit Customer</button>
          <button onClick={remove}>Delete</button>

          <h3>Activity History</h3>
          <div className="activity">
            <p>✓ Customer created - {old.createdAt}</p>
            <p>✓ Customer updated - {old.updatedAt}</p>
            <p>✓ Status: {old.leadStatus}</p>
            {old.followUpDate && <p>✓ Follow-up added - {old.followUpDate}</p>}
          </div>
        </section>
      ) : (
        <form className="box form" onSubmit={update}>
          <h2>Edit Customer</h2>
          <input name="customerName" value={form.customerName} onChange={change}/>
          <select name="leadStatus" value={form.leadStatus} onChange={change}>
            <option>New</option><option>Contacted</option><option>Interested</option><option>Follow-up</option><option>Converted</option><option>Lost</option>
          </select>
          <input name="contactPerson" value={form.contactPerson} onChange={change}/>
          <input name="followUpDate" type="date" value={form.followUpDate || ""} onChange={change}/>
          <input name="phone" value={form.phone} onChange={change}/>
          <input name="address" value={form.address} onChange={change}/>
          <input name="email" value={form.email} onChange={change}/>
          <textarea name="notes" value={form.notes} onChange={change}/>
          <div><button className="primary">Save Changes</button> <button type="button" onClick={() => setEdit(false)}>Cancel</button></div>
        </form>
      )}
    </Layout>
  );
}