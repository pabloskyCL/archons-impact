import { useForm } from "@inertiajs/react";
import ArtifactList from "./ArtifactList";
import SkillList from "./SkillList";

interface CharacterStatsProps {
    selectedCharacter?: any,
    toggleCompareCharacter: Boolean | null

}

export default function CharacterStats({ selectedCharacter, toggleCompareCharacter }: CharacterStatsProps) {
    return (

        <div className="w-full px-4 lg:w-2/4">
            {selectedCharacter ?
                <div className="mb-6 flex w-full min-w-0 flex-col break-words rounded-lg">
                    <div className="flex w-full justify-center mt-3">
                        <div className="">
                            <img alt="..." src={`https://enka.network/ui/${selectedCharacter.gachaIcon}.png`} className=" rounded-full border-none align-middle" />
                        </div>
                    </div>
                    {/* generar componente estadisticas -- inicia aqui -- */}
                    <div className=" w-full text-center">
                        <div className="mt-12 text-center">
                            <span className="text-white mb-2 text-4xl font-semibold leading-normal">{selectedCharacter.name}</span>
                        </div>
                        <div>
                            <span className='text-white my-3 text-2xl'>Estadisticas generales</span>
                        </div>
                        <div className="grid grid-cols-3 gap-5 lg:gap-6 md:grid-cols-5 lg:grid-cols-5 py-4 pt-8 lg:pt-4">
                            <div className="flex flex-col  text-center items-center lg:mr-4">
                                <span className="text-white block text-xl font-bold uppercase tracking-wide">{Math.round(selectedCharacter.totalStats['Vida Max'])}</span>
                                <span className="text-white text-sm font-bold">Vida</span>
                                <svg className="FIGHT_PROP_HP" width='20px' height='20px' focusable="false" viewBox="0 0 14 14"><path fill="white" d="M3.5 7.654a.978.978 0 0 1 .449-.571c1.51-.85 3.586 2.117 6.544.548 1.927 6.083-8.893 6.247-6.992.023zM7 14c-3.373 0-6.75-2.421-5.134-7.26A18.543 18.543 0 0 1 6.57.213.748.748 0 0 1 7 0a.751.751 0 0 1 .432.212 18.543 18.543 0 0 1 4.705 6.528C13.749 11.579 10.376 14 7 14zm.22-12.19A.639.639 0 0 0 7 1.735a.649.649 0 0 0-.22.075C5.07 3.134 2.7 7.092 2.839 9.21A4.019 4.019 0 0 0 7 12.753a4.019 4.019 0 0 0 4.162-3.538c.139-2.123-2.231-6.081-3.942-7.405Z">
                                </path>
                                    <path fill="currentColor" d="M7.98 8.03a12.566 12.566 0 0 1 1.573-1.509c.569-.413.94 1.11.94 1.11a3.731 3.731 0 0 1-2.513.399z">
                                    </path>
                                </svg>
                            </div>
                            <div className="flex flex-col  text-center items-center lg:mr-4">
                                <span className="text-white block text-xl font-bold uppercase tracking-wide">{Math.round(selectedCharacter.totalStats['Ataque total'])}</span>
                                <span className="text-white text-sm font-bold">
                                    Ataque
                                </span>
                                <svg className="Icon" width='20px' height='20px' focusable="false" viewBox="0 0 14 14">
                                    <path fill="white" d="m7.755 1.651 1.643 1.643 1.928-1.926L11.3.25a.228.228 0 0 1 .228-.22h2.2a.228.228 0 0 1 .228.229c-.121 2.66.556 2.457-1.337 2.4l-1.933 1.925L12.33 6.23a.228.228 0 0 1 0 .322c-1.167 1.208-.775.907-1.892-.106l-7.151 7.147a.457.457 0 0 1-.313.137 21.32 21.32 0 0 1-2.954.238 21.172 21.172 0 0 1 .238-2.953.451.451 0 0 1 .134-.319l7.146-7.153-.838-.839a.229.229 0 0 1 0-.323l.732-.73a.228.228 0 0 1 .322 0z">
                                    </path>
                                </svg>

                            </div>
                            <div className="flex flex-col  items-center text-center items-centerlg:mr-4">
                                <span className="text-white block text-xl font-bold uppercase tracking-wide">{Math.round(selectedCharacter.totalStats['defenza total'])}</span>
                                <span className="text-white text-sm font-bold">Defenza</span>
                                <svg className="FIGHT_PROP_DEFENSE" width="20px" height="20px" focusable="false" viewBox="0 0 14 14">
                                    <path fill="white" d="M13.442.726a.291.291 0 0 0-.175-.268C12.859.286 11.503 0 7 0S1.143.286.735.458a.291.291 0 0 0-.176.269v7.44a.868.868 0 0 0 .125.453c1.579 2.6 5.347 4.855 6.16 5.339a.292.292 0 0 0 .3 0c.79-.482 4.56-2.688 6.169-5.335a.868.868 0 0 0 .127-.455zM7 11.968c.059.013-3.56-2.017-4.824-4.368V1.565s0-.452 4.824-.452z">
                                    </path>
                                </svg>
                            </div>
                            <div className="flex flex-col  items-center text-center md:col-span-2 lg:col-auto lg:mr-4">
                                <span className="text-white block text-xl font-bold uppercase tracking-wide">{Math.round(selectedCharacter.totalStats['Maestria Elemental'])}</span>
                                <span className="text-white text-sm font-bold">Maestria Elemental</span>
                                <svg className="FIGHT_PROP_ELEMENT_MASTERY" width="20px" height="20px" focusable="false" viewBox="0 0 14 14">
                                    <path fill="white" d="m8.076 8.152-.017-.05A4.335 4.335 0 0 0 7.3 6.796a4.431 4.431 0 0 0-.325-.346A2.113 2.113 0 1 0 7 2.223a2.144 2.144 0 0 0-1.838 3.18 4.374 4.374 0 0 0-1.2-.168 4.42 4.42 0 0 0-.755.066l-.038.007C1.836-.24 10.7-1.672 10.962 4.342a3.985 3.985 0 0 1-2.886 3.81zm3.662-2.137a3.949 3.949 0 0 0-.626-.235 4.473 4.473 0 0 1-1.105 1.7h.031a2.113 2.113 0 1 1-2.113 2.113 4.09 4.09 0 0 0-.025-.445 3.968 3.968 0 0 0-1.863-2.931l-.19-.11a3.963 3.963 0 1 0 .645 6.535c.082-.068.16-.14.236-.214L6.7 12.39a4.367 4.367 0 0 1-.891-1.765 2.112 2.112 0 1 1-.883-2.914q.1.05.189.11a2.111 2.111 0 0 1 .942 1.49 2.159 2.159 0 0 1 .018.28 3.963 3.963 0 1 0 5.663-3.577z">
                                    </path>
                                </svg>
                            </div>
                            <div className="flex flex-col  items-center text-center md:col-span-2 lg:col-auto lg:mr-4">
                                <span className="text-white block text-xl font-bold uppercase tracking-wide">{Math.round(selectedCharacter.totalStats['Recarga de energia'] * 100)}</span>
                                <span className="text-white text-sm font-bold">Recarga de energía</span>
                                <svg className="FIGHT_PROP_CHARGE_EFFICIENCY" width="20px" height="20px" focusable="false" viewBox="0 0 14 14">
                                    <path fill="white" d="M3.562 7.002a4.03 4.03 0 0 1 4.045-4.049L7.606.608C4.09.61 1.216 3.487 1.216 7.003Z">
                                    </path>
                                    <path fill="white" d="M7.607.607v2.344a4.03 4.03 0 0 1 4.047 4.047 4.03 4.03 0 0 1-4.047 4.047 4.03 4.03 0 0 1-3.578-2.17l1.727-.348L1.87 4.123 0 9.689l1.67-.337c.942 2.36 3.251 4.039 5.937 4.039C11.123 13.39 14 10.517 14 7S11.123.607 7.607.607Z">
                                    </path>
                                </svg>
                            </div>
                            <div className="flex flex-col  items-center lg:col-start-2 lg:col-end-2 lg:mr-4 text-center lg:col-span-2">
                                <span className="text-white block text-xl font-bold uppercase tracking-wide">{Math.round(selectedCharacter.totalStats['Daño critico'] * 100)}%</span>
                                <span className="text-white text-sm font-bold">Daño.crit</span>
                                <svg className="FIGHT_PROP_CRITICAL_HURT" width="20px" height="20px" focusable="false" viewBox="0 0 14 14">
                                    <path fill="white" d="m0 14 3.5-7.764-1.527-4.772L7.255 3.5 14 0l-3.5 7.255 1.527 4.772L7.255 10.5 0 14">
                                    </path>
                                    <path fill="white" d="M7.045.19a6.756 6.756 0 0 0-3.326.857l3.613 1.392L10.168.967A6.648 6.648 0 0 0 7.045.189zM1.502 3.073A6.812 6.812 0 0 0 .309 6.947c0 .925.189 1.808.529 2.612l1.601-3.555-.937-2.93zm11.63.998-1.571 3.26 1.076 3.361a6.709 6.709 0 0 0 .496-6.621zm-5.8 7.489-3.11 1.5a6.693 6.693 0 0 0 6.436-.436L7.332 11.56z">
                                    </path>
                                </svg>
                            </div>
                            <div className="flex flex-col items-center col-start-2  lg:mr-4 text-center  lg:col-start-4 lg:col-end-5 md:col-span-2">
                                <span className="text-white block text-xl font-bold uppercase tracking-wide"> {Math.round(selectedCharacter.totalStats['Prob. critica'] * 100)}% </span>
                                <span className="text-white text-sm font-bold">Probabilidad crit.</span>
                                <svg className="FIGHT_PROP_CRITICAL" width="20px" height="20px" focusable="false" viewBox="0 0 14 14">
                                    <path fill="white" d="M14 0 7.256 3.5 1.973 1.465 3.5 6.236 0 14l7.256-3.5 4.771 1.527L10.5 7.256Zm-3.24 3.24L8.88 7.136 9.701 9.7l-2.564-.82-3.898 1.88 1.88-4.17-.82-2.565L7.137 5.12Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    {/* -- termina aca estadisticas */}

                    <div className="border-white border-t py-10 text-center">
                        <SkillList skillList={selectedCharacter.skills} />
                    </div>
                    <div className="border-white border-t py-10 text-center">

                        <ArtifactList artifactList={selectedCharacter.artifacts} />
                    </div>

                </div> : <div className="text-center">
                    <span className="text-white mb-2 text-4xl font-semibold leading-normal"> El jugador no tiene publicas las estadisticas de este personaje</span>
                </div>}


        </div>
    );
}