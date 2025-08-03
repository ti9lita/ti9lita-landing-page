import React from "react";
import { Header } from "./components/Header";
import { Story } from "./components/Story";
import { Products } from "./components/Products";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <Story />
      <Products />
      <CallToAction />
      <Footer />
    </div>
  );
}