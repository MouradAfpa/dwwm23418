<?php

namespace App\DataFixtures;

use App\Factory\OperationTypeFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class OperationTypeFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);
        OperationTypeFactory::createMany(5);

        $manager->flush();
    }
}
