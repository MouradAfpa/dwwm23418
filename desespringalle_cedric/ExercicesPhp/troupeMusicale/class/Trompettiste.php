<?php

class Trompettiste extends Musicien implements IInstrumentVent
{
    public function jouerUnInstrument(): string
    {
        return "Joue de la trompette";
    }

    public function jouerVent()
    {
        return "Joue un instrument à vent";
    }
}
