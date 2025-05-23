import { useState } from "react";

const companies = [
  { name: "Exowatt", sector: "Clean Energy", stage: "Private", notes: "Backed by Sam Altman." },
  { name: "Pixxel", sector: "Satellite Imaging", stage: "Private", notes: "NASA partnerships." },
  { name: "Beyond Imagination", sector: "Robotics", stage: "Private", notes: "$100M valuation." },
  { name: "XtalPi", sector: "AI + Biotech", stage: "Public", notes: "IPO 2024 in Hong Kong." },
  { name: "Disprz", sector: "Enterprise AI", stage: "Private", notes: "Serving 3.5M+ users." },
  { name: "Awesomic", sector: "Creative AI", stage: "Private", notes: "Y Combinator-backed." },
  { name: "AION Labs", sector: "Biotech Incubator", stage: "Private", notes: "Backed by major pharma." }
];

export default function EmergingTechTracker() {
  const [search, setSearch] = useState("");

  const filtered = companies.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.sector.toLowerCase().includes(search.toLowerCase()) ||
    c.stage.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Emerging Tech Tracker</h1>
      <input
        type="text"
        placeholder="Search by name, sector, or stage..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%' }}
      />
      {filtered.map((company, i) => (
        <div key={i} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
          <h2>{company.name}</h2>
          <p><strong>Sector:</strong> {company.sector}</p>
          <p><strong>Stage:</strong> {company.stage}</p>
          <p>{company.notes}</p>
        </div>
      ))}
    </div>
  );
}