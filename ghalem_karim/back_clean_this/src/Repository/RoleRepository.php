<?php

namespace App\Repository;

use App\Entity\Role;
use App\Model\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * @extends ServiceEntityRepository<Role>
 *
 * @method Role|null find($id, $lockMode = null, $lockVersion = null)
 * @method Role|null findOneBy(array $criteria, array $orderBy = null)
 * @method Role[]    findAll()
 * @method Role[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RoleRepository extends ServiceEntityRepository
{

    public function __construct(ManagerRegistry $registry, ValidatorInterface $validator)
    {
        parent::__construct($registry, Role::class);
    }

    //    /**
    //     * @return Role[] Returns an array of Role objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('r')
    //            ->andWhere('r.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('r.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Role
    //    {
    //        return $this->createQueryBuilder('r')
    //            ->andWhere('r.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }


    // TODO: A tester
    public function isUsed(Role $role)
    {


        // $role->contains()



        return $this->createQueryBuilder('r')
            ->select('COUNT(id)')
            ->innerJoin('r.client', 'c')
            ->where('r = :role')
            ->setParameter('role', $role)
            ->getQuery()
            ->getSingleScalarResult() > 0;

        // au cas ou tu voudrait la faire en sql pur (c'est mieux)
        // $RAW_QUERY = 'SELECT * FROM my_table where my_table.field = :status LIMIT 5;';

        // $statement = $em->getConnection()->prepare($RAW_QUERY);
        // // Set parameters 
        // $statement->bindValue('status', 1);
        // $statement->execute();
        // $result = $statement->fetchAll();

    }


    public function create(Role $role)
    {

        $roleManager = $this->getEntityManager();
        $roleManager->persist($role);
        $roleManager->flush();

        return $role;
    }

    public function remove(Role $role)
    {
        /**
         * Est ce que le role est utilisé ?
         * Si oui -> trow error
         * Si non -> on delete/cache(deleteDate)
         */

        $roleManager = $this->getEntityManager();
        $roleManager->remove($role);
        $roleManager->flush();

        return true;
    }

    public function update(Role $role)
    {

        $roleManager = $this->getEntityManager();
        $roleManager->flush();

        return $role;
    }


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
}
