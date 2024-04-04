<?php


class Guitarist extends Musicien implements InstrumentCorde{

    public function __construct(string $nom, int $age)
    {
        parent::__construct($nom, $age);
    }

    public function jouerCorde(){
        return "Il joue d'un instrument a corde";
    }
}
class Trompettiste extends Musicien implements InstrumentVent{

    public function __construct($nom, $age)
    {
        parent::__construct($nom, $age);
    }

    public function jouerVent(){
        return "Il joue d'un instrument a vent";
    }
}
class Batteur extends Musicien {

    public function __construct($nom, $age)
    {
        parent::__construct($nom, $age);
    }

    public function jouerBatterie()
    {
        return "Il joue de la batterie";
    }

}
class Chanteur extends Musicien implements Voix{

    public function __construct($nom, $age)
    {
        parent::__construct($nom, $age);
    }

    public function typeVoix()
    {
        return "Il utilise sa voix";
    }
}
class Percussionniste extends Musicien{

    public function __construct($nom, $age)
    {
        parent::__construct($nom, $age);
    }

    public function jouerPercu(){
        return "Il joue de la percussion";
    }
}



?>