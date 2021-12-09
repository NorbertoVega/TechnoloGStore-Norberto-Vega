import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ListItemContainer from './components/ItemListContainer';

function App() {
  return (
    <>
        <NavBar/>
        <ListItemContainer greetings="Bienvenido a la tienda!!"/>
    </>
  );
}

export default App;
