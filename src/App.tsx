import { useState, useEffect } from "react";
import Header from "./components/header";
import MobileHeader from "./components/headerMobile";
import Main from "./components/main";
import About from "./components/about";
import SideBar from "./components/sidebar";
import Projects from "./components/projects";
import Skills from "./components/skills";

function App() {
  return (
    <div className="">
      <header className="h-24 bg-blue-700 hidden laptop:flex items-center fixed top-0 w-full z-20">
        <Header />
      </header>
      <header className="h-16 bg-blue-700 block laptop:hidden fixed top-0 w-full z-20">
        <MobileHeader />
      </header>

      <main className="pt-16 laptop:pt-24 w-full bg-blue-700 text-slate-100">
        <Main />
      </main>
      <section className="w-full bg-slate-100">
        <About />
      </section>
      <section className="w-full bg-blue-700 text-slate-100">
        <Projects />
      </section>
      <section className="w-full bg-slate-100 text-blue-700">
        <Skills />
      </section>
      <SideBar />
    </div>
  );
}

export default App;
