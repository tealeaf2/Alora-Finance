import React from 'react'
import {Link} from 'react-router-dom'

function gameChoice() {
    return(
        <section className="text-black">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <Link
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-orange-500/10 hover:shadow-orange-500/10"
                        to="/games/CoinQuest"
                    >

                        <h2 className="mt-4 text-xl font-bold text-black">CoinQuest</h2>

                        <p className="mt-1 text-sm black">
                            Learn to count money and then spend it on awesome stuff!
                        </p>
                    </Link>

                    <Link
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
                        to='/'
                    >


                        <h2 className="mt-4 text-xl font-bold text-black">Random</h2>

                        <p className="mt-1 text-sm text-black">
                            Placeholder
                        </p>
                    </Link>


                </div>
            </div>
        </section>
    )
}

export default gameChoice