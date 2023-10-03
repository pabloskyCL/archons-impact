<?php

namespace App\Repositories;

class AllHashesRepository
{
    private $hashesList;

    public function __construct()
    {
        $jsonData = file_get_contents(base_path().'/utils/hashes.json');
        $this->hashesList = json_decode($jsonData, true);
    }

    public function hashesListByLanguage(string $language = 'es')
    {
        return $this->hashesList[$language];
    }

    /**
     * Get the value of hashesList.
     */
    public function getHashesList()
    {
        return $this->hashesList;
    }

    /**
     * Set the value of hashesList.
     *
     * @return self
     */
    public function setHashesList($hashesList)
    {
        $this->hashesList = $hashesList;

        return $this;
    }
}
