<?php

namespace Tests\Unit;

use App\Models\User;
use Tests\TestCase;

// use PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function testThatTrueIsTrue(): void
    {
        $this->assertTrue(true);
    }

    public function testThatTestPageRendered(): void
    {
        // $response = $this->post('/login', [
        //     'email' => 'pabloskiquiroz@gmail.com',
        //     'password' => '5Dejulio.',
        //     'remember' => false
        // ]);

        // $response->assertStatus(200);

        // $this->assertAuthenticated();
        $user = User::factory()->create();

        $testRes = $this->actingAs($user)->get('/tests');
        $testRes->assertStatus(200);
    }
}
