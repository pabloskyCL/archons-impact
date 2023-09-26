<?php

namespace App\Services;

class JsonBaseDataParserService
{
    public function __construct()
    {
    }

    public function getEquipListNameStats()
    {
        return [
            'FIGHT_PROP_BASE_ATTACK' => 'ATK BASE',
            'FIGHT_PROP_HP' => 'Vida',
            'FIGHT_PROP_ATTACK' => 'ATK',
            'FIGHT_PROP_DEFENSE' => 'DEF',
            'FIGHT_PROP_HP_PERCENT' => 'HP%',
            'FIGHT_PROP_ATTACK_PERCENT' => 'ATK%',
            'FIGHT_PROP_DEFENSE_PERCENT' => 'DEF%',
            'FIGHT_PROP_CRITICAL' => 'Prob.crit',
            'FIGHT_PROP_CRITICAL_HURT' => 'Daño Critico',
            'FIGHT_PROP_CHARGE_EFFICIENCY' => 'Recarga de energía',
            'FIGHT_PROP_HEAL_ADD' => 'Bono de curación',
            'FIGHT_PROP_ELEMENT_MASTERY' => 'Maestria elemental',
            'FIGHT_PROP_PHYSICAL_ADD_HURT' => 'Daño Fisico',
            'FIGHT_PROP_FIRE_ADD_HURT' => 'Daño Pyro',
            'FIGHT_PROP_ELEC_ADD_HURT' => 'Daño Electro',
            'FIGHT_PROP_WATER_ADD_HURT' => 'Daño Hydro',
            'FIGHT_PROP_WIND_ADD_HURT' => 'Daño Anemo',
            'FIGHT_PROP_ICE_ADD_HURT' => 'Daño Cryo',
            'FIGHT_PROP_ROCK_ADD_HURT' => 'Daño Geo',
            'FIGHT_PROP_GRASS_ADD_HURT' => 'Daño Dendro',
        ];
    }

    public function getFightProps() {
        return [
            '1' => 'Ataque Base',
            '2' => 'Vida',
            '3' => 'Vida %',
            '4' => 'Ataque Base',
            '5' => 'Ataque',
            '6' => 'Ataque %',
            '7' => 'Defenza Base',
            '8' => 'Defenza',
            '9' => 'Defenza %',
            '20' => 'Prob. critica',
            '22' => 'Daño critico',
            '23' => 'Recarga de energia',
            '26' => 'Bono de curación',
            '28' => 'Maestria Elemental',
            '30' => 'Bono de daño fisico',
            '40' => 'Bono Pyro',
            '41' => 'Bono Electro',
            '42' => 'Bono Hydro',
            '43' => 'Bono Dendro',
            '44' => 'Bono Anemo',
            '45' => 'Bono Geo',
            '46' => 'Bono Cryo',
            '2000' => 'Vida Max',
            '2001' => 'Ataque total',
            '2002' => 'defenza total',
        ];
    }

    private function parseAssetUrl($path)
    {
        // falta agregar en caso de las skills y los talentos creo que puede variar por lo que hay que evaluar si esto cambia aun que
        // no parece que esto cambien en la estructura del juego ya que los personajes solo tiene talentos y skills
        return 'https://enka.network/ui/'.$path;
    }

    private function parseCharacterBaseStats()
    {
        // implementar el obtener las base stats como el total de:
        // Daño critico, probabilidad critica, vida total, ataque total, recarga de energia total, maestria elemental total
        
    }
}
