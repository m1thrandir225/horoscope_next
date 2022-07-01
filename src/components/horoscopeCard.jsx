import React from "react";
import { useState, useEffect } from "react";

export default function HoroscopeCard({title, data, loading}) {
    if (loading) {
        return <div className="text-center">Loading..</div>
    } else {
        if (data.mood != undefined) {

        return <div className="flex flex-col justify-center items-center">
            <h1 className="underline text-5xl font-bold">{title}</h1>
            <h3 className='mt-2 text-xl'>{data.date_range}</h3>
            <p className="w-80 mt-8 mb-8 bg-indigo-900/[.2] rounded p-4 text-center "> {data.description}</p>
            <p>Mood: {data.mood}</p>
            <p>Lucky Number: {data.lucky_number} </p>
            <p>Color: {data.color} </p>
            <p>Compatbility: {data.compatibility}</p>
        </div>
        } else {
            return <div className="flex flex-col justify-center items-center">
                <h1 className="underline text-5xl font-bold">{title}</h1>
            </div>
        }
    }   
    return(
        <div></div>
    )
}