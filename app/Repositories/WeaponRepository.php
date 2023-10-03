<?php

namespace App\Repositories;

class WeaponRepository
{
    private $weapon;

    public function __construct()
    {
        $jsonData = file_get_contents(base_path().'/utils/weapons.json');
        $this->weapon = json_decode($jsonData, true);
    }

    public function getAllCharacterData()
    {
        return $this->weapon;
    }

    /**
     * Get the value of weapon.
     */
    public function getWeapon()
    {
        return $this->weapon;
    }

    /**
     * Set the value of weapon.
     *
     * @return self
     */
    public function setWeapon($weapon)
    {
        $this->weapon = $weapon;

        return $this;
    }
}
