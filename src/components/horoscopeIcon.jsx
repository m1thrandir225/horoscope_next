import React, { useEffect, useState } from "react";
import Image from "next/image";
export default function HoroscopeIcon({ title, imgSRC, sendTitleToParent, setData, setLoading, setError }) {
    const [componentTitle, setTitle] = useState('');
    function changeTitle(newTitle) {
        setTitle(newTitle)
    }
    useEffect(() => {
      const getData = async (sign) => {
        setLoading(true)
        try {
          const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;
          await fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { setData(json); });

        } catch (err) {
          setError(err);
        } finally {

          setLoading(false);
        }
      }
      getData(componentTitle);
    }, [componentTitle, setData, setLoading, setError])

    return(
        <div className="lg:w-auto xs:w-46" onClick={() => {changeTitle(title); sendTitleToParent(title);}}>
            <Image className="hover:bg-indigo-900/[.09] drop-shadow-lg" alt={componentTitle} src={imgSRC} layout='intrinsic'/>
        </div>
    )
}