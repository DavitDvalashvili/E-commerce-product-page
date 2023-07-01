import { GlobalStyles } from "./components/GlobalStyles";
import { Helmet } from "react-helmet";
import Header from "./components/Header";



function App() {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <Header/>
    </>
  );
}

export default App;
