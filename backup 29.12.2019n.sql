-- --------------------------------------------------------
-- Host:                         54.37.88.113
-- Server Version:               10.4.10-MariaDB-1:10.4.10+maria~stretch - mariadb.org binary distribution
-- Server Betriebssystem:        debian-linux-gnu
-- HeidiSQL Version:             10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Exportiere Struktur von Tabelle devserver2.accounts
CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createDate` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `socialClub` varchar(255) DEFAULT NULL,
  `hardwareID` varchar(255) NOT NULL DEFAULT 'none',
  `twitchUsername` varchar(255) DEFAULT NULL,
  `reqPwdReset` int(11) NOT NULL DEFAULT 1,
  `openNoose` int(11) NOT NULL DEFAULT 0,
  `devServer` int(11) NOT NULL DEFAULT 0,
  `teamStatus` int(11) NOT NULL DEFAULT 0,
  `whitelisted` int(11) NOT NULL DEFAULT 0,
  `banned` int(11) NOT NULL DEFAULT 0,
  `maxCharacter` int(11) NOT NULL DEFAULT 1,
  `blockLogin` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.accounts: ~0 rows (ungefähr)
DELETE FROM `accounts`;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.acp_accountNotes
CREATE TABLE IF NOT EXISTS `acp_accountNotes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accountID` int(11) DEFAULT NULL,
  `note` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.acp_accountNotes: ~0 rows (ungefähr)
DELETE FROM `acp_accountNotes`;
/*!40000 ALTER TABLE `acp_accountNotes` DISABLE KEYS */;
/*!40000 ALTER TABLE `acp_accountNotes` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.acp_logs
CREATE TABLE IF NOT EXISTS `acp_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` int(11) DEFAULT NULL,
  `ip` varchar(100) DEFAULT NULL,
  `accountName` varchar(50) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `set1` varchar(50) DEFAULT NULL,
  `set2` varchar(50) DEFAULT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle devserver2.acp_logs: ~0 rows (ungefähr)
DELETE FROM `acp_logs`;
/*!40000 ALTER TABLE `acp_logs` DISABLE KEYS */;
/*!40000 ALTER TABLE `acp_logs` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.acp_permissions
CREATE TABLE IF NOT EXISTS `acp_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accountID` int(11) DEFAULT NULL,
  `teamAddRemove` int(11) DEFAULT 0,
  `whitelistAddRemove` int(11) DEFAULT 0,
  `banUnban` int(11) DEFAULT 0,
  `maxChars` int(11) DEFAULT 0,
  `canChangePermissions` int(11) DEFAULT 0,
  `changelog` int(11) DEFAULT 0,
  `news` int(11) DEFAULT 0,
  `logssee` int(11) DEFAULT 0,
  `renameChar` int(11) DEFAULT 0,
  `note` int(11) DEFAULT 0,
  `permaDead` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.acp_permissions: ~0 rows (ungefähr)
DELETE FROM `acp_permissions`;
/*!40000 ALTER TABLE `acp_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `acp_permissions` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.acp_playerCounter
CREATE TABLE IF NOT EXISTS `acp_playerCounter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` int(11) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle devserver2.acp_playerCounter: ~0 rows (ungefähr)
DELETE FROM `acp_playerCounter`;
/*!40000 ALTER TABLE `acp_playerCounter` DISABLE KEYS */;
/*!40000 ALTER TABLE `acp_playerCounter` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.acp_whitelistRequests
CREATE TABLE IF NOT EXISTS `acp_whitelistRequests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accountID` int(11) DEFAULT NULL,
  `date` int(11) DEFAULT NULL,
  `status_date` int(11) DEFAULT NULL,
  `status_changedBy` varchar(50) DEFAULT NULL,
  `char_firstname` varchar(50) DEFAULT NULL,
  `char_lastname` varchar(50) DEFAULT NULL,
  `char_birthday` varchar(50) DEFAULT NULL,
  `char_story` text DEFAULT NULL,
  `question1` text DEFAULT NULL,
  `question2` text DEFAULT NULL,
  `question3` text DEFAULT NULL,
  `question4` text DEFAULT NULL,
  `question5` text DEFAULT NULL,
  `question6` text DEFAULT NULL,
  `question7` text DEFAULT NULL,
  `question8` text DEFAULT NULL,
  `question9` text DEFAULT NULL,
  `question10` text DEFAULT NULL,
  `question11` text DEFAULT NULL,
  `question12` text DEFAULT NULL,
  `question13` text DEFAULT NULL,
  `question14` text DEFAULT NULL,
  `question15` text DEFAULT NULL,
  `accept_serverRules` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT 0 COMMENT '0=Wartend; 1=Abgelehnt; 2=Angenommen',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle devserver2.acp_whitelistRequests: ~0 rows (ungefähr)
DELETE FROM `acp_whitelistRequests`;
/*!40000 ALTER TABLE `acp_whitelistRequests` DISABLE KEYS */;
/*!40000 ALTER TABLE `acp_whitelistRequests` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.acualitywahl
CREATE TABLE IF NOT EXISTS `acualitywahl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `open` int(11) DEFAULT 0,
  `auswertung` varchar(50) DEFAULT 'Offen',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle devserver2.acualitywahl: ~0 rows (ungefähr)
DELETE FROM `acualitywahl`;
/*!40000 ALTER TABLE `acualitywahl` DISABLE KEYS */;
/*!40000 ALTER TABLE `acualitywahl` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.adventfree
CREATE TABLE IF NOT EXISTS `adventfree` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `free` int(11) DEFAULT NULL,
  `art` varchar(50) DEFAULT NULL,
  `ding` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle devserver2.adventfree: ~0 rows (ungefähr)
DELETE FROM `adventfree`;
/*!40000 ALTER TABLE `adventfree` DISABLE KEYS */;
/*!40000 ALTER TABLE `adventfree` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.adventskalender
CREATE TABLE IF NOT EXISTS `adventskalender` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charId` int(11) NOT NULL DEFAULT 0,
  `door1` int(11) NOT NULL DEFAULT 0,
  `door2` int(11) NOT NULL DEFAULT 0,
  `door3` int(11) NOT NULL DEFAULT 0,
  `door4` int(11) NOT NULL DEFAULT 0,
  `door5` int(11) NOT NULL DEFAULT 0,
  `door6` int(11) NOT NULL DEFAULT 0,
  `door7` int(11) NOT NULL DEFAULT 0,
  `door8` int(11) NOT NULL DEFAULT 0,
  `door9` int(11) NOT NULL DEFAULT 0,
  `door10` int(11) NOT NULL DEFAULT 0,
  `door11` int(11) NOT NULL DEFAULT 0,
  `door12` int(11) NOT NULL DEFAULT 0,
  `door13` int(11) NOT NULL DEFAULT 0,
  `door14` int(11) NOT NULL DEFAULT 0,
  `door15` int(11) NOT NULL DEFAULT 0,
  `door16` int(11) NOT NULL DEFAULT 0,
  `door17` int(11) NOT NULL DEFAULT 0,
  `door18` int(11) NOT NULL DEFAULT 0,
  `door19` int(11) NOT NULL DEFAULT 0,
  `door20` int(11) NOT NULL DEFAULT 0,
  `door21` int(11) NOT NULL DEFAULT 0,
  `door22` int(11) NOT NULL DEFAULT 0,
  `door23` int(11) NOT NULL DEFAULT 0,
  `door24` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle devserver2.adventskalender: ~0 rows (ungefähr)
DELETE FROM `adventskalender`;
/*!40000 ALTER TABLE `adventskalender` DISABLE KEYS */;
/*!40000 ALTER TABLE `adventskalender` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.atms
CREATE TABLE IF NOT EXISTS `atms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `posX` int(255) DEFAULT NULL,
  `posY` int(255) DEFAULT NULL,
  `posZ` int(255) DEFAULT NULL,
  `money` int(11) DEFAULT 5000,
  `usable` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`,`usable`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.atms: ~0 rows (ungefähr)
DELETE FROM `atms`;
/*!40000 ALTER TABLE `atms` DISABLE KEYS */;
/*!40000 ALTER TABLE `atms` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.bank_konten
CREATE TABLE IF NOT EXISTS `bank_konten` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ownerId` int(11) NOT NULL DEFAULT 0,
  `amount` float NOT NULL DEFAULT 0,
  `kontonummer` varchar(50) DEFAULT NULL,
  `beschreibung` varchar(50) DEFAULT NULL,
  `firma` int(11) DEFAULT 0,
  PRIMARY KEY (`id`,`amount`,`ownerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.bank_konten: ~0 rows (ungefähr)
DELETE FROM `bank_konten`;
/*!40000 ALTER TABLE `bank_konten` DISABLE KEYS */;
/*!40000 ALTER TABLE `bank_konten` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.bank_standingOrders
CREATE TABLE IF NOT EXISTS `bank_standingOrders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fromCharId` int(11) DEFAULT NULL,
  `toCharId` int(11) DEFAULT NULL,
  `date` int(11) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `description` varchar(150) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle devserver2.bank_standingOrders: ~0 rows (ungefähr)
DELETE FROM `bank_standingOrders`;
/*!40000 ALTER TABLE `bank_standingOrders` DISABLE KEYS */;
/*!40000 ALTER TABLE `bank_standingOrders` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.bank_statements
CREATE TABLE IF NOT EXISTS `bank_statements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fromCharId` int(11) DEFAULT NULL,
  `toCharId` int(11) DEFAULT NULL,
  `date` int(11) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `description` varchar(150) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle devserver2.bank_statements: ~0 rows (ungefähr)
DELETE FROM `bank_statements`;
/*!40000 ALTER TABLE `bank_statements` DISABLE KEYS */;
/*!40000 ALTER TABLE `bank_statements` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.blips
CREATE TABLE IF NOT EXISTS `blips` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `posX` float NOT NULL DEFAULT 0,
  `posY` float NOT NULL DEFAULT 0,
  `name` varchar(50) NOT NULL DEFAULT '0',
  `color` int(11) NOT NULL DEFAULT 0,
  `blipid` int(11) NOT NULL DEFAULT 0,
  `scale` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.blips: ~0 rows (ungefähr)
DELETE FROM `blips`;
/*!40000 ALTER TABLE `blips` DISABLE KEYS */;
/*!40000 ALTER TABLE `blips` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.burgermeisterwahl
CREATE TABLE IF NOT EXISTS `burgermeisterwahl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wahl` int(11) DEFAULT 0,
  `charId` int(11) DEFAULT 0,
  `name` varchar(50) DEFAULT '0',
  `stimmen` int(11) DEFAULT 0,
  `active` int(11) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle devserver2.burgermeisterwahl: ~0 rows (ungefähr)
DELETE FROM `burgermeisterwahl`;
/*!40000 ALTER TABLE `burgermeisterwahl` DISABLE KEYS */;
/*!40000 ALTER TABLE `burgermeisterwahl` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.carshops
CREATE TABLE IF NOT EXISTS `carshops` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `posX` float NOT NULL,
  `posY` float NOT NULL,
  `posZ` float NOT NULL,
  `posR` float NOT NULL,
  `ped` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `spawnX` float DEFAULT NULL,
  `spawnY` float DEFAULT NULL,
  `spawnZ` float DEFAULT NULL,
  `spawnR` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.carshops: ~0 rows (ungefähr)
DELETE FROM `carshops`;
/*!40000 ALTER TABLE `carshops` DISABLE KEYS */;
/*!40000 ALTER TABLE `carshops` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.carshop_cars
CREATE TABLE IF NOT EXISTS `carshop_cars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(50) NOT NULL DEFAULT '0',
  `price` float NOT NULL DEFAULT 0,
  `type` enum('Sports','SportsClassic','Supercars','Compacts','Coupes','CustomCars','MuscleCars','Sedans','Rostautos','Motorcycles','Fahrräder','Offroad','SUV','LKW','Vans','PDM') DEFAULT NULL,
  `tankart` enum('Benzin','Diesel','Elektro') DEFAULT 'Benzin',
  `kofferraum` int(11) NOT NULL DEFAULT 30,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.carshop_cars: ~0 rows (ungefähr)
DELETE FROM `carshop_cars`;
/*!40000 ALTER TABLE `carshop_cars` DISABLE KEYS */;
/*!40000 ALTER TABLE `carshop_cars` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.characters
CREATE TABLE IF NOT EXISTS `characters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accountID` int(11) DEFAULT 0,
  `createDate` int(11) DEFAULT NULL,
  `ped` int(11) DEFAULT 0,
  `pedHash` varchar(50) DEFAULT '0',
  `created` int(11) DEFAULT 0,
  `intro` int(11) DEFAULT 0,
  `whitelisted` int(11) DEFAULT 0,
  `klingel` int(11) DEFAULT 0,
  `iclist` int(11) DEFAULT 0,
  `adminRank` int(11) DEFAULT 0,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `money` float DEFAULT 500,
  `tasche` int(11) DEFAULT 0,
  `paycheck` int(11) DEFAULT 0,
  `burgerwahl` int(11) DEFAULT 0,
  `aufgestellt` int(11) DEFAULT 0,
  `wahl` int(11) DEFAULT 0,
  `posX` float DEFAULT -1038.79,
  `posY` float DEFAULT -2740.24,
  `posZ` float DEFAULT 13.858,
  `posR` float DEFAULT 314,
  `dimension` int(11) DEFAULT 0,
  `dead` int(11) DEFAULT 0,
  `permaDead` int(11) DEFAULT 0,
  `killerid` int(11) DEFAULT 0,
  `health` float DEFAULT 100,
  `armor` float DEFAULT 0,
  `food` float DEFAULT 100,
  `drink` float DEFAULT 100,
  `gang` varchar(1255) DEFAULT 'none',
  `gangrang` int(11) DEFAULT 0,
  `faction` varchar(50) DEFAULT 'Civillian',
  `firma` int(11) DEFAULT 0,
  `factionrang` int(11) DEFAULT 0,
  `factiondn` int(11) DEFAULT 0,
  `factioncloth` varchar(1255) DEFAULT 'Zivil',
  `duty` int(11) DEFAULT 0,
  `onlineId` int(11) DEFAULT NULL,
  `isOnline` int(11) NOT NULL DEFAULT 0,
  `phone` int(11) DEFAULT 0,
  `phoneNumber` int(11) DEFAULT NULL,
  `phoneOff` int(11) NOT NULL DEFAULT 1,
  `hair` int(11) DEFAULT NULL,
  `hairtext` int(11) DEFAULT NULL,
  `hairtext2` int(11) DEFAULT NULL,
  `bart` int(11) DEFAULT NULL,
  `barttext` int(11) DEFAULT NULL,
  `barttext2` int(11) DEFAULT NULL,
  `makeup` int(11) DEFAULT NULL,
  `data` varchar(1000) DEFAULT '{"Gender":0,"Parents":{"Father":0,"Mother":21,"Similarity":0,"SkinSimilarity":0},"Features":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"Appearance":[{"Value":255,"Opacity":1},{"Value":255,"Opacity":1},{"Value":255,"Opacity":1},{"Value":255,"Opacity":1},{"Value":255,"Opacity":1},{"Value":255,"Opacity":1},{"Value":255,"Opacity":1},{"Value":255,"Opacity":1},{"Value":255,"Opacity":1},{"Value":255,"Opacity":1},{"Value":255,"Opacity":1}],"Hair":[0,0,0,0,0,0,0,0,0]}',
  `tattoo` text DEFAULT NULL,
  `hat` int(11) DEFAULT 255,
  `hattext` int(11) DEFAULT 0,
  `eye` int(11) DEFAULT 255,
  `eyetext` int(11) DEFAULT 0,
  `mask` int(11) DEFAULT 0,
  `masktext` int(11) DEFAULT 0,
  `shirt` int(11) DEFAULT 0,
  `shirttext` int(11) DEFAULT 0,
  `jacket` int(11) DEFAULT 0,
  `jackettext` int(11) DEFAULT 0,
  `body` int(11) DEFAULT 0,
  `bodytext` int(11) DEFAULT 0,
  `torso` int(11) DEFAULT 0,
  `leg` int(11) DEFAULT 0,
  `legtext` int(11) DEFAULT 0,
  `shoe` int(11) DEFAULT 0,
  `shoetext` int(11) DEFAULT 0,
  `earpice` int(11) DEFAULT 255,
  `accessoire` int(11) DEFAULT 0,
  `accessoiretext` int(11) DEFAULT 0,
  `arm` int(11) DEFAULT 255,
  `clock` int(11) DEFAULT 255,
  `bday` varchar(50) DEFAULT '0',
  PRIMARY KEY (`id`,`phoneOff`,`isOnline`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.characters: ~0 rows (ungefähr)
DELETE FROM `characters`;
/*!40000 ALTER TABLE `characters` DISABLE KEYS */;
/*!40000 ALTER TABLE `characters` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.charLogins
CREATE TABLE IF NOT EXISTS `charLogins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charId` int(11) NOT NULL DEFAULT 0,
  `time` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle devserver2.charLogins: ~0 rows (ungefähr)
DELETE FROM `charLogins`;
/*!40000 ALTER TABLE `charLogins` DISABLE KEYS */;
/*!40000 ALTER TABLE `charLogins` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.charLogouts
CREATE TABLE IF NOT EXISTS `charLogouts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charId` int(11) NOT NULL,
  `time` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle devserver2.charLogouts: ~0 rows (ungefähr)
DELETE FROM `charLogouts`;
/*!40000 ALTER TABLE `charLogouts` DISABLE KEYS */;
/*!40000 ALTER TABLE `charLogouts` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.chiefwahl
CREATE TABLE IF NOT EXISTS `chiefwahl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `punkt` varchar(50) NOT NULL DEFAULT '0',
  `titel` varchar(50) NOT NULL DEFAULT '0',
  `stimmen` int(11) NOT NULL DEFAULT 0,
  `active` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle devserver2.chiefwahl: ~0 rows (ungefähr)
DELETE FROM `chiefwahl`;
/*!40000 ALTER TABLE `chiefwahl` DISABLE KEYS */;
/*!40000 ALTER TABLE `chiefwahl` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.clothessets
CREATE TABLE IF NOT EXISTS `clothessets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charId` int(11) DEFAULT NULL,
  `hat` int(11) DEFAULT NULL,
  `hattext` int(11) DEFAULT NULL,
  `eye` int(11) DEFAULT NULL,
  `eyetext` int(11) DEFAULT NULL,
  `mask` int(11) DEFAULT NULL,
  `masktext` int(11) DEFAULT NULL,
  `torso` int(11) DEFAULT NULL,
  `leg` int(11) DEFAULT NULL,
  `legtext` int(11) DEFAULT NULL,
  `shoe` int(11) DEFAULT NULL,
  `shoetext` int(11) DEFAULT NULL,
  `jacket` int(11) DEFAULT NULL,
  `jackettext` int(11) DEFAULT NULL,
  `shirt` int(11) DEFAULT NULL,
  `shirttext` int(11) DEFAULT NULL,
  `hat2` int(11) DEFAULT NULL,
  `hattext2` int(11) DEFAULT NULL,
  `eye2` int(11) DEFAULT NULL,
  `eyetext2` int(11) DEFAULT NULL,
  `mask2` int(11) DEFAULT NULL,
  `masktext2` int(11) DEFAULT NULL,
  `torso2` int(11) DEFAULT NULL,
  `leg2` int(11) DEFAULT NULL,
  `legtext2` int(11) DEFAULT NULL,
  `shoe2` int(11) DEFAULT NULL,
  `shoetext2` int(11) DEFAULT NULL,
  `jacket2` int(11) DEFAULT NULL,
  `jackettext2` int(11) DEFAULT NULL,
  `shirt2` int(11) DEFAULT NULL,
  `shirttext2` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle devserver2.clothessets: ~0 rows (ungefähr)
DELETE FROM `clothessets`;
/*!40000 ALTER TABLE `clothessets` DISABLE KEYS */;
/*!40000 ALTER TABLE `clothessets` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.faction
CREATE TABLE IF NOT EXISTS `faction` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.faction: ~0 rows (ungefähr)
DELETE FROM `faction`;
/*!40000 ALTER TABLE `faction` DISABLE KEYS */;
/*!40000 ALTER TABLE `faction` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.faction_dispatches
CREATE TABLE IF NOT EXISTS `faction_dispatches` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `faction` varchar(50) NOT NULL DEFAULT '0',
  `posx` int(11) NOT NULL DEFAULT 0,
  `posy` int(11) NOT NULL DEFAULT 0,
  `posz` int(11) NOT NULL DEFAULT 0,
  `dispatchid` int(11) NOT NULL DEFAULT 0,
  `von` int(11) NOT NULL DEFAULT 0,
  `active` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.faction_dispatches: ~0 rows (ungefähr)
DELETE FROM `faction_dispatches`;
/*!40000 ALTER TABLE `faction_dispatches` DISABLE KEYS */;
/*!40000 ALTER TABLE `faction_dispatches` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.faction_weapons
CREATE TABLE IF NOT EXISTS `faction_weapons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charId` int(11) DEFAULT NULL,
  `taser` int(11) DEFAULT 0,
  `pistol` int(11) DEFAULT 0,
  `appistol` int(11) DEFAULT 0,
  `smg` int(11) DEFAULT 0,
  `karabiner` int(11) DEFAULT 0,
  `taschenlampe` int(11) DEFAULT 0,
  `schlagstock` int(11) DEFAULT 0,
  `fallschirm` int(11) DEFAULT 0,
  `specialkarabiner` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.faction_weapons: ~0 rows (ungefähr)
DELETE FROM `faction_weapons`;
/*!40000 ALTER TABLE `faction_weapons` DISABLE KEYS */;
/*!40000 ALTER TABLE `faction_weapons` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.farming
CREATE TABLE IF NOT EXISTS `farming` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '0',
  `farmX` float NOT NULL DEFAULT 0,
  `farmY` float NOT NULL DEFAULT 0,
  `farmZ` float NOT NULL DEFAULT 0,
  `farmItem` int(11) NOT NULL DEFAULT 0,
  `processorsX` float NOT NULL DEFAULT 0,
  `processorsY` float NOT NULL DEFAULT 0,
  `processorsZ` float NOT NULL DEFAULT 0,
  `processorsR` float NOT NULL DEFAULT 0,
  `processorsPed` varchar(50) NOT NULL DEFAULT '0',
  `farmingTimeBar` int(11) NOT NULL DEFAULT 0,
  `farmingTime` int(11) NOT NULL DEFAULT 0,
  `processorsneedItem` int(11) NOT NULL DEFAULT 0,
  `processorsgiveItem` int(11) NOT NULL DEFAULT 0,
  `sellX` float NOT NULL DEFAULT 0,
  `sellY` float NOT NULL DEFAULT 0,
  `sellZ` float NOT NULL DEFAULT 0,
  `sellR` float NOT NULL DEFAULT 0,
  `sellPed` varchar(50) NOT NULL DEFAULT '0',
  `sellneedItem` int(11) NOT NULL DEFAULT 0,
  `sellPrice` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.farming: ~0 rows (ungefähr)
DELETE FROM `farming`;
/*!40000 ALTER TABLE `farming` DISABLE KEYS */;
/*!40000 ALTER TABLE `farming` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.gangs
CREATE TABLE IF NOT EXISTS `gangs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gang` varchar(50) DEFAULT '0',
  `garx` int(11) DEFAULT 0,
  `gary` int(11) DEFAULT 0,
  `garz` int(11) DEFAULT 0,
  `garparkoutx` int(11) DEFAULT 0,
  `garparkouty` int(11) DEFAULT 0,
  `garparkoutz` int(11) DEFAULT 0,
  `garparkinx` int(11) DEFAULT 0,
  `garparkiny` int(11) DEFAULT 0,
  `garparkinz` int(11) DEFAULT 0,
  `marked` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.gangs: ~0 rows (ungefähr)
DELETE FROM `gangs`;
/*!40000 ALTER TABLE `gangs` DISABLE KEYS */;
/*!40000 ALTER TABLE `gangs` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.gangshop
CREATE TABLE IF NOT EXISTS `gangshop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `itemId` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.gangshop: ~0 rows (ungefähr)
DELETE FROM `gangshop`;
/*!40000 ALTER TABLE `gangshop` DISABLE KEYS */;
/*!40000 ALTER TABLE `gangshop` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.garage
CREATE TABLE IF NOT EXISTS `garage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `pedx` int(11) DEFAULT NULL,
  `pedy` int(11) DEFAULT NULL,
  `pedz` int(11) DEFAULT NULL,
  `pedr` int(11) DEFAULT NULL,
  `ped` varchar(50) DEFAULT NULL,
  `spawn1x` int(11) DEFAULT NULL,
  `spawn1y` int(11) DEFAULT NULL,
  `spawn1z` int(11) DEFAULT NULL,
  `spawn1r` int(11) DEFAULT NULL,
  `spawn2x` int(11) DEFAULT NULL,
  `spawn2y` int(11) DEFAULT NULL,
  `spawn2z` int(11) DEFAULT NULL,
  `spawn2r` int(11) DEFAULT NULL,
  `parkInX` int(11) DEFAULT NULL,
  `parkInY` int(11) DEFAULT NULL,
  `parkInZ` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.garage: ~0 rows (ungefähr)
DELETE FROM `garage`;
/*!40000 ALTER TABLE `garage` DISABLE KEYS */;
/*!40000 ALTER TABLE `garage` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.housing
CREATE TABLE IF NOT EXISTS `housing` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `outX` float NOT NULL DEFAULT 0,
  `outY` float NOT NULL DEFAULT 0,
  `outZ` float NOT NULL DEFAULT 0,
  `inX` float NOT NULL DEFAULT 0,
  `inY` float NOT NULL DEFAULT 0,
  `inZ` float NOT NULL DEFAULT 0,
  `outfitX` float NOT NULL DEFAULT 0,
  `outfitY` float NOT NULL DEFAULT 0,
  `outfitZ` float NOT NULL DEFAULT 0,
  `price` float NOT NULL DEFAULT 0,
  `sellprice` float NOT NULL DEFAULT 0,
  `maxBuy` float NOT NULL DEFAULT 0,
  `interrior` float NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.housing: ~0 rows (ungefähr)
DELETE FROM `housing`;
/*!40000 ALTER TABLE `housing` DISABLE KEYS */;
/*!40000 ALTER TABLE `housing` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.housing_garages
CREATE TABLE IF NOT EXISTS `housing_garages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `inX` float DEFAULT NULL,
  `inY` float DEFAULT NULL,
  `inZ` float DEFAULT NULL,
  `outX` float DEFAULT NULL,
  `outY` float DEFAULT NULL,
  `outZ` float DEFAULT NULL,
  `intId` int(11) DEFAULT NULL,
  `beschreibung` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle devserver2.housing_garages: ~0 rows (ungefähr)
DELETE FROM `housing_garages`;
/*!40000 ALTER TABLE `housing_garages` DISABLE KEYS */;
/*!40000 ALTER TABLE `housing_garages` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.housing_garint
CREATE TABLE IF NOT EXISTS `housing_garint` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `x` int(11) DEFAULT NULL,
  `y` int(11) DEFAULT NULL,
  `z` int(11) DEFAULT NULL,
  `beschreibung` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle devserver2.housing_garint: ~0 rows (ungefähr)
DELETE FROM `housing_garint`;
/*!40000 ALTER TABLE `housing_garint` DISABLE KEYS */;
/*!40000 ALTER TABLE `housing_garint` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.housing_interrior
CREATE TABLE IF NOT EXISTS `housing_interrior` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `posX` int(11) DEFAULT NULL,
  `posY` int(11) DEFAULT NULL,
  `posZ` int(11) DEFAULT NULL,
  `beschreibung` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle devserver2.housing_interrior: ~3 rows (ungefähr)
DELETE FROM `housing_interrior`;
/*!40000 ALTER TABLE `housing_interrior` DISABLE KEYS */;
INSERT INTO `housing_interrior` (`id`, `posX`, `posY`, `posZ`, `beschreibung`) VALUES
	(1, 340, 437, 149, 'Vinewood'),
	(2, 266, -1007, -101, 'Lowend'),
	(3, -18, -591, 90, 'Arcadius');
/*!40000 ALTER TABLE `housing_interrior` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.items
CREATE TABLE IF NOT EXISTS `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `itemName` varchar(50) NOT NULL DEFAULT '0',
  `usable` varchar(50) NOT NULL DEFAULT '0',
  `type` varchar(50) NOT NULL DEFAULT '0',
  `fillvalue` int(11) NOT NULL DEFAULT 0,
  `itemcount` float NOT NULL DEFAULT 0,
  `illegal` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.items: ~0 rows (ungefähr)
DELETE FROM `items`;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
/*!40000 ALTER TABLE `items` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.licenses
CREATE TABLE IF NOT EXISTS `licenses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charId` int(11) NOT NULL DEFAULT 0,
  `weapona` int(11) NOT NULL DEFAULT 0,
  `weaponb` int(11) NOT NULL DEFAULT 0,
  `pkw` int(11) NOT NULL DEFAULT 0,
  `lkw` int(11) NOT NULL DEFAULT 0,
  `bike` int(11) NOT NULL DEFAULT 0,
  `pilot` int(11) NOT NULL DEFAULT 0,
  `job` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.licenses: ~0 rows (ungefähr)
DELETE FROM `licenses`;
/*!40000 ALTER TABLE `licenses` DISABLE KEYS */;
/*!40000 ALTER TABLE `licenses` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.logs
CREATE TABLE IF NOT EXISTS `logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `playername` varchar(50) NOT NULL,
  `socialclub` varchar(50) NOT NULL,
  `ip` varchar(50) NOT NULL,
  `log` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Exportiere Daten aus Tabelle devserver2.logs: ~0 rows (ungefähr)
DELETE FROM `logs`;
/*!40000 ALTER TABLE `logs` DISABLE KEYS */;
/*!40000 ALTER TABLE `logs` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.meldungslogs
CREATE TABLE IF NOT EXISTS `meldungslogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reportingid` int(11) NOT NULL DEFAULT 0,
  `reportingname` varchar(50) NOT NULL DEFAULT '0',
  `users` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.meldungslogs: ~0 rows (ungefähr)
DELETE FROM `meldungslogs`;
/*!40000 ALTER TABLE `meldungslogs` DISABLE KEYS */;
/*!40000 ALTER TABLE `meldungslogs` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.payChecks
CREATE TABLE IF NOT EXISTS `payChecks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `faction` varchar(50) NOT NULL DEFAULT 'Civilian',
  `factionrang` varchar(50) NOT NULL DEFAULT '0',
  `rankname` varchar(50) NOT NULL DEFAULT '0',
  `payCheck` float NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`,`payCheck`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.payChecks: ~0 rows (ungefähr)
DELETE FROM `payChecks`;
/*!40000 ALTER TABLE `payChecks` DISABLE KEYS */;
/*!40000 ALTER TABLE `payChecks` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.peds
CREATE TABLE IF NOT EXISTS `peds` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '0',
  `posX` float NOT NULL DEFAULT 0,
  `posY` float NOT NULL DEFAULT 0,
  `posZ` float NOT NULL DEFAULT 0,
  `posR` float NOT NULL DEFAULT 0,
  `ped` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.peds: ~0 rows (ungefähr)
DELETE FROM `peds`;
/*!40000 ALTER TABLE `peds` DISABLE KEYS */;
/*!40000 ALTER TABLE `peds` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.phone_contacts
CREATE TABLE IF NOT EXISTS `phone_contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `playerCharID` int(11) NOT NULL,
  `phoneNumber` varchar(11) NOT NULL,
  `contactName` varchar(255) NOT NULL,
  `saved` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`,`phoneNumber`,`contactName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.phone_contacts: ~0 rows (ungefähr)
DELETE FROM `phone_contacts`;
/*!40000 ALTER TABLE `phone_contacts` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone_contacts` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.phone_email
CREATE TABLE IF NOT EXISTS `phone_email` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sendId` int(11) DEFAULT NULL,
  `sendMail` varchar(50) DEFAULT NULL,
  `empfId` int(11) DEFAULT NULL,
  `email` longtext DEFAULT NULL,
  `gelesen` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.phone_email: ~0 rows (ungefähr)
DELETE FROM `phone_email`;
/*!40000 ALTER TABLE `phone_email` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone_email` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.phone_gps
CREATE TABLE IF NOT EXISTS `phone_gps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `x` int(11) DEFAULT 0,
  `y` int(11) DEFAULT 0,
  `charId` int(11) DEFAULT 0,
  `send` varchar(50) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle devserver2.phone_gps: ~0 rows (ungefähr)
DELETE FROM `phone_gps`;
/*!40000 ALTER TABLE `phone_gps` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone_gps` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.phone_short
CREATE TABLE IF NOT EXISTS `phone_short` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `targetnumber` varchar(11) DEFAULT NULL,
  `shortnumber` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.phone_short: ~0 rows (ungefähr)
DELETE FROM `phone_short`;
/*!40000 ALTER TABLE `phone_short` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone_short` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.phone_sms
CREATE TABLE IF NOT EXISTS `phone_sms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phonenumber` varchar(50) NOT NULL DEFAULT '0',
  `targetnumber` int(11) NOT NULL DEFAULT 0,
  `sms` text DEFAULT NULL,
  `gelesen` int(11) NOT NULL DEFAULT 0,
  `multi` int(11) NOT NULL DEFAULT 0,
  `pnid` int(11) NOT NULL DEFAULT 0,
  `sendId` int(11) NOT NULL DEFAULT 0,
  `targetId` int(11) NOT NULL DEFAULT 0,
  `telefonnummer` int(11) NOT NULL DEFAULT 0,
  `sendNummer` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`,`targetId`,`multi`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle devserver2.phone_sms: ~0 rows (ungefähr)
DELETE FROM `phone_sms`;
/*!40000 ALTER TABLE `phone_sms` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone_sms` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.savedclothes
CREATE TABLE IF NOT EXISTS `savedclothes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `posX` float NOT NULL DEFAULT 0,
  `posY` float NOT NULL DEFAULT 0,
  `posZ` float NOT NULL DEFAULT 0,
  `posR` float NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.savedclothes: ~0 rows (ungefähr)
DELETE FROM `savedclothes`;
/*!40000 ALTER TABLE `savedclothes` DISABLE KEYS */;
/*!40000 ALTER TABLE `savedclothes` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.serverblock
CREATE TABLE IF NOT EXISTS `serverblock` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `free` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle devserver2.serverblock: ~0 rows (ungefähr)
DELETE FROM `serverblock`;
/*!40000 ALTER TABLE `serverblock` DISABLE KEYS */;
/*!40000 ALTER TABLE `serverblock` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.shops
CREATE TABLE IF NOT EXISTS `shops` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) NOT NULL DEFAULT 0,
  `posX` float NOT NULL DEFAULT 0,
  `posY` float NOT NULL DEFAULT 0,
  `posZ` float NOT NULL DEFAULT 0,
  `posR` float NOT NULL DEFAULT 0,
  `firma` varchar(50) NOT NULL DEFAULT 'none',
  `ped` varchar(50) NOT NULL DEFAULT '0',
  `money` float NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.shops: ~0 rows (ungefähr)
DELETE FROM `shops`;
/*!40000 ALTER TABLE `shops` DISABLE KEYS */;
/*!40000 ALTER TABLE `shops` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.shop_items
CREATE TABLE IF NOT EXISTS `shop_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `itemId` int(11) NOT NULL DEFAULT 0,
  `price` float NOT NULL DEFAULT 0,
  `shopId` int(11) NOT NULL DEFAULT 0,
  `name` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.shop_items: ~0 rows (ungefähr)
DELETE FROM `shop_items`;
/*!40000 ALTER TABLE `shop_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `shop_items` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.shortcuts
CREATE TABLE IF NOT EXISTS `shortcuts` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.shortcuts: ~0 rows (ungefähr)
DELETE FROM `shortcuts`;
/*!40000 ALTER TABLE `shortcuts` DISABLE KEYS */;
/*!40000 ALTER TABLE `shortcuts` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.tankstellen
CREATE TABLE IF NOT EXISTS `tankstellen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `posX` int(11) NOT NULL DEFAULT 0,
  `posY` int(11) NOT NULL DEFAULT 0,
  `posZ` int(11) NOT NULL DEFAULT 0,
  `benzin` int(11) NOT NULL DEFAULT 10000,
  `bprice` float NOT NULL DEFAULT 1.48,
  `dprice` float NOT NULL DEFAULT 1.26,
  `sprice` float NOT NULL DEFAULT 3.37,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.tankstellen: ~0 rows (ungefähr)
DELETE FROM `tankstellen`;
/*!40000 ALTER TABLE `tankstellen` DISABLE KEYS */;
/*!40000 ALTER TABLE `tankstellen` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.teleporter
CREATE TABLE IF NOT EXISTS `teleporter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `pos1X` float NOT NULL DEFAULT 0,
  `pos1Y` float NOT NULL DEFAULT 0,
  `pos1Z` float NOT NULL DEFAULT 0,
  `pos1D` int(11) NOT NULL DEFAULT 0,
  `pos2X` float NOT NULL DEFAULT 0,
  `pos2Y` float NOT NULL DEFAULT 0,
  `pos2Z` float NOT NULL DEFAULT 0,
  `pos2D` float NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.teleporter: ~0 rows (ungefähr)
DELETE FROM `teleporter`;
/*!40000 ALTER TABLE `teleporter` DISABLE KEYS */;
/*!40000 ALTER TABLE `teleporter` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.ucp_changelogs
CREATE TABLE IF NOT EXISTS `ucp_changelogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `betreff` text DEFAULT NULL,
  `changelog` longtext DEFAULT NULL,
  `von` varchar(50) DEFAULT NULL,
  `timestamp` varchar(210) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.ucp_changelogs: ~0 rows (ungefähr)
DELETE FROM `ucp_changelogs`;
/*!40000 ALTER TABLE `ucp_changelogs` DISABLE KEYS */;
/*!40000 ALTER TABLE `ucp_changelogs` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.ucp_news
CREATE TABLE IF NOT EXISTS `ucp_news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(50) DEFAULT NULL,
  `betreff` text DEFAULT NULL,
  `news` longtext DEFAULT NULL,
  `von` varchar(50) DEFAULT NULL,
  `timestamp` varchar(210) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.ucp_news: ~0 rows (ungefähr)
DELETE FROM `ucp_news`;
/*!40000 ALTER TABLE `ucp_news` DISABLE KEYS */;
/*!40000 ALTER TABLE `ucp_news` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.user_clothes
CREATE TABLE IF NOT EXISTS `user_clothes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charId` int(11) NOT NULL DEFAULT 0,
  `clothname` varchar(50) NOT NULL DEFAULT '0',
  `drawId` int(11) NOT NULL DEFAULT 0,
  `art` enum('C','P') NOT NULL DEFAULT 'C',
  `clothId` int(11) NOT NULL DEFAULT 0,
  `textureId` int(11) NOT NULL DEFAULT 0,
  `zone` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.user_clothes: ~0 rows (ungefähr)
DELETE FROM `user_clothes`;
/*!40000 ALTER TABLE `user_clothes` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_clothes` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.user_houses
CREATE TABLE IF NOT EXISTS `user_houses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `houseId` int(11) NOT NULL DEFAULT 0,
  `charId` int(11) NOT NULL DEFAULT 0,
  `locked` int(11) NOT NULL DEFAULT 0,
  `pin` int(11) DEFAULT NULL,
  `sign` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.user_houses: ~0 rows (ungefähr)
DELETE FROM `user_houses`;
/*!40000 ALTER TABLE `user_houses` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_houses` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.user_items
CREATE TABLE IF NOT EXISTS `user_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charId` int(11) NOT NULL DEFAULT 0,
  `itemId` int(11) NOT NULL DEFAULT 0,
  `amount` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.user_items: ~0 rows (ungefähr)
DELETE FROM `user_items`;
/*!40000 ALTER TABLE `user_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_items` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.user_outfits
CREATE TABLE IF NOT EXISTS `user_outfits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charId` int(11) NOT NULL DEFAULT 0,
  `outfit` varchar(50) NOT NULL DEFAULT '0',
  `hat` int(11) NOT NULL DEFAULT 0,
  `hattext` int(11) NOT NULL DEFAULT 0,
  `eye` int(11) NOT NULL DEFAULT 0,
  `eyetext` int(11) NOT NULL DEFAULT 0,
  `mask` int(11) NOT NULL DEFAULT 0,
  `masktext` int(11) NOT NULL DEFAULT 0,
  `jacket` int(11) NOT NULL DEFAULT 0,
  `jackettext` int(11) NOT NULL DEFAULT 0,
  `shirt` int(11) NOT NULL DEFAULT 0,
  `shirttext` int(11) NOT NULL DEFAULT 0,
  `torso` int(11) NOT NULL DEFAULT 0,
  `leg` int(11) NOT NULL DEFAULT 0,
  `legtext` int(11) NOT NULL DEFAULT 0,
  `shoe` int(11) NOT NULL DEFAULT 0,
  `shoetext` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.user_outfits: ~0 rows (ungefähr)
DELETE FROM `user_outfits`;
/*!40000 ALTER TABLE `user_outfits` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_outfits` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.user_weapons
CREATE TABLE IF NOT EXISTS `user_weapons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charId` int(11) NOT NULL DEFAULT 0,
  `taser` int(11) NOT NULL DEFAULT 0,
  `pistol` int(11) NOT NULL DEFAULT 0,
  `fivepistol` int(11) NOT NULL DEFAULT 0,
  `schwerepistol` int(11) NOT NULL DEFAULT 0,
  `appistol` int(11) NOT NULL DEFAULT 0,
  `smg` int(11) NOT NULL DEFAULT 0,
  `pdw` int(11) NOT NULL DEFAULT 0,
  `karabiner` int(11) NOT NULL DEFAULT 0,
  `taschenlampe` int(11) NOT NULL DEFAULT 0,
  `schlagstock` int(11) NOT NULL DEFAULT 0,
  `messer` int(11) NOT NULL DEFAULT 0,
  `bat` int(11) NOT NULL DEFAULT 0,
  `pump` int(11) NOT NULL DEFAULT 0,
  `abgesägte` int(11) NOT NULL DEFAULT 0,
  `ak47` int(11) NOT NULL DEFAULT 0,
  `micro` int(11) NOT NULL DEFAULT 0,
  `revolver` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.user_weapons: ~0 rows (ungefähr)
DELETE FROM `user_weapons`;
/*!40000 ALTER TABLE `user_weapons` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_weapons` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.vehiclekeys
CREATE TABLE IF NOT EXISTS `vehiclekeys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `keyOwner` int(11) NOT NULL DEFAULT 0,
  `vehID` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `isActive` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`,`keyOwner`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.vehiclekeys: ~0 rows (ungefähr)
DELETE FROM `vehiclekeys`;
/*!40000 ALTER TABLE `vehiclekeys` DISABLE KEYS */;
/*!40000 ALTER TABLE `vehiclekeys` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.vehicles
CREATE TABLE IF NOT EXISTS `vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(50) DEFAULT NULL,
  `charId` int(11) DEFAULT NULL,
  `numberPlate` varchar(50) DEFAULT 'NOLIC',
  `parked` int(11) DEFAULT 1,
  `impounaclsded` int(11) DEFAULT 0,
  `impounded` int(11) DEFAULT 0,
  `kofferraum` int(11) DEFAULT 0,
  `zugelassen` int(11) DEFAULT 0,
  `firstRegistration` varchar(50) DEFAULT NULL,
  `fill` int(11) DEFAULT 100,
  `km` int(11) DEFAULT 0,
  `posX` float DEFAULT 0,
  `posY` float DEFAULT 0,
  `posZ` float DEFAULT 0,
  `posR` float DEFAULT 0,
  `inaktive` int(11) DEFAULT 0,
  `dead` enum('true','false') DEFAULT 'false',
  `fuelart` varchar(50) DEFAULT 'Benzin',
  `neonEnabled` int(11) DEFAULT 0,
  `hlight` int(11) DEFAULT 999,
  `neonr` int(11) DEFAULT 0,
  `neong` int(11) DEFAULT 0,
  `neonb` int(11) DEFAULT 0,
  `wheelr` int(11) DEFAULT 0,
  `wheelg` int(11) DEFAULT 0,
  `wheelb` int(11) DEFAULT 0,
  `pcolor` int(11) DEFAULT 0,
  `scolor` int(11) DEFAULT 0,
  `design` int(11) DEFAULT -1,
  `spoiler` int(11) DEFAULT -1,
  `front` int(11) DEFAULT -1,
  `heck` int(11) DEFAULT -1,
  `seite` int(11) DEFAULT -1,
  `auspuff` int(11) DEFAULT -1,
  `rahmen` int(11) DEFAULT -1,
  `gitter` int(11) DEFAULT -1,
  `haube` int(11) DEFAULT -1,
  `kotfl` int(11) DEFAULT -1,
  `dach` int(11) DEFAULT -1,
  `motor` int(11) DEFAULT -1,
  `bremsen` int(11) DEFAULT -1,
  `getriebe` int(11) DEFAULT -1,
  `hupe` int(11) DEFAULT -1,
  `feder` int(11) DEFAULT -1,
  `turbo` int(11) DEFAULT -1,
  `xenon` int(11) DEFAULT -1,
  `felgen` int(11) DEFAULT -1,
  `wheelColor` int(11) DEFAULT 0,
  `windowTint` int(11) DEFAULT -1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.vehicles: ~0 rows (ungefähr)
DELETE FROM `vehicles`;
/*!40000 ALTER TABLE `vehicles` DISABLE KEYS */;
/*!40000 ALTER TABLE `vehicles` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.vehicle_block
CREATE TABLE IF NOT EXISTS `vehicle_block` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(50) NOT NULL DEFAULT '0',
  `block` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportiere Daten aus Tabelle devserver2.vehicle_block: ~0 rows (ungefähr)
DELETE FROM `vehicle_block`;
/*!40000 ALTER TABLE `vehicle_block` DISABLE KEYS */;
/*!40000 ALTER TABLE `vehicle_block` ENABLE KEYS */;

-- Exportiere Struktur von Tabelle devserver2.vehicle_items
CREATE TABLE IF NOT EXISTS `vehicle_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vehId` int(11) NOT NULL DEFAULT 0,
  `itemId` int(11) NOT NULL DEFAULT 0,
  `amount` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Exportiere Daten aus Tabelle devserver2.vehicle_items: ~0 rows (ungefähr)
DELETE FROM `vehicle_items`;
/*!40000 ALTER TABLE `vehicle_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `vehicle_items` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
