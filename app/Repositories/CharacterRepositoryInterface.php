<?php

namespace App\Repositories;

use App\DTO\CharactersDTO;

interface CharacterRepositoryInterface
{
    public function getAll(CharactersDTO $characterDTO);
}
