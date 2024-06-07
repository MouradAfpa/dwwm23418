<?php

namespace App\Controller;

use App\Entity\User;
use App\Factory\UserFactory;
use App\OptionsResolver\PaginatorOptionsResolver;
use App\OptionsResolver\UserOptionsResolver;
use App\Repository\RoleRepository;
use App\Repository\UserRepository;
use Exception;
use InvalidArgumentException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Exception\BadRequestException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class UserController extends AbstractController
{

    private UserFactory $userFactory;

    public function __construct(UserFactory $userFactory)
    {
        $this->userFactory = $userFactory;
    }


    #[Route('/user', name: 'user', methods: ['GET'])]
    public function index(UserRepository $userRepository, Request $request, PaginatorOptionsResolver $paginatorOptionsResolver): JsonResponse
    {
        try {
            $queryParams = $paginatorOptionsResolver
                ->configurePage()
                ->resolve($request->query->all());

            $users = $userRepository->findAllWithPagination($queryParams["page"]);

            return $this->json($users);
        } catch (Exception $e) {
            throw new BadRequestHttpException($e->getMessage());
        }
        // $roles = $roleRepository->findAll();
    }


    #[Route('/user/{id}', name: 'get_user', methods: ['GET'])]
    public function user(User $user): JsonResponse
    {
        return $this->json($user);
    }


    #[Route("/user", "create_user", methods: ["POST"])]
    public function createUser(Request $request, UserRepository $userRepository, ValidatorInterface $validator, UserOptionsResolver $userOptionsResolver): JsonResponse
    {

        try {
            $body = json_decode($request->getContent(), true);
            $fields = $userOptionsResolver->common()->resolve($body);


            // fonctionne pour la création attention à la maj
            $user = $this->userFactory->build($fields);

            $errors = $validator->validate($user);

            if (count($errors) > 0) {
                throw new InvalidArgumentException((string) $errors);
            }

            $user = $userRepository->create($user);


            return $this->json($user, status: Response::HTTP_CREATED);
        } catch (Exception $e) {
            throw new BadRequestHttpException((string) $e->getMessage());
        }
    }




    #[Route("/user/{id}", "update_user", methods: ["PATCH", "PUT"])]
    public function updateUser(User $user, Request $request, UserRepository $userRepository, RoleRepository $roleRepository, UserOptionsResolver $userOptionsResolver, ValidatorInterface $validator)
    {
        try {

            $body = json_decode($request->getContent(), true);
            $fields = $userOptionsResolver->common(false)->resolve($body);

            $errors = $validator->validate($body);

            if (count($errors) > 0) {
                throw new InvalidArgumentException((string) $errors);
            }

            $this->userFactory->build($fields, $user);

            $userRepository->update($user);

            return $this->json($user, status: Response::HTTP_ACCEPTED);
        } catch (Exception $e) {
            throw new BadRequestHttpException((string) $e->getMessage());
        }
    }



    #[Route("/user/{id}", "delete_user", methods: ["DELETE"])]
    public function deleteRole(User $user, UserRepository $userRepository)

    {
        try {

            /**
             * Verification si pas de USER avec une opération
             */

            if ($userRepository->isUsed($user)) {
                throw new BadRequestException('Role utilisé', Response::HTTP_FORBIDDEN);
            }

            $res = $userRepository->remove($user, true);

            return $this->json($res, status: Response::HTTP_NO_CONTENT);
        } catch (Exception $e) {
            throw new BadRequestHttpException((string) $e->getMessage());
        }
    }
}
