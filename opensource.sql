/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 80014
Source Host           : localhost:3306
Source Database       : state

Target Server Type    : MYSQL
Target Server Version : 80014
File Encoding         : 65001

Date: 2019-08-22 22:40:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `accounts`
-- ----------------------------
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `socialClub` varchar(255) DEFAULT NULL,
  `hardwareID` varchar(255) NOT NULL DEFAULT 'none',
  `devServer` int(11) NOT NULL DEFAULT '0',
  `teamStatus` int(11) NOT NULL DEFAULT '0',
  `banned` int(11) NOT NULL DEFAULT '0',
  `bannedDay` varchar(255) NOT NULL DEFAULT 'none',
  `whitelisted` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of accounts
-- ----------------------------

-- ----------------------------
-- Table structure for `atms`
-- ----------------------------
DROP TABLE IF EXISTS `atms`;
CREATE TABLE `atms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `posX` int(255) DEFAULT NULL,
  `posY` int(255) DEFAULT NULL,
  `posZ` int(255) DEFAULT NULL,
  `money` int(11) DEFAULT NULL,
  `usable` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of atms
-- ----------------------------
INSERT INTO `atms` VALUES ('1', '147', '-1035', '29', '5000', '0');

-- ----------------------------
-- Table structure for `bank_konten`
-- ----------------------------
DROP TABLE IF EXISTS `bank_konten`;
CREATE TABLE `bank_konten` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ownerId` int(11) DEFAULT '0',
  `amount` decimal(38,2) DEFAULT '0.00',
  `kontonummer` varchar(50) DEFAULT NULL,
  `beschreibung` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bank_konten
-- ----------------------------
INSERT INTO `bank_konten` VALUES ('1', '2', '7242.00', '14654565', 'Anna Klein');
INSERT INTO `bank_konten` VALUES ('2', '10', '5000.00', '465465465', 'Marcel Maj');

-- ----------------------------
-- Table structure for `blips`
-- ----------------------------
DROP TABLE IF EXISTS `blips`;
CREATE TABLE `blips` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `posX` float NOT NULL DEFAULT '0',
  `posY` float NOT NULL DEFAULT '0',
  `name` varchar(50) NOT NULL DEFAULT '0',
  `color` int(11) NOT NULL DEFAULT '0',
  `blipid` int(11) NOT NULL DEFAULT '0',
  `scale` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of blips
-- ----------------------------
INSERT INTO `blips` VALUES ('1', '-85.276', '38.127', 'License Shop', '1', '1', '1');
INSERT INTO `blips` VALUES ('2', '2727', '2857', 'Stone Mine', '1', '464', '1');
INSERT INTO `blips` VALUES ('3', '2391', '3308', 'Stone Proccessor', '1', '365', '1');
INSERT INTO `blips` VALUES ('4', '2341', '3126', 'Cement Selling', '1', '628', '1');

-- ----------------------------
-- Table structure for `carshops`
-- ----------------------------
DROP TABLE IF EXISTS `carshops`;
CREATE TABLE `carshops` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `posX` float NOT NULL,
  `posY` float NOT NULL,
  `posZ` float NOT NULL,
  `posR` float NOT NULL,
  `ped` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `spawnX` float NOT NULL,
  `spawnY` float NOT NULL,
  `spawnZ` float NOT NULL,
  `spawnR` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of carshops
-- ----------------------------
INSERT INTO `carshops` VALUES ('1', 'Sandy Supercars', '2364.49', '3136.95', '48.211', '261', '0x89768941', 'Super', '2368.57', '3128.28', '48.37', '227');

-- ----------------------------
-- Table structure for `carshop_cars`
-- ----------------------------
DROP TABLE IF EXISTS `carshop_cars`;
CREATE TABLE `carshop_cars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(50) NOT NULL DEFAULT '0',
  `price` float NOT NULL DEFAULT '0',
  `type` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of carshop_cars
-- ----------------------------
INSERT INTO `carshop_cars` VALUES ('1', 't20', '8645', 'Super');
INSERT INTO `carshop_cars` VALUES ('2', 'xa21', '25468', 'Super');

-- ----------------------------
-- Table structure for `characters`
-- ----------------------------
DROP TABLE IF EXISTS `characters`;
CREATE TABLE `characters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accountID` int(11) DEFAULT '0',
  `ped` int(11) DEFAULT '0',
  `pedHash` varchar(50) DEFAULT '0',
  `created` int(11) DEFAULT '0',
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `posX` float DEFAULT '-1038.79',
  `posY` float DEFAULT '-2740.24',
  `posZ` float DEFAULT '13.858',
  `posR` float DEFAULT '314',
  `dimension` int(11) DEFAULT '0',
  `health` float DEFAULT '100',
  `armor` float DEFAULT '0',
  `food` float DEFAULT '100',
  `drink` float DEFAULT '100',
  `adminRank` int(11) DEFAULT '0',
  `faction` varchar(1255) DEFAULT 'Civillian',
  `factioncloth` varchar(1255) DEFAULT 'Zivil',
  `duty` int(11) DEFAULT '0',
  `onlineId` int(11) DEFAULT '0',
  `isOnline` int(11) DEFAULT '0',
  `factionrang` int(11) DEFAULT '0',
  `money` float DEFAULT '500',
  `phone` int(11) DEFAULT '0',
  `phoneNumber` int(11) DEFAULT '0',
  `data` varchar(555) DEFAULT '0',
  `hat` int(11) DEFAULT '0',
  `hattext` int(11) DEFAULT '0',
  `eye` int(11) DEFAULT '0',
  `eyetext` int(11) DEFAULT '0',
  `mask` int(11) DEFAULT '0',
  `masktext` int(11) DEFAULT '0',
  `shirt` int(11) DEFAULT '0',
  `shirttext` int(11) DEFAULT '0',
  `jacket` int(11) DEFAULT '0',
  `jackettext` int(11) DEFAULT '0',
  `body` int(11) DEFAULT '0',
  `bodytext` int(11) DEFAULT '0',
  `torso` int(11) DEFAULT '0',
  `leg` int(11) DEFAULT '0',
  `legtext` int(11) DEFAULT '0',
  `shoe` int(11) DEFAULT '0',
  `shoetext` int(11) DEFAULT '0',
  `earpice` int(11) DEFAULT '0',
  `accessoire` int(11) DEFAULT '0',
  `arm` int(11) DEFAULT '0',
  `bday` varchar(50) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of characters
-- ----------------------------

-- ----------------------------
-- Table structure for `faction`
-- ----------------------------
DROP TABLE IF EXISTS `faction`;
CREATE TABLE `faction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `dutyX` int(11) DEFAULT NULL,
  `dutyY` int(11) DEFAULT NULL,
  `dutyZ` int(11) DEFAULT NULL,
  `clothesX` int(11) DEFAULT NULL,
  `clothesY` int(11) DEFAULT NULL,
  `clothesZ` int(11) DEFAULT NULL,
  `equipX` int(11) DEFAULT NULL,
  `equipY` int(11) DEFAULT NULL,
  `equipZ` int(11) DEFAULT NULL,
  `pcX` int(11) DEFAULT NULL,
  `pcY` int(11) DEFAULT NULL,
  `pcZ` int(11) DEFAULT NULL,
  `chiefX` int(11) DEFAULT NULL,
  `chiefY` int(11) DEFAULT NULL,
  `chiefZ` int(11) DEFAULT NULL,
  `vehicleX` int(11) DEFAULT NULL,
  `vehicleY` int(11) DEFAULT NULL,
  `vehicleZ` int(11) DEFAULT NULL,
  `parkX` int(11) DEFAULT NULL,
  `parkY` int(11) DEFAULT NULL,
  `parkZ` int(11) DEFAULT NULL,
  `ausnahme` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of faction
-- ----------------------------
INSERT INTO `faction` VALUES ('1', 'LSPD', '440', '-976', '31', '458', '-993', '31', '452', '-980', '31', '442', '-979', '31', '448', '-973', '31', '441', '-1000', '31', '452', '-997', '26', '0');

-- ----------------------------
-- Table structure for `farming`
-- ----------------------------
DROP TABLE IF EXISTS `farming`;
CREATE TABLE `farming` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `farmX` float NOT NULL DEFAULT '0',
  `farmY` float NOT NULL DEFAULT '0',
  `farmZ` float NOT NULL DEFAULT '0',
  `farmItem` int(11) NOT NULL DEFAULT '0',
  `processorsX` float NOT NULL DEFAULT '0',
  `processorsY` float NOT NULL DEFAULT '0',
  `processorsZ` float NOT NULL DEFAULT '0',
  `processorsR` float NOT NULL DEFAULT '0',
  `processorsPed` varchar(50) NOT NULL DEFAULT '0',
  `processorsneedItem` int(11) NOT NULL DEFAULT '0',
  `processorsgiveItem` int(11) NOT NULL DEFAULT '0',
  `sellX` float NOT NULL DEFAULT '0',
  `sellY` float NOT NULL DEFAULT '0',
  `sellZ` float NOT NULL DEFAULT '0',
  `sellR` float NOT NULL DEFAULT '0',
  `sellPed` varchar(50) NOT NULL DEFAULT '0',
  `sellneedItem` int(11) NOT NULL DEFAULT '0',
  `sellPrice` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of farming
-- ----------------------------
INSERT INTO `farming` VALUES ('1', '2727.06', '2856.93', '37.955', '5', '2391.01', '3308.19', '47.64', '141', '0x4BA14CCA', '5', '6', '2341.03', '3126.44', '48.208', '342', '0x95EF18E3', '6', '80');

-- ----------------------------
-- Table structure for `garage`
-- ----------------------------
DROP TABLE IF EXISTS `garage`;
CREATE TABLE `garage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `pedx` int(11) DEFAULT NULL,
  `pedy` int(11) DEFAULT NULL,
  `pedz` int(11) DEFAULT NULL,
  `pedr` int(11) DEFAULT NULL,
  `spawn1x` int(11) DEFAULT NULL,
  `spawn1y` int(11) DEFAULT NULL,
  `spawn1z` int(11) DEFAULT NULL,
  `spawn1r` int(11) DEFAULT NULL,
  `spawn2x` int(11) DEFAULT NULL,
  `spawn2y` int(11) DEFAULT NULL,
  `spawn2z` int(11) DEFAULT NULL,
  `spawn2r` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of garage
-- ----------------------------
INSERT INTO `garage` VALUES ('1', 'test', '162', '-1037', '29', '266', '165', '-1037', '29', '288', '168', '-1028', '29', '341');
INSERT INTO `garage` VALUES ('2', null, '170', '-1039', '29', '254', null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for `housing`
-- ----------------------------
DROP TABLE IF EXISTS `housing`;
CREATE TABLE `housing` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `outX` float NOT NULL DEFAULT '0',
  `outY` float NOT NULL DEFAULT '0',
  `outZ` float NOT NULL DEFAULT '0',
  `inX` float NOT NULL DEFAULT '0',
  `inY` float NOT NULL DEFAULT '0',
  `inZ` float NOT NULL DEFAULT '0',
  `price` float NOT NULL DEFAULT '0',
  `sellprice` float NOT NULL DEFAULT '0',
  `maxBuy` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of housing
-- ----------------------------
INSERT INTO `housing` VALUES ('1', '228.426', '765.894', '204.78', '-1288', '440.748', '97.6946', '5000', '4500', '1');

-- ----------------------------
-- Table structure for `items`
-- ----------------------------
DROP TABLE IF EXISTS `items`;
CREATE TABLE `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `itemName` varchar(50) NOT NULL DEFAULT '0',
  `usable` varchar(50) NOT NULL DEFAULT '0',
  `type` varchar(50) NOT NULL DEFAULT '0',
  `fillvalue` int(11) NOT NULL DEFAULT '0',
  `itemcount` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of items
-- ----------------------------
INSERT INTO `items` VALUES ('1', 'Wasser', 'Y', 'drink', '50', '1');
INSERT INTO `items` VALUES ('2', 'Belegtes Brötchen', 'Y', 'food', '50', '1');
INSERT INTO `items` VALUES ('3', 'Tasche', 'Y', 'bag', '0', '1');
INSERT INTO `items` VALUES ('4', 'Tasche ausgepackt', 'Y', 'bag', '0', '1');
INSERT INTO `items` VALUES ('5', 'Stone', 'N', 'farmin', '0', '1');
INSERT INTO `items` VALUES ('6', 'Cement', 'N', 'farming', '0', '1');

-- ----------------------------
-- Table structure for `licenses`
-- ----------------------------
DROP TABLE IF EXISTS `licenses`;
CREATE TABLE `licenses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charId` int(11) NOT NULL DEFAULT '0',
  `weapona` int(11) NOT NULL DEFAULT '0',
  `weaponb` int(11) NOT NULL DEFAULT '0',
  `pkw` int(11) NOT NULL DEFAULT '0',
  `lkw` int(11) NOT NULL DEFAULT '0',
  `pilot` int(11) NOT NULL DEFAULT '0',
  `job` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of licenses
-- ----------------------------
INSERT INTO `licenses` VALUES ('4', '2', '1', '1', '1', '1', '1', '1');
INSERT INTO `licenses` VALUES ('5', '3', '0', '0', '0', '0', '0', '0');
INSERT INTO `licenses` VALUES ('6', '8', '0', '0', '0', '0', '0', '0');
INSERT INTO `licenses` VALUES ('7', '9', '0', '0', '0', '0', '0', '0');
INSERT INTO `licenses` VALUES ('8', '9', '0', '0', '0', '0', '0', '0');
INSERT INTO `licenses` VALUES ('9', '10', '1', '1', '1', '1', '1', '1');
INSERT INTO `licenses` VALUES ('10', '13', '1', '1', '1', '1', '1', '1');
INSERT INTO `licenses` VALUES ('11', '14', '0', '0', '0', '0', '0', '0');
INSERT INTO `licenses` VALUES ('12', '16', '1', '1', '1', '1', '1', '1');
INSERT INTO `licenses` VALUES ('13', '11', '0', '0', '0', '0', '0', '0');

-- ----------------------------
-- Table structure for `shops`
-- ----------------------------
DROP TABLE IF EXISTS `shops`;
CREATE TABLE `shops` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) NOT NULL DEFAULT '0',
  `posX` float NOT NULL DEFAULT '0',
  `posY` float NOT NULL DEFAULT '0',
  `posZ` float NOT NULL DEFAULT '0',
  `posR` float NOT NULL DEFAULT '0',
  `ped` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of shops
-- ----------------------------
INSERT INTO `shops` VALUES ('1', '0', '24.47', '-1346.1', '29.497', '269.4', '0xB2273D4E');
INSERT INTO `shops` VALUES ('3', '0', '24.98', '-1343', '29', '244', '0x040EABE3');

-- ----------------------------
-- Table structure for `shop_items`
-- ----------------------------
DROP TABLE IF EXISTS `shop_items`;
CREATE TABLE `shop_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `itemId` int(11) NOT NULL DEFAULT '0',
  `price` int(11) NOT NULL DEFAULT '0',
  `shopId` int(11) NOT NULL DEFAULT '0',
  `name` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of shop_items
-- ----------------------------
INSERT INTO `shop_items` VALUES ('1', '1', '25', '1', 'Wasser');
INSERT INTO `shop_items` VALUES ('2', '2', '25', '1', 'Belegtes Brötchen');

-- ----------------------------
-- Table structure for `shortcuts`
-- ----------------------------
DROP TABLE IF EXISTS `shortcuts`;
CREATE TABLE `shortcuts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charId` int(11) DEFAULT NULL,
  `num1animA` varchar(255) DEFAULT NULL,
  `num1animB` varchar(255) DEFAULT NULL,
  `num1animC` int(11) DEFAULT NULL,
  `num1animD` int(11) DEFAULT NULL,
  `num1name` varchar(255) DEFAULT 'Nicht Belegt',
  `num2animA` varchar(255) DEFAULT NULL,
  `num2animB` varchar(255) DEFAULT NULL,
  `num2animC` int(11) DEFAULT NULL,
  `num2animD` int(11) DEFAULT NULL,
  `num2name` varchar(255) DEFAULT 'Nicht Belegt',
  `num3animA` varchar(255) DEFAULT NULL,
  `num3animB` varchar(255) DEFAULT NULL,
  `num3animC` int(11) DEFAULT NULL,
  `num3animD` int(11) DEFAULT NULL,
  `num3name` varchar(255) DEFAULT 'Nicht Belegt',
  `num4animA` varchar(255) DEFAULT 'Nicht Belegt',
  `num4animB` varchar(255) DEFAULT 'Nicht Belegt',
  `num4animC` int(11) DEFAULT NULL,
  `num4animD` int(11) DEFAULT NULL,
  `num4name` varchar(255) DEFAULT 'Nicht Belegt',
  `num5animA` varchar(255) DEFAULT NULL,
  `num5animB` varchar(255) DEFAULT NULL,
  `num5animC` int(11) DEFAULT NULL,
  `num5animD` int(11) DEFAULT NULL,
  `num5name` varchar(255) DEFAULT 'Nicht Belegt',
  `num6animA` varchar(255) DEFAULT NULL,
  `num6animB` varchar(255) DEFAULT NULL,
  `num6animC` int(11) DEFAULT NULL,
  `num6animD` int(11) DEFAULT NULL,
  `num6name` varchar(255) DEFAULT 'Nicht Belegt',
  `num7animA` varchar(255) DEFAULT NULL,
  `num7animB` varchar(255) DEFAULT NULL,
  `num7animC` int(11) DEFAULT NULL,
  `num7animD` int(11) DEFAULT NULL,
  `num7name` varchar(255) DEFAULT 'Nicht Belegt',
  `num8animA` varchar(255) DEFAULT NULL,
  `num8animB` varchar(255) DEFAULT NULL,
  `num8animC` int(11) DEFAULT NULL,
  `num8animD` int(11) DEFAULT NULL,
  `num8name` varchar(255) DEFAULT 'Nicht Belegt',
  `num9animA` varchar(255) DEFAULT NULL,
  `num9animB` varchar(255) DEFAULT NULL,
  `num9animC` int(11) DEFAULT NULL,
  `num9animD` int(11) DEFAULT NULL,
  `num9name` varchar(255) DEFAULT 'Nicht Belegt',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shortcuts
-- ----------------------------
INSERT INTO `shortcuts` VALUES ('1', '2', '\"amb@world_human_sunbathe@male@back@base\"', '\"base\"', '1', '35', 'Auf dem Rücken liegen', '\"timetable@amanda@drunk@idle_a\"', '\"idle_pinot\"', '1', '33', 'Betrunken liegen', '\"amb@world_human_yoga@female@base\"', '\"base_c\"', '1', '33', 'Yoga 5', '\"anim@heists@fleeca_bank@ig_7_jetski_owner\"', '\"owner_idle\"', '1', '33', 'Sitzen (Männl.)', '\"anim@mp_player_intupperwave\"', '\"idle_a\"', '1', '49', 'Winken', '\"anim@mp_player_intcelebrationmale@freakout\"', '\"freakout\"', '1', '49', 'Ausrasten', '\"anim@mp_player_intupperwave\"', '\"idle_a\"', '1', '49', 'Winken', '\"anim@mp_player_intupperwave\"', '\"idle_a\"', '1', '49', 'Nicht Belegt', '\"amb@world_human_sunbathe@male@back@base\"', '\"base\"', '1', '35', 'Auf dem Rücken liegen');
INSERT INTO `shortcuts` VALUES ('5', '3', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'Nicht Belegt', 'Nicht Belegt', null, null, null, null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt');
INSERT INTO `shortcuts` VALUES ('6', '8', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', 'Nicht Belegt', 'Nicht Belegt', null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt');
INSERT INTO `shortcuts` VALUES ('7', '9', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', 'Nicht Belegt', 'Nicht Belegt', null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt');
INSERT INTO `shortcuts` VALUES ('8', '9', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', 'Nicht Belegt', 'Nicht Belegt', null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt');
INSERT INTO `shortcuts` VALUES ('9', '10', '\"mini@strip_club@idles@bouncer@idle_a\"', '\"idle_a\"', '1', '49', 'Security', '\"amb@world_human_leaning@male@wall@back@foot_up@base\"', '\"base\"', '1', '35', 'Anlehnen', '\"anim@heists@fleeca_bank@ig_7_jetski_owner\"', '\"owner_idle\"', '1', '33', 'Sitzen (Männl.)', '\"missheist_jewel\"', '\"manageress_kneel_loop\"', '1', '33', 'Auf die Knie', '\"missbigscore1switch_trevor_piss\"', '\"piss_loop\"', '1', '33', 'Pinkeln', '\"oddjobs@assassinate@multi@yachttarget@lapdance\"', '\"yacht_ld_f\"', '1', '33', 'Strip 1', '\"switch@trevor@mocks_lapdance\"', '\"001443_01_trvs_28_exit_stripper\"', '1', '33', 'Po wackeln 2', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt');
INSERT INTO `shortcuts` VALUES ('10', '13', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', 'Nicht Belegt', 'Nicht Belegt', null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt');
INSERT INTO `shortcuts` VALUES ('11', '14', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', 'Nicht Belegt', 'Nicht Belegt', null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt');
INSERT INTO `shortcuts` VALUES ('12', '16', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', 'Nicht Belegt', 'Nicht Belegt', null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt');
INSERT INTO `shortcuts` VALUES ('13', '11', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', 'Nicht Belegt', 'Nicht Belegt', null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt', null, null, null, null, 'Nicht Belegt');

-- ----------------------------
-- Table structure for `teleporter`
-- ----------------------------
DROP TABLE IF EXISTS `teleporter`;
CREATE TABLE `teleporter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pos1X` float NOT NULL DEFAULT '0',
  `pos1Y` float NOT NULL DEFAULT '0',
  `pos1Z` float NOT NULL DEFAULT '0',
  `pos1D` int(11) NOT NULL DEFAULT '0',
  `pos2X` float NOT NULL DEFAULT '0',
  `pos2Y` float NOT NULL DEFAULT '0',
  `pos2Z` float NOT NULL DEFAULT '0',
  `pos2D` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of teleporter
-- ----------------------------
INSERT INTO `teleporter` VALUES ('1', '219.641', '781.863', '204.674', '0', '219', '772', '204', '0');

-- ----------------------------
-- Table structure for `user_houses`
-- ----------------------------
DROP TABLE IF EXISTS `user_houses`;
CREATE TABLE `user_houses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `houseId` int(11) NOT NULL DEFAULT '0',
  `charId` int(11) NOT NULL DEFAULT '0',
  `dimension` int(11) NOT NULL DEFAULT '0',
  `locked` int(11) NOT NULL DEFAULT '0',
  `pin` int(11) DEFAULT NULL,
  `sign` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_houses
-- ----------------------------
INSERT INTO `user_houses` VALUES ('17', '1', '2', '0', '0', null, 'Anna Klein');

-- ----------------------------
-- Table structure for `user_items`
-- ----------------------------
DROP TABLE IF EXISTS `user_items`;
CREATE TABLE `user_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charId` int(11) NOT NULL DEFAULT '0',
  `itemId` int(11) NOT NULL DEFAULT '0',
  `amount` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_items
-- ----------------------------
INSERT INTO `user_items` VALUES ('11', '2', '1', '8');
INSERT INTO `user_items` VALUES ('12', '2', '2', '8');
INSERT INTO `user_items` VALUES ('13', '14', '1', '1');
INSERT INTO `user_items` VALUES ('25', '10', '6', '3');

-- ----------------------------
-- Table structure for `vehiclekeys`
-- ----------------------------
DROP TABLE IF EXISTS `vehiclekeys`;
CREATE TABLE `vehiclekeys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `keyOwner` int(11) DEFAULT NULL,
  `vehID` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `isActive` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of vehiclekeys
-- ----------------------------
INSERT INTO `vehiclekeys` VALUES ('1', '2', '1', '2', 'Y');
INSERT INTO `vehiclekeys` VALUES ('2', '14', '1', '1', 'Y');

-- ----------------------------
-- Table structure for `vehicles`
-- ----------------------------
DROP TABLE IF EXISTS `vehicles`;
CREATE TABLE `vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(50) DEFAULT NULL,
  `charId` int(11) DEFAULT NULL,
  `numberPlate` varchar(50) DEFAULT 'NOLIC',
  `parked` int(11) DEFAULT '1',
  `impounded` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of vehicles
-- ----------------------------
INSERT INTO `vehicles` VALUES ('1', 'raiden', '2', 'Gurke', '1', '0');
INSERT INTO `vehicles` VALUES ('2', 'Raiden', '2', 'Gurke', '1', '0');
INSERT INTO `vehicles` VALUES ('3', 'Raiden', '2', 'Gurke', '1', '0');
INSERT INTO `vehicles` VALUES ('4', 'Raiden', '2', 'Gurke', '1', '0');
INSERT INTO `vehicles` VALUES ('5', 'Raiden', '2', 'Gurke', '1', '0');
INSERT INTO `vehicles` VALUES ('6', 'T20', '2', 'NOLIC', '1', '0');
INSERT INTO `vehicles` VALUES ('7', 't20', '2', 'NOLIC', '1', '0');
INSERT INTO `vehicles` VALUES ('8', 'xa21', '2', 'NOLIC', '1', '0');
INSERT INTO `vehicles` VALUES ('9', 'xa21', '2', 'NOLIC', '1', '0');
INSERT INTO `vehicles` VALUES ('10', 't20', '2', 'NOLIC', '1', '0');
INSERT INTO `vehicles` VALUES ('11', 't20', '2', 'NOLIC', '1', '0');
INSERT INTO `vehicles` VALUES ('12', 'xa21', '2', 'NOLIC', '1', '0');
INSERT INTO `vehicles` VALUES ('13', 't20', '2', 'NOLIC', '1', '0');
