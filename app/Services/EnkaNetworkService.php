<?php

namespace App\Services;

use App\Client\EnkaApiClient;
use App\DTO\PlayerDTO;
use App\Repositories\EnkaApiRepository;

class EnkaNetworkService
{
    private EnkaApiClient $enkaApiClient;

    private EnkaApiRepository $enkaApiRepository;

    public function __construct(
        EnkaApiClient $enkaApiClient,
        EnkaApiRepository $enkaApiRepository
    ) {
        $this->enkaApiClient = $enkaApiClient;
        $this->enkaApiRepository = $enkaApiRepository;
    }

    public function getAllCharacters(PlayerDTO $charactersDTO)
    {
        $allPlayerData = $this->enkaApiClient->getAllPlayerData($charactersDTO);

        return $this->enkaApiRepository->getAll($allPlayerData);
    }

    public function getAllProfileData(PlayerDTO $charactersDTO)
    {
    }
}
