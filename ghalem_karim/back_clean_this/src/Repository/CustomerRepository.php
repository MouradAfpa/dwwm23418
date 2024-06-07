<?php

namespace App\Repository;

use App\Entity\Customer;
use App\Model\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Customer>
 *
 * @method Customer|null find($id, $lockMode = null, $lockVersion = null)
 * @method Customer|null findOneBy(array $criteria, array $orderBy = null)
 * @method Customer[]    findAll()
 * @method Customer[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CustomerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Customer::class);
    }

    //    /**
    //     * @return Customer[] Returns an array of Customer objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('c.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Customer
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }


    /**
     * fonction qui retourne l'ensemble des roles avec pagination
     *
     * @param integer $page
     * @return Paginator
     */
    public function findAllWithPagination(int $page): Paginator
    {
        $query = $this->createQueryBuilder('t')->orderBy('t.id', 'ASC');

        return new Paginator($query, $page);
    }


    public function create(Customer $customer)
    {

        $customerManager = $this->getEntityManager();
        $customerManager->persist($customer);
        $customerManager->flush();

        return $customer;
    }



    public function isUsed(Customer $customer)
    {

        return false;
    }

    public function update(Customer $customer)
    {

        $customerManager = $this->getEntityManager();
        $customerManager->flush();

        return $customer;
    }

    public function remove(Customer $customer)
    {

        $customerManager = $this->getEntityManager();
        $customerManager->remove($customer);
        $customerManager->flush();

        return true;
    }
}
