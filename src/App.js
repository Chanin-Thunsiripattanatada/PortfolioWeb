import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import MainPage from './components/Layouts/MainPage/MainPage';
import TableOfContents from './components/Layouts/MainPage/TableOfContents';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TableOfContents />
        <MainPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
