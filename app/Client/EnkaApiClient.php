<?php

namespace App\Client;

use App\DTO\CharactersDTO;
use Illuminate\Support\Facades\Http;

class EnkaApiClient {

    const BASEURL = 'https://enka.network/api/uid/';

    public function getAllPlayerData(CharactersDTO $charactersDTO) {

       $response = Http::get($this::BASEURL.$charactersDTO->uid);
        if($response->clientError()){
            return ['error' => [
                'message' => 'Ha ocurrido un error con la fuente de datos, intentar mas tarde',
                'statusCode' => $response->status()
            ]];
        }

        return $response->json();
    }

    public function getPlayerInfo(CharactersDTO $charactersDTO){

        $response = Http::get($this::BASEURL.$charactersDTO->uid.'/?info');

        if($response->clientError()){
            return['error' => [
                'message' => 'Ha ocurrido un error con la fuente de datos, intentar mas tarde',
                'statusCode' => $response->status()
            ]];
        }
    }



}