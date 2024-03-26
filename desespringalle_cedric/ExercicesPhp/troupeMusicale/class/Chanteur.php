<?php

class Chanteur extends Musicien implements IVoix
{
    public function jouerUnInstrument(): string
    {
        return "Ne joue pas d'un instrument";
    }

    public function chanter(): string {
        return "Chante";
    }

    public function typeVoix(): string
    {
        return "Soprano";
    }
}
