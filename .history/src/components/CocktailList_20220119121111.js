import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2 className="section-title">no cocktails matched your search</h2>;
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <h2>cocktail list component</h2>
    </section>
  );
};

export default CocktailList;
