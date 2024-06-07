<?php

namespace App\Controller;

use App\Entity\OperationType;
use Exception;
use App\OptionsResolver\PaginatorOptionsResolver;
use App\Repository\OperationTypeRepository;
use InvalidArgumentException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Routing\Annotation\Route;


class OperationTypeController extends AbstractController
{
    /**
     * retourne la liste des roles  
     *
     * @param OperationTypeRepository $roleRepository
     * @return JsonResponse
     */
    #[Route('/operation/type', name: 'operations_type', methods: ['GET'])]
    public function types(OperationTypeRepository $typeRepository, Request $request, PaginatorOptionsResolver $paginatorOptionsResolver): JsonResponse
    {

        try {
            $types = $typeRepository->findAll();
            return $this->json($types);
        } catch (Exception $e) {
            throw new BadRequestHttpException($e->getMessage());
        }
    }

    /**
     * renvoi un role grace a l'id 
     */
    #[Route('/operation/type/{id}', name: 'get_operation_type', methods: ['GET'])]
    public function type(OperationType $type): JsonResponse
    {
        return $this->json($type);
    }

}
