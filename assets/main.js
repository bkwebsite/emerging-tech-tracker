document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const companies = [
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
      <div id="results"></div>
    </div>`;

  const results = document.getElementById("results");

  results.innerHTML = companies.map(c => `
    <div style="border:1px solid #444;padding:1rem;margin-bottom:1rem;background-color:#1a1a1a;">
      <h2>${c.name}</h2>
      <p><strong>Sector:</strong> ${c.sector}</p>
      <p><strong>Stage:</strong> ${c.stage}</p>
      <p><strong>Valuation:</strong> ${c.valuation}</p>
      <p><strong>Last Funding:</strong> ${c.funding}</p>
      <p><strong>Backers:</strong> ${c.backers}</p>
      <p><strong>IPO Forecast:</strong> ${c.ipo}</p>
      <p><strong>IPO Price:</strong> ${c.ipo_price}</p>
      <p><strong>Current Price:</strong> ${c.current_price}</p>
      <p><strong>Price Last Checked:</strong> ${c.price_last_checked}</p>
      <p><strong>Notes:</strong> ${c.notes}</p>
      <p><a href="${c.link}" style="color:#80b3ff;" target="_blank">More Info</a></p>
    </div>`).join("");
});