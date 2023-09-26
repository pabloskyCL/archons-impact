import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { useForm } from '@inertiajs/react';
import CharacterButton from '@/Components/CharacterButton';
// TODO crear tipo para los parametros
export default function Build({ auth, characters }: PageProps<{ characters: any }>) {
    console.log(characters);
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <div className=" flex flex-row flex-wrap p-3">
                <div className="mx-auto w-2/3">
                    <div className="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased" style={{
                        backgroundImage: `url(${characters.playerData.profilePicture.nameCardImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundBlendMode: 'multiply'
                    }}>
                        <div className="md:w-1/3 justify-center items-center">
                            <img className="rounded-lg shadow-lg antialiased" src={characters.playerData.profilePicture.avatarIconURL} />
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
            </div>

            <CharacterButton characters={characters} />

            <div className="flex flex-col py-4 px-12">
                <div className="py-4">
                    <div className="pl-[116px] pr-[205px] py-8">
                        <div className="text-7xl text-black">Title</div>
                        <div className="lead-xl font-light ">Subtitle with a long long long long long long text</div>
                    </div>
                </div>
                <div className="flex flex-col px-20 md:px-10 md:flex-row items-center justify-center gap-6">
                    <div>
                        <img src="https://cdn.pixabay.com/photo/2023/08/15/11/47/mushroom-8191823_1280.jpg" alt="Featured Image 1" className="rounded-t-xl" />
                        <div className="px-9 pt-10 pb-14 bg-yellow-500 rounded-b-lg">
                            <div className="text-white space-y-4">
                                <h3 className="text-xl font-bold lead-xl bold">Card Title</h3>
                                <div className="text-lg font-light">Card subtitle with a long long long long long long text</div>
                            </div>
                            <div className="flex justify-between pt-8">
                                <ul className="flex flex-col gap-y-2.5">
                                    <li className="flex space-x-3 text-white">
                                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" className="w-6 h-6" />
                                        <span className="paragraph-l font-bold">Item 1</span>
                                    </li>
                                    <li className="flex space-x-3 text-white">
                                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" className="w-6 h-6" />
                                        <span className="paragraph-l font-bold">Item 1</span>
                                    </li>
                                    <li className="flex space-x-3 text-white">
                                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" className="w-6 h-6" />
                                        <span className="paragraph-l font-bold">Item 1</span>
                                    </li>
                                </ul>
                                <div className="flex flex-col justify-end">
                                    <a href="#" className="py-3 px-6 bg-white text-primary-200 paragraph-m  rounded-full">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src="https://cdn.pixabay.com/photo/2023/08/15/11/47/mushroom-8191823_1280.jpg" alt="Featured Image 1" className="rounded-t-xl" />
                        <div className="px-9 pt-10 pb-14 bg-violet-600 rounded-b-lg">
                            <div className="text-white space-y-4">
                                <h3 className="text-xl font-bold lead-xl bold">Card Title</h3>
                                <div className="text-lg font-light">Card subtitle with a long long long long long long text</div>
                            </div>
                            <div className="flex justify-between pt-8">
                                <ul className="flex flex-col gap-y-2.5">
                                    <li className="flex space-x-3 text-white">
                                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" className="w-6 h-6" />
                                        <span className="paragraph-l font-bold">Item 1</span>
                                    </li>
                                    <li className="flex space-x-3 text-white">
                                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" className="w-6 h-6" />
                                        <span className="paragraph-l font-bold">Item 1</span>
                                    </li>
                                    <li className="flex space-x-3 text-white">
                                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/checked--v1.png" alt="checked--v1" className="w-6 h-6" />
                                        <span className="paragraph-l font-bold">Item 1</span>
                                    </li>
                                </ul>
                                <div className="flex flex-col justify-end">
                                    <a href="#" className="py-3 px-6 bg-white text-primary-200 paragraph-m  rounded-full">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
