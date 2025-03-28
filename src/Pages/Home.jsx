import React from "react";
import Video from "../Components/Video";
import ArxeologyHome from "../Components/ArxeologyHome";
import AllPageLenta from "../Components/AllPageLenta";
import AshyolarHome from "../Components/AshyolarHome";
import MuseumHome from "../Components/MuseumHome";
import OlimlarHome from "../Components/OlimlarHome";
import LibraryHome from "../Components/LibraryHome";
import NewsHome from "../Components/NewsHome";

export default function Home() {
  return (
    <div>
      <Video />

      <NewsHome />
      <ArxeologyHome />
      <AshyolarHome />
      <MuseumHome />
      <LibraryHome />
      {/*  */}
      {/* <AllPageLenta title="Arxeologiya yodgorliklari" button="Hammasi" /> */}
      {/* <AllPageLenta title="Ashyolar" button="Hammasi" /> */}
      {/* <OlimlarHome /> */}
      {/* <AllPageLenta
        title="Toshkent Arxeologiya Yodgorliklari"
        button="Ro'yxatdan o'tish"
        /> */}
    </div>
  );
}
