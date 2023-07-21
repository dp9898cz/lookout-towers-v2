"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

function ProfileBox({
    score,
    visits,
    favs,
    changes,
    ratings,
    loading,
}: {
    score: number;
    visits: number;
    favs: number;
    changes: number;
    ratings: number;
    loading: boolean;
}) {
    const { data: session, status } = useSession();

    return (
        <div className="card bg-base-100 shadow-xl flex-col p-3" id="profile_box">
            <div className="flex flex-col gap-2 items-center p-3">
                <>
                    {session?.user?.image ? (
                        <div className="avatar">
                            <div className="w-28 rounded-full">
                                <Image src={session?.user?.image} width={112} height={112} alt={"profile picture"} referrerPolicy="no-referrer" />
                            </div>
                        </div>
                    ) : (
                        <div className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-28">
                                <span>{session?.user && session.user.name ? session.user.name.substring(0, 2) : "TY"}</span>
                            </div>
                        </div>
                    )}
                </>
                <h2 className="prose prose-2xl mb-2 font-semibold">{session?.user && session.user.name ? session.user.name : "TY"}</h2>
                <div className="flex justify-between bg-secondary text-secondary-content rounded-box p-3 w-56 text-lg font-bold">
                    <p>Komunitní skóre</p>
                    <p>{score}</p>
                </div>
            </div>
            <div className="flex flex-col justify-around text-primary font-bold p-3">
                <div className="stats stats-vertical shadow">
                    <div className="stat w-60">
                        <div className="stat-figure text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="inline-block w-8 h-8 stroke-current"
                            >
                                <circle cx="12" cy="10" r="3" />
                                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                            </svg>
                        </div>
                        <div className="stat-title">Návštěvy</div>

                        <div className="stat-value text-primary max-h-10">
                            {loading ? <div className="loading loading-dots loading-lg text-primary"></div> : visits}
                        </div>
                    </div>

                    <div className="stat w-60">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                ></path>
                            </svg>
                        </div>
                        <div className="stat-title">Oblíbené</div>
                        <div className="stat-value text-primary max-h-10">
                            {loading ? <div className="loading loading-dots loading-lg text-primary"></div> : favs}
                        </div>
                    </div>

                    <div className="stat w-60">
                        <div className="stat-figure text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="inline-block w-8 h-8 stroke-current"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z" />
                            </svg>
                        </div>
                        <div className="stat-title">Úpravy</div>
                        <div className="stat-value text-primary max-h-10">
                            {loading ? <div className="loading loading-dots loading-lg text-primary"></div> : changes}
                        </div>
                    </div>
                    <div className="stat w-60">
                        <div className="stat-figure text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="inline-block w-8 h-8 stroke-current"
                            >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                        </div>
                        <div className="stat-title">Hodnocení</div>
                        <div className="stat-value text-primary max-h-10">
                            {loading ? <div className="loading loading-dots loading-lg text-primary"></div> : ratings}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileBox;
