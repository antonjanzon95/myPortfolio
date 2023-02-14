import { useState, useEffect } from "react";
import Header from "./components/header";
import MobileHeader from "./components/headerMobile";
import Main from "./components/main";
import About from "./components/about";
import SideBar from "./components/sidebar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import MainMobile from "./components/mainMobile";

function App() {
  return (
    <div className="">
      <header className="h-24 bg-blue-700 hidden laptop:flex laptop:items-center fixed top-0 w-full z-20">
        <Header />
      </header>
      <header className="h-16 bg-blue-700 block laptop:hidden fixed top-0 w-full z-20">
        <MobileHeader />
      </header>
      <main className="hidden laptop:block w-full bg-gradient-to-b from-blue-700 to-blue-600 text-slate-100">
        <Main />
      </main>
      <main className="block laptop:hidden w-full bg-gradient-to-b from-blue-700 to-blue-600 text-slate-100">
        <MainMobile />
      </main>
      <section className="w-full bg-slate-50">
        <About />
      </section>
      <section className="w-full bg-blue-600 text-slate-100">
        <Projects />
      </section>
      <section className="w-full bg-slate-100 text-blue-700">
        <Skills />
      </section>
      <section className="w-full bg-blue-700 text-slate-100">
        <Contact />
      </section>
      <SideBar />
    </div>
  );
}

export default App;
