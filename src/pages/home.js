import React from 'react';

function Home() {
  return (
    <div className="home">
      <div className="home__image">
        {/* TODO: Add assets folder for images */}
        <img alt="dinosaur" src="https://lh3.googleusercontent.com/jq1i1nFKtLmxQI70ss58AfAwZi0Ef44ie62bthVndVBeHrPL04Ea46560tm-Pdki7phe" />
      </div>
      <h1 className="home__title">
        No internet
      </h1>
      <div className="instructions">
        <h5 className="instructions__title">
          Try:
        </h5>
        <ul className="instructions__list">
          <li className="instructions__item">
            Checking the network cables, modem, and router
          </li>
          <li className="instructions__item">
            Reconnecting to Wi-Fi
          </li>
        </ul>

        <div className="instructions__error">
          ERR_INTERNET_DISCONNECTED
        </div>
      </div>
    </div>
  );
}

export default Home;
