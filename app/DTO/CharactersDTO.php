<?php

namespace App\DTO;

class CharactersDTO
{
    public $uid;

    public function __construct($uid = '601535882')
    {
        $this->uid = $uid;
    }

    public static function FromRequestMaker($request): self
    {
        if (!$request->get('uid')) {
            return new self();
        }

        return new self($request->get('uid'));
    }
}
