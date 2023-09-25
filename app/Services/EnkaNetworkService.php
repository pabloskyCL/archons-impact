<?php

namespace App\Services;

use App\DTO\CharactersDTO;
use App\Repositories\CharacterRepositoryInterface;
use Factory\Builders\CharacterBuilder;

class EnkaNetworkService
{
    private CharacterRepositoryInterface $repository;
    private JsonBaseDataParserService $jsonDataParser;

    public function __construct(CharacterRepositoryInterface $repository, JsonBaseDataParserService $jsonDataParser)
    {
        $this->repository = $repository;
        $this->jsonDataParser = $jsonDataParser;
    }

    public function getAllCharacters(CharactersDTO $charactersDTO)
    {
        $charactersData = $this->repository->getAll($charactersDTO);

        $formatedPlayerData = [];
        $formatedCharactersData = [];

        $characterBuilder = new CharacterBuilder();
        if ($charactersData['playerInfo']) {
            $formatedPlayerData = $this->playerDataFormater($charactersData['playerInfo'], $characterBuilder->getCharacterData());
        }

        if ($charactersData['avatarInfoList']) {
            $formatedCharactersData = $this->playerCharacterDataFormater($charactersData['avatarInfoList'], $characterBuilder);
        }

        return ['playerData' => $formatedPlayerData, 'characterData' => $formatedCharactersData];
    }

    public function getAllData(CharactersDTO $charactersDTO)
    {
        return $this->repository->getAll($charactersDTO);
    }

    public function playerDataFormater($playerData, $charactersData)
    {
        $characterAvatarId = (string) $playerData['profilePicture']['avatarId'];

        $characterAvatar = $charactersData[$characterAvatarId];
        $playerData['profilePicture']['avatarIconURL'] = 'https://enka.network/ui/'.$characterAvatar['icon'].'.png';

        return $playerData;
    }

    public function playerCharacterDataFormater($playerCharacterData, CharacterBuilder $characterBuilder)
    {
        $avatarInfoList = [];
        $characterData = $characterBuilder->getCharacterData();
        $allHashes = $characterBuilder->getAllHashes();

        foreach ($playerCharacterData as $characterStats) {
            $characterId = $characterStats['avatarId'];
            $character = $characterData[$characterId];

            $characterName = $allHashes['es'][$character['nameTextMapHash']];
            $skills = $this->formatedSkillsByCharacter($character, $characterStats['skillLevelMap'], $characterBuilder->getSkills());
            $characterArtifacts = $this->formatedCharacterArtifacts($characterStats['equipList'], $characterBuilder);
            $totalCharacterStats = $this->formatedTotalStats($characterStats['fightPropMap'], $this->jsonDataParser->getFightProps());
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

    public function formatedCharacterArtifacts($characterEquipList, CharacterBuilder $characterBuilder)
    {
        $artifactsData = [];
        $jsonDictionary = $this->jsonDataParser->getEquipListNameStats();
        $allHashes = $characterBuilder->getAllHashes();

        foreach ($characterEquipList as $key => $value) {
            $stats = [];
            if ('ITEM_WEAPON' == $value['flat']['itemType']) {
                $stats['weaponName'] = $allHashes['es'][$value['flat']['nameTextMapHash']];
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

    public function getAllProfileData(CharactersDTO $charactersDTO)
    {
    }
}
