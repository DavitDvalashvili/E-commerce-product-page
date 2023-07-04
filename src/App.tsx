import { GlobalStyles } from "./components/GlobalStyles";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import { ProductImagesBox } from "./components/ProductImagesBox";
import { ProductTextBox } from "./components/productTextBox";
import { Cart } from "./components/Card";
import { useState } from "react";
import { StyledProductContainer } from "./components/StylesComponents";
import { StyledPopup } from "./components/StylesComponents";
import { StyledApp } from "./components/StylesComponents";

function App() {
  const [hideCard, setHideCart] = useState<boolean>(true);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  function handleClick() {
    {
      hideCard ? setHideCart(false) : setHideCart(true);
    }
    console.log(hideCard);
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
      <GlobalStyles />
      <StyledApp>
        <Header
          handleClick={handleClick}
          addAmount={addAmount}
          innerWidth={innerWidth}
        />
        <StyledProductContainer>
          <ProductImagesBox
            innerWidth={innerWidth}
            setShowPopup={setShowPopup}
          />
          <ProductTextBox setAddAmount={setAddAmount} />
        </StyledProductContainer>
        {!hideCard && (
          <Cart addAmount={addAmount} setAddAmount={setAddAmount} />
        )}
      </StyledApp>
      {showPopup ? (
        <StyledPopup>
          <div className="popUp">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                setShowPopup(false);
              }}
            >
              <path
                id="Combined Shape"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 2.85714L17.1429 0L10 7.14286L2.85714 0L0 2.85714L7.14286 10L0 17.1429L2.85714 
              20L10 12.8571L17.1429 20L20 17.1429L12.8571 10L20 2.85714Z"
                fill="white"
              />
            </svg>
            <ProductImagesBox
              innerWidth={innerWidth}
              setShowPopup={setShowPopup}
            />
          </div>
        </StyledPopup>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
