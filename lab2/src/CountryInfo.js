import { Link } from "react-router-dom";
import countries from "world-countries";

function CountryInfo(props) {
  countries.sort((a, b) => b.area - a.area);
  let ratio = (props.data.area / countries[0].area) * 100 + "%";
  let area = props.data.area / 1000000;
  let display = "";
  Math.round(area * 100) / 100 > 0.1
    ? (display = Math.round(area * 100) / 100 + " million km")
    : (display = props.data.area + " km");

  const getFlagEmoji = (countryCode) =>
    String.fromCodePoint(
      ...[...countryCode.toUpperCase()].map((x) => 0x1f1a5 + x.charCodeAt())
    );

  function bigCountry() {
    return (
      <div className="countryInfo">
        <img
          src={`https://flagcdn.com/48x36/${props.data.cca2.toLowerCase()}.png`}
          alt="..."
        />
        {getFlagEmoji(props.data.cca2.toLowerCase())}
        <p>
          {props.data.name.common}
          <small> {display}</small>
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
        <img
          src={`https://flagcdn.com/48x36/${props.data.cca2.toLowerCase()}.png`}
          alt="..."
        />
        {getFlagEmoji(props.data.cca2.toLowerCase())}
        <p>
          {props.data.name.common}
          <small> {display}</small>
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

  return (
    <Link to={"/Country/" + props.data.cca3}>
      {props.detailed ? bigCountry() : smallCountry()}
    </Link>
  );
}

export default CountryInfo;
