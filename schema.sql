DROP DATABASE IF EXISTS QA;

CREATE DATABASE QA;

USE QA;

-- ---
-- Table 'Answers'
--
-- ---

DROP TABLE IF EXISTS `Answers`;

CREATE TABLE `Answers` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `body` VARCHAR(1000) NOT NULL DEFAULT 'NULL',
  `timestamp` DATETIME NULL DEFAULT NULL,
  `id_Groups` INTEGER NULL DEFAULT NULL,
  `person_id` VARCHAR(20) NOT NULL DEFAULT 'NULL',
  `email` VARCHAR(30) NOT NULL DEFAULT NULL,
  `helpfulness` INTEGER NULL DEFAULT NULL,
  `reported` TINYINT NULL DEFAULT NULL,
  `imageUrls` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Groups'
--
-- ---

DROP TABLE IF EXISTS `Groups`;

CREATE TABLE `Groups` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_Questions` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Questions'
--
-- ---

DROP TABLE IF EXISTS `Questions`;

CREATE TABLE `Questions` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `asker_id` VARCHAR(20) NULL DEFAULT NULL,
  `body` VARCHAR(200) NULL DEFAULT NULL,
  `timestamp` DATETIME NULL DEFAULT NULL,
  `reported` TINYINT NULL DEFAULT NULL,
  `helpfulness` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `Answers` ADD FOREIGN KEY (id_Groups) REFERENCES `Groups` (`id`);
ALTER TABLE `Groups` ADD FOREIGN KEY (id_Questions) REFERENCES `Questions` (`id`);

-- ---
-- Test Data
-- ---

-- INSERT INTO `Answers` (`id`,`body`,`timestamp`,`id_Groups`,`person_id`,`email`,`helpfulness`,`reported`,`imageUrls`) VALUES
-- ('','','','','','','','','');
-- INSERT INTO `Groups` (`id`,`id_Questions`) VALUES
-- ('','');
-- INSERT INTO `Questions` (`id`,`asker_id`,`body`,`timestamp`,`reported`,`helpfulness`) VALUES
-- ('','','','','','');