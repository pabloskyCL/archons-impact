<?php

namespace App\Repositories;

class TalentsRepository
{
    private $talents;

    public function __construct()
    {
        $jsonData = file_get_contents(base_path().'/utils/talents.json');
        $this->talents = json_decode($jsonData, true);
    }

    

    /**
     * Get the value of talents
     */ 
    public function getTalents()
    {
        return $this->talents;
    }

    /**
     * Set the value of talents
     *
     * @return  self
     */ 
    public function setTalents($talents)
    {
        $this->talents = $talents;

        return $this;
    }
}
