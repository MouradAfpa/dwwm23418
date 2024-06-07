<?php

namespace App\Factory;

use App\Entity\OperationType;
use App\Repository\OperationTypeRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<OperationType>
 *
 * @method        OperationType|Proxy create(array|callable $attributes = [])
 * @method static OperationType|Proxy createOne(array $attributes = [])
 * @method static OperationType|Proxy find(object|array|mixed $criteria)
 * @method static OperationType|Proxy findOrCreate(array $attributes)
 * @method static OperationType|Proxy first(string $sortedField = 'id')
 * @method static OperationType|Proxy last(string $sortedField = 'id')
 * @method static OperationType|Proxy random(array $attributes = [])
 * @method static OperationType|Proxy randomOrCreate(array $attributes = [])
 * @method static OperationTypeRepository|RepositoryProxy repository()
 * @method static OperationType[]|Proxy[] all()
 * @method static OperationType[]|Proxy[] createMany(int $number, array|callable $attributes = [])
 * @method static OperationType[]|Proxy[] createSequence(iterable|callable $sequence)
 * @method static OperationType[]|Proxy[] findBy(array $attributes)
 * @method static OperationType[]|Proxy[] randomRange(int $min, int $max, array $attributes = [])
 * @method static OperationType[]|Proxy[] randomSet(int $number, array $attributes = [])
 */
final class OperationTypeFactory extends ModelFactory
{
    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#factories-as-services
     *
     * @todo inject services if required
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#model-factories
     *
     * @todo add your default values here
     */
    protected function getDefaults(): array
    {
        return [
            'label' => self::faker()->text(8),
            'price' => self::faker()->randomNumber(4, true),
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(OperationType $operationType): void {})
        ;
    }

    protected static function getClass(): string
    {
        return OperationType::class;
    }
}
