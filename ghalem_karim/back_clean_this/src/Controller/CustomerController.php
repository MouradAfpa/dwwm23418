<?php

namespace App\Controller;

use App\Entity\Customer;
use App\OptionsResolver\AddressOptionsResolver;
use App\OptionsResolver\CustomerOptionsResolver;
use App\OptionsResolver\PaginatorOptionsResolver;
use App\Repository\AddressRepository;
use App\Repository\CustomerRepository;
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

class CustomerController extends AbstractController
{


    #[Route('/customer', name: 'get_customers', methods: ['GET'])]
    public function index(CustomerRepository $customerRepository, Request $request, PaginatorOptionsResolver $paginatorOptionsResolver): JsonResponse
    {

        try {
            $queryParams = $paginatorOptionsResolver
                ->configurePage()
                ->resolve($request->query->all());

            $roles = $customerRepository->findAllWithPagination($queryParams["page"]);
            return $this->json($roles);
        } catch (Exception $e) {
            throw new BadRequestHttpException($e->getMessage());
        }
    }
    /**
     * renvoi un role grace a l'id 
     */
    #[Route('/customer/{id}', name: 'get_customer', methods: ['GET'])]
    public function customer(Customer $customer): JsonResponse
    {
        return $this->json($customer);
    }


    /**
     * Envoie un nouveau role 
     *
     * @param Request $request
     * @param AddressRepository $roleRepository
     * @return JsonResponse
     */
    #[Route("/customer", "create_customer", methods: ["POST"])]
    public function createCustomer(Request $request, CustomerRepository $customerRepository, ValidatorInterface $validator, CustomerOptionsResolver $customerOptionsResolver, AddressRepository $addressRepository): JsonResponse
    {

        try {
            $body = json_decode($request->getContent(), true);
            $fields = $customerOptionsResolver->common()->resolve($body);


            $customer = new Customer();
            $customer->build($fields, $addressRepository);

            $errors = $validator->validate($customer);

            if (count($errors) > 0) {
                throw new InvalidArgumentException((string) $errors);
            }

            $role = $customerRepository->create($customer);


            return $this->json($role, status: Response::HTTP_CREATED);
        } catch (Exception $e) {
            throw new BadRequestHttpException((string) $e->getMessage());
        }
    }

    #[Route("/customer/{id}", "delete_customer", methods: ["DELETE"])]
    public function deleteCustomer(Customer $customer,  CustomerRepository $customerRepository)
    {
        try {


            /*⚠️⚠️⚠️ ATTENTION J'AI MIS RETURN TRUE !!!!!!!!!!!! ⚠️⚠️⚠️*/
            if ($customerRepository->isUsed($customer)) {
                throw new BadRequestException('Customer utilisé', Response::HTTP_FORBIDDEN);
            } else {

                $res = $customerRepository->remove($customer, true);

                return $this->json($res, status: Response::HTTP_NO_CONTENT);
            }
        } catch (Exception $e) {
            throw new BadRequestHttpException((string) $e->getMessage());
        }
    }


    #[Route("/customer/{id}", "update_customer", methods: ["PATCH", "PUT"])]
    public function updateCustomer(Customer $customer, Request $request,  CustomerRepository $customerRepository,  ValidatorInterface $validator, CustomerOptionsResolver $customerResolver, AddressRepository $addressRepository)
    {
        try {

            $body = json_decode($request->getContent(), true);
            $fields = $customerResolver->common(false)->resolve($body);

            $errors = $validator->validate($customer);

            if (count($errors) > 0) {
                throw new InvalidArgumentException((string) $errors);
            }

            $customer->build($fields, $addressRepository);


            $customerRepository->update($customer);

            return $this->json($customer, status: Response::HTTP_ACCEPTED);
        } catch (Exception $e) {
            throw new BadRequestHttpException((string) $e->getMessage());
        }
    }
}
