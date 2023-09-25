<?php

namespace Factory\Builders;

use Factory\CharactersBuildCreator;

class CharacterBuilder extends CharactersBuildCreator
{
    private $characterData;


    public function __construct()
    {
        parent::__construct();
        $charactersJson = file_get_contents(base_path().'/utils/characters.json');
        $this->setCharacterData(json_decode($charactersJson, true));
    }


    public function getTransformCharactersData()
    {
        
        
    }

    /**
     * Get the value of characterData
     */ 
    public function getCharacterData()
    {
        return $this->characterData;
    }

    /**
     * Set the value of characterData
     *
     * @return  self
     */ 
    public function setCharacterData($characterData)
    {
        $this->characterData = $characterData;

        return $this;
    }
}
