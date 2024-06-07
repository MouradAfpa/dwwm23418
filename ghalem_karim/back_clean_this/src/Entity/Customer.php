<?php

namespace App\Entity;

use App\Repository\AddressRepository;
use App\Repository\CustomerRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CustomerRepository::class)]
class Customer
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $lastname = null;

    #[ORM\Column(length: 255)]
    private ?string $mail = null;

    #[ORM\Column]
    private ?bool $isPro = null;

    #[ORM\ManyToOne(inversedBy: 'customers')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Address $address = null;

    // #[ORM\OneToMany(targetEntity: Operation::class, mappedBy: 'customer')]
    // private Collection $operations;

    // public function __construct()
    // {
    //     $this->operations = new ArrayCollection();
    // }


    public function build(array $fields, ?AddressRepository $addressRepository)
    {

        foreach ($fields as $key => $value) {
            switch ($key) {
                case "name":
                    $this->setName($value);
                    break;
                case "lastname":
                    $this->setLastname($value);
                    break;
                case "mail":
                    $this->setMail($value);
                    break;
                case "isPro":
                    $this->setIsPro($value);
                    break;
                case "address":
                    $address = $addressRepository->find($value['id']);
                    $this->setAddress($address);
                    break;
            }
        }

        return $this;
    }




    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): static
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getMail(): ?string
    {
        return $this->mail;
    }

    public function setMail(string $mail): static
    {
        $this->mail = $mail;

        return $this;
    }

    public function isIsPro(): ?bool
    {
        return $this->isPro;
    }

    public function setIsPro(bool $isPro): static
    {
        $this->isPro = $isPro;

        return $this;
    }

    public function getAddress(): ?Address
    {
        return $this->address;
    }

    public function setAddress(?Address $address): static
    {
        $this->address = $address;

        return $this;
    }

    // /**
    //  * @return Collection<int, Operation>
    //  */
    // public function getOperations(): Collection
    // {
    //     return $this->operations;
    // }

    // public function addOperation(Operation $operation): static
    // {
    //     if (!$this->operations->contains($operation)) {
    //         $this->operations->add($operation);
    //         $operation->setCustomer($this);
    //     }

    //     return $this;
    // }

    // public function removeOperation(Operation $operation): static
    // {
    //     if ($this->operations->removeElement($operation)) {
    //         // set the owning side to null (unless already changed)
    //         if ($operation->getCustomer() === $this) {
    //             $operation->setCustomer(null);
    //         }
    //     }

    //     return $this;
    // }
}
