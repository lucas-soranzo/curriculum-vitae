import moment from 'moment';
import Logo from '../../assets/logo.svg'
import './App.scss';

function App() {
  return (
    <div className="app">
      <section className="app-header">
        <h1>
          Lucas Soranzo
        </h1>
        <small>
          Desenvolvedor Full Stack
        </small>
      </section>
      <section>
        <h2>
          Tempo de Experiencia
        </h2>
        <div className="experience-item">
          <p>
            <b>{moment.duration(moment().subtract(moment('2017-05-01', 'YYYY-MM-DD'))).humanize()}</b>
            <small>
              Desde maio de 2017
          </small>
          </p>
          <small className="primary">Primeiro emprego na area</small>
        </div>
        <div className="experience-item">
          <p>
            <b>{moment.duration(moment().subtract(moment('2015-02-01', 'YYYY-MM-DD'))).humanize()}</b>
            <small>
              Desde Fevereiro de 2015
            </small>
          </p>
          <small className="primary">Primeira conta no github</small>
        </div>
      </section>
      <section>
        <h2>
          Linguagens 
        </h2>
        <ul>
          <li>Javascript</li>
          <li>Python</li>
          <li>PHP</li>
          <li>Swift</li>
        </ul>
      </section>
      <footer>
        <img src={Logo} className="app-logo" />
        Powered by React.js
      </footer>
    </div>
  );
}

export default App;
