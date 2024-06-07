<?php

// src/OptionsResolver/OperationOptionsResolver .php

namespace App\OptionsResolver;

use phpDocumentor\Reflection\Types\Boolean;
use Symfony\Component\OptionsResolver\OptionsResolver;

class OperationOptionsResolver extends OptionsResolver
{


    public function common(mixed $value, ?bool $requiredAll = null): self
    {
        $this->configureTitle(null !== $requiredAll  ? $requiredAll : true)
            ->configureDescription(null !== $requiredAll  ? $requiredAll : false)
            ->configureStartDate(null !== $requiredAll  ? $requiredAll : true, $value)
            ->configureEndDate(null !== $requiredAll  ? $requiredAll : true, $value)
            ->configureState(null !== $requiredAll  ? $requiredAll : true)
            ->configureOperationType(null !== $requiredAll  ? $requiredAll : true)
            ->configureAddress(null !== $requiredAll  ? $requiredAll : true)
            ->configureCustomer(null !== $requiredAll  ? $requiredAll : true)
            ->configureUser(null !== $requiredAll  ? $requiredAll : true);

        return $this;
    }



    public function configureTitle(bool $isRequired = true): self
    {
        $this->setDefined("title")->setAllowedTypes("title", "string");

        if ($isRequired) {
            $this->setRequired("title");
        }

        return $this;
    }
    public function configureDescription(bool $isRequired = true): self
    {
        $this->setDefined("description")->setAllowedTypes("description", "string");

        if ($isRequired) {
            $this->setRequired("description");
        }

        return $this;
    }
    public function configureStartDate(bool $isRequired = true, mixed $value): self
    {


        try {

            if (isset($value['startDate'])) {
                throw new \InvalidArgumentException("Invalid date format");

                $startDateObject = new \DateTime($value['startDate']);
            }
        } catch (\Exception $e) {
            // Gérez l'erreur si la date n'est pas valide
            $date = $value['startDate'];
            throw new \InvalidArgumentException("Invalid date format: $date");
        }

        $this->setDefined("startDate")->setAllowedTypes("startDate", "string");

        if ($isRequired) {
            $this->setRequired("startDate");
        }

        return $this;
    }
    public function configureEndDate(bool $isRequired = true, mixed $value): self
    {

        try {
            if (isset($value['endDate'])) {

                $endDateObject = new \DateTime($value['endDate']);
            }
        } catch (\Exception $e) {
            // Gérez l'erreur si la date n'est pas valide
            $date = $value['endDate'];
            throw new \InvalidArgumentException("Invalid date format: $date");
        }

        $this->setDefined("endDate")->setAllowedTypes("endDate", "string");

        if ($isRequired) {
            $this->setRequired("endDate");
        }

        return $this;
    }
    public function configureState(bool $isRequired = true): self
    {
        $this->setDefined("state")->setAllowedTypes("state", "int");

        if ($isRequired) {
            $this->setRequired("state");
        }

        return $this;
    }
    public function configureOperationType(bool $isRequired = true): self
    {
        $this->setDefined("operationType")->setAllowedTypes("operationType", "array");

        if ($isRequired) {
            $this->setRequired("operationType");
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
    public function configureCustomer(bool $isRequired = true): self
    {
        $this->setDefined("customer")->setAllowedTypes("customer", "array");

        if ($isRequired) {
            $this->setRequired("customer");
        }

        return $this;
    }
    public function configureUser(bool $isRequired = true): self
    {
        $this->setDefined("user")->setAllowedTypes("user", "array");

        if ($isRequired) {
            $this->setRequired("user");
        }

        return $this;
    }
}
