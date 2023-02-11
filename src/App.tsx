import { useState } from "react";
import Header from "./components/header";
import MobileNavbar from "./components/headerMobile";
import Main from "./components/main";

function App() {
  return (
    <div className="">
      <div className="w-full fixed top-0 bg-slate-400">
        <header className="h-24 hidden laptop:block">
          <Header />
        </header>
        <header className="h-16 block laptop:hidden">
          <MobileNavbar />
        </header>
      </div>
      <main className="pt-16 laptop:pt24">
        <Main />
      </main>
    </div>
  );
}

export default App;
