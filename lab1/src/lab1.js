import "./lab1.css";
import countries from "world-countries";
import CountryInfo from "./CountryInfo";

function Lab1() {
  countries.sort((a, b) => b.area - a.area);
  var usableCountries = countries
    .filter((c) => c.name.common !== "Antarctica")
    .slice(0, 15);
  var bigCountries = usableCountries.splice(0, 5);

  return (
    <div
      className="App"
      style={{ display: "flex", width: "50%", backgroundColor: "grey" }}
    >
      <div
        style={{
          float: "left",
          width: "50%",
          display: "flex",
          alignItems: "stretch",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {bigCountries.map((country) => (
          <CountryInfo key={country.cca3} data={country} detailed={true} />
        ))}
      </div>
      <div
        style={{
          float: "right",
          width: "50%",
          display: "flex",
          alignItems: "stretch",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {usableCountries.map((country) => (
          <CountryInfo key={country.cca3} data={country} detailed={false} />
        ))}
      </div>
    </div>
  );
}

export default Lab1;
