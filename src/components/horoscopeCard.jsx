import React from "react";
import { useSelector } from "react-redux";
export default function HoroscopeCard({data, title, loading }) {
    const color = data.color;
    if (loading) {
        return <div className="text-center">Loading..</div>
    } else {
        if (data.mood != undefined) {

        return <div className="flex flex-col justify-center items-center">
            <h1 className="underline text-5xl font-bold">{title}</h1>
            <h3 className='mt-2 text-xl'>{data.date_range}</h3>
            <p className="w-80 mt-8 mb-8 bg-indigo-900/[.2] rsounded p-4 text-center "> {data.description}</p>
            <p>Mood: {data.mood}</p>
            <p>Lucky Number: {data.lucky_number} </p>
            <p style={{color: `${color}`}}>Color: {data.color} </p>
            <p>Compatbility: {data.compatibility}</p>
        </div>
        } else {
            return <div className="flex flex-col justify-center items-center">
                <h1 className="md:underline text-5xl font-bold xs:text-3xl underline text-center">{title}</h1>
            </div>
        }
    }
    return(
        <div></div>
    )
}