SET
  SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET
  time_zone = "+00:00";
--
  -- Database: `demo_homecontrol`
  --
  DROP DATABASE IF EXISTS demo_homecontrol;
CREATE DATABASE IF NOT EXISTS `demo_homecontrol` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `demo_homecontrol`;
--
  -- Table structure for table `lampen`
  --
  DROP TABLE IF EXISTS `lampen`;
CREATE TABLE `lampen` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `omschrijving` VARCHAR(45) DEFAULT NULL,
    `status` TINYINT DEFAULT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = INNODB AUTO_INCREMENT = 4 DEFAULT CHARSET = UTF8;
--
  -- Dumping data for table `lampen`
  --
  LOCK TABLES `lampen` WRITE;
INSERT INTO
  `lampen`
VALUES
  (1, 'slaapkamer', 0),(2, 'keuken', 0),(3, 'TV-kamer', 0);
UNLOCK TABLES;