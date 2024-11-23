import logo from './logo.svg';
import './App.css';

function App() {
const name = "Suryaprakash.G";
const songs_link = ['https://youtu.be/ubk_MzyPVrY?si=-_yeduAPywsMJjDp' , 'https://youtu.be/TPVT-LWvgZQ?si=MJOjFUNvkhuE2z6V' , 'https://youtu.be/0Z3I8TSUwLI?si=eV9C7flvj-LrGQ2t'];
const song_name = ['Theansudarae','Aasa Oravae','Hey Minalae'];
function randomsonglink(){
  const int = Math.floor(Math.random()*3);
  return int;
};

  const random_number = randomsonglink();
  return (
    <div>
      <a href={songs_link[random_number]}>Click here to listen song {song_name[random_number]}</a>

    </div>
  );
}

export default App;
