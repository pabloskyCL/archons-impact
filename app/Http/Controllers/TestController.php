<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class TestController extends Controller
{
    public function index(): Response
    {
        // return new HttpResponse('hello world');
        return Inertia::render('Auth/Test', ['message' => 'Hello world! from react with laravel and inertia also typescript!']);
    }
}
