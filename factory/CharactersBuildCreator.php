<?php

namespace Factory;

abstract class CharactersBuildCreator
{
    protected $allHashes;
    protected $skills;
    protected $nameCards;

    public function __construct()
    {
        $allHashesJson = file_get_contents(base_path().'/utils/hashes.json');
        $skillsJson = file_get_contents(base_path().'/utils/skills.json');
        $nameCardJson = file_get_contents(base_path().'/utils/namecards.json');
        $this->nameCards = json_decode($nameCardJson, true);
        $this->skills = json_decode($skillsJson, true);
        $this->allHashes = json_decode($allHashesJson, true);
    }

    abstract public function getTransformCharactersData();

    public function parseData($data)
    {
        $characterData = $this->getTransformCharactersData();

        return [$data, $characterData];
    }

    /**
     * Get the value of allHashes.
     */
    public function getAllHashes()
    {
        return $this->allHashes;
    }

    /**
     * Set the value of allHashes.
     *
     * @return self
     */
    public function setAllHashes($allHashes)
    {
        $this->allHashes = $allHashes;

        return $this;
    }

    /**
     * Get the value of skills.
     */
    public function getSkills()
    {
        return $this->skills;
    }

    /**
     * Set the value of skills.
     *
     * @return self
     */
    public function setSkills($skills)
    {
        $this->skills = $skills;

        return $this;
    }

    /**
     * Get the value of nameCard.
     */
    public function getNameCard()
    {
        return $this->nameCards;
    }

    /**
     * Set the value of nameCard.
     *
     * @return self
     */
    public function setNameCard($nameCard)
    {
        $this->nameCards = $nameCard;

        return $this;
    }
}
