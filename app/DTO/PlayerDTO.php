<?php

namespace App\DTO;

class PlayerDTO
{
    public $uid;

    public function __construct(string $uid)
    {
        $this->uid = $uid;
    }

    public static function createFromRequestMaker($request): self
    {
        return new self($request->get('uid'));
    }
}
