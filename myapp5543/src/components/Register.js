import React, { useState } from "react";

export default function Register({ games, workshops }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    year: "",
    selected: [],
  });
  const [errors, setErrors] = useState({});
  const [openSelect, setOpenSelect] = useState(false);

  const onFormChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const toggleEventSelect = (id) =>
    setForm((f) => {
      const selected = f.selected.includes(id)
        ? f.selected.filter((x) => x !== id)
        : [...f.selected, id];
      return { ...f, selected };
    });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Provide a valid email";
    if (!form.department.trim()) e.department = "Department is required";
    if (!form.year.trim()) e.year = "Year is required";
    if (form.selected.length === 0) e.selected = "Select at least one event";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    const allEvents = [...games, ...workshops];
    const selectedNames = form.selected
      .map((id) => allEvents.find((e) => e.id === id)?.title)
      .filter(Boolean)
      .join(", ");
    alert(
      `✅ Registration submitted!\n\nName: ${form.name}\nEmail: ${form.email}\nDepartment: ${form.department}\nYear: ${form.year}\nEvents: ${selectedNames}`
    );
    setForm({ name: "", email: "", department: "", year: "", selected: [] });
    setOpenSelect(false);
  };

  const selectedLabels =
    form.selected.length === 0
      ? "Choose events…"
      : `${form.selected.length} selected`;

  return (
    <section className="register">
      <h1>Register</h1>
      <p className="muted">Fill your details and choose one or more events.</p>

      <form className="card form" onSubmit={submit}>
        <div className="form-row">
          <label>Full Name</label>
          <input
            name="name"
            value={form.name}
            onChange={onFormChange}
            placeholder="Your full name"
          />
          {errors.name && <div className="err">{errors.name}</div>}
        </div>

        <div className="form-row">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onFormChange}
            placeholder="you@college.edu"
          />
          {errors.email && <div className="err">{errors.email}</div>}
        </div>

        <div className="form-row grid-2">
          <div>
            <label>Department</label>
            <input
              name="department"
              value={form.department}
              onChange={onFormChange}
              placeholder="CSE / ECE / ME / …"
            />
            {errors.department && <div className="err">{errors.department}</div>}
          </div>
          <div>
            <label>Year</label>
            <select name="year" value={form.year} onChange={onFormChange}>
              <option value="">Select year…</option>
              <option>1st</option>
              <option>2nd</option>
              <option>3rd</option>
              <option>4th</option>
            </select>
            {errors.year && <div className="err">{errors.year}</div>}
          </div>
        </div>

        {/* Multi-select with checkboxes */}
        <div className="form-row">
          <label>Events (multiple)</label>
          <div
            className={`multi ${openSelect ? "open" : ""}`}
            onClick={() => setOpenSelect((o) => !o)}
          >
            <div className="multi-label">{selectedLabels}</div>
            <div className="multi-menu" onClick={(e) => e.stopPropagation()}>
              {[{ title: "Games", items: games }, { title: "Workshops", items: workshops }].map(
                (grp) => (
                  <div className="multi-group" key={grp.title}>
                    <div className="multi-title">{grp.title}</div>
                    {grp.items.map((ev) => (
                      <label className="multi-item" key={ev.id}>
                        <input
                          type="checkbox"
                          checked={form.selected.includes(ev.id)}
                          onChange={() => toggleEventSelect(ev.id)}
                        />
                        <span>{ev.title}</span>
                      </label>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
          {errors.selected && <div className="err">{errors.selected}</div>}
        </div>

        <button type="submit" className="btn-primary">
          Submit Registration
        </button>
      </form>
    </section>
  );
}

