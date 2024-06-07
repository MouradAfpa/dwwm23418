<?php

namespace App\Controller;

use App\Entity\Address;
use App\OptionsResolver\AddressOptionsResolver;
use App\OptionsResolver\PaginatorOptionsResolver;
use App\Repository\AddressRepository;
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

class AddressController extends AbstractController
{
    /**
     * retourne la liste des roles  
     *
     * @param AddressRepository $roleRepository
     * @return JsonResponse
     */
    #[Route('/address', name: 'get_adresses', methods: ['GET'])]
    public function index(AddressRepository $addressRepository, Request $request, PaginatorOptionsResolver $paginatorOptionsResolver): JsonResponse
    {

        try {
            $queryParams = $paginatorOptionsResolver
                ->configurePage()
                ->resolve($request->query->all());

            $roles = $addressRepository->findAllWithPagination($queryParams["page"]);
            return $this->json($roles);
        } catch (Exception $e) {
            throw new BadRequestHttpException($e->getMessage());
        }
    }

    /**
     * renvoi un role grace a l'id 
     */
    #[Route('/address/{id}', name: 'get_address', methods: ['GET'])]
    public function address(Address $address): JsonResponse
    {
        return $this->json($address);
    }


    /**
     * Envoie un nouveau role 
     *
     * @param Request $request
     * @param AddressRepository $roleRepository
     * @return JsonResponse
     */
    #[Route("/address", "create_address", methods: ["POST"])]
    public function createAddress(Request $request, AddressRepository $addressRepository, ValidatorInterface $validator, AddressOptionsResolver $addressOptionsResolver): JsonResponse
    {

        try {
            $body = json_decode($request->getContent(), true);
            $fields = $addressOptionsResolver->common()->resolve($body);


            $role = new Address();
            $role->build($fields);

            $errors = $validator->validate($role);

            if (count($errors) > 0) {
                throw new InvalidArgumentException((string) $errors);
            }

            $role = $addressRepository->create($role);


            return $this->json($role, status: Response::HTTP_CREATED);
        } catch (Exception $e) {
            throw new BadRequestHttpException((string) $e->getMessage());
        }
    }

    #[Route("/address/{id}", "delete_address", methods: ["DELETE"])]
    public function deleteAddress(Address $address,  AddressRepository $addressRepository)
    {
        try {


            /*⚠️⚠️⚠️ ATTENTION J'AI MIS RETURN TRUE !!!!!!!!!!!! ⚠️⚠️⚠️*/
            if ($addressRepository->isUsed($address)) {
                throw new BadRequestException('Role utilisé', Response::HTTP_FORBIDDEN);
            } else {

                $res = $addressRepository->remove($address, true);

                return $this->json($res, status: Response::HTTP_NO_CONTENT);
            }
        } catch (Exception $e) {
            throw new BadRequestHttpException((string) $e->getMessage());
        }
    }


    #[Route("/address/{id}", "update_address", methods: ["PATCH", "PUT"])]
    public function updateAddress(Address $address, Request $request,  AddressRepository $addressRepository,  ValidatorInterface $validator, AddressOptionsResolver $addressOptionsResolver)
    {
        try {

            $body = json_decode($request->getContent(), true);
            $fields = $addressOptionsResolver->common(false)->resolve($body);

            $errors = $validator->validate($address);

            if (count($errors) > 0) {
                throw new InvalidArgumentException((string) $errors);
            }

            $address->build($fields);


            $addressRepository->update($address);

            return $this->json($address, status: Response::HTTP_ACCEPTED);
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
