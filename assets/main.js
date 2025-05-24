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
      ipo: "No IPO announced",
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
      name: "Beyond Imagination",
      sector: "Robotics",
      stage: "Private",
      valuation: "Est. $100M",
      funding: "Seed Round",
      backers: "Gauntlet Ventures",
      ipo: "No IPO planned",
      notes: "Humanoid robots for industrial and service applications",
      link: "https://www.beomni.com"
    },
    {
      name: "Disprz",
      sector: "Enterprise AI",
      stage: "Private",
      valuation: "Undisclosed",
      funding: "Series C",
      backers: "Dallas Venture Capital",
      ipo: "2025 (est.)",
      notes: "AI-driven upskilling platform with 3.5M+ users",
      link: "https://www.disprz.com"
    },
    {
      name: "Awesomic",
      sector: "Creative AI",
      stage: "Private",
      valuation: "Undisclosed",
      funding: "Y Combinator-backed",
      backers: "Y Combinator",
      ipo: "No IPO planned",
      notes: "AI-matched creative outsourcing for design tasks",
      link: "https://www.awesomic.com"
    },
    {
      name: "AION Labs",
      sector: "Biotech Incubator",
      stage: "Private",
      valuation: "N/A",
      funding: "Consortium support",
      backers: "Pfizer, Merck, AWS, BioMed X",
      ipo: "N/A",
      notes: "Hosts startups like Omec.AI using AI for drug development",
      link: "https://www.aionlabs.com"
    },
    {
      name: "XtalPi",
      sector: "AI + Biotech",
      stage: "Public",
      valuation: "HK$18.37B",
      funding: "IPO (HKEX 2024)",
      backers: "Tencent",
      ipo: "Already public",
      ipo_price: "HK$5.28",
      current_price: "HK$4.57",
      price_last_checked: "May 23, 2025 @ 4:00 PM HKT (Market Closed)",
      notes: "Uses AI and quantum computing for drug discovery",
      link: "https://www.xtalpi.com"
    }
  ];

  root.innerHTML = `
    <div style="padding: 1rem; font-family: Arial, sans-serif; background-color: #121212; color: #e0e0e0;">
      <h1>Advanced Tech Tracker</h1>
      <input id="searchBox" type="text" placeholder="Search..." 
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

    results.innerHTML = filtered.map(c => `
      <div style="border:1px solid #444;padding:1rem;margin-bottom:1rem;background-color:#1a1a1a;">
        <h2>${c.name}</h2>
        <p><strong>Sector:</strong> ${c.sector}</p>
        <p><strong>Stage:</strong> ${c.stage}</p>
        ${c.valuation ? `<p><strong>Valuation:</strong> ${c.valuation}</p>` : ""}
        ${c.funding ? `<p><strong>Last Funding:</strong> ${c.funding}</p>` : ""}
        ${c.backers ? `<p><strong>Backers:</strong> ${c.backers}</p>` : ""}
        ${c.ipo ? `<p><strong>IPO Forecast:</strong> ${c.ipo}</p>` : ""}
        ${c.ipo_price ? `<p><strong>IPO Price:</strong> ${c.ipo_price}</p>` : ""}
        ${c.current_price ? `<p><strong>Current Price:</strong> ${c.current_price}</p>` : ""}
        ${c.price_last_checked ? `<p><strong>Price Last Checked:</strong> ${c.price_last_checked}</p>` : ""}
        <p><strong>Notes:</strong> ${c.notes}</p>
        <p><a href="${c.link}" style="color:#80b3ff;" target="_blank">More Info</a></p>
      </div>`).join("");
  }

  searchBox.addEventListener("input", e => render(e.target.value.toLowerCase()));
  render();
});