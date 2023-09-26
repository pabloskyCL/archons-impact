<?php

namespace App\Repositories;

use App\DTO\CharactersDTO;
use Illuminate\Support\Facades\Http;

class CharacterRepositoryEloquentORM implements CharacterRepositoryInterface
{
    // implementar aqui el uso del modelo character
    // private Character $character;
    public function __construct()
    {
    }

    public function getAll(CharactersDTO $characterDTO)
    {
        $url = 'https://enka.network/api/uid/'.$characterDTO->uid;

        $response = Http::get($url);

        return $response->json();
    }
}
