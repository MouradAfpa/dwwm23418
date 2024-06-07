<?php

// src/OptionsResolver/RoleOptionsResolver .php

namespace App\OptionsResolver;

use phpDocumentor\Reflection\Types\Boolean;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AddressOptionsResolver extends OptionsResolver
{


    public function common(?bool $requiredAll = null): self
    {
        $this->configureStreetName(null !== $requiredAll  ? $requiredAll : true)
            ->configurePostal(null !== $requiredAll  ? $requiredAll : true)
            ->configureTown(null !== $requiredAll  ? $requiredAll : true)
            ->configureCountry(null !== $requiredAll  ? $requiredAll : true);

        return $this;
    }



    public function configureStreetName(bool $isRequired = true): self
    {
        $this->setDefined("streetName")->setAllowedTypes("streetName", "string");

        if ($isRequired) {
            $this->setRequired("streetName");
        }

        return $this;
    }
    public function configurePostal(bool $isRequired = true): self
    {
        $this->setDefined("postal")->setAllowedTypes("postal", "int");

        if ($isRequired) {
            $this->setRequired("postal");
        }

        return $this;
    }
    public function configureTown(bool $isRequired = true): self
    {
        $this->setDefined("town")->setAllowedTypes("town", "string");

        if ($isRequired) {
            $this->setRequired("town");
        }

        return $this;
    }
    public function configureCountry(bool $isRequired = true): self
    {
        $this->setDefined("country")->setAllowedTypes("country", "string");

        if ($isRequired) {
            $this->setRequired("country");
        }

        return $this;
    }
}
