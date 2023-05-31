"use client";
import { Filter } from "@/typings";
import React, { useState } from "react";

type ComponentProps = {
    applyFilter: Function;
};

function Filter({ applyFilter }: ComponentProps) {
    const createFilterObject = (): Filter => {
        return { searchTerm: searchTerm };
    };
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="flex gap-2">
                    <input
                        placeholder="Vyhledat"
                        className="input input-ghost input-bordered text-primary-content focus:text-primary-content rounded-full focus:bg-transparent"
                        onChange={(t) => setSearchTerm(t.target.innerText)}
                    ></input>
                    <button
                        aria-label="button component"
                        className="btn btn-ghost mask mask-squircle btn-square focus:bg-base-content hidden border-none focus:bg-opacity-50 md:flex"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </button>
                </div>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => applyFilter(createFilterObject())}>
                        Použít
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Filter;