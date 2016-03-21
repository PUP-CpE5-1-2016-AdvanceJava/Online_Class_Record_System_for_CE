-- MySQL dump 10.16  Distrib 10.1.8-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: online_class_record_system_for_ce
-- ------------------------------------------------------
-- Server version	10.1.8-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `online_class_record_system_for_ce`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `online_class_record_system_for_ce` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `online_class_record_system_for_ce`;

--
-- Table structure for table `assignment`
--

DROP TABLE IF EXISTS `assignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `assignment` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `StudGradeId` int(11) NOT NULL,
  `Score` float(5,2) DEFAULT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5593 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment`
--

LOCK TABLES `assignment` WRITE;
/*!40000 ALTER TABLE `assignment` DISABLE KEYS */;
INSERT INTO `assignment` VALUES (5503,5,0.00,0.00,'Midterm'),(5504,1,0.00,0.00,'Midterm'),(5505,2,0.00,0.00,'Midterm'),(5506,3,0.00,0.00,'Midterm'),(5507,4,0.00,0.00,'Midterm'),(5508,6,0.00,0.00,'Midterm'),(5509,8,0.00,0.00,'Midterm'),(5510,7,0.00,0.00,'Midterm'),(5511,9,0.00,0.00,'Midterm'),(5512,12,0.00,0.00,'Midterm'),(5513,10,0.00,0.00,'Midterm'),(5514,11,0.00,0.00,'Midterm'),(5515,14,0.00,0.00,'Midterm'),(5516,15,0.00,0.00,'Midterm'),(5517,13,0.00,0.00,'Midterm'),(5518,18,0.00,0.00,'Midterm'),(5519,16,0.00,0.00,'Midterm'),(5520,17,0.00,0.00,'Midterm'),(5521,20,0.00,0.00,'Midterm'),(5522,19,0.00,0.00,'Midterm'),(5523,21,0.00,0.00,'Midterm'),(5524,22,0.00,0.00,'Midterm'),(5525,23,0.00,0.00,'Midterm'),(5526,25,0.00,0.00,'Midterm'),(5527,24,0.00,0.00,'Midterm'),(5528,26,0.00,0.00,'Midterm'),(5529,27,0.00,0.00,'Midterm'),(5530,28,0.00,0.00,'Midterm'),(5531,29,0.00,0.00,'Midterm'),(5532,30,0.00,0.00,'Midterm'),(5533,32,0.00,0.00,'Midterm'),(5534,31,0.00,0.00,'Midterm'),(5535,33,0.00,0.00,'Midterm'),(5536,34,0.00,0.00,'Midterm'),(5537,35,0.00,0.00,'Midterm'),(5538,36,0.00,0.00,'Midterm'),(5539,38,0.00,0.00,'Midterm'),(5540,39,0.00,0.00,'Midterm'),(5541,37,0.00,0.00,'Midterm'),(5542,41,0.00,0.00,'Midterm'),(5543,40,0.00,0.00,'Midterm'),(5544,42,0.00,0.00,'Midterm'),(5545,43,0.00,0.00,'Midterm'),(5546,44,0.00,0.00,'Midterm'),(5547,45,0.00,0.00,'Midterm'),(5548,5,0.00,0.00,'Final'),(5549,1,0.00,0.00,'Final'),(5550,2,0.00,0.00,'Final'),(5551,3,0.00,0.00,'Final'),(5552,4,0.00,0.00,'Final'),(5553,6,0.00,0.00,'Final'),(5554,8,0.00,0.00,'Final'),(5555,7,0.00,0.00,'Final'),(5556,9,0.00,0.00,'Final'),(5557,12,0.00,0.00,'Final'),(5558,10,0.00,0.00,'Final'),(5559,11,0.00,0.00,'Final'),(5560,14,0.00,0.00,'Final'),(5561,15,0.00,0.00,'Final'),(5562,13,0.00,0.00,'Final'),(5563,18,0.00,0.00,'Final'),(5564,16,0.00,0.00,'Final'),(5565,17,0.00,0.00,'Final'),(5566,20,0.00,0.00,'Final'),(5567,19,0.00,0.00,'Final'),(5568,21,0.00,0.00,'Final'),(5569,22,0.00,0.00,'Final'),(5570,23,0.00,0.00,'Final'),(5571,25,0.00,0.00,'Final'),(5572,24,0.00,0.00,'Final'),(5573,26,0.00,0.00,'Final'),(5574,27,0.00,0.00,'Final'),(5575,28,0.00,0.00,'Final'),(5576,29,0.00,0.00,'Final'),(5577,30,0.00,0.00,'Final'),(5578,32,0.00,0.00,'Final'),(5579,31,0.00,0.00,'Final'),(5580,33,0.00,0.00,'Final'),(5581,34,0.00,0.00,'Final'),(5582,35,0.00,0.00,'Final'),(5583,36,0.00,0.00,'Final'),(5584,38,0.00,0.00,'Final'),(5585,39,0.00,0.00,'Final'),(5586,37,0.00,0.00,'Final'),(5587,41,0.00,0.00,'Final'),(5588,40,0.00,0.00,'Final'),(5589,42,0.00,0.00,'Final'),(5590,43,0.00,0.00,'Final'),(5591,44,0.00,0.00,'Final'),(5592,45,0.00,0.00,'Final');
/*!40000 ALTER TABLE `assignment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attendance`
--

DROP TABLE IF EXISTS `attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `attendance` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `StudGradeId` int(11) NOT NULL,
  `Status` varchar(50) NOT NULL,
  `Score` int(11) NOT NULL,
  `Rating` int(11) NOT NULL,
  `Sem` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance`
--

LOCK TABLES `attendance` WRITE;
/*!40000 ALTER TABLE `attendance` DISABLE KEYS */;
/*!40000 ALTER TABLE `attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `calendar`
--

DROP TABLE IF EXISTS `calendar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `calendar` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NOT NULL,
  `Date` date NOT NULL,
  `Event` varchar(300) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendar`
--

LOCK TABLES `calendar` WRITE;
/*!40000 ALTER TABLE `calendar` DISABLE KEYS */;
INSERT INTO `calendar` VALUES (59,2,'2016-03-04','Practical #3 on Computer Networks'),(60,2,'2016-03-12','Game Dev Project Submission'),(61,2,'2016-03-09','TQM Project Submission'),(62,2,'2016-03-21','Start of Holy Week'),(63,2,'2016-11-28','My Birthdaaaay :D'),(65,2,'2016-04-29','Graduation');
/*!40000 ALTER TABLE `calendar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `class`
--

DROP TABLE IF EXISTS `class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `class` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `SubjectId` int(11) NOT NULL,
  `ClassBlock` varchar(50) NOT NULL,
  `ModuleType` varchar(50) NOT NULL,
  `NumOfStudents` int(11) NOT NULL,
  `Passers` int(11) DEFAULT NULL,
  `YrSem` varchar(100) NOT NULL,
  `Schedule` varchar(100) NOT NULL,
  `Filename` varchar(100) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` VALUES (1,1,'BSCOE 2-3','Lec',45,NULL,'Second Semester 2015-16','S/S 07:30AM-10:30AM/10:30AM-01:30PM',''),(2,2,'BSCOE 3-5','Lab',50,NULL,'Second Semester 2015-16','T/F 02:00PM-05:00PM/02:00PM-05:00PM',''),(3,3,'BSCOE 5-1','Lec',36,NULL,'Second Semester 2015-16','W 07:30AM-10:30AM','');
/*!40000 ALTER TABLE `class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exercises`
--

DROP TABLE IF EXISTS `exercises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exercises` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `StudGradeId` int(11) NOT NULL,
  `Score` float(5,2) DEFAULT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5503 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercises`
--

LOCK TABLES `exercises` WRITE;
/*!40000 ALTER TABLE `exercises` DISABLE KEYS */;
INSERT INTO `exercises` VALUES (5413,5,0.00,0.00,'Midterm'),(5414,1,0.00,0.00,'Midterm'),(5415,2,0.00,0.00,'Midterm'),(5416,3,0.00,0.00,'Midterm'),(5417,4,0.00,0.00,'Midterm'),(5418,6,0.00,0.00,'Midterm'),(5419,8,0.00,0.00,'Midterm'),(5420,7,0.00,0.00,'Midterm'),(5421,9,0.00,0.00,'Midterm'),(5422,12,0.00,0.00,'Midterm'),(5423,10,0.00,0.00,'Midterm'),(5424,11,0.00,0.00,'Midterm'),(5425,14,0.00,0.00,'Midterm'),(5426,15,0.00,0.00,'Midterm'),(5427,13,0.00,0.00,'Midterm'),(5428,18,0.00,0.00,'Midterm'),(5429,16,0.00,0.00,'Midterm'),(5430,17,0.00,0.00,'Midterm'),(5431,20,0.00,0.00,'Midterm'),(5432,19,0.00,0.00,'Midterm'),(5433,21,0.00,0.00,'Midterm'),(5434,22,0.00,0.00,'Midterm'),(5435,23,0.00,0.00,'Midterm'),(5436,25,0.00,0.00,'Midterm'),(5437,24,0.00,0.00,'Midterm'),(5438,26,0.00,0.00,'Midterm'),(5439,27,0.00,0.00,'Midterm'),(5440,28,0.00,0.00,'Midterm'),(5441,29,0.00,0.00,'Midterm'),(5442,30,0.00,0.00,'Midterm'),(5443,32,0.00,0.00,'Midterm'),(5444,31,0.00,0.00,'Midterm'),(5445,33,0.00,0.00,'Midterm'),(5446,34,0.00,0.00,'Midterm'),(5447,35,0.00,0.00,'Midterm'),(5448,36,0.00,0.00,'Midterm'),(5449,38,0.00,0.00,'Midterm'),(5450,39,0.00,0.00,'Midterm'),(5451,37,0.00,0.00,'Midterm'),(5452,41,0.00,0.00,'Midterm'),(5453,40,0.00,0.00,'Midterm'),(5454,42,0.00,0.00,'Midterm'),(5455,43,0.00,0.00,'Midterm'),(5456,44,0.00,0.00,'Midterm'),(5457,45,0.00,0.00,'Midterm'),(5458,5,0.00,0.00,'Final'),(5459,1,0.00,0.00,'Final'),(5460,2,0.00,0.00,'Final'),(5461,3,0.00,0.00,'Final'),(5462,4,0.00,0.00,'Final'),(5463,6,0.00,0.00,'Final'),(5464,8,0.00,0.00,'Final'),(5465,7,0.00,0.00,'Final'),(5466,9,0.00,0.00,'Final'),(5467,12,0.00,0.00,'Final'),(5468,10,0.00,0.00,'Final'),(5469,11,0.00,0.00,'Final'),(5470,14,0.00,0.00,'Final'),(5471,15,0.00,0.00,'Final'),(5472,13,0.00,0.00,'Final'),(5473,18,0.00,0.00,'Final'),(5474,16,0.00,0.00,'Final'),(5475,17,0.00,0.00,'Final'),(5476,20,0.00,0.00,'Final'),(5477,19,0.00,0.00,'Final'),(5478,21,0.00,0.00,'Final'),(5479,22,0.00,0.00,'Final'),(5480,23,0.00,0.00,'Final'),(5481,25,0.00,0.00,'Final'),(5482,24,0.00,0.00,'Final'),(5483,26,0.00,0.00,'Final'),(5484,27,0.00,0.00,'Final'),(5485,28,0.00,0.00,'Final'),(5486,29,0.00,0.00,'Final'),(5487,30,0.00,0.00,'Final'),(5488,32,0.00,0.00,'Final'),(5489,31,0.00,0.00,'Final'),(5490,33,0.00,0.00,'Final'),(5491,34,0.00,0.00,'Final'),(5492,35,0.00,0.00,'Final'),(5493,36,0.00,0.00,'Final'),(5494,38,0.00,0.00,'Final'),(5495,39,0.00,0.00,'Final'),(5496,37,0.00,0.00,'Final'),(5497,41,0.00,0.00,'Final'),(5498,40,0.00,0.00,'Final'),(5499,42,0.00,0.00,'Final'),(5500,43,0.00,0.00,'Final'),(5501,44,0.00,0.00,'Final'),(5502,45,0.00,0.00,'Final');
/*!40000 ALTER TABLE `exercises` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faculty`
--

DROP TABLE IF EXISTS `faculty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `faculty` (
  `UserId` int(11) NOT NULL,
  `Background` text NOT NULL,
  `FName` varchar(100) NOT NULL,
  `MName` varchar(100) NOT NULL,
  `LName` varchar(100) NOT NULL,
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculty`
--

LOCK TABLES `faculty` WRITE;
/*!40000 ALTER TABLE `faculty` DISABLE KEYS */;
INSERT INTO `faculty` VALUES (2,'qweqwe','qweqweas','asdsad','qweqe'),(4,'asdsad','asdas','qwewqe','asdsad'),(5,'qeqw','asd','aas','sd'),(6,'asda','qweqw','asd','asdasd'),(7,'Hayahay','Testfirst','Testmiddle','Testlast'),(8,'qwee','asdas','qweqwe','asdsd'),(9,'qweqwe','sdsad','qweqwe','sadasd'),(10,'asdasd','qwea','sdasd','qwewe');
/*!40000 ALTER TABLE `faculty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `final_exam`
--

DROP TABLE IF EXISTS `final_exam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `final_exam` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `StudGradeId` int(11) NOT NULL,
  `Score` float(5,2) DEFAULT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2923 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `final_exam`
--

LOCK TABLES `final_exam` WRITE;
/*!40000 ALTER TABLE `final_exam` DISABLE KEYS */;
INSERT INTO `final_exam` VALUES (2878,5,0.00,0.00),(2879,1,0.00,0.00),(2880,2,0.00,0.00),(2881,3,0.00,0.00),(2882,4,0.00,0.00),(2883,6,0.00,0.00),(2884,8,0.00,0.00),(2885,7,0.00,0.00),(2886,9,0.00,0.00),(2887,12,0.00,0.00),(2888,10,0.00,0.00),(2889,11,0.00,0.00),(2890,14,0.00,0.00),(2891,15,0.00,0.00),(2892,13,0.00,0.00),(2893,18,0.00,0.00),(2894,16,0.00,0.00),(2895,17,0.00,0.00),(2896,20,0.00,0.00),(2897,19,0.00,0.00),(2898,21,0.00,0.00),(2899,22,0.00,0.00),(2900,23,0.00,0.00),(2901,25,0.00,0.00),(2902,24,0.00,0.00),(2903,26,0.00,0.00),(2904,27,0.00,0.00),(2905,28,0.00,0.00),(2906,29,0.00,0.00),(2907,30,0.00,0.00),(2908,32,0.00,0.00),(2909,31,0.00,0.00),(2910,33,0.00,0.00),(2911,34,0.00,0.00),(2912,35,0.00,0.00),(2913,36,0.00,0.00),(2914,38,0.00,0.00),(2915,39,0.00,0.00),(2916,37,0.00,0.00),(2917,41,0.00,0.00),(2918,40,0.00,0.00),(2919,42,0.00,0.00),(2920,43,0.00,0.00),(2921,44,0.00,0.00),(2922,45,0.00,0.00);
/*!40000 ALTER TABLE `final_exam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grades`
--

DROP TABLE IF EXISTS `grades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grades` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `StudId` int(11) NOT NULL,
  `MidTermGrade` int(11) NOT NULL,
  `FinalGrade` int(11) NOT NULL,
  `TotalGrade` int(11) NOT NULL,
  `GradeRemarks` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grades`
--

LOCK TABLES `grades` WRITE;
/*!40000 ALTER TABLE `grades` DISABLE KEYS */;
INSERT INTO `grades` VALUES (1,1,0,0,0,''),(2,5,0,0,0,''),(3,3,0,0,0,''),(4,2,0,0,0,''),(5,4,0,0,0,''),(6,6,0,0,0,''),(7,8,0,0,0,''),(8,7,0,0,0,''),(9,9,0,0,0,''),(10,11,0,0,0,''),(11,12,0,0,0,''),(12,10,0,0,0,''),(13,15,0,0,0,''),(14,13,0,0,0,''),(15,14,0,0,0,''),(16,17,0,0,0,''),(17,18,0,0,0,''),(18,16,0,0,0,''),(19,20,0,0,0,''),(20,19,0,0,0,''),(21,21,0,0,0,''),(22,22,0,0,0,''),(23,23,0,0,0,''),(24,25,0,0,0,''),(25,24,0,0,0,''),(26,26,0,0,0,''),(27,27,0,0,0,''),(28,28,0,0,0,''),(29,29,0,0,0,''),(30,30,0,0,0,''),(31,32,0,0,0,''),(32,31,0,0,0,''),(33,33,0,0,0,''),(34,34,0,0,0,''),(35,35,0,0,0,''),(36,36,0,0,0,''),(37,37,0,0,0,''),(38,38,0,0,0,''),(39,39,0,0,0,''),(40,40,0,0,0,''),(41,41,0,0,0,''),(42,42,0,0,0,''),(43,43,0,0,0,''),(44,45,0,0,0,''),(45,44,0,0,0,'');
/*!40000 ALTER TABLE `grades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grades_id`
--

DROP TABLE IF EXISTS `grades_id`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grades_id` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `StudId` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grades_id`
--

LOCK TABLES `grades_id` WRITE;
/*!40000 ALTER TABLE `grades_id` DISABLE KEYS */;
INSERT INTO `grades_id` VALUES (1,1),(2,5),(3,3),(4,2),(5,4),(6,6),(7,8),(8,7),(9,9),(10,11),(11,12),(12,10),(13,15),(14,13),(15,14),(16,17),(17,18),(18,16),(19,20),(20,19),(21,21),(22,22),(23,23),(24,25),(25,24),(26,26),(27,27),(28,28),(29,29),(30,30),(31,32),(32,31),(33,33),(34,34),(35,35),(36,36),(37,37),(38,38),(39,39),(40,40),(41,41),(42,42),(43,43),(44,45),(45,44);
/*!40000 ALTER TABLE `grades_id` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grading_system`
--

DROP TABLE IF EXISTS `grading_system`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grading_system` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `1_00` varchar(10) NOT NULL,
  `1_25` varchar(10) NOT NULL,
  `1_50` varchar(10) NOT NULL,
  `1_75` varchar(10) NOT NULL,
  `2_00` varchar(10) NOT NULL,
  `2_25` varchar(10) NOT NULL,
  `2_50` varchar(10) NOT NULL,
  `2_75` varchar(10) NOT NULL,
  `3_00` varchar(10) NOT NULL,
  `5_00` varchar(10) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grading_system`
--

LOCK TABLES `grading_system` WRITE;
/*!40000 ALTER TABLE `grading_system` DISABLE KEYS */;
INSERT INTO `grading_system` VALUES (1,'97-100','94-96','91-93','88-90','85-87','82-84','79-81','76-78','75-75','0-74');
/*!40000 ALTER TABLE `grading_system` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lab_act`
--

DROP TABLE IF EXISTS `lab_act`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lab_act` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `StudGradeId` int(11) NOT NULL,
  `Score` float(5,2) DEFAULT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lab_act`
--

LOCK TABLES `lab_act` WRITE;
/*!40000 ALTER TABLE `lab_act` DISABLE KEYS */;
/*!40000 ALTER TABLE `lab_act` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `labmodperc`
--

DROP TABLE IF EXISTS `labmodperc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `labmodperc` (
  `Id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `PracExam` tinyint(4) NOT NULL,
  `Project` tinyint(4) NOT NULL,
  `Lab_MachineEx` tinyint(4) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `labmodperc`
--

LOCK TABLES `labmodperc` WRITE;
/*!40000 ALTER TABLE `labmodperc` DISABLE KEYS */;
INSERT INTO `labmodperc` VALUES (1,25,30,45);
/*!40000 ALTER TABLE `labmodperc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lectmodperc`
--

DROP TABLE IF EXISTS `lectmodperc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lectmodperc` (
  `Id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `Attendance` tinyint(4) NOT NULL,
  `ClassStanding` tinyint(4) NOT NULL,
  `QuizzesLExam` tinyint(4) NOT NULL,
  `MajorExam` tinyint(4) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lectmodperc`
--

LOCK TABLES `lectmodperc` WRITE;
/*!40000 ALTER TABLE `lectmodperc` DISABLE KEYS */;
INSERT INTO `lectmodperc` VALUES (1,10,20,30,40);
/*!40000 ALTER TABLE `lectmodperc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `long_exam`
--

DROP TABLE IF EXISTS `long_exam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `long_exam` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `StudGradeId` int(11) NOT NULL,
  `Score` float(5,2) DEFAULT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5503 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `long_exam`
--

LOCK TABLES `long_exam` WRITE;
/*!40000 ALTER TABLE `long_exam` DISABLE KEYS */;
INSERT INTO `long_exam` VALUES (5413,5,0.00,0.00,'Midterm'),(5414,1,0.00,0.00,'Midterm'),(5415,2,0.00,0.00,'Midterm'),(5416,3,0.00,0.00,'Midterm'),(5417,4,0.00,0.00,'Midterm'),(5418,6,0.00,0.00,'Midterm'),(5419,8,0.00,0.00,'Midterm'),(5420,7,0.00,0.00,'Midterm'),(5421,9,0.00,0.00,'Midterm'),(5422,12,0.00,0.00,'Midterm'),(5423,10,0.00,0.00,'Midterm'),(5424,11,0.00,0.00,'Midterm'),(5425,14,0.00,0.00,'Midterm'),(5426,15,0.00,0.00,'Midterm'),(5427,13,0.00,0.00,'Midterm'),(5428,18,0.00,0.00,'Midterm'),(5429,16,0.00,0.00,'Midterm'),(5430,17,0.00,0.00,'Midterm'),(5431,20,0.00,0.00,'Midterm'),(5432,19,0.00,0.00,'Midterm'),(5433,21,0.00,0.00,'Midterm'),(5434,22,0.00,0.00,'Midterm'),(5435,23,0.00,0.00,'Midterm'),(5436,25,0.00,0.00,'Midterm'),(5437,24,0.00,0.00,'Midterm'),(5438,26,0.00,0.00,'Midterm'),(5439,27,0.00,0.00,'Midterm'),(5440,28,0.00,0.00,'Midterm'),(5441,29,0.00,0.00,'Midterm'),(5442,30,0.00,0.00,'Midterm'),(5443,32,0.00,0.00,'Midterm'),(5444,31,0.00,0.00,'Midterm'),(5445,33,0.00,0.00,'Midterm'),(5446,34,0.00,0.00,'Midterm'),(5447,35,0.00,0.00,'Midterm'),(5448,36,0.00,0.00,'Midterm'),(5449,38,0.00,0.00,'Midterm'),(5450,39,0.00,0.00,'Midterm'),(5451,37,0.00,0.00,'Midterm'),(5452,41,0.00,0.00,'Midterm'),(5453,40,0.00,0.00,'Midterm'),(5454,42,0.00,0.00,'Midterm'),(5455,43,0.00,0.00,'Midterm'),(5456,44,0.00,0.00,'Midterm'),(5457,45,0.00,0.00,'Midterm'),(5458,5,0.00,0.00,'Final'),(5459,1,0.00,0.00,'Final'),(5460,2,0.00,0.00,'Final'),(5461,3,0.00,0.00,'Final'),(5462,4,0.00,0.00,'Final'),(5463,6,0.00,0.00,'Final'),(5464,8,0.00,0.00,'Final'),(5465,7,0.00,0.00,'Final'),(5466,9,0.00,0.00,'Final'),(5467,12,0.00,0.00,'Final'),(5468,10,0.00,0.00,'Final'),(5469,11,0.00,0.00,'Final'),(5470,14,0.00,0.00,'Final'),(5471,15,0.00,0.00,'Final'),(5472,13,0.00,0.00,'Final'),(5473,18,0.00,0.00,'Final'),(5474,16,0.00,0.00,'Final'),(5475,17,0.00,0.00,'Final'),(5476,20,0.00,0.00,'Final'),(5477,19,0.00,0.00,'Final'),(5478,21,0.00,0.00,'Final'),(5479,22,0.00,0.00,'Final'),(5480,23,0.00,0.00,'Final'),(5481,25,0.00,0.00,'Final'),(5482,24,0.00,0.00,'Final'),(5483,26,0.00,0.00,'Final'),(5484,27,0.00,0.00,'Final'),(5485,28,0.00,0.00,'Final'),(5486,29,0.00,0.00,'Final'),(5487,30,0.00,0.00,'Final'),(5488,32,0.00,0.00,'Final'),(5489,31,0.00,0.00,'Final'),(5490,33,0.00,0.00,'Final'),(5491,34,0.00,0.00,'Final'),(5492,35,0.00,0.00,'Final'),(5493,36,0.00,0.00,'Final'),(5494,38,0.00,0.00,'Final'),(5495,39,0.00,0.00,'Final'),(5496,37,0.00,0.00,'Final'),(5497,41,0.00,0.00,'Final'),(5498,40,0.00,0.00,'Final'),(5499,42,0.00,0.00,'Final'),(5500,43,0.00,0.00,'Final'),(5501,44,0.00,0.00,'Final'),(5502,45,0.00,0.00,'Final');
/*!40000 ALTER TABLE `long_exam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `midterm_exam`
--

DROP TABLE IF EXISTS `midterm_exam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `midterm_exam` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `StudGradeId` int(11) NOT NULL,
  `Score` float(5,2) DEFAULT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2923 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `midterm_exam`
--

LOCK TABLES `midterm_exam` WRITE;
/*!40000 ALTER TABLE `midterm_exam` DISABLE KEYS */;
INSERT INTO `midterm_exam` VALUES (2878,5,0.00,0.00),(2879,1,0.00,0.00),(2880,2,0.00,0.00),(2881,3,0.00,0.00),(2882,4,0.00,0.00),(2883,6,0.00,0.00),(2884,8,0.00,0.00),(2885,7,0.00,0.00),(2886,9,0.00,0.00),(2887,12,0.00,0.00),(2888,10,0.00,0.00),(2889,11,0.00,0.00),(2890,14,0.00,0.00),(2891,15,0.00,0.00),(2892,13,0.00,0.00),(2893,18,0.00,0.00),(2894,16,0.00,0.00),(2895,17,0.00,0.00),(2896,20,0.00,0.00),(2897,19,0.00,0.00),(2898,21,0.00,0.00),(2899,22,0.00,0.00),(2900,23,0.00,0.00),(2901,25,0.00,0.00),(2902,24,0.00,0.00),(2903,26,0.00,0.00),(2904,27,0.00,0.00),(2905,28,0.00,0.00),(2906,29,0.00,0.00),(2907,30,0.00,0.00),(2908,32,0.00,0.00),(2909,31,0.00,0.00),(2910,33,0.00,0.00),(2911,34,0.00,0.00),(2912,35,0.00,0.00),(2913,36,0.00,0.00),(2914,38,0.00,0.00),(2915,39,0.00,0.00),(2916,37,0.00,0.00),(2917,41,0.00,0.00),(2918,40,0.00,0.00),(2919,42,0.00,0.00),(2920,43,0.00,0.00),(2921,44,0.00,0.00),(2922,45,0.00,0.00);
/*!40000 ALTER TABLE `midterm_exam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `module_items`
--

DROP TABLE IF EXISTS `module_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `module_items` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ClassId` int(11) NOT NULL,
  `Module` varchar(60) DEFAULT NULL,
  `Items` smallint(6) DEFAULT '0',
  `TableType` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `module_items`
--

LOCK TABLES `module_items` WRITE;
/*!40000 ALTER TABLE `module_items` DISABLE KEYS */;
INSERT INTO `module_items` VALUES (31,1,'mt_att_per',0,'Lec'),(32,1,'mt_cs_assign_1_',0,'Lec'),(33,1,'mt_cs_sw_1',0,'Lec'),(34,1,'mt_cs_ex_1',0,'Lec'),(35,1,'mt_cs_rec_1',0,'Lec'),(36,1,'mt_cs_total',0,'Lec'),(37,1,'mt_cs_per',0,'Lec'),(38,1,'mt_qz_quiz_1',0,'Lec'),(39,1,'mt_qz_le_1',0,'Lec'),(40,1,'mt_qz_total',0,'Lec'),(41,1,'mt_qz_per',0,'Lec'),(42,1,'mt_exam_score',0,'Lec'),(43,1,'mt_exam_per',0,'Lec'),(44,1,'mt_mt_per',0,'Lec'),(45,1,'mt_mt_rating',0,'Lec'),(46,1,'ft_att_per',0,'Lec'),(47,1,'ft_cs_assign_1_',0,'Lec'),(48,1,'ft_cs_sw_1',0,'Lec'),(49,1,'ft_cs_ex_1',0,'Lec'),(50,1,'ft_cs_rec_1',0,'Lec'),(51,1,'ft_cs_total',0,'Lec'),(52,1,'ft_cs_per',0,'Lec'),(53,1,'ft_qz_quiz_1',0,'Lec'),(54,1,'ft_qz_le_1',0,'Lec'),(55,1,'ft_qz_total',0,'Lec'),(56,1,'ft_qz_per',0,'Lec'),(57,1,'ft_exam_score',0,'Lec'),(58,1,'ft_exam_per',0,'Lec'),(59,1,'ft_ft_per',0,'Lec'),(60,1,'ft_ft_rating',0,'Lec');
/*!40000 ALTER TABLE `module_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moduleitems`
--

DROP TABLE IF EXISTS `moduleitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `moduleitems` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ClassId` int(11) NOT NULL,
  `AttDate` date NOT NULL,
  `AssignNum` smallint(6) NOT NULL,
  `AssignItems` smallint(6) NOT NULL,
  `SeatworkNum` smallint(6) NOT NULL,
  `SeatworkItems` smallint(6) NOT NULL,
  `ExNum` smallint(6) NOT NULL,
  `ExItems` smallint(6) NOT NULL,
  `LabNum` smallint(6) NOT NULL,
  `LabItems` smallint(6) NOT NULL,
  `RecitationNum` smallint(6) NOT NULL,
  `RecitationItems` smallint(6) NOT NULL,
  `ProjINum` smallint(6) NOT NULL,
  `ProjItems` smallint(6) NOT NULL,
  `QuizNum` smallint(6) NOT NULL,
  `QuizItems` smallint(6) NOT NULL,
  `LExamNum` smallint(6) NOT NULL,
  `LExamItems` smallint(6) NOT NULL,
  `PracExamNum` smallint(6) NOT NULL,
  `PracExamItems` int(11) NOT NULL,
  `MExamItems` smallint(6) NOT NULL,
  `FExamItems` smallint(6) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moduleitems`
--

LOCK TABLES `moduleitems` WRITE;
/*!40000 ALTER TABLE `moduleitems` DISABLE KEYS */;
/*!40000 ALTER TABLE `moduleitems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prac_exam`
--

DROP TABLE IF EXISTS `prac_exam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prac_exam` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `StudGradeId` int(11) NOT NULL,
  `Score` float(5,2) DEFAULT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prac_exam`
--

LOCK TABLES `prac_exam` WRITE;
/*!40000 ALTER TABLE `prac_exam` DISABLE KEYS */;
/*!40000 ALTER TABLE `prac_exam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `StudGradeId` int(11) NOT NULL,
  `Score` float(5,2) DEFAULT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quizzes`
--

DROP TABLE IF EXISTS `quizzes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quizzes` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `StudGradeId` int(11) NOT NULL,
  `Score` float(5,2) DEFAULT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5593 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quizzes`
--

LOCK TABLES `quizzes` WRITE;
/*!40000 ALTER TABLE `quizzes` DISABLE KEYS */;
INSERT INTO `quizzes` VALUES (5503,5,0.00,0.00,'Midterm'),(5504,1,0.00,0.00,'Midterm'),(5505,2,0.00,0.00,'Midterm'),(5506,3,0.00,0.00,'Midterm'),(5507,4,0.00,0.00,'Midterm'),(5508,6,0.00,0.00,'Midterm'),(5509,8,0.00,0.00,'Midterm'),(5510,7,0.00,0.00,'Midterm'),(5511,9,0.00,0.00,'Midterm'),(5512,12,0.00,0.00,'Midterm'),(5513,10,0.00,0.00,'Midterm'),(5514,11,0.00,0.00,'Midterm'),(5515,14,0.00,0.00,'Midterm'),(5516,15,0.00,0.00,'Midterm'),(5517,13,0.00,0.00,'Midterm'),(5518,18,0.00,0.00,'Midterm'),(5519,16,0.00,0.00,'Midterm'),(5520,17,0.00,0.00,'Midterm'),(5521,20,0.00,0.00,'Midterm'),(5522,19,0.00,0.00,'Midterm'),(5523,21,0.00,0.00,'Midterm'),(5524,22,0.00,0.00,'Midterm'),(5525,23,0.00,0.00,'Midterm'),(5526,25,0.00,0.00,'Midterm'),(5527,24,0.00,0.00,'Midterm'),(5528,26,0.00,0.00,'Midterm'),(5529,27,0.00,0.00,'Midterm'),(5530,28,0.00,0.00,'Midterm'),(5531,29,0.00,0.00,'Midterm'),(5532,30,0.00,0.00,'Midterm'),(5533,32,0.00,0.00,'Midterm'),(5534,31,0.00,0.00,'Midterm'),(5535,33,0.00,0.00,'Midterm'),(5536,34,0.00,0.00,'Midterm'),(5537,35,0.00,0.00,'Midterm'),(5538,36,0.00,0.00,'Midterm'),(5539,38,0.00,0.00,'Midterm'),(5540,39,0.00,0.00,'Midterm'),(5541,37,0.00,0.00,'Midterm'),(5542,41,0.00,0.00,'Midterm'),(5543,40,0.00,0.00,'Midterm'),(5544,42,0.00,0.00,'Midterm'),(5545,43,0.00,0.00,'Midterm'),(5546,44,0.00,0.00,'Midterm'),(5547,45,0.00,0.00,'Midterm'),(5548,5,0.00,0.00,'Final'),(5549,1,0.00,0.00,'Final'),(5550,2,0.00,0.00,'Final'),(5551,3,0.00,0.00,'Final'),(5552,4,0.00,0.00,'Final'),(5553,6,0.00,0.00,'Final'),(5554,8,0.00,0.00,'Final'),(5555,7,0.00,0.00,'Final'),(5556,9,0.00,0.00,'Final'),(5557,12,0.00,0.00,'Final'),(5558,10,0.00,0.00,'Final'),(5559,11,0.00,0.00,'Final'),(5560,14,0.00,0.00,'Final'),(5561,15,0.00,0.00,'Final'),(5562,13,0.00,0.00,'Final'),(5563,18,0.00,0.00,'Final'),(5564,16,0.00,0.00,'Final'),(5565,17,0.00,0.00,'Final'),(5566,20,0.00,0.00,'Final'),(5567,19,0.00,0.00,'Final'),(5568,21,0.00,0.00,'Final'),(5569,22,0.00,0.00,'Final'),(5570,23,0.00,0.00,'Final'),(5571,25,0.00,0.00,'Final'),(5572,24,0.00,0.00,'Final'),(5573,26,0.00,0.00,'Final'),(5574,27,0.00,0.00,'Final'),(5575,28,0.00,0.00,'Final'),(5576,29,0.00,0.00,'Final'),(5577,30,0.00,0.00,'Final'),(5578,32,0.00,0.00,'Final'),(5579,31,0.00,0.00,'Final'),(5580,33,0.00,0.00,'Final'),(5581,34,0.00,0.00,'Final'),(5582,35,0.00,0.00,'Final'),(5583,36,0.00,0.00,'Final'),(5584,38,0.00,0.00,'Final'),(5585,39,0.00,0.00,'Final'),(5586,37,0.00,0.00,'Final'),(5587,41,0.00,0.00,'Final'),(5588,40,0.00,0.00,'Final'),(5589,42,0.00,0.00,'Final'),(5590,43,0.00,0.00,'Final'),(5591,44,0.00,0.00,'Final'),(5592,45,0.00,0.00,'Final');
/*!40000 ALTER TABLE `quizzes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recitation`
--

DROP TABLE IF EXISTS `recitation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recitation` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `StudGradeId` int(11) NOT NULL,
  `Score` float(5,2) DEFAULT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5503 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recitation`
--

LOCK TABLES `recitation` WRITE;
/*!40000 ALTER TABLE `recitation` DISABLE KEYS */;
INSERT INTO `recitation` VALUES (5413,5,0.00,0.00,'Midterm'),(5414,1,0.00,0.00,'Midterm'),(5415,2,0.00,0.00,'Midterm'),(5416,3,0.00,0.00,'Midterm'),(5417,4,0.00,0.00,'Midterm'),(5418,6,0.00,0.00,'Midterm'),(5419,8,0.00,0.00,'Midterm'),(5420,7,0.00,0.00,'Midterm'),(5421,9,0.00,0.00,'Midterm'),(5422,12,0.00,0.00,'Midterm'),(5423,10,0.00,0.00,'Midterm'),(5424,11,0.00,0.00,'Midterm'),(5425,14,0.00,0.00,'Midterm'),(5426,15,0.00,0.00,'Midterm'),(5427,13,0.00,0.00,'Midterm'),(5428,18,0.00,0.00,'Midterm'),(5429,16,0.00,0.00,'Midterm'),(5430,17,0.00,0.00,'Midterm'),(5431,20,0.00,0.00,'Midterm'),(5432,19,0.00,0.00,'Midterm'),(5433,21,0.00,0.00,'Midterm'),(5434,22,0.00,0.00,'Midterm'),(5435,23,0.00,0.00,'Midterm'),(5436,25,0.00,0.00,'Midterm'),(5437,24,0.00,0.00,'Midterm'),(5438,26,0.00,0.00,'Midterm'),(5439,27,0.00,0.00,'Midterm'),(5440,28,0.00,0.00,'Midterm'),(5441,29,0.00,0.00,'Midterm'),(5442,30,0.00,0.00,'Midterm'),(5443,32,0.00,0.00,'Midterm'),(5444,31,0.00,0.00,'Midterm'),(5445,33,0.00,0.00,'Midterm'),(5446,34,0.00,0.00,'Midterm'),(5447,35,0.00,0.00,'Midterm'),(5448,36,0.00,0.00,'Midterm'),(5449,38,0.00,0.00,'Midterm'),(5450,39,0.00,0.00,'Midterm'),(5451,37,0.00,0.00,'Midterm'),(5452,41,0.00,0.00,'Midterm'),(5453,40,0.00,0.00,'Midterm'),(5454,42,0.00,0.00,'Midterm'),(5455,43,0.00,0.00,'Midterm'),(5456,44,0.00,0.00,'Midterm'),(5457,45,0.00,0.00,'Midterm'),(5458,5,0.00,0.00,'Final'),(5459,1,0.00,0.00,'Final'),(5460,2,0.00,0.00,'Final'),(5461,3,0.00,0.00,'Final'),(5462,4,0.00,0.00,'Final'),(5463,6,0.00,0.00,'Final'),(5464,8,0.00,0.00,'Final'),(5465,7,0.00,0.00,'Final'),(5466,9,0.00,0.00,'Final'),(5467,12,0.00,0.00,'Final'),(5468,10,0.00,0.00,'Final'),(5469,11,0.00,0.00,'Final'),(5470,14,0.00,0.00,'Final'),(5471,15,0.00,0.00,'Final'),(5472,13,0.00,0.00,'Final'),(5473,18,0.00,0.00,'Final'),(5474,16,0.00,0.00,'Final'),(5475,17,0.00,0.00,'Final'),(5476,20,0.00,0.00,'Final'),(5477,19,0.00,0.00,'Final'),(5478,21,0.00,0.00,'Final'),(5479,22,0.00,0.00,'Final'),(5480,23,0.00,0.00,'Final'),(5481,25,0.00,0.00,'Final'),(5482,24,0.00,0.00,'Final'),(5483,26,0.00,0.00,'Final'),(5484,27,0.00,0.00,'Final'),(5485,28,0.00,0.00,'Final'),(5486,29,0.00,0.00,'Final'),(5487,30,0.00,0.00,'Final'),(5488,32,0.00,0.00,'Final'),(5489,31,0.00,0.00,'Final'),(5490,33,0.00,0.00,'Final'),(5491,34,0.00,0.00,'Final'),(5492,35,0.00,0.00,'Final'),(5493,36,0.00,0.00,'Final'),(5494,38,0.00,0.00,'Final'),(5495,39,0.00,0.00,'Final'),(5496,37,0.00,0.00,'Final'),(5497,41,0.00,0.00,'Final'),(5498,40,0.00,0.00,'Final'),(5499,42,0.00,0.00,'Final'),(5500,43,0.00,0.00,'Final'),(5501,44,0.00,0.00,'Final'),(5502,45,0.00,0.00,'Final');
/*!40000 ALTER TABLE `recitation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seatwork`
--

DROP TABLE IF EXISTS `seatwork`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seatwork` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `StudGradeId` int(11) NOT NULL,
  `Score` float(5,2) DEFAULT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5503 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seatwork`
--

LOCK TABLES `seatwork` WRITE;
/*!40000 ALTER TABLE `seatwork` DISABLE KEYS */;
INSERT INTO `seatwork` VALUES (5413,5,0.00,0.00,'Midterm'),(5414,1,0.00,0.00,'Midterm'),(5415,2,0.00,0.00,'Midterm'),(5416,3,0.00,0.00,'Midterm'),(5417,4,0.00,0.00,'Midterm'),(5418,6,0.00,0.00,'Midterm'),(5419,8,0.00,0.00,'Midterm'),(5420,7,0.00,0.00,'Midterm'),(5421,9,0.00,0.00,'Midterm'),(5422,12,0.00,0.00,'Midterm'),(5423,10,0.00,0.00,'Midterm'),(5424,11,0.00,0.00,'Midterm'),(5425,14,0.00,0.00,'Midterm'),(5426,15,0.00,0.00,'Midterm'),(5427,13,0.00,0.00,'Midterm'),(5428,18,0.00,0.00,'Midterm'),(5429,16,0.00,0.00,'Midterm'),(5430,17,0.00,0.00,'Midterm'),(5431,20,0.00,0.00,'Midterm'),(5432,19,0.00,0.00,'Midterm'),(5433,21,0.00,0.00,'Midterm'),(5434,22,0.00,0.00,'Midterm'),(5435,23,0.00,0.00,'Midterm'),(5436,25,0.00,0.00,'Midterm'),(5437,24,0.00,0.00,'Midterm'),(5438,26,0.00,0.00,'Midterm'),(5439,27,0.00,0.00,'Midterm'),(5440,28,0.00,0.00,'Midterm'),(5441,29,0.00,0.00,'Midterm'),(5442,30,0.00,0.00,'Midterm'),(5443,32,0.00,0.00,'Midterm'),(5444,31,0.00,0.00,'Midterm'),(5445,33,0.00,0.00,'Midterm'),(5446,34,0.00,0.00,'Midterm'),(5447,35,0.00,0.00,'Midterm'),(5448,36,0.00,0.00,'Midterm'),(5449,38,0.00,0.00,'Midterm'),(5450,39,0.00,0.00,'Midterm'),(5451,37,0.00,0.00,'Midterm'),(5452,41,0.00,0.00,'Midterm'),(5453,40,0.00,0.00,'Midterm'),(5454,42,0.00,0.00,'Midterm'),(5455,43,0.00,0.00,'Midterm'),(5456,44,0.00,0.00,'Midterm'),(5457,45,0.00,0.00,'Midterm'),(5458,5,0.00,0.00,'Final'),(5459,1,0.00,0.00,'Final'),(5460,2,0.00,0.00,'Final'),(5461,3,0.00,0.00,'Final'),(5462,4,0.00,0.00,'Final'),(5463,6,0.00,0.00,'Final'),(5464,8,0.00,0.00,'Final'),(5465,7,0.00,0.00,'Final'),(5466,9,0.00,0.00,'Final'),(5467,12,0.00,0.00,'Final'),(5468,10,0.00,0.00,'Final'),(5469,11,0.00,0.00,'Final'),(5470,14,0.00,0.00,'Final'),(5471,15,0.00,0.00,'Final'),(5472,13,0.00,0.00,'Final'),(5473,18,0.00,0.00,'Final'),(5474,16,0.00,0.00,'Final'),(5475,17,0.00,0.00,'Final'),(5476,20,0.00,0.00,'Final'),(5477,19,0.00,0.00,'Final'),(5478,21,0.00,0.00,'Final'),(5479,22,0.00,0.00,'Final'),(5480,23,0.00,0.00,'Final'),(5481,25,0.00,0.00,'Final'),(5482,24,0.00,0.00,'Final'),(5483,26,0.00,0.00,'Final'),(5484,27,0.00,0.00,'Final'),(5485,28,0.00,0.00,'Final'),(5486,29,0.00,0.00,'Final'),(5487,30,0.00,0.00,'Final'),(5488,32,0.00,0.00,'Final'),(5489,31,0.00,0.00,'Final'),(5490,33,0.00,0.00,'Final'),(5491,34,0.00,0.00,'Final'),(5492,35,0.00,0.00,'Final'),(5493,36,0.00,0.00,'Final'),(5494,38,0.00,0.00,'Final'),(5495,39,0.00,0.00,'Final'),(5496,37,0.00,0.00,'Final'),(5497,41,0.00,0.00,'Final'),(5498,40,0.00,0.00,'Final'),(5499,42,0.00,0.00,'Final'),(5500,43,0.00,0.00,'Final'),(5501,44,0.00,0.00,'Final'),(5502,45,0.00,0.00,'Final');
/*!40000 ALTER TABLE `seatwork` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `students` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ClassId` int(11) NOT NULL,
  `FName` varchar(100) NOT NULL,
  `MName` varchar(100) NOT NULL,
  `LName` varchar(100) NOT NULL,
  `StudentNumber` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=132 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,1,'marrynel ','maglasang','abonalla','2014-02145-MN-0'),(2,1,'john paul ','flores','avila','2014-00767-MN-0'),(3,1,'mitzi ','pascual','balbaboco','2014-07793-MN-0'),(4,1,'jasmine jaya ','sesbreÑo','belo','2014-00681-MN-0'),(5,1,'jonnel ','exclamado','bernal','2014-01498-MN-0'),(6,1,'rexc paul ','delmoro','bordeos','2014-01916-MN-0'),(7,1,'roma bethany ','cantila','callora','2014-02750-MN-0'),(8,1,'venmar ','cayangyang','cantilado','2014-03737-MN-0'),(9,1,'john lawrence ','aguilar','cernal','2014-02285-MN-0'),(10,1,'christine joyce ','beltran','cillo','2014-03594-MN-0'),(11,1,'jerome ','cerbito','colapo','2014-03201-MN-0'),(12,1,'james rowel ','bautista','corpuz','2014-01339-MN-0'),(13,1,'chelsea kaitlyn ','cruz','cruz','2014-03263-MN-0'),(14,1,'ma. aubrey ','alvaran','danga','2014-02196-MN-0'),(15,1,'niÑo ','pineda','diaz','2014-00570-MN-0'),(16,1,'james angelo ','suarez','ergina','2014-06233-MN-0'),(17,1,'christian alvin ','fontarum','fadera','2014-07577-MN-0'),(18,1,'mark julius ','fernando','galauran','2014-00572-MN-0'),(19,1,'stephanie lorraine ','torres','garcia','2014-04513-MN-0'),(20,1,'ernest philip ','aguilar','guevara','2014-03951-MN-0'),(21,1,'vicheartzel rose ','linguis','jayson','2014-02878-MN-0'),(22,1,'jonathan ','ente','jimenez','2014-00637-MN-0'),(23,1,'justine lloyd ','salva','jose','2014-02838-MN-0'),(24,1,'patrick ','bueno','lara','2014-01836-MN-0'),(25,1,'bryan keith ','parreÑo','layderos','2014-03628-MN-0'),(26,1,'maria geneda ','lascano','layno','2014-03116-MN-0'),(27,1,'angelo joshua ','nibut','lomboy','2014-03979-MN-0'),(28,1,'john benedict ','aguirre','maculada','2014-00640-MN-0'),(29,1,'trixie shane ','gabriel','maningding','2014-00396-MN-0'),(30,1,'rex cedric ','sagat','manuel','2014-06525-MN-0'),(31,1,'joshua ','reyes','medina','2014-03877-MN-0'),(32,1,'james ','soliva','mendoza','2014-06111-MN-0'),(33,1,'jared ','barrameda','ochoa','2014-00232-MN-0'),(34,1,'marco ','realuyo','orencia','2013-05811-MN-0'),(35,1,'elaiza mae ','diaz','ortega','2014-01909-MN-0'),(36,1,'al rey ','gutierrez','panilagao','2014-00380-MN-0'),(37,1,'christian ','nesta','paralejas','2014-02728-MN-0'),(38,1,'aldwin ','cadusale','pelayo','2014-00842-MN-0'),(39,1,'ernest nicole ','villaro','penales','2014-07591-MN-0'),(40,1,'halen dave ','untalan','perez','2014-05798-MN-0'),(41,1,'rusell jane ','sacdalan','quitain','2014-01701-MN-0'),(42,1,'steven joe ','lomeda','rebullido','2014-01078-MN-0'),(43,1,'clarisse ann ','sending','temporosa','2014-02062-MN-0'),(44,1,'ryan jasper ','villapando','tupaz','2014-01306-MN-0'),(45,1,'philip nathan ','paler','yaun','2014-03599-MN-0'),(46,2,'eleazar ','rueda','aÑo','2013-06388-MN-0'),(47,2,'rafael christian sto. ','domingo','aguilar','2013-07302-MN-0'),(48,2,'jazz joel de ','guzman','alvarez','2013-00782-MN-0'),(49,2,'jon vincent ','austria','angat','2013-01169-MN-0'),(50,2,'daryl don ','armenion','arce','2013-03923-MN-0'),(51,2,'michael eugene ','maquiÑana','asinas','2013-05973-MN-0'),(52,2,'kimberly ','medina','azul','2013-01565-MN-0'),(53,2,'princess nicole ','','bacay','2013-06954-MN-0'),(54,2,'ryan ','ginez','baronia','2013-00912-MN-0'),(55,2,'john jerald ','gutierrez','bautista','2013-06258-MN-0'),(56,2,'jason edward ','vergara','bio','2013-04376-MN-0'),(57,2,'vince orvhict ','villena','blando','2013-07806-MN-0'),(58,2,'reynell ','cortiguierra','bobihis','2013-05528-MN-0'),(59,2,'francess marie ','amis','busalpa','2013-06206-MN-0'),(60,2,'humphrey ','buan','calalin jr.','2013-03512-MN-0'),(61,2,'ephraim joel ','martinez','capistrano','2013-03669-MN-0'),(62,2,'jon rhozze ','panlaqui','de jesus','2013-03756-MN-0'),(63,2,'aldrin ','nadres','de ramos','2013-02290-MN-0'),(64,2,'neil carlo ','baluyot','del mundo','2013-00900-MN-0'),(65,2,'jessieca ','baldonado','diano','2013-01442-MN-0'),(66,2,'maria aubrey ','almiï¿½e','eleria','2013-02476-MN-0'),(67,2,'jerwin russell ','','esmalla','2013-03169-MN-0'),(68,2,'prince deozel ','mercado','espiritu','2013-03132-MN-0'),(69,2,'mark joshua ','olegario','francisco','2013-02256-MN-0'),(70,2,'judylene ','umali','gabia','2013-06070-MN-0'),(71,2,'lloyd ','gomez','gabriel','2013-01450-MN-0'),(72,2,'clarisse ','ibasco','ibasco','2013-03193-MN-0'),(73,2,'reynaldo ','acilo','ilagan','2013-01364-MN-0'),(74,2,'sonny boy de ','luna','italio','2013-06398-MN-0'),(75,2,'joseph ','rojas','lat','2013-07452-MN-0'),(76,2,'christine  joyce ','pastrana','llanes','2013-03144-MN-0'),(77,2,'kenneth ','marin','lobaton','2013-03563-MN-0'),(78,2,'florevi dela ','cruz','lopez','2013-02641-MN-0'),(79,2,'merynelle ','dichoso','lopez','2013-03358-MN-0'),(80,2,'abigail dela ','torre','macasinag','2013-01451-MN-0'),(81,2,'john karl ','labiste','malabanan','2013-00817-MN-0'),(82,2,'john peter ','falculan','mendoza','2013-06330-MN-0'),(83,2,'dale ivan ','mora','merza','2013-01445-MN-0'),(84,2,'john israel ','mellendrez','mesajon','2013-03008-MN-0'),(85,2,'miguelito ','labrador','mullion','2013-05440-MN-0'),(86,2,'rollen joy ','sarmiento','nabia','2013-03336-MN-0'),(87,2,'jennilene ','ausa','pol','2013-01726-MN-0'),(88,2,'rick anthony ','espino','policarpio','2013-07420-MN-0'),(89,2,'kevin red ','bersamina','salamat','2013-05800-MN-0'),(90,2,'rofherson ','canones','suzon','2013-00785-MN-0'),(91,2,'mary mariel ','martinez','teodoro','2013-02176-MN-0'),(92,2,'miguel san ','buenaventura','turqueza','2013-04658-MN-0'),(93,2,'rovien ','palmes','vargas','2013-03581-MN-0'),(94,2,'nica chloie ','garcia','yecla','2013-04190-MN-0'),(95,2,'hanah mae ','pilapil','zamora','2013-00734-MN-0'),(96,3,'marcelo ','ragay','anzano','2011-00255-MN-0'),(97,3,'lorenzo ','sabadlan','arcinue','2011-03709-MN-0'),(98,3,'joeden ','gonzales','asuncion','2011-03478-MN-0'),(99,3,'julius ','parnay','balais','2011-02830-MN-0'),(100,3,'angelica mae ','aquino','banaag','2011-03161-MN-0'),(101,3,'mark oliver ','esteban','cahinde','2011-00064-MN-0'),(102,3,'noel ','almaden','cambel jr.','2011-00616-MN-0'),(103,3,'jess ','jonilas','canaway','2011-00245-MN-0'),(104,3,'claire ','tumbaga','capio','2011-01989-MN-0'),(105,3,'jherick ','bacagan','daso','2011-06816-MN-0'),(106,3,'rhia joyce ','ortiz','eden','2011-03796-MN-0'),(107,3,'lara mae ','domingo','edles','2011-01918-MN-0'),(108,3,'joanna marie ','abule','ellarina','2011-01858-MN-0'),(109,3,'carol shanti ','garcia','estolas','2011-02357-MN-0'),(110,3,'justin ','cornelio','flores','2011-00090-MN-0'),(111,3,'micah mariel ','visto','garcia','2011-04453-MN-0'),(112,3,'athanasios ','sabado','go','2008-00242-MN-0'),(113,3,'romulo ','baltazar','jaravata jr.','2011-01709-MN-0'),(114,3,'genesis yeshua ','carreon','lim','2011-02165-MN-0'),(115,3,'ralph ','tadia','llaguno','2011-03127-MN-0'),(116,3,'romelia ','agustin','lutrania','2012-11229-MN-1'),(117,3,'jose mari ','cruz','manio','2011-05187-MN-0'),(118,3,'christine ','rubante','manrique','2011-00049-MN-0'),(119,3,'karolyn ','amaya','maquilan','2011-04515-MN-0'),(120,3,'john paul ','veral','mayo','2011-03256-MN-0'),(121,3,'arian ','sario','nolasco','2011-01115-MN-0'),(122,3,'john michael ','gonzales','nolasco','2011-00043-MN-0'),(123,3,'jerome ','laserna','olavario','2011-05554-MN-0'),(124,3,'gellie ','tiburcio','quiatchon','2011-01241-MN-0'),(125,3,'beatrice nicole ','ramos','quindoyos','2011-03262-MN-0'),(126,3,'lee arvi ','banaag','real','2011-00045-MN-0'),(127,3,'john paul ','cruz','resuello','2011-00046-MN-0'),(128,3,'rafael john ','boltron','surnet','2011-05609-MN-0'),(129,3,'luisito jr. ','nebab','tamone','2011-04053-MN-0'),(130,3,'ramil ','lucot','villanueva','2011-02005-MN-0'),(131,3,'wilfredo ','panis','villanueva iii','2011-01971-MN-0');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subjects` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NOT NULL,
  `SubjectTitle` varchar(100) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES (1,4,'COEN 3054 Data Structures And Algorithm Analysis'),(2,4,'COEN 3134 Logic Circuits And Switching Theory'),(3,4,'BSCOE Elec4 Bscoe Elective 4');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `UserType` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `UserDept` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `LoginHist` datetime NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `Id` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'arian0987','21232f297a57a5a743894a0e4a801fc3','Administrator','CpE','0000-00-00 00:00:00'),(4,'faculty','d561c7c03c1f2831904823a95835ff5f','Faculty','CpE','0000-00-00 00:00:00'),(6,'chair','74cd1e4ab5a57469ddae6fafe5550379','Chairperson','CpE','0000-00-00 00:00:00'),(11,'teacher','827ccb0eea8a706c4c34a16891f84e7b','Faculty','CpE','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-03-22  4:38:51
