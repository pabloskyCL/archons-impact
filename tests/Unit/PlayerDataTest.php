<?php

namespace Tests\Unit;

use App\Client\EnkaApiClient;
use App\DTO\PlayerDTO;
use Tests\TestCase;

class PlayerDataTest extends TestCase
{
    public function testApiClientFetchPlayerData()
    {
        $PlayerDTO = new PlayerDTO('601535882');
        $client = new EnkaApiClient();

        $playerData = $client->getAllPlayerData($PlayerDTO);
        $this->assertArrayHasKey('playerInfo', $playerData);
    }

    public function testApiClientFetchPlayerDataError()
    {
        $PlayerDTO = new PlayerDTO('1');
        $client = new EnkaApiClient();

        $playerData = $client->getAllPlayerData($PlayerDTO);
        $this->assertArrayHasKey('error', $playerData, 'array error response filled ok');
        $this->assertEquals(400, $playerData['error']['statusCode'], 'correct status code 400');
    }
}
