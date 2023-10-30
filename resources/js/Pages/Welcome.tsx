import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import logo from '../../Images/ArchonsImpactIcon.jpg'

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <>
            <Head title="Archons impact" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    <div className="flex flex-row gap-4  sm:fixed sm:top-0 sm:left-0 p-6 text-left">
                        <div>
                            <img src={logo} className='w-20 h-20 rounded-lg' alt="" />
                        </div>
                        <div>
                            <h2 className="font-heading dark:text-slate-200 mb-8 text-3xl font-bold lg:text-4xl">
                                Archons Impact
                            </h2>
                        </div>
                    </div>
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="p-4 max-w-xl mx-auto">

                    <h2 className="font-heading dark:text-slate-200 mb-8 text-3xl font-bold lg:text-4xl">
                        Como funciona ?
                    </h2>

                    <div className="flex">
                        <div className="mr-4 flex flex-col items-center">
                            <div>
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="h-6 w-6 text-blue-800 dark:text-slate-200">
                                    <path d="M12 5l0 14"></path>
                                    <path d="M18 13l-6 6"></path>
                                    <path d="M6 13l6 6"></path>
                                </svg></div>
                            </div>
                            <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
                        </div>
                        <div className="pt-1 pb-8">
                            <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">Crea una cuenta!</p>
                            <p className="text-gray-600 dark:text-slate-300">Crea una cuenta para poder revisar las estadisticas de tus personajes,
                                También para comparar tus personajes con los de otro jugador y revisar sus estadisticas en la misma pagina!.
                            </p>
                        </div>
                    </div>


                    <div className="flex">
                        <div className="mr-4 flex flex-col items-center">
                            <div>
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="h-6 w-6 text-blue-800 dark:text-slate-200">
                                    <path d="M12 5l0 14"></path>
                                    <path d="M18 13l-6 6"></path>
                                    <path d="M6 13l6 6"></path>
                                </svg></div>
                            </div>
                            <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
                        </div>
                        <div className="pt-1 pb-8">
                            <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">Ingresa al dashboard</p>
                            <p className="text-gray-600 dark:text-slate-300">Ingresa a tu dashboard para revisar las estadisticas de tus personajes, tendras que ingresar
                                tu uid en el campo de texto y darle a buscar, hay que aclarar que los personajes que se mostraran son <b>solo los que tienes publicos dentro del juego</b>. Si
                                no sabes como dejar publicos tus personajes, en el dashboard tienes una guia de como hacerlo.
                            </p>
                        </div>
                    </div>


                    <div className="flex">
                        <div className="mr-4 flex flex-col items-center">
                            <div>
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="h-6 w-6 text-blue-800 dark:text-slate-200">
                                    <path d="M12 5l0 14"></path>
                                    <path d="M18 13l-6 6"></path>
                                    <path d="M6 13l6 6"></path>
                                </svg></div>
                            </div>
                            <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
                        </div>
                        <div className="pt-1 pb-8">
                            <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">Compara tus personajes en un solo lugar!</p>
                            <p className="text-gray-600 dark:text-slate-300">Al ingresar tu uid en tu dashboard se te mostrara tus personajes publicos, si pinchas en comparar
                                se dividirá la pantalla y podras ingresar el uid del jugador con el que quieres comparar tus personajes, al darle a buscar si ese jugador tiene publico algun personaje de los que tienes
                                se mostraran sus estadisticas.
                            </p>
                        </div>
                    </div>


                    <div className="flex">
                        <div className="mr-4 flex flex-col items-center">
                            <div>
                                <div
                                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900 bg-blue-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        className="h-6 w-6 text-white dark:text-slate-200">
                                        <path d="M5 12l5 5l10 -10"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="pt-1 ">
                            <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">Y listo!, ya puedes revisar tus estadisticas y las de de otros jugadores</p>
                        </div>
                    </div>


                </div>
            </div>

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
