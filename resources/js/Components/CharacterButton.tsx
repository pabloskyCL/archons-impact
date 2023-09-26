import { CharactersProp } from '@/types/characters';
import { ButtonHTMLAttributes } from 'react';

export default function CharacterButton({ characters }: any) {
    const characterNames = Object.keys(characters);
    
    const characterIcon =  (character: any) => {
        return characters[character].icon;
    }


    return (
        <div className="relative flex flex-col items-center cursor-pointer">
            {characterNames.map(character => (
                <>
                    <div className="w-32 h-32 p-1 bg-gradient-to-r from-yellow-200 to-pink-600 rounded-full">
                        <img className="w-full h-full p-1 bg-white rounded-full" src="https://images.unsplash.com/photo-1534430480872-3498386e7856?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="" />
                    </div>
                    <span className="mt-2 text-gray-200 text-2xl select-none">{character}</span>
                </>
            ))}
        </div>
    );
}
