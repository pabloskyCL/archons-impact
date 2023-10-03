<?php

namespace App\Repositories;

use App\Services\JsonBaseDataParserService;

class EnkaApiRepository
{
    // implementar aqui el uso del modelo character
    // private Character $character;

    private JsonBaseDataParserService $jsonDataParser;

    public function __construct(JsonBaseDataParserService $jsonDataParser)
    {
        $this->jsonDataParser = $jsonDataParser;
    }

    public function getAll($allPlayerData)
    {
        if (isset($allPlayerData['error'])) {
            return $allPlayerData;
        }

        $formatedPlayerData = [];
        $formatedCharactersData = [];

        if (!isset($allPlayerData['playerInfo'])) {
            return ['error' => [
                'message' => 'Esta cuenta tiene muy poco nivel, no se puede hacer la busqueda',
                'statusCode' => 401],
            ];
        }

        if (!isset($allPlayerData['avatarInfoList'])) {
            return ['error' => [
                'message' => 'Esta cuenta no tiene personajes compartidos en su perfil',
                'statusCode' => 401],
            ];
        }

        $formatedCharactersData = $this->playerCharacterDataFormater($allPlayerData['avatarInfoList']);
        $formatedPlayerData = $this->playerDataFormater($allPlayerData['playerInfo']);

        return ['playerData' => $formatedPlayerData, 'characterData' => $formatedCharactersData];
    }

    public function playerDataFormater($playerData)
    {
        $charactersData = app(CharacterRepository::class)->getCharacterList();
        $nameCardData = app(NameCardsRepository::class)->getNameCards();
        $characterAvatarId = (string) isset($playerData['profilePicture']['avatarId']) ? $playerData['profilePicture']['avatarId'] : '10000007';

        $characterAvatar = $charactersData[$characterAvatarId];
        $nameCardURL = array_pop($nameCardData[$playerData['nameCardId']]['picPath']);
        $playerData['profilePicture']['avatarIconURL'] = 'https://enka.network/ui/'.$characterAvatar['icon'].'.png';
        $playerData['profilePicture']['nameCardImage'] = 'https://enka.network/ui/'.$nameCardURL.'.png';

        return $playerData;
    }

    public function playerCharacterDataFormater($playerCharacterData)
    {
        $avatarInfoList = [];
        $characterData = app(CharacterRepository::class)->getCharacterList();
        $allHashes = app(AllHashesRepository::class)->hashesListByLanguage();
        $skillsData = app(SkillRepository::class)->getSkillRepository();

        foreach ($playerCharacterData as $characterStats) {
            $characterId = $characterStats['avatarId'];
            $character = $characterData[$characterId];
            $characterName = $allHashes[$character['nameTextMapHash']];
            $skills = $this->formatedSkillsByCharacter($character, $characterStats['skillLevelMap'], $skillsData);
            $characterArtifacts = $this->formatedCharacterArtifacts($characterStats['equipList']);
            $totalCharacterStats = $this->formatedTotalStats($characterStats['fightPropMap'], $this->jsonDataParser->getFightProps());
            $avatarInfoList[$characterName]['icon'] = $character['icon'];
            $avatarInfoList[$characterName]['gachaIcon'] = $character['gachaIcon'];
            $avatarInfoList[$characterName]['skills'] = $skills;
            $avatarInfoList[$characterName]['artifacts'] = $characterArtifacts;
            $avatarInfoList[$characterName]['totalStats'] = $totalCharacterStats;
        }

        return $avatarInfoList;
    }

    public function formatedSkillsByCharacter($character, $skillLevelMap, $skillsData)
    {
        $skills = [];
        $counter = 0;
        foreach ($character['skillOrder'] as $key => $value) {
            if (0 == $counter) {
                $skills['normalAtack']['icon'] = $skillsData[$value]['icon'];
                $skills['normalAtack']['level'] = $skillLevelMap[$value];
                ++$counter;
                continue;
            }

            if (1 == $counter) {
                $skills['elementalSkill']['icon'] = $skillsData[$value]['icon'];
                $skills['elementalSkill']['level'] = $skillLevelMap[$value];
                ++$counter;
                continue;
            }

            if (2 == $counter) {
                $skills['elementalBurst']['icon'] = $skillsData[$value]['icon'];
                $skills['elementalBurst']['level'] = $skillLevelMap[$value];
                ++$counter;
                continue;
            }
        }

        return $skills;
    }

    public function formatedCharacterArtifacts($characterEquipList)
    {
        $artifactsData = [];
        $jsonDictionary = $this->jsonDataParser->getEquipListNameStats();
        $allHashes = app(AllHashesRepository::class)->hashesListByLanguage();

        foreach ($characterEquipList as $key => $value) {
            $stats = [];
            if ('ITEM_WEAPON' == $value['flat']['itemType']) {
                $stats['weaponName'] = $allHashes[$value['flat']['nameTextMapHash']];
                $stats['starts'] = $value['flat']['rankLevel'];
                $stats['level'] = $value['weapon']['level'];
                $stats['weaponStats'] = $this->formatedWeaponStats($value['flat']['weaponStats'], $jsonDictionary);
                $stats['icon'] = $value['flat']['icon'];
                $artifactsData['weapon'] = $stats;
                continue;
            }
            $mainStat = $value['flat']['reliquaryMainstat']['mainPropId'];
            $stats['starts'] = $value['flat']['rankLevel'];
            $stats['level'] = $value['reliquary']['level'] - 1;
            $stats['mainStat'] = [$jsonDictionary[$mainStat], $value['flat']['reliquaryMainstat']['statValue']];
            $stats['subStats'] = $this->formatedSubStats($value['flat']['reliquarySubstats'], $jsonDictionary);
            $stats['icon'] = $value['flat']['icon'];
            $artifactsData[$value['flat']['equipType']] = $stats;
        }

        return $artifactsData;
    }

    public function formatedWeaponStats($weaponStats, $jsonDictionary)
    {
        $stats = [];
        foreach ($weaponStats as $value) {
            array_push($stats, ['stat' => $jsonDictionary[$value['appendPropId']], 'statValue' => $value['statValue']]);
        }

        return $stats;
    }

    public function formatedSubStats($substats, $jsonDictionary)
    {
        $formatedSubstats = [];
        foreach ($substats as $value) {
            $stat = $jsonDictionary[$value['appendPropId']];
            $formatedSubstats[] = [$stat, $value['statValue']];
        }

        return $formatedSubstats;
    }

    public function formatedTotalStats($totalStats, $jsonDictionary)
    {
        $stats = [];
        foreach ($totalStats as $key => $value) {
            if ($value > 0 && key_exists($key, $jsonDictionary)) {
                $stats[$jsonDictionary[$key]] = $value;
            }
        }

        return $stats;
    }
}
