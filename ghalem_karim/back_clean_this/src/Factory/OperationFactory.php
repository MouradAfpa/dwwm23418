<?php

namespace App\Factory;

use App\Entity\Operation;
use App\Repository\AddressRepository;
use App\Repository\CustomerRepository;
use App\Repository\OperationRepository;
use App\Repository\OperationTypeRepository;
use App\Repository\UserRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<Operation>
 *
 * @method        Operation|Proxy create(array|callable $attributes = [])
 * @method static Operation|Proxy createOne(array $attributes = [])
 * @method static Operation|Proxy find(object|array|mixed $criteria)
 * @method static Operation|Proxy findOrCreate(array $attributes)
 * @method static Operation|Proxy first(string $sortedField = 'id')
 * @method static Operation|Proxy last(string $sortedField = 'id')
 * @method static Operation|Proxy random(array $attributes = [])
 * @method static Operation|Proxy randomOrCreate(array $attributes = [])
 * @method static OperationRepository|RepositoryProxy repository()
 * @method static Operation[]|Proxy[] all()
 * @method static Operation[]|Proxy[] createMany(int $number, array|callable $attributes = [])
 * @method static Operation[]|Proxy[] createSequence(iterable|callable $sequence)
 * @method static Operation[]|Proxy[] findBy(array $attributes)
 * @method static Operation[]|Proxy[] randomRange(int $min, int $max, array $attributes = [])
 * @method static Operation[]|Proxy[] randomSet(int $number, array $attributes = [])
 */
final class OperationFactory extends ModelFactory
{

    private UserRepository $userRepository;
    private CustomerRepository $customerRepository;
    private AddressRepository $addressRepository;
    private OperationTypeRepository $operationTypeRepository;



    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#factories-as-services
     *
     * @todo inject services if required
     */
    public function __construct(
        UserRepository $userRepository,
        CustomerRepository $customerRepository,
        AddressRepository $addressRepository,
        OperationTypeRepository $operationTypeRepository
    ) {
        parent::__construct();
        $this->userRepository = $userRepository;
        $this->customerRepository = $customerRepository;
        $this->addressRepository = $addressRepository;
        $this->operationTypeRepository = $operationTypeRepository;
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#model-factories
     *
     * @todo add your default values here
     */
    protected function getDefaults(): array
    {
        $user = $this->userRepository->findAll();
        $customer = $this->customerRepository->findAll();
        $address = $this->addressRepository->findAll();
        $operationType = $this->operationTypeRepository->findAll();

        return [
            'endDate' => self::faker()->dateTime(),
            'startDate' => self::faker()->dateTime(),
            'state' => self::faker()->numberBetween(0, 3),
            'title' => self::faker()->text(8),
            'user' => $user[0],
            'customer' => $customer[0],
            'address' => $address[0],
            'operationType' => $operationType[0],
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(Operation $operation): void {})
        ;
    }

    protected static function getClass(): string
    {
        return Operation::class;
    }

    public function build(array $fields, ?Operation $operation = new Operation())
    {

        foreach ($fields as $key => $value) {
            switch ($key) {
                case "title":
                    $operation->setTitle($value);
                    break;

                case "description":
                    $operation->setDescription($value);
                    break;

                case "startDate":
                    $operation->setStartDate(new \DateTime($value));
                    break;

                case "endDate":
                    $operation->setEndDate(new \DateTime($value));
                    break;

                case "state":
                    $operation->setState($value);
                    break;

                case "operationType":
                    $operationType = $this->operationTypeRepository->find($value['id']);
                    $operation->setOperationType($operationType);
                    break;

                case "address":
                    $address = $this->addressRepository->find($value['id']);
                    $operation->setAddress($address);
                    break;

                case "customer":
                    $customer = $this->customerRepository->find($value['id']);
                    $operation->setCustomer($customer);
                    break;

                case "user":
                    $user = $this->userRepository->find($value['id']);
                    $operation->setUser($user);
                    break;
            }
        }

        return $operation;
    }
}
