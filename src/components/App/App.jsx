import moment from "moment";
import Logo from "../../assets/logo.svg";
import ProfilePic from "../../assets/profile-pic.jpg";
import "./App.scss";

const experienceItems = [
  {
    since: moment("2021-07-01", "YYYY-MM-DD"),
    title: "First Job at a Foreign Company",
  },
  {
    since: moment("2020-07-01", "YYYY-MM-DD"),
    title: "First Job as a Team Leader",
  },
  {
    since: moment("2017-05-01", "YYYY-MM-DD"),
    title: "First Job in Tech",
  },
  {
    since: moment("2015-02-01", "YYYY-MM-DD"),
    title: "Github Account Created",
  },
];

const languageItems = [
  {
    name: "Javascript",
    image: (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="js"
        class="svg-inline--fa fa-js fa-w-14"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
        ></path>
      </svg>
    ),
    description: "Experience with Frontend and Backend on various products.",
    experienceLevel: "Senior",
  },
  {
    name: "Python",
    image: (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="python"
        class="svg-inline--fa fa-python fa-w-14"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"
        ></path>
      </svg>
    ),
    description: "Experience with backend on various products.",
    experienceLevel: "Sernior",
  },
  {
    name: "PHP",
    image: (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="php"
        class="svg-inline--fa fa-php fa-w-20"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
      >
        <path
          fill="currentColor"
          d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"
        ></path>
      </svg>
    ),
    description: "Experience on maintaining a legacy product.",
    experienceLevel: "Junior",
  },
  {
    name: "Swift",
    image: (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="swift"
        class="svg-inline--fa fa-swift fa-w-14"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M448 156.09c0-4.51-.08-9-.2-13.52a196.31 196.31 0 0 0-2.58-29.42 99.62 99.62 0 0 0-9.22-28A94.08 94.08 0 0 0 394.84 44a99.17 99.17 0 0 0-28-9.22 195 195 0 0 0-29.43-2.59c-4.51-.12-9-.17-13.52-.2H124.14c-4.51 0-9 .08-13.52.2-2.45.07-4.91.15-7.37.27a171.68 171.68 0 0 0-22.06 2.32 103.06 103.06 0 0 0-21.21 6.1q-3.46 1.45-6.81 3.12a94.66 94.66 0 0 0-18.39 12.32c-1.88 1.61-3.69 3.28-5.43 5A93.86 93.86 0 0 0 12 85.17a99.45 99.45 0 0 0-9.22 28 196.31 196.31 0 0 0-2.54 29.4c-.13 4.51-.18 9-.21 13.52v199.83c0 4.51.08 9 .21 13.51a196.08 196.08 0 0 0 2.58 29.42 99.3 99.3 0 0 0 9.22 28A94.31 94.31 0 0 0 53.17 468a99.47 99.47 0 0 0 28 9.21 195 195 0 0 0 29.43 2.59c4.5.12 9 .17 13.52.2H323.91c4.51 0 9-.08 13.52-.2a196.59 196.59 0 0 0 29.44-2.59 99.57 99.57 0 0 0 28-9.21A94.22 94.22 0 0 0 436 426.84a99.3 99.3 0 0 0 9.22-28 194.79 194.79 0 0 0 2.59-29.42c.12-4.5.17-9 .2-13.51V172.14c-.01-5.35-.01-10.7-.01-16.05zm-69.88 241c-20-38.93-57.23-29.27-76.31-19.47-1.72 1-3.48 2-5.25 3l-.42.25c-39.5 21-92.53 22.54-145.85-.38A234.64 234.64 0 0 1 45 290.12a230.63 230.63 0 0 0 39.17 23.37c56.36 26.4 113 24.49 153 0-57-43.85-104.6-101-141.09-147.22a197.09 197.09 0 0 1-18.78-25.9c43.7 40 112.7 90.22 137.48 104.12-52.57-55.49-98.89-123.94-96.72-121.74 82.79 83.42 159.18 130.59 159.18 130.59 2.88 1.58 5 2.85 6.73 4a127.44 127.44 0 0 0 4.16-12.47c13.22-48.33-1.66-103.58-35.31-149.2C329.61 141.75 375 229.34 356.4 303.42c-.44 1.73-.95 3.4-1.44 5.09 38.52 47.4 28.04 98.17 23.13 88.59z"
        ></path>
      </svg>
    ),
    description:
      "Experience on working along with a senior dev on various iOS APPs.",
    experienceLevel: "Junior",
  },
];

function App() {
  return (
    <div className="app">
      <section className="app-header">
        <img id="profile-pic" src={ProfilePic} />
        <h1>Lucas Soranzo</h1>
        <small>Brazilian Full Stack Developer</small>
      </section>
      <section>
        <h2>Experience</h2>
        {experienceItems.map((item) => (
          <div className="experience-item">
            <p>
              <b>{moment.duration(moment().subtract(item.since)).humanize()}</b>
              <small>Since {item.since.format("MMMM YYYY")}</small>
            </p>
            <small className="primary">{item.title}</small>
          </div>
        ))}
      </section>
      <section>
        <h2>Languages</h2>
        {languageItems.map((language) => (
          <div className="experience-item">
            <p>
              {language.image}
              <small>{language.description}</small>
            </p>
            <small className="primary">
              {language.experienceLevel} on {language.name}
            </small>
          </div>
        ))}
      </section>
      <section>
        <h2>Platforms & Frameworks & Other Technologies</h2>
        <div className="card-list">
          <div className="card-item">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="digital-ocean"
              class="svg-inline--fa fa-digital-ocean fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M87 481.8h73.7v-73.6H87zM25.4 346.6v61.6H87v-61.6zm466.2-169.7c-23-74.2-82.4-133.3-156.6-156.6C164.9-32.8 8 93.7 8 255.9h95.8c0-101.8 101-180.5 208.1-141.7 39.7 14.3 71.5 46.1 85.8 85.7 39.1 107-39.7 207.8-141.4 208v.3h-.3V504c162.6 0 288.8-156.8 235.6-327.1zm-235.3 231v-95.3h-95.6v95.6H256v-.3z"
              ></path>
            </svg>
            <p>Digital Ocean</p>
          </div>
          <div className="card-item">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="aws"
              class="svg-inline--fa fa-aws fa-w-20"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"
              ></path>
            </svg>
            <p>AWS</p>
          </div>
          <div className="card-item">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="react"
              class="svg-inline--fa fa-react fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
              ></path>
            </svg>
            <p>React.js</p>
          </div>
          <div className="card-item">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="react"
              class="svg-inline--fa fa-react fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
              ></path>
            </svg>
            <p>React Native</p>
          </div>
          <div className="card-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
              fill="#fff"
            >
              <title>Logo Ionic</title>
              <path d="M256 153.9A102.1 102.1 0 10358.1 256 102.23 102.23 0 00256 153.9z" />
              <circle cx="402.59" cy="116.45" r="46.52" />
              <path d="M459.86 163.2l-1.95-4.28-3.11 3.52a70 70 0 01-28.06 19.32l-3 1.1 1.22 2.93A181.43 181.43 0 01439 256c0 100.92-82.1 183-183 183S73 356.92 73 256 155.08 73 256 73a180.94 180.94 0 0178.43 17.7l2.87 1.3 1.25-2.92A70.19 70.19 0 01359.21 62l3.67-2.93-4.17-2.07A221.61 221.61 0 00256 32C132.49 32 32 132.49 32 256s100.49 224 224 224 224-100.49 224-224a222.19 222.19 0 00-20.14-92.8z" />
            </svg>
            <p>Ionic</p>
          </div>
          <div className="card-item">
            <svg
              aria-hidden="true"
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 256 326"
            >
              <g fill="#fff">
                <path d="M114.784 0h53.278v244.191c-27.29 5.162-47.38 7.193-69.117 7.193C33.873 251.316 0 222.245 0 166.412c0-53.795 35.93-88.708 91.608-88.708c8.64 0 15.222.68 23.176 2.717V0zm1.867 124.427c-6.24-2.038-11.382-2.717-17.965-2.717c-26.947 0-42.512 16.437-42.512 45.243c0 28.046 14.88 43.532 42.17 43.532c5.896 0 10.696-.332 18.307-1.351v-84.707z" />
                <path d="M255.187 84.26v122.263c0 42.105-3.154 62.353-12.411 79.81c-8.64 16.783-20.022 27.366-43.541 39.055l-49.438-23.297c23.519-10.93 34.901-20.588 42.17-35.327c7.61-15.072 10.01-32.529 10.01-78.445V84.261h53.21z" />
                <path d="M196.608 0h53.278v54.135h-53.278V0z" />
              </g>
            </svg>
            <p>Django</p>
          </div>
          <div className="card-item">
            <svg
              aria-hidden="true"
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1024 1024"
            >
              <path
                d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1 77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3z"
                fill="#fff"
              />
            </svg>
            <p>Github</p>
          </div>
          <div className="card-item">
            <svg
              aria-hidden="true"
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0z"
                fill="#fff"
              />
            </svg>
            <p>Jira</p>
          </div>
          <div className="card-item">
            <svg
              aria-hidden="true"
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 512 512"
            >
              <path
                d="M483.13 32.23a19.65 19.65 0 0 0-2.54-.23h-449C23 31.88 16.12 38.88 16 47.75a11.44 11.44 0 0 0 .23 2.8l65.3 411.25a22.52 22.52 0 0 0 7 12.95A20 20 0 0 0 102 480h313.18a15.45 15.45 0 0 0 15.34-13.42l38.88-247.91H325.19l-18.46 112H205.21l-25.73-148h295.58l20.76-132c1.27-8.75-4.38-17.04-12.69-18.44z"
                fill="#fff"
              />
            </svg>
            <p>Bitbucket</p>
          </div>
          <div className="card-item">
            <svg
              aria-hidden="true"
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                d="M0 9.781v10.667h8.885v1.771H16v-1.771h16V9.781zm8.885 8.88H7.114v-5.333H5.333v5.333H1.781v-7.104h7.104zm5.334 0v1.787h-3.552v-8.891h7.115v7.109h-3.563zm16.005 0h-1.776v-5.333h-1.781v5.333h-1.781v-5.333h-1.771v5.333h-3.563v-7.104h10.672zm-16.005-5.328H16v3.557h-1.781z"
                fill="#fff"
              />
            </svg>
            <p>npm</p>
          </div>
          <div className="card-item">
            <svg
              aria-hidden="true"
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                d="M15.092 22.146c-.015.03-.03.054 0 0zm12.456-4.35c-1.006 0-1.998.23-2.9.675c-.295-.595-.6-1.115-.65-1.505c-.06-.455-.125-.725-.055-1.265s.385-1.305.38-1.36c-.005-.055-.07-.33-.715-.335s-1.2.125-1.265.295a6.09 6.09 0 0 0-.265.955c-.115.585-1.289 2.675-1.954 3.765c-.22-.425-.405-.8-.445-1.1c-.06-.455-.125-.725-.055-1.265s.385-1.305.38-1.36c-.005-.055-.07-.33-.714-.335s-1.2.125-1.265.295c-.065.17-.135.57-.265.955s-1.695 3.865-2.104 4.77c-.21.46-.39.83-.52 1.08c-.02.04-.035.065-.045.085c.015-.025.025-.05.025-.04c-.11.215-.175.335-.175.335v.005c-.085.16-.18.305-.225.305c-.03 0-.095-.42.015-.995c.235-1.21.79-3.09.785-3.155c-.005-.035.105-.36-.365-.535c-.455-.165-.62.11-.66.11s-.07.1-.07.1s.505-2.12-.97-2.12c-.92 0-2.2 1.01-2.829 1.925c-.395.215-1.25.68-2.15 1.175l-1.035.57c-.025-.025-.045-.05-.07-.075c-1.79-1.91-5.094-3.26-4.954-5.825c.05-.935.375-3.39 6.354-6.37c4.9-2.44 8.817-1.77 9.492-.28c.97 2.125-2.095 6.08-7.183 6.65c-1.94.215-2.959-.535-3.214-.815c-.265-.295-.305-.31-.405-.255c-.165.09-.06.35 0 .505c.15.395.775 1.095 1.84 1.445c.935.305 3.209.475 5.958-.59c3.089-1.19 5.494-4.505 4.788-7.28c-.718-2.82-5.394-3.745-9.815-2.175c-2.635.935-5.484 2.405-7.533 4.32C.26 11.361-.129 13.346.031 14.176c.57 2.945 4.629 4.865 6.253 6.285l-.225.125c-.815.405-3.909 2.025-4.684 3.735c-.875 1.94.145 3.33.814 3.52c2.09.58 4.229-.465 5.379-2.18s1.01-3.955.48-4.975c-.005-.015-.015-.025-.02-.04a72.558 72.558 0 0 1 1.815-1.04c-.2.54-.345 1.19-.42 2.13c-.09 1.1.365 2.525.955 3.085c.26.245.574.25.77.25c.69 0 1-.57 1.345-1.25c.425-.83.8-1.795.8-1.795s-.47 2.61.815 2.61c.47 0 .94-.605 1.15-.915v.005s.01-.02.035-.06c.05-.075.075-.12.075-.12v-.015c.19-.325.605-1.07 1.23-2.3c.81-1.59 1.584-3.575 1.584-3.575c.075.436.179.867.31 1.29c.14.475.435.995.67 1.5c-.19.26-.305.41-.305.41c0 .004.002.007.005.01c-.15.2-.32.415-.495.625c-.639.76-1.4 1.63-1.5 1.88c-.12.295-.09.515.14.685c.17.13.47.15.785.125c.575-.04.98-.18 1.175-.27a4.11 4.11 0 0 0 1.01-.53c.625-.46 1.005-1.12.97-1.99c-.02-.48-.175-.96-.365-1.41c.055-.08.115-.165.17-.25a26.716 26.716 0 0 0 1.755-3.031c.075.436.178.867.31 1.29c.12.405.355.85.57 1.285c-.93.755-1.505 1.63-1.704 2.205c-.37 1.065-.08 1.545.465 1.655c.245.05.595-.065.855-.175c.386-.129.75-.316 1.079-.555c.625-.46 1.23-1.105 1.189-1.98c-.015-.395-.125-.79-.27-1.17c.785-.33 1.805-.51 3.105-.36c2.784.325 3.329 2.065 3.224 2.79s-.69 1.13-.885 1.25c-.195.12-.255.165-.24.255c.025.13.115.125.28.095c.23-.04 1.46-.59 1.515-1.935c.08-1.7-1.555-3.57-4.45-3.555zM6.089 25.031c-.92 1.005-2.209 1.385-2.764 1.065c-.595-.346-.36-1.825.774-2.896c.69-.65 1.58-1.25 2.17-1.62c.135-.08.33-.2.57-.345a.828.828 0 0 1 .06-.035c.045-.03.095-.055.145-.085c.414 1.52.015 2.86-.955 3.915zm6.718-4.57c-.32.785-.994 2.785-1.405 2.68c-.35-.09-.565-1.615-.07-3.115c.25-.755.78-1.655 1.095-2.005c.505-.565 1.06-.745 1.19-.52c.175.295-.61 2.47-.81 2.96zm5.55 2.65c-.135.07-.26.115-.32.08c-.045-.025.055-.12.055-.12s.695-.745.97-1.085c.16-.2.345-.435.545-.695c0 .025.005.05.005.08c-.006.895-.866 1.5-1.256 1.74zm4.28-.975c-.1-.07-.085-.305.25-1.035c.13-.285.43-.765.95-1.225c.059.174.091.356.095.54c-.005 1.125-.81 1.545-1.295 1.72z"
                fill="#fff"
              />
            </svg>
            <p>sass</p>
          </div>
          <div className="card-item">
            <svg
              aria-hidden="true"
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path d="M10.483 12.482h3.034L12 8.831z" fill="#fff" />
              <path
                d="M12 3.074L3.689 6.038l1.268 10.987l7.043 3.9l7.043-3.9l1.268-10.987L12 3.074zm5.187 13.621H15.25l-1.045-2.606h-4.41L8.75 16.695H6.813L12 5.047l5.187 11.648z"
                fill="#fff"
              />
            </svg>
            <p>Angular</p>
          </div>
          <div className="card-item">
            <svg
              aria-hidden="true"
              focusable="false"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 512 512"
            >
              <path
                d="M93.19 329.38l47.45-304.07c1.64-10.37 15.55-12.82 20.46-3.55l51 95.45zM432 400l-46.74-276.79a11 11 0 0 0-18.54-6L80 400l159.36 91.91a33.18 33.18 0 0 0 31.91 0zM302.36 158.93l-36.54-69.54a10.86 10.86 0 0 0-19.36 0L85.83 375.74z"
                fill="#fff"
              />
            </svg>
            <p>Firebase</p>
          </div>
        </div>
      </section>
      <footer>
        <img src={Logo} className="app-logo" />
        Built with React.js
      </footer>
    </div>
  );
}

export default App;
