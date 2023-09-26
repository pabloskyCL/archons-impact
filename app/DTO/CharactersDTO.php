<?php

namespace App\DTO;

class CharactersDTO
{
    public $uid;

    public function __construct($uid)
    {
        $this->uid = $uid;
    }

    public static function FromRequestMaker($request): self
    {
        return new self($request->get('uid'));
    }
}
