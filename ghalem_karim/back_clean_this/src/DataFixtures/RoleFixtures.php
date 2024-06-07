<?php

namespace App\DataFixtures;

use App\Factory\RoleFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class RoleFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        RoleFactory::createMany(5);
    }
}
