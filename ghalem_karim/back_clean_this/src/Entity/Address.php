<?php

namespace App\Entity;

use App\Repository\AddressRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AddressRepository::class)]
class Address
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, name: 'street_name')]
    private ?string $streetName = null;

    #[ORM\Column]
    private ?int $postal = null;

    #[ORM\Column(length: 255)]
    private ?string $town = null;

    #[ORM\Column(length: 255)]
    private ?string $country = null;

    // #[ORM\OneToMany(targetEntity: Operation::class, mappedBy: 'address')]
    // private Collection $operations;

    // public function __construct()
    // {
    //     $this->operations = new ArrayCollection();
    // }



    public function build(array $fields)
    {

        foreach ($fields as $key => $value) {
            switch ($key) {
                case "streetName":
                    $this->setStreetName($value);
                    break;
                case "postal":
                    $this->setPostal($value);
                    break;
                case "town":
                    $this->setTown($value);
                    break;
                case "country":
                    $this->setCountry($value);
                    break;
            };
        }

        return $this;
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStreetName(): ?string
    {
        return $this->streetName;
    }

    public function setStreetName(string $streetName): static
    {
        $this->streetName = $streetName;

        return $this;
    }

    public function getPostal(): ?int
    {
        return $this->postal;
    }

    public function setPostal(int $postal): static
    {
        $this->postal = $postal;

        return $this;
    }

    public function getTown(): ?string
    {
        return $this->town;
    }

    public function setTown(string $town): static
    {
        $this->town = $town;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): static
    {
        $this->country = $country;

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
    //         $operation->setAddress($this);
    //     }

    //     return $this;
    // }

    // public function removeOperation(Operation $operation): static
    // {
    //     if ($this->operations->removeElement($operation)) {
    //         // set the owning side to null (unless already changed)
    //         if ($operation->getAddress() === $this) {
    //             $operation->setAddress(null);
    //         }
    //     }

    //     return $this;
    // }
}
