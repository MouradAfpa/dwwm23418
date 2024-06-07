<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240520222557 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        // $this->addSql('ALTER TABLE address DROP country');
        // $this->addSql('ALTER TABLE customer DROP FOREIGN KEY FK_81398E094B3458B');
        // $this->addSql('DROP INDEX IDX_81398E094B3458B ON customer');
        $this->addSql('ALTER TABLE customer ADD address_id INT NOT NULL, DROP address_id');
        // $this->addSql('ALTER TABLE customer ADD CONSTRAINT FK_81398E09F5B7AF75 FOREIGN KEY (address_id) REFERENCES address (id)');
        $this->addSql('CREATE INDEX IDX_81398E09F5B7AF75 ON customer (address_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE address ADD country VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE customer DROP FOREIGN KEY FK_81398E09F5B7AF75');
        $this->addSql('DROP INDEX IDX_81398E09F5B7AF75 ON customer');
        $this->addSql('ALTER TABLE customer ADD address_id INT DEFAULT NULL, DROP address_id');
        $this->addSql('ALTER TABLE customer ADD CONSTRAINT FK_81398E094B3458B FOREIGN KEY (address_id) REFERENCES address (id)');
        $this->addSql('CREATE INDEX IDX_81398E094B3458B ON customer (address_id)');
    }
}
