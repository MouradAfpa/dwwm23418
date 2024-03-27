<?php

abstract class Musicien{
   private string $nom;
   private int $age;

public function __construct($nom, $age)
{
    $this->nom = $nom;
    $this->age = $age;
}


   public function getNom():string
   {
        return $this->nom;
   }

   public function getAge():int
   {
    return $this->age;
   }

   public function setNom(string $nom)
   {
    $this->nom = $nom;
   }

   public function setAge(int $age)
   {
    $this->age = $age;
   }

   public function __toString()
   {
    return "Nom du musicien : " . $this->nom . "<br> Age du musicien : " . $this->age;
   }
}





?>