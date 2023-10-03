<?php

namespace App\Repositories;

class SkillRepository
{
    private $skillData;

    public function __construct()
    {
        $jsonData = file_get_contents(base_path().'/utils/skills.json');
        $this->skillData = json_decode($jsonData, true);
    }

    /**
     * Get the value of skillRepository.
     */
    public function getSkillRepository()
    {
        return $this->skillData;
    }

    /**
     * Set the value of skillRepository.
     *
     * @return self
     */
    public function setSkillRepository($skillData)
    {
        $this->skillData = $skillData;

        return $this;
    }
}
