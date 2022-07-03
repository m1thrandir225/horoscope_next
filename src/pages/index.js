import Head from "next/head";
import aries from "../../public/first.png";
import taurus from "../../public/second.png";
import gemini from "../../public/third.png";
import cancer from "../../public/fourth.png";
import leo from "../../public/fifth.png";
import virgo from "../../public/sixth.png";
import libra from "../../public/seven.png";
import scorpio from "../../public/eight.png";
import sagitarius from "../../public/ninth.png";
import capricorn from "../../public/tenth.png";
import aquarious from "../../public/eleventh.png";
import pisces from "../../public/twelvth.png";
import HoroscopeIcon from "../components/horoscopeIcon";
import HoroscopeCard from "../components/horoscopeCard";
import Footer from "../components/footer";

import { useState } from "react";
export default function Home() {
  const [title, setTitle] = useState("Select a sign to continue: ");
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const getTitleFromChild = (index) => {
    // the callback. Use a better name
    setTitle(index);
  };
  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title> Daily Horoscope </title>
      </Head>
      <div className="mt-8">
        <HoroscopeCard title={title} data={data} loading={isLoading} />
      </div>
      <div className="mt-28 flex flex-col gap-10 justify-center items-center">
        <div className="flex gap-8 lg:flex-row justify-center items-center sm:flex-col">
          <HoroscopeIcon
            title="Aries"
            imgSRC={aries}
            sendTitleToParent={getTitleFromChild}
            setData={setData}
            setLoading={setLoading}
          />
          <HoroscopeIcon
            title="Taurus"
            imgSRC={taurus}
            sendTitleToParent={getTitleFromChild}
            setData={setData}
            setLoading={setLoading}
          />
          <HoroscopeIcon
            title="Gemini"
            imgSRC={gemini}
            sendTitleToParent={getTitleFromChild}
            setData={setData}
            setLoading={setLoading}
          />
          <HoroscopeIcon
            title="Cancer"
            imgSRC={cancer}
            sendTitleToParent={getTitleFromChild}
            setData={setData}
            setLoading={setLoading}
          />
          <HoroscopeIcon
            title="Leo"
            imgSRC={leo}
            sendTitleToParent={getTitleFromChild}
            setData={setData}
            setLoading={setLoading}
          />
          <HoroscopeIcon
            title="Virgo"
            imgSRC={virgo}
            sendTitleToParent={getTitleFromChild}
            setData={setData}
            setLoading={setLoading}
          />
        </div>
        <div className="flex gap-8 lg:flex-row justify-center items-center sm:flex-col">
          <HoroscopeIcon
            title="Libra"
            imgSRC={libra}
            sendTitleToParent={getTitleFromChild}
            setData={setData}
            setLoading={setLoading}
          />
          <HoroscopeIcon
            title="Scorpio"
            imgSRC={scorpio}
            sendTitleToParent={getTitleFromChild}
            setData={setData}
            setLoading={setLoading}
          />
          <HoroscopeIcon
            title="Sagittarius"
            imgSRC={sagitarius}
            sendTitleToParent={getTitleFromChild}
            setData={setData}
            setLoading={setLoading}
          />
          <HoroscopeIcon
            title="Capricorn"
            imgSRC={capricorn}
            sendTitleToParent={getTitleFromChild}
            setData={setData}
            setLoading={setLoading}
          />
          <HoroscopeIcon
            title="Aquarius"
            imgSRC={aquarious}
            sendTitleToParent={getTitleFromChild}
            setData={setData}
            setLoading={setLoading}
          />
          <HoroscopeIcon
            title="Pisces"
            imgSRC={pisces}
            sendTitleToParent={getTitleFromChild}
            setData={setData}
            setLoading={setLoading}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
