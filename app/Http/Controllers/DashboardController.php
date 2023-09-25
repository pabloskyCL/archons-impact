<?php

namespace App\Http\Controllers;

use App\DTO\CharactersDTO;
use App\Services\EnkaNetworkService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    private EnkaNetworkService $enkaService;

    public function __construct(EnkaNetworkService $enkaService)
    {
        $this->enkaService = $enkaService;
    }

    public function index(Request $request)
    {
        $characters = $this->enkaService->getAllCharacters(CharactersDTO::FromRequestMaker($request));
        return Inertia::render('Dashboard/Index', ['characters' => $characters]);
    }
}
