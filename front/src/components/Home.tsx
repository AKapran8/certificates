import React from "react";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div>
        <h2 className="home-title">Welcome to My Website!</h2>
        <p className="home-text">
          This website is a collection of my certificates.
        </p>
        <p className="home-description">
          If you are looking for a specific certificate, please choose one from
          the left navigation sidebar to continue browsing my collection.
        </p>
      </div>

      <div>
        <h2 className="home-title">Willkommen auf meiner Website!</h2>
        <p className="home-text">
          Diese Website ist eine Sammlung meiner Zertifikate.
        </p>
        <p className="home-description">
          Wenn Sie nach einem bestimmten Zertifikat suchen, wählen Sie bitte
          eines aus der linken Navigationsleiste, um meine Sammlung weiter zu
          durchsuchen.
        </p>
      </div>

      <div>
        <h2 className="home-title">Ласкаво прошу на мій веб-сайт!</h2>
        <p className="home-text">Цей веб-сайт є колекцією моїх сертифікатів.</p>
        <p className="home-description">
          Якщо ви шукаєте певний сертифікат, будь ласка, виберіть його з бокової
          панелі навігації зліва, щоб продовжити перегляд моєї колекції.
        </p>
      </div>
    </div>
  );
};

export default Home;
