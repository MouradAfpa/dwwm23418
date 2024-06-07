<?php

namespace App\Entity;

use App\Repository\RoleRepository;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Ignore;
use Symfony\Component\Serializer\Annotation\MaxDepth;



#[ORM\Entity(repositoryClass: UserRepository::class)]
class User
{

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $lastname = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $birthday = null;

    #[ORM\Column(length: 255)]
    private ?string $mail = null;

    #[ORM\Column(length: 255)]
    private ?string $password = null;

    #[ORM\Column(length: 255)]
    private ?string $login = null;


    #[ORM\ManyToOne(targetEntity: Role::class, inversedBy: 'users') ]
    #[ORM\JoinColumn(nullable: false)]
    private ?Role $role;

    private RoleRepository $roleRepository;

    // #[ORM\OneToMany(targetEntity: Operation::class, mappedBy: 'user')]
    // private Collection $operations;

    // public function __construct()
    // {
    //     $this->operations = new ArrayCollection();
    // }

    
    // public function __construct(RoleRepository $roleRepository)
    // {
    //     // parent::__construct();
    //     $this->roleRepository = $roleRepository;
    // }



    // public function build(array $fields)
    // {

    //     foreach ($fields as $key => $value) {
    //         switch ($key) {
    //             case "name":
    //                 $this->setName($value);
    //                 break;
    //             case "lastname":
    //                 $this->setLastname($value);
    //                 break;
    //             case "mail":
    //                 $this->setMail($value);
    //                 break;
    //             case "birthday":
    //                 $this->setBirthday($value);
    //                 break;
    //             case "password":
    //                 $this->setPassword($value);
    //                 break;
    //             case "login":
    //                 $this->setLogin($value);
    //                 break;
    //             case "role":
    //                 $role = $this->roleRepository->find($value['id']);
    //                 $this->setRole($role);
    //                 break;
    //         }
    //     }

    //     return $this;
    // }









    public function getRole(): ?Role
    {
        return $this->role;
    }


    public function setRole(?Role $role): self
    {
        $this->role = $role;
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

    public function getBirthday(): ?\DateTimeInterface
    {
        return $this->birthday;
    }

    public function setBirthday(\DateTimeInterface $birthday): static
    {
        $this->birthday = $birthday;

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

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    public function getLogin(): ?string
    {
        return $this->login;
    }

    public function setLogin(string $login): static
    {
        $this->login = $login;

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
    //         $operation->setUser($this);
    //     }

    //     return $this;
    // }

    // public function removeOperation(Operation $operation): static
    // {
    //     if ($this->operations->removeElement($operation)) {
    //         // set the owning side to null (unless already changed)
    //         if ($operation->getUser() === $this) {
    //             $operation->setUser(null);
    //         }
    //     }

    //     return $this;
    // }
}
