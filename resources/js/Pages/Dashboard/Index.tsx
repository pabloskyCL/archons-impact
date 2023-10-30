import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import firstStep from '@/../Images/first_step.png';
import secondStep from '@/../Images/paimon_menu.png';
import thirdStep from '@/../Images/publish_pj.png';
import { PageProps } from '@/types';
import { useForm } from '@inertiajs/react';
import ErrorAlert from '@/Components/ErrorAlert';

export default function Index({ auth }: PageProps<{ characters: any }>) {

    const { data, setData, get, processing, errors } = useForm({
        uid: ''
    });
    console.log(errors.uid);
    const getCharacters = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        get('/playerbuild');
    }

    if (processing) {
        return (<div>
            Loading ...
        </div>);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            {errors.uid && <ErrorAlert message={errors.uid} />}
            <div className="py-12 grid place-items-center">
                <div className="max-w-5xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="bg-slate-700 px-10 py-10">
                            <form onSubmit={getCharacters}>
                                <div className="">
                                    <div className="flex space-x-1 items-center mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p className="text-white text-lg font-semibold">Ingresa tu uid</p>
                                    </div>
                                    <div className="flex space-x-4">
                                        <div className="flex rounded-md overflow-hidden w-full">
                                            <input type="text" className="w-full rounded-md rounded-r-none" placeholder='UID ej: 601535882' value={data.uid} onChange={e => setData('uid', e.target.value)} />
                                            <button type='submit' className="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md">Buscar</button>
                                        </div>                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">

                <div className="text-center">
                    <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-white">
                        Como dejo mis personajes publicos ?
                    </h3>
                </div>

                <div className="mt-20">
                    <ul className="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">

                        <li className=" bg-gray-100 p-5 pb-10 text-center rounded-l-lg">
                            <div className="flex flex-col items-center">
                                <div className="flex-shrink-0 relative top-0 -mt-16">
                                    <div
                                        className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-600 text-white border-4 border-white text-xl font-semibold">
                                        1
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <img src={firstStep} className="h-52" alt="" />
                                    <p className="text-lg leading-6 mt-2 text-gray-900">
                                        Pincha en la cara de paimon.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className=" bg-gray-100 p-5 pb-10 text-center">
                            <div className="flex flex-col items-center">
                                <div className="flex-shrink-0 relative top-0 -mt-16">
                                    <div
                                        className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-600 text-white border-4 border-white text-xl font-semibold">
                                        2
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <img src={secondStep} className='h-52' alt="" />
                                    <p className="text-lg leading-6 mt-2 text-gray-900">
                                        Selecciona "Editar Perfil"
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className=" bg-gray-100 p-5 pb-10 text-center rounded-r-lg">
                            <div className="flex flex-col items-center">
                                <div className="flex-shrink-0 relative top-0 -mt-16">
                                    <div
                                        className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-600 text-white border-4 border-white text-xl font-semibold">
                                        3
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <img src={thirdStep} className='h-52' alt="" />
                                    <p className="text-lg leading-6 mt-2 text-gray-900">
                                       Selecciona los personajes que quedaran publicos sus estadisticas, no olvides dejar habilitada la opción de <b>personajes mostrados</b>.
                                    </p>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>

            </div>

        </AuthenticatedLayout>
    );
}
