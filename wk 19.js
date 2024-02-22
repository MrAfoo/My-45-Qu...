// Example items for TypeScript objects
const mountainInfo = {
  Everest: { height: 8848, country: "Nepal" },
  K2: { height: 8611, country: "Pakistan" },
  Matterhorn: { height: 4478, country: "Switzerland" },
  Aconcagua: { height: 6962, country: "Argentina" },
  Denali: { height: 6190, country: "United States" }
};

const riverInfo = {
  Nile: { length: 6650, countries: ["Egypt", "Sudan"] },
  Amazon: { length: 6992, countries: ["Brazil", "Peru"] },
  Yangtze: { length: 6300, countries: ["China"] },
  Mississippi: { length: 6275, countries: ["United States"] },
  Danube: { length: 2850, countries: ["Germany", "Austria", "Hungary"] }
};

const countryInfo = {
  "United States": { population: 331_000_000, capital: "Washington, D.C." },
  India: { population: 1.4_000_000_000 , capital: "New Delhi" },
  Brazil: { population: 213_000_000 , capital: "Brasília" },
  Russia: { population: 146_000_000 , capital: "Moscow" },
  China: { population: 1.4_000_000_000 , capital: "Beijing" }
};

// Print the TypeScript objects
console.log("Mountain Info:", mountainInfo);
console.log("River Info:", riverInfo);
console.log("Country Info:", countryInfo);
