<?php

namespace App\Entity;

use App\Repository\OperationTypeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OperationTypeRepository::class)]
class OperationType
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $label = null;

    #[ORM\Column]
    private ?int $price = null;

    // #[ORM\OneToMany(targetEntity: Operation::class, mappedBy: 'operationType')]
    // private Collection $operations;

    // public function __construct()
    // {
    //     $this->operations = new ArrayCollection();
    // }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(string $label): static
    {
        $this->label = $label;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): static
    {
        $this->price = $price;

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
    //         $operation->setOperationType($this);
    //     }

    //     return $this;
    // }

    // public function removeOperation(Operation $operation): static
    // {
    //     if ($this->operations->removeElement($operation)) {
    //         // set the owning side to null (unless already changed)
    //         if ($operation->getOperationType() === $this) {
    //             $operation->setOperationType(null);
    //         }
    //     }

    //     return $this;
    // }
}
