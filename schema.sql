DROP DATABASE IF EXISTS QA;

CREATE DATABASE QA;

USE QA;

-- ---
-- Table 'Answers'
--
-- ---

DROP TABLE IF EXISTS `answers`;

CREATE TABLE `answers` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `body` VARCHAR(1000) NOT NULL DEFAULT 'NULL',
  `timestamp` DATETIME NULL DEFAULT NULL,
  `question_id` INTEGER NULL DEFAULT NULL,
  `user_id` VARCHAR(20) NOT NULL DEFAULT 'NULL',
  `email` VARCHAR(30) NOT NULL DEFAULT NULL,
  `helpfulness` INTEGER NULL DEFAULT NULL,
  `reported` BOOLEAN NULL DEFAULT FALSE,
  `image_id` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Answer Photos'
--
-- ---

CREATE TABLE 'answers_photos';
'id' INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
'answer_id' VARCHAR NULL DEFAULT NULL
'image_url' VARCHAR NULL DEFAULT NULL

-- ---
-- Table 'Questions'
--
-- ---

DROP TABLE IF EXISTS `questions`;

CREATE TABLE `questions` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `user_id` VARCHAR(20) NULL DEFAULT NULL,
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