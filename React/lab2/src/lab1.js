import "./lab1.css";
import countries from "world-countries";
import CountryInfo from "./CountryInfo";
import Country from "./pages/Country";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Layout from "./pages/Layout";

function Lab2() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Lab1 />} />
            <Route path="Country/:cca3" element={<Country />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

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
            countries.filter(
              (c) => c.name.common.toLowerCase().indexOf(search) === 0
            )
          )
        : SetSaved(
            saved.concat(
              countries.filter(
                (c) => c.name.common.toLowerCase().indexOf(search) === 0
              )
            )
          );
    }
  }

  search == null
    ? (usableCountries = usableCountries)
    : (usableCountries = usableCountries.filter(
        (c) => c.name.common.toLowerCase().indexOf(search) === 0
      ));

  //var bigCountries = usableCountries.splice(0, 5);

  return (
    <>
      <div
        className="App"
        style={{
          width: "50%",
          backgroundColor: "grey",
        }}
      >
        {/*        <div
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
        </div>*/}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "stretch",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <input
            type="text"
            onKeyDown={SaveSearch}
            onChange={ChangeSearch}
            style={{ height: "2em" }}
          ></input>

          {usableCountries.map((country) => (
            <CountryInfo key={country.cca3} data={country} detailed={false} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Lab2;
