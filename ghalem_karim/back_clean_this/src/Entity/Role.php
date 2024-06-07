<?php

namespace App\Entity;

use App\Repository\RoleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Ignore;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[ORM\Entity(repositoryClass: RoleRepository::class)]
class Role
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Assert\NotNull]
    private ?string $label = null;


    // #[Ignore]
    // #[ORM\OneToMany(targetEntity: User::class, mappedBy: 'role')]
    // private Collection $users;

    // public function __construct()
    // {
    //     $this->users = new ArrayCollection();
    // }

    // private ValidatorInterface $validator;
    // public function __construct(ValidatorInterface $validator)
    // {
    //     $this->$validator = $validator;
    // }

    /**
     * J'aimerais bien tester ça
     * Ou alors un builder pattern
     */
    public function build(mixed $value)
    {
        $this->setLabel($value['label']);
        // $this->validator->validate($this);
        return $this;
    }

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
}
