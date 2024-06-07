<?php

// src/OptionsResolver/RoleOptionsResolver .php

namespace App\OptionsResolver;

use Symfony\Component\OptionsResolver\OptionsResolver;

class RoleOptionsResolver extends OptionsResolver
{
  public function configureLabel(bool $isRequired = true): self
  {
    $this->setDefined("label")->setAllowedTypes("label", "string");

    if($isRequired) {
      $this->setRequired("label");
    }

    return $this;
  }

}