<?php

// src/OptionsResolver/RoleOptionsResolver .php

namespace App\OptionsResolver;

use phpDocumentor\Reflection\Types\Boolean;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserOptionsResolver extends OptionsResolver
{






    public function common(?bool $requiredAll = null): self
    {
        $this->configureName(null !== $requiredAll  ? $requiredAll : true)
            ->configureBirthday(null !== $requiredAll  ? $requiredAll : false)
            ->configureRole(null !== $requiredAll  ? $requiredAll : true)
            ->configureLastname(null !== $requiredAll  ? $requiredAll : true)
            ->configureMail(null !== $requiredAll  ? $requiredAll : true)
            ->configurePassword(null !== $requiredAll  ? $requiredAll : true)
            ->configureLogin(null !== $requiredAll  ? $requiredAll : true);
        
        return $this;
    }

    // }

    public function inputResolver(?bool $requiredAll = null): self
    {

        $this->configureName(true)
            ->configureBirthday(false)
            ->configureRole(true)
            ->configureLastname(true)
            ->configureMail(true)
            ->configurePassword(true)
            ->configureLogin(true);


        return $this;
    }

    public function updateResolver(?bool $requiredAll = null): self
    {

        $this->configureName(false)
            ->configureBirthday(false)
            ->configureRole(false)
            ->configureLastname(false)
            ->configureMail(false)
            ->configurePassword(false)
            ->configureLogin(false);


        return $this;
    }


    public function configureName(bool $isRequired = true): self
    {
        $this->setDefined("name")->setAllowedTypes("name", "string");

        if ($isRequired) {
            $this->setRequired("name");
        }

        return $this;
    }
    public function configureLastname(bool $isRequired = true): self
    {
        $this->setDefined("lastname")->setAllowedTypes("lastname", "string");

        if ($isRequired) {
            $this->setRequired("lastname");
        }

        return $this;
    }
    public function configureBirthday(bool $isRequired = true): self
    {
        $this->setDefined("birthday")->setAllowedTypes("birthday", "date");

        if ($isRequired) {
            $this->setRequired("birthday");
        }

        return $this;
    }
    public function configureMail(bool $isRequired = true): self
    {
        $this->setDefined("mail")->setAllowedTypes("mail", "string");

        if ($isRequired) {
            $this->setRequired("mail");
        }

        return $this;
    }
    public function configurePassword(bool $isRequired = true): self
    {
        $this->setDefined("password")->setAllowedTypes("password", "string");

        if ($isRequired) {
            $this->setRequired("password");
        }

        return $this;
    }
    public function configureLogin(bool $isRequired = true): self
    {
        $this->setDefined("login")->setAllowedTypes("login", "string");

        if ($isRequired) {
            $this->setRequired("login");
        }

        return $this;
    }
    public function configureRole(bool $isRequired = true): self
    {
        $this->setDefined("role")->setAllowedTypes("role", "array");

        if ($isRequired) {
            $this->setRequired("role");
        }

        return $this;
    }
}
