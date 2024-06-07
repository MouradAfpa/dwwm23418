<?php

namespace App\Controller;

use Exception;
use InvalidArgumentException;
use App\Entity\Operation;
use App\Factory\OperationFactory;
use App\OptionsResolver\OperationOptionsResolver;
use App\OptionsResolver\PaginatorOptionsResolver;
use App\Repository\OperationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Exception\BadRequestException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class OperationController extends AbstractController
{

    private OperationFactory $operationFactory;

    public function __construct(OperationFactory $operationFactory)
    {
        $this->operationFactory = $operationFactory;
    }

    #[Route('/operation', name: 'get_operations', methods: ['GET'])]
    public function index(OperationRepository $operationRepository, Request $request, PaginatorOptionsResolver $paginatorOptionsResolver): JsonResponse
    {

        try {
            $queryParams = $paginatorOptionsResolver
                ->configurePage()
                ->resolve($request->query->all());

            $operations = $operationRepository->findAllWithPagination($queryParams["page"]);
            return $this->json($operations);
        } catch (Exception $e) {
            throw new BadRequestHttpException($e->getMessage());
        }
    }


    #[Route('/operation/{id}', name: 'get_operation', methods: ['GET'])]
    public function operation(Operation $operation): JsonResponse
    {
        return $this->json($operation);
    }


    #[Route("/operation", "create_operation", methods: ["POST"])]
    public function createOperation(Request $request, OperationRepository $operationRepository, ValidatorInterface $validator, OperationOptionsResolver $operationOptionsResolver): JsonResponse
    {

        try {
            $body = json_decode($request->getContent(), true);
            $fields = $operationOptionsResolver->common($body)->resolve($body);


            // fonctionne pour la création attention à la maj
            $user = $this->operationFactory->build($fields);

            $errors = $validator->validate($user);

            if (count($errors) > 0) {
                throw new InvalidArgumentException((string) $errors);
            }

            $user = $operationRepository->create($user);


            return $this->json($user, status: Response::HTTP_CREATED);
        } catch (Exception $e) {
            throw new BadRequestHttpException((string) $e->getMessage());
        }
    }




    #[Route("/operation/{id}", "update_operation", methods: ["PATCH", "PUT"])]
    public function updateOperation(Operation $operation, Request $request, OperationRepository $operationRepository, OperationOptionsResolver $operationOptionsResolver, ValidatorInterface $validator)
    {
        try {

            $body = json_decode($request->getContent(), true);
            $fields = $operationOptionsResolver->common($body, false)->resolve($body);

            $errors = $validator->validate($body);

            if (count($errors) > 0) {
                throw new InvalidArgumentException((string) $errors);
            }

            $this->operationFactory->build($fields, $operation);

            $operationRepository->update($operation);

            return $this->json($operation, status: Response::HTTP_ACCEPTED);
        } catch (Exception $e) {
            throw new BadRequestHttpException((string) $e->getMessage());
        }
    }

    #[Route("/operation/{id}", "delete_operation", methods: ["DELETE"])]
    public function deleteOperation(Operation $operation, OperationRepository $operationRepository)
    {
        try {

            if ($operationRepository->isUsed($operation)) {
                throw new BadRequestException('Operation utilisé', Response::HTTP_FORBIDDEN);
            }

            $res = $operationRepository->remove($operation, true);

            return $this->json($res, status: Response::HTTP_NO_CONTENT);
        } catch (Exception $e) {
            throw new BadRequestHttpException((string) $e->getMessage());
        }
    }
}
