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

        // code...
        $response = Http::get($url);
        if ($response->clientError()) {
            return ['error' => [
                'message' => 'Ha ocurrido un error con la fuente de datos, intentar mas tarde',
                'statusCode' => $response->status()],
            ];
        }

        // $response->throw();

        return $response->json();
    }
}
