import { GlobalStyles } from "./components/GlobalStyles";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import { ProductImagesBox } from "./components/ProductImagesBox";
import { ProductTextBox } from "./components/productTextBox";
import {Cart} from "./components/Card"
import {useState} from "react"
import { StyledProductContainer } from "./components/StylesComponents";


function App() {
  const [hideCard, setHideCart] = useState<boolean>(true);

  function handleClick () {
    {hideCard ? setHideCart(false) : setHideCart(true)};
    console.log(hideCard)
  }

  const [addAmount, setAddAmount] = useState(0);

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setInnerWidth(window.innerWidth);
  });

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles/>
      <Header handleClick={handleClick} addAmount={addAmount} innerWidth={innerWidth}/>
      <StyledProductContainer>
        <ProductImagesBox innerWidth={innerWidth}/>
        <ProductTextBox setAddAmount={setAddAmount}/>
      </StyledProductContainer>
      {!hideCard && <Cart addAmount={addAmount} setAddAmount={setAddAmount}/>}
    </>
  );
}

export default App;

