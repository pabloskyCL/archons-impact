import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { useForm } from '@inertiajs/react';
import CharacterButton from '@/Components/CharacterButton';
import ErrorAlert from '@/Components/ErrorAlert';
import { useState } from 'react';
import ArtifactList from '@/Components/ArtifactList';
import SkillList from '@/Components/SkillList';
import CharacterStats from '@/Components/CharacterStats';
// TODO crear tipo para los parametros
export default function Build({ auth, characters }: PageProps<{ characters: any }>) {
    const [selectedCharacter, setSelectedCharacter] = useState<any | null>(null);
    const [toggleCompareCharacter, setToggleCompareCharacter] = useState<Boolean | null>(false);


    const handleSelectCharacter = (character: any) => {
        setSelectedCharacter(() => { return { ...characters.characterData[character], name: character } });
        console.log(characters.characterData[character]);
    }

    const handleCompareCharacterButton = () => {
        setToggleCompareCharacter((prevState: Boolean | null) => {
            return !prevState;
        });
    }

    const { data, setData, get, processing, errors } = useForm({
        uid: ''
    });

    const getComparePlayerData = () => {

    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            {characters.error && <ErrorAlert message={characters.error.message} />}
            {characters.playerData &&
                <div className=" flex flex-row flex-wrap p-3">
                    <div className="mx-auto w-2/3">
                        <div className="rounded-lg shadow-lg w-full flex flex-row flex-wrap p-3 antialiased" style={{
                            backgroundImage: `url(${characters.playerData.profilePicture.nameCardImage})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundBlendMode: 'multiply'
                        }}>
                            <div className="md:w-1/3 justify-center items-center">
                                <img className="rounded-lg antialiased" src={characters.playerData.profilePicture.avatarIconURL} />
                            </div>
                            <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
                                <div className="w-full text-left mt-2 text-gray-700 font-semibold relative pt-3 md:pt-0">
                                    <div className="text-2xl text-white">{characters.playerData.nickname} </div>
                                    <div className="text-normal text-white"><span className=" border-gray-500 pb-1">{characters.playerData.signature}</span></div>
                                    <div className="text-xl text-white"><span className=" border-gray-500 pb-1">abismo: {characters.playerData.towerFloorIndex}-{characters.playerData.towerLevelIndex}</span></div>
                                    <div className="text-xl text-white"><span className=" border-gray-500 pb-1">logros: {characters.playerData.finishAchievementNum}</span></div>
                                    <div className="text-xl text-white md:absolute pt-3 md:pt-0 bottom-0 right-0">AR: {characters.playerData.worldLevel} LV: {characters.playerData.level}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>}

            {characters.characterData &&

                <div className="flex flex-col py-4 px-12">
                    <div className="flex flex-row justify-between py-4">
                        <div className=" mx-28 py-8 ">
                            <div className="text-4xl text-white text-start">Personajes</div>
                        </div>
                        <div className='content-center'>
                            <button onClick={handleCompareCharacterButton} className='text-white text-lg font-bold bg-slate-800 p-5 hover:bg-slate-700'>comparar personajes</button>
                        </div>
                    </div>

                    <CharacterButton characters={characters.characterData} handleSelect={handleSelectCharacter} />

                    <div className="flex flex-col pt-20 md:px-10 md:flex-row justify-center gap-3">
                        {selectedCharacter &&
                            // generar un componente para las estadisticas generales 
                            // inicio caracteristicas generales
                            <CharacterStats selectedCharacter={selectedCharacter} toggleCompareCharacter={toggleCompareCharacter} />
                            // termino de caracteristicas generales

                        }
                        {toggleCompareCharacter &&
                            <div className="w-full lg:w-2/4 px-4">
                                <div className="bg-slate-700 px-10 py-10 rounded-xl">
                                    <form onSubmit={getComparePlayerData}>
                                        <div className="">
                                            <div className="flex space-x-1 items-center mb-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <p className="text-white text-lg font-semibold">Ingresa el uid del jugador</p>
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
                        }
                    </div>

                </div>
            }


        </AuthenticatedLayout>
    );
}
