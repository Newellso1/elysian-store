import { useState } from "react";
import Header from "./Components/Header";
import PromotionalHeader from "./Components/PromotionalHeader";

function App() {
  const [hidePromo, setHidePromo] = useState(true);

  return (
    <div className="App">
      {hidePromo && (
        <PromotionalHeader hidePromo={hidePromo} setHidePromo={setHidePromo} />
      )}

      <Header />
    </div>
  );
}

export default App;
