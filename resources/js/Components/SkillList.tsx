

interface SkillListProp {
    elementalBurst: {
        icon: string,
        level: number,
    },
    elementalSkill: {
        icon: string,
        level: number,
    },
    normalAtack: {
        icon: string,
        level: number,
    }
}

export default function SkillList({ skillList }: { skillList: SkillListProp }) {
    return (
        <div>
            <div className=" text-center">
                <span className="text-white mb-2 text-4xl font-semibold leading-normal">Habilidades</span>
            </div>
            <div className="grid grid-cols-3 gap-5 py-4 pt-8 lg:pt-4">
                <div className="flex flex-col   text-center items-center lg:mr-4">
                    <img src={`https://enka.network/ui/${skillList.normalAtack.icon}.png`} className="w-16 h-16 bg-slate-800 rounded-full" alt="" />
                    <span className="text-white text-sm font-bold">Ataque normal</span>
                    <span className="text-white block text-xl font-bold uppercase tracking-wide">LV: {skillList.normalAtack.level}</span>
                </div>
                <div className="flex flex-col  text-center items-center lg:mr-4">
                    <img src={`https://enka.network/ui/${skillList.elementalSkill.icon}.png`} className="w-16 h-16 bg-slate-800 rounded-full" alt="" />
                    <span className="text-white text-sm font-bold">
                        Habilidad Elemental
                    </span>
                    <span className="text-white block text-xl font-bold uppercase tracking-wide">LV: {skillList.elementalSkill.level}</span>

                </div>
                <div className="flex flex-col  items-center text-center items-centerlg:mr-4">
                    <img src={`https://enka.network/ui/${skillList.elementalBurst.icon}.png`} className="w-16 h-16 bg-slate-800 rounded-full" alt="" />
                    <span className="text-white text-sm font-bold">Definitiva</span>
                    <span className="text-white block text-xl font-bold uppercase tracking-wide">LV: {skillList.elementalBurst.level}</span>
                </div>

            </div>
        </div>
    );
}