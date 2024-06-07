<?php

namespace App\Factory;

use App\Entity\Role;
use App\Entity\User;
use App\Repository\RoleRepository;
use App\Repository\UserRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<User>
 *
 * @method        User|Proxy create(array|callable $attributes = [])
 * @method static User|Proxy createOne(array $attributes = [])
 * @method static User|Proxy find(object|array|mixed $criteria)
 * @method static User|Proxy findOrCreate(array $attributes)
 * @method static User|Proxy first(string $sortedField = 'id')
 * @method static User|Proxy last(string $sortedField = 'id')
 * @method static User|Proxy random(array $attributes = [])
 * @method static User|Proxy randomOrCreate(array $attributes = [])
 * @method static UserRepository|RepositoryProxy repository()
 * @method static User[]|Proxy[] all()
 * @method static User[]|Proxy[] createMany(int $number, array|callable $attributes = [])
 * @method static User[]|Proxy[] createSequence(iterable|callable $sequence)
 * @method static User[]|Proxy[] findBy(array $attributes)
 * @method static User[]|Proxy[] randomRange(int $min, int $max, array $attributes = [])
 * @method static User[]|Proxy[] randomSet(int $number, array $attributes = [])
 */
final class UserFactory extends ModelFactory
{
    private RoleRepository $roleRepository;

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#factories-as-services
     *
     * @todo inject services if required
     */
    public function __construct(RoleRepository $roleRepository)
    {
        parent::__construct();
        $this->roleRepository = $roleRepository;
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#model-factories
     *
     * @todo add your default values here
     */
    protected function getDefaults(): array
    {
        $role = $this->roleRepository->findAll();

        return [
            'lastname' => self::faker()->lastName(),
            'login' => self::faker()->lastname(),
            'mail' => self::faker()->email(),
            'name' => self::faker()->firstName(),
            'password' => self::faker()->password(),
            'role' => $role[0]
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(User $user): void {})
        ;
    }

    protected static function getClass(): string
    {
        return User::class;
    }

    public function build(array $fields, ?User $user = new User())
    {

        foreach ($fields as $key => $value) {
            switch ($key) {
                case "name":
                    $user->setName($value);
                    break;
                case "lastname":
                    $user->setLastname($value);
                    break;
                case "mail":
                    $user->setMail($value);
                    break;
                case "birthday":
                    $user->setBirthday($value);
                    break;
                case "password":
                    $user->setPassword($value);
                    break;
                case "login":
                    $user->setLogin($value);
                    break;
                case "role":
                    $role = $this->roleRepository->find($value['id']);
                    $user->setRole($role);
                    break;
            }
        }

        return $user;
    }

}
