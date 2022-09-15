import countries from "world-countries";

function CountryInfo(props) {
  countries.sort((a, b) => b.area - a.area);
  let ratio = (props.data.area / countries[0].area) * 100 + "%";
  let area = props.data.area / 1000000;

  function bigCountry() {
    return (
      <div className="countryInfo">
        <p>
          {props.data.name.common}
          <small> {Math.round(area * 100) / 100} million km</small>
          <sup>2</sup>
        </p>
        <div style={{ backgroundColor: "white" }}>
          <div
            style={{
              width: ratio,
              height: "20px",
              backgroundColor: "blue",
              visibility: "visible",
              textAlign: "center",
              color: "white",
            }}
          >
            {Math.round(parseInt(ratio), 3)}%
          </div>
        </div>

        <small>Official name: {props.data.name.official}</small>
        <small>
          <br></br>Capital: {props.data.capital}
        </small>
        <small>
          <br></br>Region: {props.data.subregion}
        </small>
      </div>
    );
  }
  function smallCountry() {
    return (
      <div className="countryInfo">
        <p>
          {props.data.name.common}
          <small> {Math.round(area * 100) / 100} million km</small>
          <sup>2</sup>
        </p>

        <div style={{ backgroundColor: "white" }}>
          <div
            style={{
              width: ratio,
              height: "20px",
              backgroundColor: "blue",
              visibility: "visible",
              textAlign: "center",
              color: "white",
            }}
          >
            {Math.round(parseInt(ratio), 3)}%
          </div>
        </div>
      </div>
    );
  }

  return <>{props.detailed ? bigCountry() : smallCountry()}</>;
}

export default CountryInfo;
