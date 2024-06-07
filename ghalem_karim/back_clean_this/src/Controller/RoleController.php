<?php

namespace App\Controller;

use Exception;
use InvalidArgumentException;
use App\Entity\Role;
use App\OptionsResolver\PaginatorOptionsResolver;
use App\OptionsResolver\RoleOptionsResolver;
use App\Repository\RoleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Exception\BadRequestException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;


class RoleController extends AbstractController
{
    /**
     * retourne la liste des roles  
     *
     * @param RoleRepository $roleRepository
     * @return JsonResponse
     */
    #[Route('/role', name: 'role', methods: ['GET'])]
    public function index(RoleRepository $roleRepository, Request $request, PaginatorOptionsResolver $paginatorOptionsResolver): JsonResponse
    {

        try {
            $queryParams=$paginatorOptionsResolver
                        ->configurePage()
                        ->resolve($request->query->all());

            // dd($queryParams["page"]);
            $roles = $roleRepository->findAllWithPagination($queryParams["page"]);
            return $this->json($roles);
        } catch (\Throwable $e) {
            throw new BadRequestHttpException($e->getMessage());
        }
        // $roles = $roleRepository->findAll();
    }

    /**
     * renvoi un role grace a l'id 
     */
    #[Route('/role/{id}', name: 'get_role', methods: ['GET'])]
    public function getRole(Role $role): JsonResponse
    {
        return $this->json($role);
    }


    /**
     * Envoie un nouveau role 
     *
     * @param Request $request
     * @param RoleRepository $roleRepository
     * @return JsonResponse
     */
    #[Route("/role", "create_role", methods: ["POST"])]
    public function createRole(Request $request, RoleRepository $roleRepository, ValidatorInterface $validator, RoleOptionsResolver $roleOptionsResolver): JsonResponse
    {

        try {
            $body = json_decode($request->getContent(), true);
            $fields = $roleOptionsResolver->configureLabel(true)->resolve($body);


            $role = new Role();
            $role->build($fields);

            $errors = $validator->validate($role);

            if (count($errors) > 0) {
                throw new InvalidArgumentException((string) $errors);
            }

            $role = $roleRepository->create($role);


            return $this->json($role, status: Response::HTTP_CREATED);
        } catch (Exception $e) {
            throw new BadRequestHttpException((string) $e->getMessage());
        }
    }

    #[Route("/role/{id}", "delete_role", methods: ["DELETE"])]
    public function deleteRole(Role $role, RoleRepository $roleRepository)

    {
        try {

            /**
             * Verification si pas de USER avec se role
             */

            // if($userRepository->fillAll($roles)){
            // mon role est utiliser
            // }else{
            // je fais mon delete 
            // }
            // 

            if ($roleRepository->isUsed($role)) {
                throw new BadRequestException('Role utilisé', Response::HTTP_FORBIDDEN);
            }



            $res = $roleRepository->remove($role, true);

            return $this->json($res, status: Response::HTTP_NO_CONTENT);
        } catch (Exception $e) {
            throw new BadRequestHttpException((string) $e->getMessage());
        }
    }


    #[Route("/role/{id}", "update_role", methods: ["PATCH", "PUT"])]
    public function updateRole(Role $role, Request $request, RoleRepository $roleRepository, RoleOptionsResolver $roleOptionsResolver, ValidatorInterface $validator)
    {
        try {

            $body = json_decode($request->getContent(), true);
            $fields = $roleOptionsResolver->configureLabel(true)->resolve($body);


            if ($fields['label'] !== null) {
                $role->setLabel($fields['label']);
            }

            $errors = $validator->validate($role);

            if (count($errors) > 0) {
                throw new InvalidArgumentException((string) $errors);
            }

            $roleRepository->update($role);

            return $this->json($role, status: Response::HTTP_ACCEPTED);
        } catch (Exception $e) {
            throw new BadRequestHttpException((string) $e->getMessage());
        }
    }
}




/**
 * 
 *  CONCEPTION - Qui fait quoi ?
 * 
 *  Le controller -> Intercept les requetes et lance les actions
 *  Le delegate -> C'est le controller les Repository, c'est lui qui gere les appels au différente Repository
 *  Le repository -> Interfacage avec les entité / BDD
 *  La Factory -> Permet d'alimenter les datas ($datas->setTitle())
 *          On pourrait par example traiter des informations de dates
 *  Le manager -> (Symfony) Builder de request pour la bdd
 * 
 */
