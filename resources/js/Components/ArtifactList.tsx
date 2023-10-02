import logo from '../../Images/1289679474.svg';

interface ArtifactListProps {
    EQUIP_BRACER: {
        mainStat: Array<any>,
        icon: string,
        subStats: Array<any>,
        starts: number
    };
    EQUIP_DRESS: {
        mainStat: Array<any>,
        icon: string,
        subStats: Array<any>,
        starts: number
    };
    EQUIP_NECKLACE: {
        mainStat: Array<any>,
        icon: string,
        subStats: Array<any>,
        starts: number
    };
    EQUIP_RING: {
        mainStat: Array<any>,
        icon: string,
        subStats: Array<any>,
        starts: number
    };
    EQUIP_SHOES: {
        mainStat: Array<any>,
        icon: string,
        subStats: Array<any>,
        starts: number
    };
    weapon: {
        icon: string,
        level: number,
        starts: number,
        weaponName: string,
        weaponStats: Array<any>
    }
}

const artifactStarts = (starts: number) => {
    let allStarts: Array<any> = [];
    for (var i = 0; i < starts; i++) {
        allStarts.push(<img className='w-5 h-5' src={logo} alt="" />)
    }

    return (
        <div className="flex pb-2">
            {...allStarts}
        </div>);
}


export default function ArtifactList({ artifactList }: { artifactList: ArtifactListProps }) {
    return (
        <div>
            
            <div className='mb-10'>
            <span className='text-white text-3xl font-bold'>Arma</span>
                <div className="flex  bg-gray-800 shadow-lg rounded-lg mt-7">
                    <div className="flex w-2/3 items-end justify-center" style={{
                        backgroundImage: `url(https://enka.network/ui/${artifactList.weapon.icon}.png`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover'
                    }}>
                        {artifactStarts(artifactList.weapon.starts)}
                    </div>
                    <div className="w-2/3 py-2">
                        <span className="text-white text-xl font-bold">{artifactList.weapon.weaponName}</span>
                        <div className="grid grid-rows-3 mt-8">
                            {artifactList.weapon.weaponStats.map((value) =>
                                <span className="text-white text-lg text-left font-bold">{value.stat}: {value.statValue}</span>
                            )}

                        </div>

                    </div>
                </div>
            </div>

            <div>
                <span className='text-white text-3xl font-bold'>Artefactos</span>
                <div className="flex  bg-gray-800 shadow-lg rounded-lg overflow-hidden mt-7">
                    <div className="flex w-2/3 items-end justify-center" style={{
                        backgroundImage: `url(https://enka.network/ui/${artifactList.EQUIP_BRACER.icon}.png`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover'
                    }}>
                        {artifactStarts(artifactList.EQUIP_BRACER.starts)}
                    </div>
                    <div className="w-2/3 py-2">
                        <span className="text-white text-xl font-bold">{artifactList.EQUIP_BRACER.mainStat[0]}: {artifactList.EQUIP_BRACER.mainStat[1]}</span>
                        <div className="grid grid-rows-3 mt-0">
                            {artifactList.EQUIP_BRACER.subStats.map((value) =>
                                <span className="text-white text-lg text-left font-bold">{value[0]}: {value[1]}</span>
                            )}

                        </div>

                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex  bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                    <div className="flex w-2/3 items-end justify-center" style={{
                        backgroundImage: `url(https://enka.network/ui/${artifactList.EQUIP_NECKLACE.icon}.png`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover'
                    }}>
                        {artifactStarts(artifactList.EQUIP_NECKLACE.starts)}
                    </div>
                    <div className="w-2/3 py-2">
                        <span className="text-white text-xl font-bold">{artifactList.EQUIP_NECKLACE.mainStat[0]}: {artifactList.EQUIP_NECKLACE.mainStat[1]}</span>
                        <div className="grid grid-rows-3 mt-0">
                            {artifactList.EQUIP_NECKLACE.subStats.map((value) =>
                                <span className="text-white text-lg text-left font-bold">{value[0]}: {value[1]}</span>
                            )}

                        </div>

                    </div>
                </div>
            </div>

            <div className="">
                <div className="flex  bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                    <div className="flex w-2/3 items-end justify-center" style={{
                        backgroundImage: `url(https://enka.network/ui/${artifactList.EQUIP_RING.icon}.png`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover'
                    }}>
                        {artifactStarts(artifactList.EQUIP_RING.starts)}
                    </div>
                    <div className="w-2/3 py-2">
                        <span className="text-white text-xl font-bold">{artifactList.EQUIP_RING.mainStat[0]}: {artifactList.EQUIP_RING.mainStat[1]}</span>
                        <div className="grid grid-rows-3 mt-0">
                            {artifactList.EQUIP_RING.subStats.map((value) =>
                                <span className="text-white text-lg text-left font-bold">{value[0]}: {value[1]}</span>
                            )}

                        </div>

                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex  bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                    <div className="flex w-2/3 items-end justify-center" style={{
                        backgroundImage: `url(https://enka.network/ui/${artifactList.EQUIP_SHOES.icon}.png`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover'
                    }}>
                        {artifactStarts(artifactList.EQUIP_SHOES.starts)}
                    </div>
                    <div className="w-2/3 py-2">
                        <span className="text-white text-xl font-bold">{artifactList.EQUIP_SHOES.mainStat[0]}: {artifactList.EQUIP_SHOES.mainStat[1]}</span>
                        <div className="grid grid-rows-3 mt-0">
                            {artifactList.EQUIP_SHOES.subStats.map((value) =>
                                <span className="text-white text-lg text-left font-bold">{value[0]}: {value[1]}</span>
                            )}

                        </div>

                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex  bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                    <div className="flex w-2/3 items-end justify-center" style={{
                        backgroundImage: `url(https://enka.network/ui/${artifactList.EQUIP_DRESS.icon}.png`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover'
                    }}>
                        {artifactStarts(artifactList.EQUIP_DRESS.starts)}
                    </div>
                    <div className="w-2/3 py-2">
                        <span className="text-white text-xl font-bold">{artifactList.EQUIP_DRESS.mainStat[0]}: {artifactList.EQUIP_DRESS.mainStat[1]}</span>
                        <div className="grid grid-rows-3 mt-0">
                            {artifactList.EQUIP_DRESS.subStats.map((value) =>
                                <span className="text-white text-lg text-left font-bold">{value[0]}: {value[1]}</span>
                            )}

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}