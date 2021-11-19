DROP DATABASE IF EXISTS QA;

CREATE DATABASE QA;

USE QA;

-- SET FOREIGN_KEY_CHECKS=0;

--
-- Table 'Answers'
--

DROP TABLE IF EXISTS `answers`;

CREATE TABLE `answers` (
  `id` INTEGER AUTO_INCREMENT NOT NULL ,
  `question_id` BIGINT NULL DEFAULT NULL,
  `body` VARCHAR(1000) NULL DEFAULT NULL,
  `timestamp` BIGINT NULL DEFAULT NULL,
  `user_id` VARCHAR(20) NULL DEFAULT NULL,
  `email` VARCHAR(30) NULL DEFAULT NULL,
  `reported` TINYINT NULL DEFAULT NULL,
  `helpfulness` INTEGER NULL DEFAULT NULL,
  `image_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

--

-- Table 'Answer Photos'
--

DROP TABLE IF EXISTS `answers_photos`;

CREATE TABLE `answers_photos` (
`id` INTEGER AUTO_INCREMENT NOT NULL,
`answer_id` BIGINT NULL DEFAULT NULL,
`image_url` VARCHAR(30) NULL DEFAULT NULL,
PRIMARY KEY (`id`)
);
--
-- Table 'Questions'
--

DROP TABLE IF EXISTS `questions`;

CREATE TABLE `questions` (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `product_id`  BIGINT NULL DEFAULT NULL,
  `body` VARCHAR(200) NULL DEFAULT NULL,
  `timestamp` BIGINT NULL DEFAULT NULL,
  `user` VARCHAR(20) NULL DEFAULT NULL,
  `email` VARCHAR(30) NULL DEFAULT NULL,
  `reported` TINYINT NULL DEFAULT NULL,
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
-- ETL
-- ---

--Load answers

--  load data local infile '/home/shanghairen/Hack Reactor SFO138/data/answers.csv'
--  into table answers
--  fields terminated by ','
--  enclosed by '"'
--  lines terminated by '\n'
--  ignore 1 rows;

--Load questions
--  load data local infile '/home/shanghairen/Hack Reactor SFO138/data/questions.csv'
--  into table questions
--  fields terminated by ','
--  enclosed by '"'
--  lines terminated by '\n'
--  ignore 1 rows;

--Load answer_photos
--  load data local infile '/home/shanghairen/Hack Reactor SFO138/data/answers_photos.csv'
--  into table answers_photos
--  fields terminated by ','
--  enclosed by '"'
--  lines terminated by '\n'
--  ignore 1 rows;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Answers` (`id`,`body`,`timestamp`,`id_Groups`,`person_id`,`email`,`helpfulness`,`reported`,`imageUrls`) VALUES
-- ('','','','','','','','','');
-- INSERT INTO `Groups` (`id`,`id_Questions`) VALUES
-- ('','');
-- INSERT INTO `Questions` (`id`,`asker_id`,`body`,`timestamp`,`reported`,`helpfulness`) VALUES
-- ('','','','','','');