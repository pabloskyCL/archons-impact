

export default function CharacterButton({ characters, handleSelect }: any) {
    const characterNames = Object.keys(characters);

    const characterIcon = (character: any) => {
        return characters[character].icon;
    }

    // const onClickCharacter = (character:any) => {
    //     handleSelect(character);
    // }

    return (
        <div className="grid grid-cols-4 lg:grid-cols-8 justify-items-center">
            {characterNames.map(character => (
                <div className="w-11 h-11 md:w-16 md:h-16 lg:w-24 lg:h-24 sm:h-24 p-1 bg-gradient-to-r from-blue-200 to-blue-600 rounded-full cursor-pointer" onClick={() => handleSelect(character)}>
                    <img className="w-full h-full p-1 bg-gray-800 rounded-full" src={`https://enka.network/ui/${characterIcon(character)}.png`} alt="" />
                </div>
            ))}
        </div>
    );
}
