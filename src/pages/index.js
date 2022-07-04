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

import { useSelector } from "react-redux";
export default function Home() {
  const title = useSelector((state) => state.title.title);
  const loading = useSelector((state) => state.data.loading);
  const data = useSelector((state) => state.data.data);
  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title> Daily Horoscope </title>
      </Head>
      <div className="mt-8">
        <HoroscopeCard data={data} title={title} loading={loading}/>
      </div>
      <div className="mt-28 flex flex-col gap-10 justify-center items-center">
        <div className="flex gap-8 lg:flex-row justify-center items-center xs:flex-col">
          <HoroscopeIcon
            title="Aries"
            imgSRC={aries}
          />
          <HoroscopeIcon
            title="Taurus"
            imgSRC={taurus}
          />
          <HoroscopeIcon
            title="Gemini"
            imgSRC={gemini}
          />
          <HoroscopeIcon
            title="Cancer"
            imgSRC={cancer}
          />
          <HoroscopeIcon
            title="Leo"
            imgSRC={leo}
          />
          <HoroscopeIcon
            title="Virgo"
            imgSRC={virgo}
          />
        </div>
        <div className="flex gap-8 lg:flex-row justify-center items-center xs:flex-col">
          <HoroscopeIcon
            title="Libra"
            imgSRC={libra}
          />
          <HoroscopeIcon
            title="Scorpio"
            imgSRC={scorpio}
          />
          <HoroscopeIcon
            title="Sagittarius"
            imgSRC={sagitarius}
          />
          <HoroscopeIcon
            title="Capricorn"
            imgSRC={capricorn}
          />
          <HoroscopeIcon
            title="Aquarius"
            imgSRC={aquarious}
          />
          <HoroscopeIcon
            title="Pisces"
            imgSRC={pisces}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
