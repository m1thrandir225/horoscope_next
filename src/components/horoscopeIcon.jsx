import React, { useEffect, useState } from "react";
import Image from "next/image";
export default function HoroscopeIcon({ title, imgSRC, sendTitleToParent, sendDataToParent }) {
    const [componentTitle, setTitle] = useState('');
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
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
      getData(title);
    }, [title])

    return(
        <div className="w-36 bg-{data.mood}-800" onClick={() => {changeTitle(title); sendTitleToParent(title); sendDataToParent(data, isLoading);}}>
            <Image alt={componentTitle} src={imgSRC} layout='intrinsic'/>
        </div>
    )
}