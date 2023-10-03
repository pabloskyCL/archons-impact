<?php

namespace App\Repositories;

class NameCardsRepository
{
    private $nameCards;

    public function __construct()
    {
        $jsonData = file_get_contents(base_path().'/utils/namecards.json');
        $this->nameCards = json_decode($jsonData, true);
    }

    /**
     * Get the value of nameCards.
     */
    public function getNameCards()
    {
        return $this->nameCards;
    }

    /**
     * Set the value of nameCards.
     *
     * @return self
     */
    public function setNameCards($nameCards)
    {
        $this->nameCards = $nameCards;

        return $this;
    }
}
