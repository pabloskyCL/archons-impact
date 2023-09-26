import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { useForm } from '@inertiajs/react';

export default function Index({ auth }: PageProps<{ characters: any }>) {

    const { data, setData, get, processing, errors } = useForm({
        uid: ''
    });

    const getCharacters = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        get('/playerbuild');
    }


    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <div className="py-12 grid place-items-center">
                <div className="max-w-5xl sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="bg-slate-700 px-10 py-10">
                            <form onSubmit={getCharacters}>
                                <div className="">
                                    <div className="flex space-x-1 items-center mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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


        </AuthenticatedLayout>
    );
}
