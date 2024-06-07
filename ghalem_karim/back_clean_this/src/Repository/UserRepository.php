<?php

namespace App\Repository;

use App\Entity\User;
use App\Model\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<User>
 *
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    //    /**
    //     * @return User[] Returns an array of User objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('u.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?User
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
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


    public function isUsed(User $user)
    {

        return false;
        // TODO: faut dabord crée les autres entity
        // return $this->createQueryBuilder('r')
        //     ->select('COUNT(id)')
        //     ->innerJoin('r.client', 'c')
        //     ->where('r = :role')
        //     ->setParameter('role', $role)
        //     ->getQuery()
        //     ->getSingleScalarResult() > 0;

        // au cas ou tu voudrait la faire en sql pur (c'est mieux)
        // $RAW_QUERY = 'SELECT * FROM my_table where my_table.field = :status LIMIT 5;';

        // $statement = $em->getConnection()->prepare($RAW_QUERY);
        // // Set parameters 
        // $statement->bindValue('status', 1);
        // $statement->execute();
        // $result = $statement->fetchAll();

    }


    public function create(User $user)
    {

        /** TODO: Attention il faut ajouter le bon role ! */

        $userManager = $this->getEntityManager();
        $userManager->persist($user);
        $userManager->flush();

        return $user;
    }


    public function update(User $user)
    {

        $userManager = $this->getEntityManager();
        $userManager->flush();

        return $user;
    }

    public function remove(User $user)
    {

        $userManager = $this->getEntityManager();
        $userManager->remove($user);
        $userManager->flush();

        return true;
    }
}
