<?php

namespace App\Repositories;

class CharacterRepository
{
    private $characterList;

    public function __construct()
    {
        $jsonData = file_get_contents(base_path().'/utils/characters.json');
        $this->characterList = json_decode($jsonData, true);
    }

    public function getAllCharacterData()
    {
        return $this->characterList;
    }

    /**
     * Get the value of characterList.
     */
    public function getCharacterList()
    {
        return $this->characterList;
    }

    /**
     * Set the value of characterList.
     *
     * @return self
     */
    public function setCharacterList($characterList)
    {
        $this->characterList = $characterList;

        return $this;
    }
}
