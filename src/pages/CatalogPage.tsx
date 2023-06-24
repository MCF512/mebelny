import React from "react";
import { Footer, FormSection, Header } from "../components/components";
import img from '../assets/formImage.png'


export const CatalogPage = () => {

  return (
    <>
      <Header />

      <FormSection image={img} />
      <Footer />
    </>
  )
}