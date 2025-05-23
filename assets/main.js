document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const companies = [
    {
      name: "Exowatt",
      sector: "Clean Energy",
      stage: "Private",
      valuation: "$90M",
      funding: "2024 Series A",
      backers: "Sam Altman, a16z",
      ipo: "2027 (est.)",
      notes: "Building solar thermal infrastructure for AI data centers",
      link: "https://www.exowatt.com"
    },
    {
      name: "Pixxel",
      sector: "Satellite Imaging",
      stage: "Private",
      valuation: "$95M",
      funding: "2024 Series B",
      backers: "NASA, Lightspeed",
      ipo: "2026 (est.)",
      notes: "Hyperspectral imaging satellites for agriculture & climate",
      link: "https://www.pixxel.space"
    },
    {
      name: "XtalPi",
      sector: "AI + Biotech",
      stage: "Public",
      valuation: "Unknown",
      funding: "IPO (HKEX 2024)",
      backers: "Tencent",
      ipo: "Already public",
      notes: "Uses AI and quantum computing for drug discovery",
      link: "https://www.xtalpi.com"
    }
  ];

  root.innerHTML = `
    <div style="padding: 1rem; font-family: Arial, sans-serif; background-color: #121212; color: #e0e0e0;">
      <h1>Advanced Tech Tracker</h1>
      <input id="searchBox" type="text" placeholder="Search by name, sector, or stage..." 
             style="background-color: #1e1e1e; color: #fff; border: 1px solid #444; padding: 0.5rem; width: 100%; margin-bottom: 1rem;" />
      <div id="results"></div>
    </div>`;

  const searchBox = document.getElementById("searchBox");
  const results = document.getElementById("results");

  function render(filter = "") {
    const filtered = companies.filter(c =>
      c.name.toLowerCase().includes(filter) ||
      c.sector.toLowerCase().includes(filter) ||
      c.stage.toLowerCase().includes(filter)
    );

    results.innerHTML = filtered.map(c =>
      `<div style="border:1px solid #444;padding:1rem;margin-bottom:1rem;background-color:#1a1a1a;">
        <h2>${c.name}</h2>
        <p><strong>Sector:</strong> ${c.sector}</p>
        <p><strong>Stage:</strong> ${c.stage}</p>
        <p><strong>Valuation:</strong> ${c.valuation}</p>
        <p><strong>Last Funding:</strong> ${c.funding}</p>
        <p><strong>Backers:</strong> ${c.backers}</p>
        <p><strong>IPO Forecast:</strong> ${c.ipo}</p>
        <p><strong>Notes:</strong> ${c.notes}</p>
        <p><a href="${c.link}" target="_blank" style="color:#80b3ff;">More Info</a></p>
      </div>`
    ).join("");
  }

  searchBox.addEventListener("input", e => render(e.target.value.toLowerCase()));
  render();
});