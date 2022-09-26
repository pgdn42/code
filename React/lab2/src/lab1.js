import './lab1.css'
import countries from 'world-countries'
import CountryInfo from './CountryInfo'
import Country from './pages/Country'
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'

function Lab2 () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Lab1 />} />
            <Route path='Country/:cca3' element={<Country />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Lab1 () {
  const [search, SetSearch] = useState('')
  const [searchRegion, SetRegion] = useState(null)
  /*   const [saved, SetSaved] = useState([])
  */
  countries.sort((a, b) => b.area - a.area)
  let usableCountries = countries.filter((c) => c.name.common !== 'Antarctica')

  searchRegion == null
    ? usableCountries = usableCountries
    : usableCountries = countries.filter((c) => c.region === searchRegion)

  function changeRegion (toRegion) {
    SetRegion(toRegion)
  }
  function ChangeSearch (event) {
    SetSearch(event.target.value)
  }
  /*   function SaveSearch (event) {
    if (event.key === 'Enter') {
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
        )
    }
  } */
  function onlyNumbers (str) {
    return /^\d+$/.test(str)
  }

  onlyNumbers(search)
    ? search == null
      ? (usableCountries = usableCountries)
      : (usableCountries = usableCountries.filter((c) => c.area < search))
    : search == null
      ? (usableCountries = usableCountries)
      : (usableCountries = usableCountries.filter(
          (c) => c.name.common.toLowerCase().indexOf(search) === 0
        ))

  // var bigCountries = usableCountries.splice(0, 5);

  return (
    <>
      <div
        className='App'
        style={{
          width: '60%',
          backgroundColor: 'grey'
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
        </div> */}
        <label style={{ margin: 'auto', fontSize: '1em' }}>
          Currently selected region: {searchRegion == null ? 'World' : searchRegion}
          {/*           <br /> Your selected region and search..:
          <br /> Contains {usableCountries == null ? 'NaN' : usableCountries.length} countries
          <br /> Biggest area: {usableCountries == null ? 'NaN' : usableCountries[0].area} km <sup>2</sup>
          <br /> Smallest area: {usableCountries == null ? 'NaN' : usableCountries[usableCountries.length - 1].area} km <sup>2</sup> */}
        </label>
        <p>Select region, and search for name or smaller than a certain area in km <sup>2</sup></p>

        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'stretch',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >

          <div style={{
            width: '98%',
            display: 'flex',
            alignItems: 'stretch',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 'auto'
          }}
          >
            <button onClick={e => changeRegion('Europe')}>Europe</button>
            <button onClick={e => changeRegion('Asia')}>Asia</button>
            <button onClick={e => changeRegion('Oceania')}>Oceania</button>
            <button onClick={e => changeRegion('Africa')}>Africa</button>
            <button onClick={e => changeRegion('Americas')}>Americas</button>
            <button onClick={e => changeRegion(null)}>World</button>
            <input
              type='text'
              onChange={ChangeSearch}
              style={{ height: '2em' }}
            />

          </div>

          {usableCountries.map((country) => (
            <CountryInfo key={country.cca3} data={country} detailed={false} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Lab2
