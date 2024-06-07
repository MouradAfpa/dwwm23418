<?php

namespace App\Repository;

use App\Entity\Address;
use App\Model\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Address>
 *
 * @method Address|null find($id, $lockMode = null, $lockVersion = null)
 * @method Address|null findOneBy(array $criteria, array $orderBy = null)
 * @method Address[]    findAll()
 * @method Address[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AddressRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Address::class);
    }

    //    /**
    //     * @return Address[] Returns an array of Address objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('a')
    //            ->andWhere('a.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('a.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Address
    //    {
    //        return $this->createQueryBuilder('a')
    //            ->andWhere('a.exampleField = :val')
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


    public function create(Address $address)
    {

        $addressManager = $this->getEntityManager();
        $addressManager->persist($address);
        $addressManager->flush();

        return $address;
    }


    public function isUsed(Address $address)
    {

        return true;
    }

    public function update(Address $address)
    {

        $addressManager = $this->getEntityManager();
        $addressManager->flush();

        return $address;
    }

    public function remove(Address $address)
    {

        $addressManager = $this->getEntityManager();
        $addressManager->remove($address);
        $addressManager->flush();

        return true;
    }
}
