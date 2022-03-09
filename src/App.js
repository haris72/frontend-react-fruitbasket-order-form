import React, {useState} from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [aarbeien, setAarbeien] = useState(0);
  const [bananen, setBananen] = useState(0);
  const [appels, setAppels] = useState(0);
  const [kiwies, setKiwies] = useState(0);

  function ResetNumbers(){
    setAarbeien (0);
    setBananen ( 0);
    setAppels (0);
    setKiwies ( 0);

  }

  const [formName, setFormName] = useState('');
  const [formName2, setFormName2] = useState('');
  const [formAge, setFormAge] = useState(0);
  const [formPostCode, setFormPostCode] = useState('');
  const [formOpmerking, setFormOpmerking] = useState('');
  const [formBezorgFrequenctie, toggleFormBezorgFrequenctie] = useState('Iedere week');
  const [formPeriode, toggleFormPeriode] = useState('overdag');
  const [formNewsletter, toggleFormNewsletter] = useState('false');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formName, formName2, formAge, formPostCode, formOpmerking, formBezorgFrequenctie, formPeriode, formNewsletter, aarbeien, bananen, appels, kiwies);
  }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        Aardbei
        <button type="button" disabled={aarbeien === 0} onClick={() => setAarbeien(aarbeien - 1)}>-</button>
        <input type="text" value={aarbeien}/>
        <button type="button" onClick={() => setAarbeien(aarbeien + 1)}>+</button>
        <br/>
        Bananen
        <button type="button" disabled={bananen === 0} onClick={() => setBananen(bananen - 1)}>-</button>
        <input type="text" value={bananen}/>
        <button type="button" onClick={() => setBananen(bananen + 1)}>+</button>
        <br/>
        Apels
        <button type="button" disabled={appels === 0} onClick={() => setAppels(appels - 1)}>-</button>
        <input type="text" value={appels}/>
        <button type="button" onClick={() => setAppels(appels + 1)}>+</button>
        <br/>
        Kiwi
        <button type="button" disabled={kiwies === 0} onClick={() => setKiwies(kiwies - 1)}>-</button>
        <input type="text" value={kiwies}/>
        <button type="button" onClick={() => setKiwies(kiwies + 1)}>+</button>
        <br/>
      <Button type="reset" onClick={ResetNumbers}>Reset</Button>

      <form onSubmit={handleSubmit}>

      <label htmlFor="details-name">
      Voornaam:
      <input
      type="text"
      name="voornaam"
      id="details-voornaam"
      value={formName}
      onChange={(e) => setFormName(e.target.value)}
      />
      </label>
        <br/><label htmlFor="details-name2">
        Achternaam:
        <input
        type="text"
        name="achternaam"
        id="details-achternaam"
        value={formName2}
        onChange={(e) => setFormName2(e.target.value)}
        />
      </label>
        <br/>
      <label htmlFor="details-age">
      Leeftijd:
      <input
          type="number"
          name="age"
          id="details-age"
          value={formAge}
          onChange={(e) => setFormAge(e.target.value)}
      />
      </label>
        <br/>
        <label htmlFor="details-postcode">
          Postcode
          <input
              type="number"
              name="postcode"
              id="details-postcode"
              value={formPostCode}
              onChange={(e) => setFormPostCode(e.target.value)}
          />
        </label>
        <br/>
        <label htmlFor="details-bezorgfrequenctie">
          Bezorgfrequenctie
          <br/>
          <select
              type="text"
              name="bezorgfrequenctie"
              id="details-bezorgfrequenctie"
              value={formBezorgFrequenctie}
              onChange={(e) => toggleFormBezorgFrequenctie(e.target.value)}
>
            <option value = "Iedere week">Iedere week</option>
            <option value = "Om de week">Om de week</option>
            <option value = "Iedere maand">Iedere maand</option>

          </select>
        </label>
        <br/>
    <label htmlFor="details-overdag">Overdag
        <input type="radio"
               name="periode"
               value='overdag'
               checked={formPeriode === 'overdag'}
               id="periode-overdag"
               onChange={(e) => toggleFormPeriode(e.target.value)}
        />
    </label>

        <label htmlFor="details-savonds">'s Avonds
          <input type="radio"
                 name="periode"
                 value='avonds'
                 checked={formPeriode === 'avonds'}
                 id="periode-avonds"
                 onChange={(e) => toggleFormPeriode(e.target.value)}
          />
        </label>
    <br/>
      <label htmlFor="details-comments">
      Opmerking
        <br/>
      <textarea
      name="comments"
      id="details-comments"
      rows="4"
      cols="40"
      value={formOpmerking}
      onChange={(e) => setFormOpmerking(e.target.value)}
      >
      </textarea>
      </label>
        <br/>
      <label htmlFor="details-newsletter">
      <input
      type="checkbox"
      name="newsletter"
      id="details-newsletter"
      value={formNewsletter}
      onChange={(e) => toggleFormNewsletter(e.target.checked)}
      />
      Ik ga akkoord met de voorwaarden
      </label>
        <br/>
      <Button type="submit">
      Versturen
      </Button>

      </form>




    </>
  );
}

export default App;
