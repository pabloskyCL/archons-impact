<?php

namespace Tests\Unit;

use App\Models\User;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class PlayerBuildControllerTest extends TestCase
{
    public function testCanViewCompareBuild()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('comparebuild/?uid=601535882')->assertInertia(fn (AssertableInertia $page) => $page->component('Player/Build')
            ->has('compareCharacters')
            ->has('error')
        );
        $response->assertSuccessful();
    }
}
