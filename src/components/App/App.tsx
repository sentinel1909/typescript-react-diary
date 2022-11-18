// App.tsx

import { useState } from "react";

import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

function App() {
  const [today] = useState(new Date());
  let year = today.getFullYear();
  let todayDate: string = today.toLocaleString().split(",")[0];
  return (
    <>
      <Header currentDate={todayDate} />
      <Content />
      <Footer copyrightYear={year} />
    </>
  );
}

export default App;
