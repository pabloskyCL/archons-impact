<?php

namespace App\Providers;

use App\Repositories\CharacterRepositoryEloquentORM;
use App\Repositories\CharacterRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(CharacterRepositoryInterface::class, CharacterRepositoryEloquentORM::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
    }
}
