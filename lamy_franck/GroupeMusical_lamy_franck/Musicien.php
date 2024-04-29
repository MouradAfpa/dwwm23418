<?php
// Musicien.php

abstract class Musicien {
        private string $name;
        private string $firstName;
        private int $age;

        public function __construct(string $name, string $firstName, int $age){
            $this->name = $name;
            $this->firstName = $firstName;
            $this->age = $age;

        }
        

        public function getName(): string {
            return $this->name;
        }
        public function setName(string $name): void{
            $this->name = $name;
        }

        public function getFirstName(): string {
            return $this->firstName;
        }

        public function setFirstName(string $firstName): void {
            $this->firstName = $firstName;
        }

        public function getAge(): int {
            return $this->age;
        }

        public function setAge(int $age): void {
            $this->age = $age;
        }

        public function __toString()
        {
            return "Nom : " . $this->name . "<br>" . "Prénom : " . $this->firstName . "<br>" . "Age : " . $this->age;
        }

}








?>