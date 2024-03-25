<?php

class Trompettiste extends Musicien {
    public function __construct(string $name, string $firstName, int $age, string $instrument){

        parent::__construct($name, $firstName, $age);
        $this->instrument = $instrument;
    }




}








?>