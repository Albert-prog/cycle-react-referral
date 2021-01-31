import './src/App.css';
import Img from './20210128_UC_front_woman7.png';

function App() {
  return (
    <div className="App">
     <header className="topmenu">
      <h1>CYCLE</h1>
      <h3>Thank you for signing up</h3>
     </header>
     <main className="mainsection">
      <img src={Img} alt="cleaning"></img>
      <div data-vl-widget="embedForm"></div>
     </main>
     <section>
     <h2>Here is how it works:</h2>
     <div data-vl-widget="milestoneWidget"></div>
     <div data-vl-widget="referralCountWidget"></div>
     </section>
    </div>
  );
}

export default App;
