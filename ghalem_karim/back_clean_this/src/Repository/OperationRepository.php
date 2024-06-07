<?php

namespace App\Repository;

use App\Entity\Operation;
use App\Model\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Operation>
 *
 * @method Operation|null find($id, $lockMode = null, $lockVersion = null)
 * @method Operation|null findOneBy(array $criteria, array $orderBy = null)
 * @method Operation[]    findAll()
 * @method Operation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OperationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Operation::class);
    }

    //    /**
    //     * @return Operation[] Returns an array of Operation objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('o')
    //            ->andWhere('o.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('o.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Operation
    //    {
    //        return $this->createQueryBuilder('o')
    //            ->andWhere('o.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }

    public function findAllWithPagination(int $page): Paginator
    {
        $query = $this->createQueryBuilder('t')->orderBy('t.id', 'ASC');

        return new Paginator($query, $page);
    }

    
    public function create(Operation $operation)
    {

        $operationManager = $this->getEntityManager();
        $operationManager->persist($operation);
        $operationManager->flush();

        return $operation;
    }



    public function isUsed(Operation $operation)
    {

        return false;
    }

    public function update(Operation $operation)
    {

        $operationManager = $this->getEntityManager();
        $operationManager->flush();

        return $operation;
    }

    public function remove(Operation $operation)
    {

        $operationManager = $this->getEntityManager();
        $operationManager->remove($operation);
        $operationManager->flush();

        return true;
    }
}
