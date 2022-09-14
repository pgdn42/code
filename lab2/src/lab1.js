import "./lab1.css";
import countries from "world-countries";
import CountryInfo from "./CountryInfo";
import React, { useState } from "react";

function Lab1() {
  countries.sort((a, b) => b.area - a.area);
  var usableCountries = countries.filter((c) => c.name.common !== "Antarctica");
  var temp = countries.slice(0, 5);

  useState(0);
  const [search, SetSearch] = useState("");
  var [saved, SetSaved] = useState([]);

  function ChangeSearch(event) {
    SetSearch(event.target.value);
  }
  function SaveSearch(event) {
    if (event.key === "Enter") {
      saved == null
        ? SetSaved(
            countries.filter((c) =>
              c.name.common.toLowerCase().includes(search)
            )
          )
        : SetSaved(
            saved.concat(
              countries.filter((c) =>
                c.name.common.toLowerCase().includes(search)
              )
            )
          );
    }
  }

  search == null
    ? (usableCountries = countries)
    : (usableCountries = countries.filter((c) =>
        c.name.common.toLowerCase().includes(search)
      ));

  //var bigCountries = usableCountries.splice(0, 5);

  return (
    <>
      <input type="text" onKeyDown={SaveSearch} onChange={ChangeSearch}></input>
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
          {saved.map((country) => (
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
    </>
  );
}

export default Lab1;
