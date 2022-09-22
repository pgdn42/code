import { useParams } from 'react-router-dom'
import countries from 'world-countries'
import CountryInfo from '../CountryInfo'

function Country () {
  return <CountryDetails />
}

function CountryDetails () {
  const params = useParams()
  const param = params.cca3
  const c = getCountryByCca3(param)
  const borders = c.borders.map((c) => getCountryByCca3(c))
  borders.sort((a, b) => b.area - a.area)

  return (
    <div style={{ width: '50%', margin: 'auto', backgroundColor: 'grey' }}>
      <CountryInfo data={c} detailed />
      <h2 style={{ margin: '0.5em' }}>BORDER COUNTRIES: {borders.length}</h2>

      {borders.map((b, index) => (
        <CountryInfo key={index} data={b} detailed={false} />
      ))}
    </div>
  )
}

function getCountryByCca3 (arg) {
  return countries.find(({ cca3 }) => cca3 === arg)
}

export default Country
