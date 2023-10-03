<?php

namespace App\Providers;

use App\Repositories\AllHashesRepository;
use App\Repositories\CharacterRepository;
use App\Repositories\EnkaApiRepository;
use App\Repositories\NameCardsRepository;
use App\Repositories\SkillRepository;
use App\Repositories\TalentsRepository;
use App\Repositories\WeaponRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(EnkaApiRepository::class, EnkaApirepository::class);
        $this->app->bind(AllHashesRepository::class, function () {
            return new AllHashesRepository();
        });
        $this->app->bind(CharacterRepository::class, function () {
            return new CharacterRepository();
        });
        $this->app->bind(SkillRepository::class, function () {
            return new SkillRepository();
        });
        $this->app->bind(NameCardsRepository::class, function () {
            return new NameCardsRepository();
        });
        $this->app->bind(WeaponRepository::class, function () {
            return new WeaponRepository();
        });
        $this->app->bind(TalentsRepositoryInterface::class, function () {
            return new TalentsRepository();
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
    }
}
