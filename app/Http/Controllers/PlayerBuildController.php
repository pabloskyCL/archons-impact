<?php

namespace App\Http\Controllers;

use App\DTO\PlayerDTO;
use App\Services\EnkaNetworkService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PlayerBuildController extends Controller
{
    private EnkaNetworkService $enkaService;

    public function __construct(EnkaNetworkService $enkaService)
    {
        $this->enkaService = $enkaService;
    }

    public function index(Request $request)
    {
        $return = $request->validate([
            'uid' => ['required', 'min:9', 'max:9'],
        ]);

        $characters = $this->enkaService->getAllCharacters(PlayerDTO::createFromRequestMaker($request));

        return Inertia::render('Player/Build', ['characters' => $characters, 'error' => isset($characters['error']) ? $characters['error'] : []]);
    }

    public function compareBuild(Request $request)
    {
        $request->validate([
            'uid' => ['required', 'min:9', 'max:9'],
        ]);

        $characters = $this->enkaService->getAllCharacters(PlayerDTO::createFromRequestMaker($request));

        return Inertia::render('Player/Build', ['compareCharacters' => $characters, 'error' => isset($characters['error']) ? $characters['error'] : []]);
    }
}
