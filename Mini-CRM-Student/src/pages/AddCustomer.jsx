import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const empty = { customerName:"", leadStatus:"New", contactPerson:"", followUpDate:"", phone:"", address:"", email:"", notes:"" };

export default function AddCustomer({ customers, setCustomers }) {
  const [form, setForm] = useState(empty);
  const navigate = useNavigate();

  function change(e) {
    setForm({...form, [e.target.name]: e.target.value});
  }

  function save(e) {
    e.preventDefault();

    if (!form.customerName || !form.contactPerson || !form.phone || !form.email) {
      return alert("Please fill all required fields");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return alert("Enter a valid email");
    }
    if (!/^\d{10}$/.test(form.phone)) {
      return alert("Phone must be 10 digits");
    }

    const date = new Date().toISOString().slice(0, 10);
    const customer = {...form, id: Date.now(), createdAt: date, updatedAt: date};
    setCustomers([customer, ...customers]);
    alert("Customer saved");
    navigate("/customers");
  }

  return (
    <Layout>
      <h1>Add Customer</h1>
      <form className="box form" onSubmit={save}>
        <input name="customerName" placeholder="Customer Name *" value={form.customerName} onChange={change}/>
        <select name="leadStatus" value={form.leadStatus} onChange={change}>
          <option>New</option><option>Contacted</option><option>Interested</option><option>Follow-up</option><option>Converted</option><option>Lost</option>
        </select>
        <input name="contactPerson" placeholder="Contact Person *" value={form.contactPerson} onChange={change}/>
        <input name="followUpDate" type="date" value={form.followUpDate} onChange={change}/>
        <input name="phone" placeholder="Phone *" value={form.phone} onChange={change}/>
        <input name="address" placeholder="Address" value={form.address} onChange={change}/>
        <input name="email" placeholder="Email *" value={form.email} onChange={change}/>
        <textarea name="notes" placeholder="Notes" value={form.notes} onChange={change}/>
        <div><button className="primary">Save Customer</button> <button type="button" onClick={() => navigate("/customers")}>Cancel</button></div>
      </form>
    </Layout>
  );
}