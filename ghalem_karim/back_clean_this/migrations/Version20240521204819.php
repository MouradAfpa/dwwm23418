<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240521204819 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE operation (id INT AUTO_INCREMENT NOT NULL, operation_type_id INT NOT NULL, address_id INT NOT NULL, customer_id INT NOT NULL, user_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, description VARCHAR(255) DEFAULT NULL, start_date DATE NOT NULL, end_date DATE NOT NULL, state INT NOT NULL, INDEX IDX_1981A66D668D0C5E (operation_type_id), INDEX IDX_1981A66DF5B7AF75 (address_id), INDEX IDX_1981A66D9395C3F3 (customer_id), INDEX IDX_1981A66DA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE operation ADD CONSTRAINT FK_1981A66D668D0C5E FOREIGN KEY (operation_type_id) REFERENCES operation_type (id)');
        $this->addSql('ALTER TABLE operation ADD CONSTRAINT FK_1981A66DF5B7AF75 FOREIGN KEY (address_id) REFERENCES address (id)');
        $this->addSql('ALTER TABLE operation ADD CONSTRAINT FK_1981A66D9395C3F3 FOREIGN KEY (customer_id) REFERENCES customer (id)');
        $this->addSql('ALTER TABLE operation ADD CONSTRAINT FK_1981A66DA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE address CHANGE country country VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE customer ADD CONSTRAINT FK_81398E09F5B7AF75 FOREIGN KEY (address_id) REFERENCES address (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE operation DROP FOREIGN KEY FK_1981A66D668D0C5E');
        $this->addSql('ALTER TABLE operation DROP FOREIGN KEY FK_1981A66DF5B7AF75');
        $this->addSql('ALTER TABLE operation DROP FOREIGN KEY FK_1981A66D9395C3F3');
        $this->addSql('ALTER TABLE operation DROP FOREIGN KEY FK_1981A66DA76ED395');
        $this->addSql('DROP TABLE operation');
        $this->addSql('ALTER TABLE address CHANGE country country VARCHAR(255) DEFAULT \'60\' NOT NULL');
        $this->addSql('ALTER TABLE customer DROP FOREIGN KEY FK_81398E09F5B7AF75');
    }
}
