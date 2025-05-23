document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const companies = [
    { name: "Exowatt", sector: "Clean Energy", stage: "Private", notes: "Backed by Sam Altman." },
    { name: "Pixxel", sector: "Satellite Imaging", stage: "Private", notes: "NASA partnerships." },
    { name: "Beyond Imagination", sector: "Robotics", stage: "Private", notes: "$100M valuation." },
    { name: "XtalPi", sector: "AI + Biotech", stage: "Public", notes: "IPO 2024 in Hong Kong." },
    { name: "Disprz", sector: "Enterprise AI", stage: "Private", notes: "Serving 3.5M+ users." },
    { name: "Awesomic", sector: "Creative AI", stage: "Private", notes: "Y Combinator-backed." },
    { name: "AION Labs", sector: "Biotech Incubator", stage: "Private", notes: "Backed by major pharma." }
  ];
  root.innerHTML = \`
    <div style="padding: 1rem; font-family: Arial, sans-serif;">
      <h1>Emerging Tech Tracker</h1>
      <input id="searchBox" type="text" placeholder="Search..." style="padding: 0.5rem; width: 100%; margin-bottom: 1rem;" />
      <div id="results"></div>
    </div>
  \`;
  const searchBox = document.getElementById("searchBox");
  const results = document.getElementById("results");
  function render(filter = "") {
    const filtered = companies.filter(c =>
      c.name.toLowerCase().includes(filter) ||
      c.sector.toLowerCase().includes(filter) ||
      c.stage.toLowerCase().includes(filter)
    );
    results.innerHTML = filtered.map(c => \`
      <div style="border:1px solid #ccc;padding:1rem;margin-bottom:1rem;">
        <h2>\${c.name}</h2>
        <p><strong>Sector:</strong> \${c.sector}</p>
        <p><strong>Stage:</strong> \${c.stage}</p>
        <p>\${c.notes}</p>
      </div>\`).join("");
  }
  searchBox.addEventListener("input", e => render(e.target.value.toLowerCase()));
  render();
});