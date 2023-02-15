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
      <header className="h-24 bg-gray-900 text-orange-500 hidden laptop:flex laptop:items-center fixed top-0 w-full z-20">
        <Header />
      </header>
      <header className="h-16 bg-gray-900 text-orange-500 block laptop:hidden fixed top-0 w-full z-20">
        <MobileHeader />
      </header>
      <main className="hidden laptop:block w-full bg-gradient-to-b from-gray-900 to-gray-800 text-orange-500">
        <Main />
      </main>
      <main className="block laptop:hidden w-full bg-gradient-to-b from-gray-900 to-gray-800 text-orange-500">
        <MainMobile />
      </main>
      <section className="w-full bg-gray-100 text-gray-800">
        <About />
      </section>
      <section className="w-full bg-gray-800 text-gray-100">
        <Projects />
      </section>
      <section className="w-full bg-gray-100 text-gray-800">
        <Skills />
      </section>
      <section className="w-full bg-gray-800 text-gray-100">
        <Contact />
      </section>
      <SideBar />
    </div>
  );
}

export default App;
