DROP DATABASE IF EXISTS QA;

CREATE DATABASE QA;

USE QA;

--
-- Table 'Answers'
--

DROP TABLE IF EXISTS `answers`;

CREATE TABLE `answers` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `body` VARCHAR(1000) NULL DEFAULT NULL,
  `timestamp` DATETIME NULL DEFAULT NULL,
  `question_id` INTEGER NULL DEFAULT NULL,
  `user_id` VARCHAR(20) NULL DEFAULT NULL,
  `email` VARCHAR(30) NULL DEFAULT NULL,
  `helpfulness` INTEGER NULL DEFAULT NULL,
  `reported` BOOLEAN NULL DEFAULT FALSE,
  `image_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

--

-- Table 'Answer Photos'
--

DROP TABLE IF EXISTS `answers_photos`;

CREATE TABLE `answers_photos` (
`id` INTEGER NOT NULL AUTO_INCREMENT,
`answer_id` INTEGER NULL DEFAULT NULL,
`image_url` VARCHAR(30) NULL DEFAULT NULL,
PRIMARY KEY (`id`)
);
--
-- Table 'Questions'
--

DROP TABLE IF EXISTS `questions`;

CREATE TABLE `questions` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `product_id`  INTEGER NULL DEFAULT NULL,
  `user` VARCHAR(20) NULL DEFAULT NULL,
  `email` VARCHAR(30) NULL DEFAULT NULL,
  `body` VARCHAR(200) NULL DEFAULT NULL,
  `timestamp` DATETIME NULL DEFAULT NULL,
  `reported` BOOLEAN NULL DEFAULT FALSE,
  `helpfulness` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `answers` ADD FOREIGN KEY (question_id) REFERENCES `questions` (`id`);
ALTER TABLE `answers` ADD FOREIGN KEY (image_id) REFERENCES `answer_photos` (`id`);
ALTER TABLE `answer_photos` ADD FOREIGN KEY (answer_id) REFERENCES `answer` (`id`);

-- ---
-- Test Data
-- ---

-- INSERT INTO `Answers` (`id`,`body`,`timestamp`,`id_Groups`,`person_id`,`email`,`helpfulness`,`reported`,`imageUrls`) VALUES
-- ('','','','','','','','','');
-- INSERT INTO `Groups` (`id`,`id_Questions`) VALUES
-- ('','');
-- INSERT INTO `Questions` (`id`,`asker_id`,`body`,`timestamp`,`reported`,`helpfulness`) VALUES
-- ('','','','','','');