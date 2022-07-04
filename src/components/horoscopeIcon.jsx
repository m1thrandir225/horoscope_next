import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setError, setData, setLoading, clearData} from '../store/slices/filterData';
import { setTitle } from "../store/slices/titleSlice";
export default function HoroscopeIcon({title, imgSRC}) {
    const dispatch = useDispatch();
    dispatch(clearData);
    const getData = (sign) => {
      dispatch(setLoading(true))
      try {
        dispatch(clearData())
        const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;
        fetch(URL, {
          method: 'POST'
      }).then(response => response.json())
      .then(json => { dispatch(setData(json)); });

      } catch (err) {
        dispatch(setError(err));
      } finally {
        dispatch(setLoading(false));
      }
    }

    return(
        <div className="lg:w-auto xs:w-46" onClick={() => {dispatch(setTitle(title)); getData(title)}}>
            <Image className="hover:bg-indigo-900/[.09] drop-shadow-lg" alt='test' src={imgSRC} layout='intrinsic'/>
        </div>
    )
}