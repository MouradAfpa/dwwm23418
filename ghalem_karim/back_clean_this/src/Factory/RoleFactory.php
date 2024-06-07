<?php

namespace App\Factory;

use App\Entity\Role;
use App\Repository\RoleRepository;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Validator\Validation;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<Role>
 *
 * @method        Role|Proxy create(array|callable $attributes = [])
 * @method static Role|Proxy createOne(array $attributes = [])
 * @method static Role|Proxy find(object|array|mixed $criteria)
 * @method static Role|Proxy findOrCreate(array $attributes)
 * @method static Role|Proxy first(string $sortedField = 'id')
 * @method static Role|Proxy last(string $sortedField = 'id')
 * @method static Role|Proxy random(array $attributes = [])
 * @method static Role|Proxy randomOrCreate(array $attributes = [])
 * @method static RoleRepository|RepositoryProxy repository()
 * @method static Role[]|Proxy[] all()
 * @method static Role[]|Proxy[] createMany(int $number, array|callable $attributes = [])
 * @method static Role[]|Proxy[] createSequence(iterable|callable $sequence)
 * @method static Role[]|Proxy[] findBy(array $attributes)
 * @method static Role[]|Proxy[] randomRange(int $min, int $max, array $attributes = [])
 * @method static Role[]|Proxy[] randomSet(int $number, array $attributes = [])
 */
final class RoleFactory extends ModelFactory
{
    // private ValidatorInterface $validator;

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
            'label' => self::faker()->text(10),
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(Role $role): void {})
        ;
    }
  
    protected static function getClass(): string
    {
        return Role::class;
    }
}
