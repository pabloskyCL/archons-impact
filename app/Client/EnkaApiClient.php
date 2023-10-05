<?php

namespace App\Client;

use App\DTO\PlayerDTO;
use Illuminate\Support\Facades\Http;

class EnkaApiClient
{
    public const BASEURL = 'https://enka.network/api/uid/';

    public function getAllPlayerData(PlayerDTO $charactersDTO)
    {
        $response = Http::get($this::BASEURL.$charactersDTO->uid);
        if ($response->clientError()) {
            return ['error' => [
                'message' => 'Ha ocurrido un error con la fuente de datos, intentar mas tarde',
                'statusCode' => $response->status(),
            ]];
        }

        return $response->json();
    }

    public function getPlayerInfo(PlayerDTO $charactersDTO)
    {
        $response = Http::get($this::BASEURL.$charactersDTO->uid.'/?info');

        if ($response->clientError()) {
            return ['error' => [
                'message' => 'Ha ocurrido un error con la fuente de datos, intentar mas tarde',
                'statusCode' => $response->status(),
            ]];
        }
    }
}
