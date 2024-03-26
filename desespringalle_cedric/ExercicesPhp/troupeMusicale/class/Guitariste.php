<?php

class Guitariste extends Musicien implements IInstrumentCorde
{
    public function jouerUnInstrument(): string {
        return "Joue de la guitare";
    }

    public function jouerCorde()
    {
        return "Joue un instrument à corde";
    }
}
