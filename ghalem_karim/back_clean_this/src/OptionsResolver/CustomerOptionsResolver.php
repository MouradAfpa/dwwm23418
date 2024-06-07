<?php

// src/OptionsResolver/RoleOptionsResolver .php

namespace App\OptionsResolver;

use phpDocumentor\Reflection\Types\Boolean;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CustomerOptionsResolver extends OptionsResolver
{


    public function common(?bool $requiredAll = null): self
    {
        $this->configureName(null !== $requiredAll  ? $requiredAll : true)
            ->configureLastname(null !== $requiredAll  ? $requiredAll : true)
            ->configureMail(null !== $requiredAll  ? $requiredAll : true)
            ->configureAddress(null !== $requiredAll  ? $requiredAll : true)
            ->configureIsPro(null !== $requiredAll  ? $requiredAll : true);

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
    public function configureMail(bool $isRequired = true): self
    {
        $this->setDefined("mail")->setAllowedTypes("mail", "string");

        if ($isRequired) {
            $this->setRequired("mail");
        }

        return $this;
    }
    public function configureIsPro(bool $isRequired = true): self
    {
        $this->setDefined("isPro")->setAllowedTypes("isPro", "bool");

        if ($isRequired) {
            $this->setRequired("isPro");
        }

        return $this;
    }

    public function configureAddress(bool $isRequired = true): self
    {
        $this->setDefined("address")->setAllowedTypes("address", "array");

        if ($isRequired) {
            $this->setRequired("address");
        }

        return $this;
    }
}
