<?php

namespace App\Http\Controllers;

use App\DTO\CharactersDTO;
use App\Services\EnkaNetworkService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{

    public function index(Request $request)
    {
        return Inertia::render('Dashboard/Index');
    }
}
