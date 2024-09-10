import React from "react";
import { Features, Header } from "./components";
import { Hero } from "./components";
import { Services } from "./components";
import { Support } from "./components";
import { Testimonials } from "./components";
import { Contact } from "./components";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Features />
      <Support />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default App;
