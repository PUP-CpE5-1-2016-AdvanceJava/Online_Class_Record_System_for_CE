-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 20, 2016 at 04:17 PM
-- Server version: 5.6.21
-- PHP Version: 5.5.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `online_class_record_system_for_ce`
--

-- --------------------------------------------------------

--
-- Table structure for table `assignment`
--

CREATE TABLE IF NOT EXISTS `assignment` (
`Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `AssignNum` int(11) NOT NULL,
  `Score` float(5,2) NOT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assignment`
--

INSERT INTO `assignment` (`Id`, `StudId`, `AssignNum`, `Score`, `Rating`, `Sem`) VALUES
(1, 1, 1, 0.00, NULL, 'Midterm'),
(2, 1, 1, 0.00, NULL, 'Finals'),
(3, 2, 1, 0.00, NULL, 'Midterm'),
(4, 2, 1, 0.00, NULL, 'Finals'),
(5, 3, 1, 0.00, NULL, 'Midterm'),
(6, 3, 1, 0.00, NULL, 'Finals'),
(7, 4, 1, 0.00, NULL, 'Midterm'),
(8, 4, 1, 0.00, NULL, 'Finals'),
(9, 5, 1, 0.00, NULL, 'Midterm'),
(10, 5, 1, 0.00, NULL, 'Finals'),
(11, 6, 1, 0.00, NULL, 'Midterm'),
(12, 6, 1, 0.00, NULL, 'Finals'),
(13, 7, 1, 0.00, NULL, 'Midterm'),
(14, 7, 1, 0.00, NULL, 'Finals'),
(15, 8, 1, 0.00, NULL, 'Midterm'),
(16, 8, 1, 0.00, NULL, 'Finals'),
(17, 9, 1, 0.00, NULL, 'Midterm'),
(18, 9, 1, 0.00, NULL, 'Finals'),
(19, 10, 1, 0.00, NULL, 'Midterm'),
(20, 10, 1, 0.00, NULL, 'Finals'),
(21, 11, 1, 0.00, NULL, 'Midterm'),
(22, 11, 1, 0.00, NULL, 'Finals'),
(23, 12, 1, 0.00, NULL, 'Midterm'),
(24, 12, 1, 0.00, NULL, 'Finals'),
(25, 13, 1, 0.00, NULL, 'Midterm'),
(26, 13, 1, 0.00, NULL, 'Finals'),
(27, 14, 1, 0.00, NULL, 'Midterm'),
(28, 14, 1, 0.00, NULL, 'Finals'),
(29, 15, 1, 0.00, NULL, 'Midterm'),
(30, 15, 1, 0.00, NULL, 'Finals'),
(31, 16, 1, 0.00, NULL, 'Midterm'),
(32, 16, 1, 0.00, NULL, 'Finals'),
(33, 17, 1, 0.00, NULL, 'Midterm'),
(34, 17, 1, 0.00, NULL, 'Finals'),
(35, 18, 1, 0.00, NULL, 'Midterm'),
(36, 18, 1, 0.00, NULL, 'Finals'),
(37, 19, 1, 0.00, NULL, 'Midterm'),
(38, 19, 1, 0.00, NULL, 'Finals'),
(39, 20, 1, 0.00, NULL, 'Midterm'),
(40, 20, 1, 0.00, NULL, 'Finals'),
(41, 21, 1, 0.00, NULL, 'Midterm'),
(42, 21, 1, 0.00, NULL, 'Finals'),
(43, 22, 1, 0.00, NULL, 'Midterm'),
(44, 22, 1, 0.00, NULL, 'Finals'),
(45, 23, 1, 0.00, NULL, 'Midterm'),
(46, 23, 1, 0.00, NULL, 'Finals'),
(47, 24, 1, 0.00, NULL, 'Midterm'),
(48, 24, 1, 0.00, NULL, 'Finals'),
(49, 25, 1, 0.00, NULL, 'Midterm'),
(50, 25, 1, 0.00, NULL, 'Finals'),
(51, 26, 1, 0.00, NULL, 'Midterm'),
(52, 26, 1, 0.00, NULL, 'Finals'),
(53, 27, 1, 0.00, NULL, 'Midterm'),
(54, 27, 1, 0.00, NULL, 'Finals'),
(55, 28, 1, 0.00, NULL, 'Midterm'),
(56, 28, 1, 0.00, NULL, 'Finals'),
(57, 29, 1, 0.00, NULL, 'Midterm'),
(58, 29, 1, 0.00, NULL, 'Finals'),
(59, 30, 1, 0.00, NULL, 'Midterm'),
(60, 30, 1, 0.00, NULL, 'Finals'),
(61, 31, 1, 0.00, NULL, 'Midterm'),
(62, 31, 1, 0.00, NULL, 'Finals'),
(63, 32, 1, 0.00, NULL, 'Midterm'),
(64, 32, 1, 0.00, NULL, 'Finals'),
(65, 33, 1, 0.00, NULL, 'Midterm'),
(66, 33, 1, 0.00, NULL, 'Finals'),
(67, 34, 1, 0.00, NULL, 'Midterm'),
(68, 34, 1, 0.00, NULL, 'Finals'),
(69, 35, 1, 0.00, NULL, 'Midterm'),
(70, 35, 1, 0.00, NULL, 'Finals'),
(71, 36, 1, 0.00, NULL, 'Midterm'),
(72, 36, 1, 0.00, NULL, 'Finals');

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE IF NOT EXISTS `attendance` (
`Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `AttNum` int(11) NOT NULL,
  `Status` varchar(50) DEFAULT NULL,
  `Score` varchar(10) DEFAULT NULL,
  `Rating` float DEFAULT NULL,
  `Sem` varchar(50) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`Id`, `StudId`, `AttNum`, `Status`, `Score`, `Rating`, `Sem`) VALUES
(1, 1, 1, NULL, '0', NULL, 'Midterm'),
(2, 1, 1, NULL, '0', NULL, 'Finals'),
(3, 2, 1, NULL, '0', NULL, 'Midterm'),
(4, 2, 1, NULL, '0', NULL, 'Finals'),
(5, 3, 1, NULL, '0', NULL, 'Midterm'),
(6, 3, 1, NULL, '0', NULL, 'Finals'),
(7, 4, 1, NULL, '0', NULL, 'Midterm'),
(8, 4, 1, NULL, '0', NULL, 'Finals'),
(9, 5, 1, NULL, '0', NULL, 'Midterm'),
(10, 5, 1, NULL, '0', NULL, 'Finals'),
(11, 6, 1, NULL, '0', NULL, 'Midterm'),
(12, 6, 1, NULL, '0', NULL, 'Finals'),
(13, 7, 1, NULL, '0', NULL, 'Midterm'),
(14, 7, 1, NULL, '0', NULL, 'Finals'),
(15, 8, 1, NULL, '0', NULL, 'Midterm'),
(16, 8, 1, NULL, '0', NULL, 'Finals'),
(17, 9, 1, NULL, '0', NULL, 'Midterm'),
(18, 9, 1, NULL, '0', NULL, 'Finals'),
(19, 10, 1, NULL, '0', NULL, 'Midterm'),
(20, 10, 1, NULL, '0', NULL, 'Finals'),
(21, 11, 1, NULL, '0', NULL, 'Midterm'),
(22, 11, 1, NULL, '0', NULL, 'Finals'),
(23, 12, 1, NULL, '0', NULL, 'Midterm'),
(24, 12, 1, NULL, '0', NULL, 'Finals'),
(25, 13, 1, NULL, '0', NULL, 'Midterm'),
(26, 13, 1, NULL, '0', NULL, 'Finals'),
(27, 14, 1, NULL, '0', NULL, 'Midterm'),
(28, 14, 1, NULL, '0', NULL, 'Finals'),
(29, 15, 1, NULL, '0', NULL, 'Midterm'),
(30, 15, 1, NULL, '0', NULL, 'Finals'),
(31, 16, 1, NULL, '0', NULL, 'Midterm'),
(32, 16, 1, NULL, '0', NULL, 'Finals'),
(33, 17, 1, NULL, '0', NULL, 'Midterm'),
(34, 17, 1, NULL, '0', NULL, 'Finals'),
(35, 18, 1, NULL, '0', NULL, 'Midterm'),
(36, 18, 1, NULL, '0', NULL, 'Finals'),
(37, 19, 1, NULL, '0', NULL, 'Midterm'),
(38, 19, 1, NULL, '0', NULL, 'Finals'),
(39, 20, 1, NULL, '0', NULL, 'Midterm'),
(40, 20, 1, NULL, '0', NULL, 'Finals'),
(41, 21, 1, NULL, '0', NULL, 'Midterm'),
(42, 21, 1, NULL, '0', NULL, 'Finals'),
(43, 22, 1, NULL, '0', NULL, 'Midterm'),
(44, 22, 1, NULL, '0', NULL, 'Finals'),
(45, 23, 1, NULL, '0', NULL, 'Midterm'),
(46, 23, 1, NULL, '0', NULL, 'Finals'),
(47, 24, 1, NULL, '0', NULL, 'Midterm'),
(48, 24, 1, NULL, '0', NULL, 'Finals'),
(49, 25, 1, NULL, '0', NULL, 'Midterm'),
(50, 25, 1, NULL, '0', NULL, 'Finals'),
(51, 26, 1, NULL, '0', NULL, 'Midterm'),
(52, 26, 1, NULL, '0', NULL, 'Finals'),
(53, 27, 1, NULL, '0', NULL, 'Midterm'),
(54, 27, 1, NULL, '0', NULL, 'Finals'),
(55, 28, 1, NULL, '0', NULL, 'Midterm'),
(56, 28, 1, NULL, '0', NULL, 'Finals'),
(57, 29, 1, NULL, '0', NULL, 'Midterm'),
(58, 29, 1, NULL, '0', NULL, 'Finals'),
(59, 30, 1, NULL, '0', NULL, 'Midterm'),
(60, 30, 1, NULL, '0', NULL, 'Finals'),
(61, 31, 1, NULL, '0', NULL, 'Midterm'),
(62, 31, 1, NULL, '0', NULL, 'Finals'),
(63, 32, 1, NULL, '0', NULL, 'Midterm'),
(64, 32, 1, NULL, '0', NULL, 'Finals'),
(65, 33, 1, NULL, '0', NULL, 'Midterm'),
(66, 33, 1, NULL, '0', NULL, 'Finals'),
(67, 34, 1, NULL, '0', NULL, 'Midterm'),
(68, 34, 1, NULL, '0', NULL, 'Finals'),
(69, 35, 1, NULL, '0', NULL, 'Midterm'),
(70, 35, 1, NULL, '0', NULL, 'Finals'),
(71, 36, 1, NULL, '0', NULL, 'Midterm'),
(72, 36, 1, NULL, '0', NULL, 'Finals');

-- --------------------------------------------------------

--
-- Table structure for table `calendar`
--

CREATE TABLE IF NOT EXISTS `calendar` (
`Id` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `Date` date NOT NULL,
  `Event` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE IF NOT EXISTS `class` (
`Id` int(11) NOT NULL,
  `SubjectId` int(11) NOT NULL,
  `ClassBlock` varchar(50) NOT NULL,
  `ModuleType` varchar(50) NOT NULL,
  `NumOfStudents` int(11) NOT NULL,
  `Passers` int(11) DEFAULT NULL,
  `YrSem` varchar(100) NOT NULL,
  `Schedule` varchar(100) NOT NULL,
  `Filename` varchar(100) NOT NULL,
  `IsUploaded` tinyint(1) NOT NULL,
  `DateUploaded` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`Id`, `SubjectId`, `ClassBlock`, `ModuleType`, `NumOfStudents`, `Passers`, `YrSem`, `Schedule`, `Filename`, `IsUploaded`, `DateUploaded`) VALUES
(1, 1, 'BSCOE 5-1', 'Lec', 36, NULL, 'Second Semester 2015-16', 'W 07:30AM-10:30AM', '', 0, '0000-00-00'),
(2, 2, 'BSCOE 5-1', 'Lab', 36, NULL, 'Second Semester 2015-16', 'W 07:30AM-10:30AM', '', 0, '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `exercises`
--

CREATE TABLE IF NOT EXISTS `exercises` (
`Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `ExNum` int(11) NOT NULL,
  `Score` float(5,2) NOT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `exercises`
--

INSERT INTO `exercises` (`Id`, `StudId`, `ExNum`, `Score`, `Rating`, `Sem`) VALUES
(1, 1, 1, 0.00, NULL, 'Midterm'),
(2, 1, 1, 0.00, NULL, 'Finals'),
(3, 2, 1, 0.00, NULL, 'Midterm'),
(4, 2, 1, 0.00, NULL, 'Finals'),
(5, 3, 1, 0.00, NULL, 'Midterm'),
(6, 3, 1, 0.00, NULL, 'Finals'),
(7, 4, 1, 0.00, NULL, 'Midterm'),
(8, 4, 1, 0.00, NULL, 'Finals'),
(9, 5, 1, 0.00, NULL, 'Midterm'),
(10, 5, 1, 0.00, NULL, 'Finals'),
(11, 6, 1, 0.00, NULL, 'Midterm'),
(12, 6, 1, 0.00, NULL, 'Finals'),
(13, 7, 1, 0.00, NULL, 'Midterm'),
(14, 7, 1, 0.00, NULL, 'Finals'),
(15, 8, 1, 0.00, NULL, 'Midterm'),
(16, 8, 1, 0.00, NULL, 'Finals'),
(17, 9, 1, 0.00, NULL, 'Midterm'),
(18, 9, 1, 0.00, NULL, 'Finals'),
(19, 10, 1, 0.00, NULL, 'Midterm'),
(20, 10, 1, 0.00, NULL, 'Finals'),
(21, 11, 1, 0.00, NULL, 'Midterm'),
(22, 11, 1, 0.00, NULL, 'Finals'),
(23, 12, 1, 0.00, NULL, 'Midterm'),
(24, 12, 1, 0.00, NULL, 'Finals'),
(25, 13, 1, 0.00, NULL, 'Midterm'),
(26, 13, 1, 0.00, NULL, 'Finals'),
(27, 14, 1, 0.00, NULL, 'Midterm'),
(28, 14, 1, 0.00, NULL, 'Finals'),
(29, 15, 1, 0.00, NULL, 'Midterm'),
(30, 15, 1, 0.00, NULL, 'Finals'),
(31, 16, 1, 0.00, NULL, 'Midterm'),
(32, 16, 1, 0.00, NULL, 'Finals'),
(33, 17, 1, 0.00, NULL, 'Midterm'),
(34, 17, 1, 0.00, NULL, 'Finals'),
(35, 18, 1, 0.00, NULL, 'Midterm'),
(36, 18, 1, 0.00, NULL, 'Finals'),
(37, 19, 1, 0.00, NULL, 'Midterm'),
(38, 19, 1, 0.00, NULL, 'Finals'),
(39, 20, 1, 0.00, NULL, 'Midterm'),
(40, 20, 1, 0.00, NULL, 'Finals'),
(41, 21, 1, 0.00, NULL, 'Midterm'),
(42, 21, 1, 0.00, NULL, 'Finals'),
(43, 22, 1, 0.00, NULL, 'Midterm'),
(44, 22, 1, 0.00, NULL, 'Finals'),
(45, 23, 1, 0.00, NULL, 'Midterm'),
(46, 23, 1, 0.00, NULL, 'Finals'),
(47, 24, 1, 0.00, NULL, 'Midterm'),
(48, 24, 1, 0.00, NULL, 'Finals'),
(49, 25, 1, 0.00, NULL, 'Midterm'),
(50, 25, 1, 0.00, NULL, 'Finals'),
(51, 26, 1, 0.00, NULL, 'Midterm'),
(52, 26, 1, 0.00, NULL, 'Finals'),
(53, 27, 1, 0.00, NULL, 'Midterm'),
(54, 27, 1, 0.00, NULL, 'Finals'),
(55, 28, 1, 0.00, NULL, 'Midterm'),
(56, 28, 1, 0.00, NULL, 'Finals'),
(57, 29, 1, 0.00, NULL, 'Midterm'),
(58, 29, 1, 0.00, NULL, 'Finals'),
(59, 30, 1, 0.00, NULL, 'Midterm'),
(60, 30, 1, 0.00, NULL, 'Finals'),
(61, 31, 1, 0.00, NULL, 'Midterm'),
(62, 31, 1, 0.00, NULL, 'Finals'),
(63, 32, 1, 0.00, NULL, 'Midterm'),
(64, 32, 1, 0.00, NULL, 'Finals'),
(65, 33, 1, 0.00, NULL, 'Midterm'),
(66, 33, 1, 0.00, NULL, 'Finals'),
(67, 34, 1, 0.00, NULL, 'Midterm'),
(68, 34, 1, 0.00, NULL, 'Finals'),
(69, 35, 1, 0.00, NULL, 'Midterm'),
(70, 35, 1, 0.00, NULL, 'Finals'),
(71, 36, 1, 0.00, NULL, 'Midterm'),
(72, 36, 1, 0.00, NULL, 'Finals');

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE IF NOT EXISTS `faculty` (
  `UserId` int(11) NOT NULL,
  `Background` text NOT NULL,
  `FName` varchar(100) NOT NULL,
  `MName` varchar(100) NOT NULL,
  `LName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`UserId`, `Background`, `FName`, `MName`, `LName`) VALUES
(2, 'qweqwe', 'qweqweas', 'asdsad', 'qweqe'),
(12, 'Cute', 'Remedios', 'Ggggg', 'Ado'),
(14, 'Cutest', 'Pedrito Jr.', 'Nnnn', 'Tenerife');

-- --------------------------------------------------------

--
-- Table structure for table `final_exam`
--

CREATE TABLE IF NOT EXISTS `final_exam` (
`Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `Score` float(5,2) NOT NULL,
  `Rating` float(5,2) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `final_exam`
--

INSERT INTO `final_exam` (`Id`, `StudId`, `Score`, `Rating`) VALUES
(1, 1, 0.00, NULL),
(2, 2, 0.00, NULL),
(3, 3, 0.00, NULL),
(4, 4, 0.00, NULL),
(5, 5, 0.00, NULL),
(6, 6, 0.00, NULL),
(7, 7, 0.00, NULL),
(8, 8, 0.00, NULL),
(9, 9, 0.00, NULL),
(10, 10, 0.00, NULL),
(11, 11, 0.00, NULL),
(12, 12, 0.00, NULL),
(13, 13, 0.00, NULL),
(14, 14, 0.00, NULL),
(15, 15, 0.00, NULL),
(16, 16, 0.00, NULL),
(17, 17, 0.00, NULL),
(18, 18, 0.00, NULL),
(19, 19, 0.00, NULL),
(20, 20, 0.00, NULL),
(21, 21, 0.00, NULL),
(22, 22, 0.00, NULL),
(23, 23, 0.00, NULL),
(24, 24, 0.00, NULL),
(25, 25, 0.00, NULL),
(26, 26, 0.00, NULL),
(27, 27, 0.00, NULL),
(28, 28, 0.00, NULL),
(29, 29, 0.00, NULL),
(30, 30, 0.00, NULL),
(31, 31, 0.00, NULL),
(32, 32, 0.00, NULL),
(33, 33, 0.00, NULL),
(34, 34, 0.00, NULL),
(35, 35, 0.00, NULL),
(36, 36, 0.00, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `grades`
--

CREATE TABLE IF NOT EXISTS `grades` (
  `StudId` int(11) NOT NULL,
  `MidTermGrade` float NOT NULL,
  `FinalGrade` float NOT NULL,
  `TotalGrade` float NOT NULL,
  `GradeRemarks` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `grades`
--

INSERT INTO `grades` (`StudId`, `MidTermGrade`, `FinalGrade`, `TotalGrade`, `GradeRemarks`) VALUES
(1, 0, 0, 0, NULL),
(2, 0, 0, 0, NULL),
(3, 0, 0, 0, NULL),
(4, 0, 0, 0, NULL),
(5, 0, 0, 0, NULL),
(6, 0, 0, 0, NULL),
(7, 0, 0, 0, NULL),
(8, 0, 0, 0, NULL),
(9, 0, 0, 0, NULL),
(10, 0, 0, 0, NULL),
(11, 0, 0, 0, NULL),
(12, 0, 0, 0, NULL),
(13, 0, 0, 0, NULL),
(14, 0, 0, 0, NULL),
(15, 0, 0, 0, NULL),
(16, 0, 0, 0, NULL),
(17, 0, 0, 0, NULL),
(18, 0, 0, 0, NULL),
(19, 0, 0, 0, NULL),
(20, 0, 0, 0, NULL),
(21, 0, 0, 0, NULL),
(22, 0, 0, 0, NULL),
(23, 0, 0, 0, NULL),
(24, 0, 0, 0, NULL),
(25, 0, 0, 0, NULL),
(26, 0, 0, 0, NULL),
(27, 0, 0, 0, NULL),
(28, 0, 0, 0, NULL),
(29, 0, 0, 0, NULL),
(30, 0, 0, 0, NULL),
(31, 0, 0, 0, NULL),
(32, 0, 0, 0, NULL),
(33, 0, 0, 0, NULL),
(34, 0, 0, 0, NULL),
(35, 0, 0, 0, NULL),
(36, 0, 0, 0, NULL),
(37, 0, 0, 0, NULL),
(38, 0, 0, 0, NULL),
(39, 0, 0, 0, NULL),
(40, 0, 0, 0, NULL),
(41, 0, 0, 0, NULL),
(42, 0, 0, 0, NULL),
(43, 0, 0, 0, NULL),
(44, 0, 0, 0, NULL),
(45, 0, 0, 0, NULL),
(46, 0, 0, 0, NULL),
(47, 0, 0, 0, NULL),
(48, 0, 0, 0, NULL),
(49, 0, 0, 0, NULL),
(50, 0, 0, 0, NULL),
(51, 0, 0, 0, NULL),
(52, 0, 0, 0, NULL),
(53, 0, 0, 0, NULL),
(54, 0, 0, 0, NULL),
(55, 0, 0, 0, NULL),
(56, 0, 0, 0, NULL),
(57, 0, 0, 0, NULL),
(58, 0, 0, 0, NULL),
(59, 0, 0, 0, NULL),
(60, 0, 0, 0, NULL),
(61, 0, 0, 0, NULL),
(62, 0, 0, 0, NULL),
(63, 0, 0, 0, NULL),
(64, 0, 0, 0, NULL),
(65, 0, 0, 0, NULL),
(66, 0, 0, 0, NULL),
(67, 0, 0, 0, NULL),
(68, 0, 0, 0, NULL),
(69, 0, 0, 0, NULL),
(70, 0, 0, 0, NULL),
(71, 0, 0, 0, NULL),
(72, 0, 0, 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `labmodperc`
--

CREATE TABLE IF NOT EXISTS `labmodperc` (
  `Id` tinyint(4) NOT NULL,
  `PracExam` tinyint(4) NOT NULL,
  `Project` tinyint(4) NOT NULL,
  `Lab_MachineEx` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `labmodperc`
--

INSERT INTO `labmodperc` (`Id`, `PracExam`, `Project`, `Lab_MachineEx`) VALUES
(1, 25, 30, 45);

-- --------------------------------------------------------

--
-- Table structure for table `lab_act`
--

CREATE TABLE IF NOT EXISTS `lab_act` (
`Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `LabNum` int(11) NOT NULL,
  `Score` float(5,2) NOT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lab_act`
--

INSERT INTO `lab_act` (`Id`, `StudId`, `LabNum`, `Score`, `Rating`, `Sem`) VALUES
(1, 37, 1, 0.00, NULL, 'Midterm'),
(2, 37, 1, 0.00, NULL, 'Finals'),
(3, 38, 1, 0.00, NULL, 'Midterm'),
(4, 38, 1, 0.00, NULL, 'Finals'),
(5, 39, 1, 0.00, NULL, 'Midterm'),
(6, 39, 1, 0.00, NULL, 'Finals'),
(7, 40, 1, 0.00, NULL, 'Midterm'),
(8, 40, 1, 0.00, NULL, 'Finals'),
(9, 41, 1, 0.00, NULL, 'Midterm'),
(10, 41, 1, 0.00, NULL, 'Finals'),
(11, 42, 1, 0.00, NULL, 'Midterm'),
(12, 42, 1, 0.00, NULL, 'Finals'),
(13, 43, 1, 0.00, NULL, 'Midterm'),
(14, 43, 1, 0.00, NULL, 'Finals'),
(15, 44, 1, 0.00, NULL, 'Midterm'),
(16, 44, 1, 0.00, NULL, 'Finals'),
(17, 45, 1, 0.00, NULL, 'Midterm'),
(18, 45, 1, 0.00, NULL, 'Finals'),
(19, 46, 1, 0.00, NULL, 'Midterm'),
(20, 46, 1, 0.00, NULL, 'Finals'),
(21, 47, 1, 0.00, NULL, 'Midterm'),
(22, 47, 1, 0.00, NULL, 'Finals'),
(23, 48, 1, 0.00, NULL, 'Midterm'),
(24, 48, 1, 0.00, NULL, 'Finals'),
(25, 49, 1, 0.00, NULL, 'Midterm'),
(26, 49, 1, 0.00, NULL, 'Finals'),
(27, 50, 1, 0.00, NULL, 'Midterm'),
(28, 50, 1, 0.00, NULL, 'Finals'),
(29, 51, 1, 0.00, NULL, 'Midterm'),
(30, 51, 1, 0.00, NULL, 'Finals'),
(31, 52, 1, 0.00, NULL, 'Midterm'),
(32, 52, 1, 0.00, NULL, 'Finals'),
(33, 53, 1, 0.00, NULL, 'Midterm'),
(34, 53, 1, 0.00, NULL, 'Finals'),
(35, 54, 1, 0.00, NULL, 'Midterm'),
(36, 54, 1, 0.00, NULL, 'Finals'),
(37, 55, 1, 0.00, NULL, 'Midterm'),
(38, 55, 1, 0.00, NULL, 'Finals'),
(39, 56, 1, 0.00, NULL, 'Midterm'),
(40, 56, 1, 0.00, NULL, 'Finals'),
(41, 57, 1, 0.00, NULL, 'Midterm'),
(42, 57, 1, 0.00, NULL, 'Finals'),
(43, 58, 1, 0.00, NULL, 'Midterm'),
(44, 58, 1, 0.00, NULL, 'Finals'),
(45, 59, 1, 0.00, NULL, 'Midterm'),
(46, 59, 1, 0.00, NULL, 'Finals'),
(47, 60, 1, 0.00, NULL, 'Midterm'),
(48, 60, 1, 0.00, NULL, 'Finals'),
(49, 61, 1, 0.00, NULL, 'Midterm'),
(50, 61, 1, 0.00, NULL, 'Finals'),
(51, 62, 1, 0.00, NULL, 'Midterm'),
(52, 62, 1, 0.00, NULL, 'Finals'),
(53, 63, 1, 0.00, NULL, 'Midterm'),
(54, 63, 1, 0.00, NULL, 'Finals'),
(55, 64, 1, 0.00, NULL, 'Midterm'),
(56, 64, 1, 0.00, NULL, 'Finals'),
(57, 65, 1, 0.00, NULL, 'Midterm'),
(58, 65, 1, 0.00, NULL, 'Finals'),
(59, 66, 1, 0.00, NULL, 'Midterm'),
(60, 66, 1, 0.00, NULL, 'Finals'),
(61, 67, 1, 0.00, NULL, 'Midterm'),
(62, 67, 1, 0.00, NULL, 'Finals'),
(63, 68, 1, 0.00, NULL, 'Midterm'),
(64, 68, 1, 0.00, NULL, 'Finals'),
(65, 69, 1, 0.00, NULL, 'Midterm'),
(66, 69, 1, 0.00, NULL, 'Finals'),
(67, 70, 1, 0.00, NULL, 'Midterm'),
(68, 70, 1, 0.00, NULL, 'Finals'),
(69, 71, 1, 0.00, NULL, 'Midterm'),
(70, 71, 1, 0.00, NULL, 'Finals'),
(71, 72, 1, 0.00, NULL, 'Midterm'),
(72, 72, 1, 0.00, NULL, 'Finals');

-- --------------------------------------------------------

--
-- Table structure for table `lectmodperc`
--

CREATE TABLE IF NOT EXISTS `lectmodperc` (
  `Id` tinyint(4) NOT NULL,
  `Attendance` tinyint(4) NOT NULL,
  `ClassStanding` tinyint(4) NOT NULL,
  `QuizzesLExam` tinyint(4) NOT NULL,
  `MajorExam` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lectmodperc`
--

INSERT INTO `lectmodperc` (`Id`, `Attendance`, `ClassStanding`, `QuizzesLExam`, `MajorExam`) VALUES
(1, 10, 20, 30, 40);

-- --------------------------------------------------------

--
-- Table structure for table `long_exam`
--

CREATE TABLE IF NOT EXISTS `long_exam` (
`Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `LExamNum` int(11) NOT NULL,
  `Score` float(5,2) NOT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `long_exam`
--

INSERT INTO `long_exam` (`Id`, `StudId`, `LExamNum`, `Score`, `Rating`, `Sem`) VALUES
(1, 1, 1, 0.00, NULL, 'Midterm'),
(2, 1, 1, 0.00, NULL, 'Finals'),
(3, 2, 1, 0.00, NULL, 'Midterm'),
(4, 2, 1, 0.00, NULL, 'Finals'),
(5, 3, 1, 0.00, NULL, 'Midterm'),
(6, 3, 1, 0.00, NULL, 'Finals'),
(7, 4, 1, 0.00, NULL, 'Midterm'),
(8, 4, 1, 0.00, NULL, 'Finals'),
(9, 5, 1, 0.00, NULL, 'Midterm'),
(10, 5, 1, 0.00, NULL, 'Finals'),
(11, 6, 1, 0.00, NULL, 'Midterm'),
(12, 6, 1, 0.00, NULL, 'Finals'),
(13, 7, 1, 0.00, NULL, 'Midterm'),
(14, 7, 1, 0.00, NULL, 'Finals'),
(15, 8, 1, 0.00, NULL, 'Midterm'),
(16, 8, 1, 0.00, NULL, 'Finals'),
(17, 9, 1, 0.00, NULL, 'Midterm'),
(18, 9, 1, 0.00, NULL, 'Finals'),
(19, 10, 1, 0.00, NULL, 'Midterm'),
(20, 10, 1, 0.00, NULL, 'Finals'),
(21, 11, 1, 0.00, NULL, 'Midterm'),
(22, 11, 1, 0.00, NULL, 'Finals'),
(23, 12, 1, 0.00, NULL, 'Midterm'),
(24, 12, 1, 0.00, NULL, 'Finals'),
(25, 13, 1, 0.00, NULL, 'Midterm'),
(26, 13, 1, 0.00, NULL, 'Finals'),
(27, 14, 1, 0.00, NULL, 'Midterm'),
(28, 14, 1, 0.00, NULL, 'Finals'),
(29, 15, 1, 0.00, NULL, 'Midterm'),
(30, 15, 1, 0.00, NULL, 'Finals'),
(31, 16, 1, 0.00, NULL, 'Midterm'),
(32, 16, 1, 0.00, NULL, 'Finals'),
(33, 17, 1, 0.00, NULL, 'Midterm'),
(34, 17, 1, 0.00, NULL, 'Finals'),
(35, 18, 1, 0.00, NULL, 'Midterm'),
(36, 18, 1, 0.00, NULL, 'Finals'),
(37, 19, 1, 0.00, NULL, 'Midterm'),
(38, 19, 1, 0.00, NULL, 'Finals'),
(39, 20, 1, 0.00, NULL, 'Midterm'),
(40, 20, 1, 0.00, NULL, 'Finals'),
(41, 21, 1, 0.00, NULL, 'Midterm'),
(42, 21, 1, 0.00, NULL, 'Finals'),
(43, 22, 1, 0.00, NULL, 'Midterm'),
(44, 22, 1, 0.00, NULL, 'Finals'),
(45, 23, 1, 0.00, NULL, 'Midterm'),
(46, 23, 1, 0.00, NULL, 'Finals'),
(47, 24, 1, 0.00, NULL, 'Midterm'),
(48, 24, 1, 0.00, NULL, 'Finals'),
(49, 25, 1, 0.00, NULL, 'Midterm'),
(50, 25, 1, 0.00, NULL, 'Finals'),
(51, 26, 1, 0.00, NULL, 'Midterm'),
(52, 26, 1, 0.00, NULL, 'Finals'),
(53, 27, 1, 0.00, NULL, 'Midterm'),
(54, 27, 1, 0.00, NULL, 'Finals'),
(55, 28, 1, 0.00, NULL, 'Midterm'),
(56, 28, 1, 0.00, NULL, 'Finals'),
(57, 29, 1, 0.00, NULL, 'Midterm'),
(58, 29, 1, 0.00, NULL, 'Finals'),
(59, 30, 1, 0.00, NULL, 'Midterm'),
(60, 30, 1, 0.00, NULL, 'Finals'),
(61, 31, 1, 0.00, NULL, 'Midterm'),
(62, 31, 1, 0.00, NULL, 'Finals'),
(63, 32, 1, 0.00, NULL, 'Midterm'),
(64, 32, 1, 0.00, NULL, 'Finals'),
(65, 33, 1, 0.00, NULL, 'Midterm'),
(66, 33, 1, 0.00, NULL, 'Finals'),
(67, 34, 1, 0.00, NULL, 'Midterm'),
(68, 34, 1, 0.00, NULL, 'Finals'),
(69, 35, 1, 0.00, NULL, 'Midterm'),
(70, 35, 1, 0.00, NULL, 'Finals'),
(71, 36, 1, 0.00, NULL, 'Midterm'),
(72, 36, 1, 0.00, NULL, 'Finals');

-- --------------------------------------------------------

--
-- Table structure for table `midterm_exam`
--

CREATE TABLE IF NOT EXISTS `midterm_exam` (
`Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `Score` float(5,2) NOT NULL,
  `Rating` float(5,2) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `midterm_exam`
--

INSERT INTO `midterm_exam` (`Id`, `StudId`, `Score`, `Rating`) VALUES
(1, 1, 0.00, NULL),
(2, 2, 0.00, NULL),
(3, 3, 0.00, NULL),
(4, 4, 0.00, NULL),
(5, 5, 0.00, NULL),
(6, 6, 0.00, NULL),
(7, 7, 0.00, NULL),
(8, 8, 0.00, NULL),
(9, 9, 0.00, NULL),
(10, 10, 0.00, NULL),
(11, 11, 0.00, NULL),
(12, 12, 0.00, NULL),
(13, 13, 0.00, NULL),
(14, 14, 0.00, NULL),
(15, 15, 0.00, NULL),
(16, 16, 0.00, NULL),
(17, 17, 0.00, NULL),
(18, 18, 0.00, NULL),
(19, 19, 0.00, NULL),
(20, 20, 0.00, NULL),
(21, 21, 0.00, NULL),
(22, 22, 0.00, NULL),
(23, 23, 0.00, NULL),
(24, 24, 0.00, NULL),
(25, 25, 0.00, NULL),
(26, 26, 0.00, NULL),
(27, 27, 0.00, NULL),
(28, 28, 0.00, NULL),
(29, 29, 0.00, NULL),
(30, 30, 0.00, NULL),
(31, 31, 0.00, NULL),
(32, 32, 0.00, NULL),
(33, 33, 0.00, NULL),
(34, 34, 0.00, NULL),
(35, 35, 0.00, NULL),
(36, 36, 0.00, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `mod_assign`
--

CREATE TABLE IF NOT EXISTS `mod_assign` (
`Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `AssignNum` int(11) NOT NULL,
  `AssignItems` int(11) NOT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_att`
--

CREATE TABLE IF NOT EXISTS `mod_att` (
`Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `AttNum` int(11) NOT NULL,
  `AttDate` date NOT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_ex`
--

CREATE TABLE IF NOT EXISTS `mod_ex` (
`Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `ExNum` int(11) NOT NULL,
  `ExItems` int(11) NOT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_fe`
--

CREATE TABLE IF NOT EXISTS `mod_fe` (
`Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `FExamItems` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_lab`
--

CREATE TABLE IF NOT EXISTS `mod_lab` (
`Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `LabNum` int(11) NOT NULL,
  `LabItems` int(11) NOT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_le`
--

CREATE TABLE IF NOT EXISTS `mod_le` (
`Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `LExamNum` int(11) NOT NULL,
  `LExamItems` int(11) NOT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_me`
--

CREATE TABLE IF NOT EXISTS `mod_me` (
`Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `MExamItems` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_prac`
--

CREATE TABLE IF NOT EXISTS `mod_prac` (
`Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `PracExamNum` int(11) NOT NULL,
  `PracExamItems` int(11) NOT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_proj`
--

CREATE TABLE IF NOT EXISTS `mod_proj` (
`Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `ProjNum` int(11) NOT NULL,
  `ProjItems` int(11) NOT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_quiz`
--

CREATE TABLE IF NOT EXISTS `mod_quiz` (
`Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `QuizNum` int(11) NOT NULL,
  `QuizItems` int(11) NOT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_rec`
--

CREATE TABLE IF NOT EXISTS `mod_rec` (
`Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `RecNum` int(11) NOT NULL,
  `RecItems` int(11) NOT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_sw`
--

CREATE TABLE IF NOT EXISTS `mod_sw` (
`Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `SWNum` int(11) NOT NULL,
  `SWItems` int(11) NOT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `prac_exam`
--

CREATE TABLE IF NOT EXISTS `prac_exam` (
`Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `PracNum` int(11) NOT NULL,
  `Score` float(5,2) NOT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `prac_exam`
--

INSERT INTO `prac_exam` (`Id`, `StudId`, `PracNum`, `Score`, `Rating`, `Sem`) VALUES
(1, 37, 1, 0.00, NULL, 'Midterm'),
(2, 37, 1, 0.00, NULL, 'Finals'),
(3, 38, 1, 0.00, NULL, 'Midterm'),
(4, 38, 1, 0.00, NULL, 'Finals'),
(5, 39, 1, 0.00, NULL, 'Midterm'),
(6, 39, 1, 0.00, NULL, 'Finals'),
(7, 40, 1, 0.00, NULL, 'Midterm'),
(8, 40, 1, 0.00, NULL, 'Finals'),
(9, 41, 1, 0.00, NULL, 'Midterm'),
(10, 41, 1, 0.00, NULL, 'Finals'),
(11, 42, 1, 0.00, NULL, 'Midterm'),
(12, 42, 1, 0.00, NULL, 'Finals'),
(13, 43, 1, 0.00, NULL, 'Midterm'),
(14, 43, 1, 0.00, NULL, 'Finals'),
(15, 44, 1, 0.00, NULL, 'Midterm'),
(16, 44, 1, 0.00, NULL, 'Finals'),
(17, 45, 1, 0.00, NULL, 'Midterm'),
(18, 45, 1, 0.00, NULL, 'Finals'),
(19, 46, 1, 0.00, NULL, 'Midterm'),
(20, 46, 1, 0.00, NULL, 'Finals'),
(21, 47, 1, 0.00, NULL, 'Midterm'),
(22, 47, 1, 0.00, NULL, 'Finals'),
(23, 48, 1, 0.00, NULL, 'Midterm'),
(24, 48, 1, 0.00, NULL, 'Finals'),
(25, 49, 1, 0.00, NULL, 'Midterm'),
(26, 49, 1, 0.00, NULL, 'Finals'),
(27, 50, 1, 0.00, NULL, 'Midterm'),
(28, 50, 1, 0.00, NULL, 'Finals'),
(29, 51, 1, 0.00, NULL, 'Midterm'),
(30, 51, 1, 0.00, NULL, 'Finals'),
(31, 52, 1, 0.00, NULL, 'Midterm'),
(32, 52, 1, 0.00, NULL, 'Finals'),
(33, 53, 1, 0.00, NULL, 'Midterm'),
(34, 53, 1, 0.00, NULL, 'Finals'),
(35, 54, 1, 0.00, NULL, 'Midterm'),
(36, 54, 1, 0.00, NULL, 'Finals'),
(37, 55, 1, 0.00, NULL, 'Midterm'),
(38, 55, 1, 0.00, NULL, 'Finals'),
(39, 56, 1, 0.00, NULL, 'Midterm'),
(40, 56, 1, 0.00, NULL, 'Finals'),
(41, 57, 1, 0.00, NULL, 'Midterm'),
(42, 57, 1, 0.00, NULL, 'Finals'),
(43, 58, 1, 0.00, NULL, 'Midterm'),
(44, 58, 1, 0.00, NULL, 'Finals'),
(45, 59, 1, 0.00, NULL, 'Midterm'),
(46, 59, 1, 0.00, NULL, 'Finals'),
(47, 60, 1, 0.00, NULL, 'Midterm'),
(48, 60, 1, 0.00, NULL, 'Finals'),
(49, 61, 1, 0.00, NULL, 'Midterm'),
(50, 61, 1, 0.00, NULL, 'Finals'),
(51, 62, 1, 0.00, NULL, 'Midterm'),
(52, 62, 1, 0.00, NULL, 'Finals'),
(53, 63, 1, 0.00, NULL, 'Midterm'),
(54, 63, 1, 0.00, NULL, 'Finals'),
(55, 64, 1, 0.00, NULL, 'Midterm'),
(56, 64, 1, 0.00, NULL, 'Finals'),
(57, 65, 1, 0.00, NULL, 'Midterm'),
(58, 65, 1, 0.00, NULL, 'Finals'),
(59, 66, 1, 0.00, NULL, 'Midterm'),
(60, 66, 1, 0.00, NULL, 'Finals'),
(61, 67, 1, 0.00, NULL, 'Midterm'),
(62, 67, 1, 0.00, NULL, 'Finals'),
(63, 68, 1, 0.00, NULL, 'Midterm'),
(64, 68, 1, 0.00, NULL, 'Finals'),
(65, 69, 1, 0.00, NULL, 'Midterm'),
(66, 69, 1, 0.00, NULL, 'Finals'),
(67, 70, 1, 0.00, NULL, 'Midterm'),
(68, 70, 1, 0.00, NULL, 'Finals'),
(69, 71, 1, 0.00, NULL, 'Midterm'),
(70, 71, 1, 0.00, NULL, 'Finals'),
(71, 72, 1, 0.00, NULL, 'Midterm'),
(72, 72, 1, 0.00, NULL, 'Finals');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE IF NOT EXISTS `project` (
`Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `ProjNum` int(11) NOT NULL,
  `Score` float(5,2) NOT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`Id`, `StudId`, `ProjNum`, `Score`, `Rating`, `Sem`) VALUES
(1, 37, 1, 0.00, NULL, 'Midterm'),
(2, 37, 1, 0.00, NULL, 'Finals'),
(3, 38, 1, 0.00, NULL, 'Midterm'),
(4, 38, 1, 0.00, NULL, 'Finals'),
(5, 39, 1, 0.00, NULL, 'Midterm'),
(6, 39, 1, 0.00, NULL, 'Finals'),
(7, 40, 1, 0.00, NULL, 'Midterm'),
(8, 40, 1, 0.00, NULL, 'Finals'),
(9, 41, 1, 0.00, NULL, 'Midterm'),
(10, 41, 1, 0.00, NULL, 'Finals'),
(11, 42, 1, 0.00, NULL, 'Midterm'),
(12, 42, 1, 0.00, NULL, 'Finals'),
(13, 43, 1, 0.00, NULL, 'Midterm'),
(14, 43, 1, 0.00, NULL, 'Finals'),
(15, 44, 1, 0.00, NULL, 'Midterm'),
(16, 44, 1, 0.00, NULL, 'Finals'),
(17, 45, 1, 0.00, NULL, 'Midterm'),
(18, 45, 1, 0.00, NULL, 'Finals'),
(19, 46, 1, 0.00, NULL, 'Midterm'),
(20, 46, 1, 0.00, NULL, 'Finals'),
(21, 47, 1, 0.00, NULL, 'Midterm'),
(22, 47, 1, 0.00, NULL, 'Finals'),
(23, 48, 1, 0.00, NULL, 'Midterm'),
(24, 48, 1, 0.00, NULL, 'Finals'),
(25, 49, 1, 0.00, NULL, 'Midterm'),
(26, 49, 1, 0.00, NULL, 'Finals'),
(27, 50, 1, 0.00, NULL, 'Midterm'),
(28, 50, 1, 0.00, NULL, 'Finals'),
(29, 51, 1, 0.00, NULL, 'Midterm'),
(30, 51, 1, 0.00, NULL, 'Finals'),
(31, 52, 1, 0.00, NULL, 'Midterm'),
(32, 52, 1, 0.00, NULL, 'Finals'),
(33, 53, 1, 0.00, NULL, 'Midterm'),
(34, 53, 1, 0.00, NULL, 'Finals'),
(35, 54, 1, 0.00, NULL, 'Midterm'),
(36, 54, 1, 0.00, NULL, 'Finals'),
(37, 55, 1, 0.00, NULL, 'Midterm'),
(38, 55, 1, 0.00, NULL, 'Finals'),
(39, 56, 1, 0.00, NULL, 'Midterm'),
(40, 56, 1, 0.00, NULL, 'Finals'),
(41, 57, 1, 0.00, NULL, 'Midterm'),
(42, 57, 1, 0.00, NULL, 'Finals'),
(43, 58, 1, 0.00, NULL, 'Midterm'),
(44, 58, 1, 0.00, NULL, 'Finals'),
(45, 59, 1, 0.00, NULL, 'Midterm'),
(46, 59, 1, 0.00, NULL, 'Finals'),
(47, 60, 1, 0.00, NULL, 'Midterm'),
(48, 60, 1, 0.00, NULL, 'Finals'),
(49, 61, 1, 0.00, NULL, 'Midterm'),
(50, 61, 1, 0.00, NULL, 'Finals'),
(51, 62, 1, 0.00, NULL, 'Midterm'),
(52, 62, 1, 0.00, NULL, 'Finals'),
(53, 63, 1, 0.00, NULL, 'Midterm'),
(54, 63, 1, 0.00, NULL, 'Finals'),
(55, 64, 1, 0.00, NULL, 'Midterm'),
(56, 64, 1, 0.00, NULL, 'Finals'),
(57, 65, 1, 0.00, NULL, 'Midterm'),
(58, 65, 1, 0.00, NULL, 'Finals'),
(59, 66, 1, 0.00, NULL, 'Midterm'),
(60, 66, 1, 0.00, NULL, 'Finals'),
(61, 67, 1, 0.00, NULL, 'Midterm'),
(62, 67, 1, 0.00, NULL, 'Finals'),
(63, 68, 1, 0.00, NULL, 'Midterm'),
(64, 68, 1, 0.00, NULL, 'Finals'),
(65, 69, 1, 0.00, NULL, 'Midterm'),
(66, 69, 1, 0.00, NULL, 'Finals'),
(67, 70, 1, 0.00, NULL, 'Midterm'),
(68, 70, 1, 0.00, NULL, 'Finals'),
(69, 71, 1, 0.00, NULL, 'Midterm'),
(70, 71, 1, 0.00, NULL, 'Finals'),
(71, 72, 1, 0.00, NULL, 'Midterm'),
(72, 72, 1, 0.00, NULL, 'Finals');

-- --------------------------------------------------------

--
-- Table structure for table `quizzes`
--

CREATE TABLE IF NOT EXISTS `quizzes` (
`Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `QuizNum` int(11) NOT NULL,
  `Score` float(5,2) NOT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quizzes`
--

INSERT INTO `quizzes` (`Id`, `StudId`, `QuizNum`, `Score`, `Rating`, `Sem`) VALUES
(1, 1, 1, 0.00, NULL, 'Midterm'),
(2, 1, 1, 0.00, NULL, 'Finals'),
(3, 2, 1, 0.00, NULL, 'Midterm'),
(4, 2, 1, 0.00, NULL, 'Finals'),
(5, 3, 1, 0.00, NULL, 'Midterm'),
(6, 3, 1, 0.00, NULL, 'Finals'),
(7, 4, 1, 0.00, NULL, 'Midterm'),
(8, 4, 1, 0.00, NULL, 'Finals'),
(9, 5, 1, 0.00, NULL, 'Midterm'),
(10, 5, 1, 0.00, NULL, 'Finals'),
(11, 6, 1, 0.00, NULL, 'Midterm'),
(12, 6, 1, 0.00, NULL, 'Finals'),
(13, 7, 1, 0.00, NULL, 'Midterm'),
(14, 7, 1, 0.00, NULL, 'Finals'),
(15, 8, 1, 0.00, NULL, 'Midterm'),
(16, 8, 1, 0.00, NULL, 'Finals'),
(17, 9, 1, 0.00, NULL, 'Midterm'),
(18, 9, 1, 0.00, NULL, 'Finals'),
(19, 10, 1, 0.00, NULL, 'Midterm'),
(20, 10, 1, 0.00, NULL, 'Finals'),
(21, 11, 1, 0.00, NULL, 'Midterm'),
(22, 11, 1, 0.00, NULL, 'Finals'),
(23, 12, 1, 0.00, NULL, 'Midterm'),
(24, 12, 1, 0.00, NULL, 'Finals'),
(25, 13, 1, 0.00, NULL, 'Midterm'),
(26, 13, 1, 0.00, NULL, 'Finals'),
(27, 14, 1, 0.00, NULL, 'Midterm'),
(28, 14, 1, 0.00, NULL, 'Finals'),
(29, 15, 1, 0.00, NULL, 'Midterm'),
(30, 15, 1, 0.00, NULL, 'Finals'),
(31, 16, 1, 0.00, NULL, 'Midterm'),
(32, 16, 1, 0.00, NULL, 'Finals'),
(33, 17, 1, 0.00, NULL, 'Midterm'),
(34, 17, 1, 0.00, NULL, 'Finals'),
(35, 18, 1, 0.00, NULL, 'Midterm'),
(36, 18, 1, 0.00, NULL, 'Finals'),
(37, 19, 1, 0.00, NULL, 'Midterm'),
(38, 19, 1, 0.00, NULL, 'Finals'),
(39, 20, 1, 0.00, NULL, 'Midterm'),
(40, 20, 1, 0.00, NULL, 'Finals'),
(41, 21, 1, 0.00, NULL, 'Midterm'),
(42, 21, 1, 0.00, NULL, 'Finals'),
(43, 22, 1, 0.00, NULL, 'Midterm'),
(44, 22, 1, 0.00, NULL, 'Finals'),
(45, 23, 1, 0.00, NULL, 'Midterm'),
(46, 23, 1, 0.00, NULL, 'Finals'),
(47, 24, 1, 0.00, NULL, 'Midterm'),
(48, 24, 1, 0.00, NULL, 'Finals'),
(49, 25, 1, 0.00, NULL, 'Midterm'),
(50, 25, 1, 0.00, NULL, 'Finals'),
(51, 26, 1, 0.00, NULL, 'Midterm'),
(52, 26, 1, 0.00, NULL, 'Finals'),
(53, 27, 1, 0.00, NULL, 'Midterm'),
(54, 27, 1, 0.00, NULL, 'Finals'),
(55, 28, 1, 0.00, NULL, 'Midterm'),
(56, 28, 1, 0.00, NULL, 'Finals'),
(57, 29, 1, 0.00, NULL, 'Midterm'),
(58, 29, 1, 0.00, NULL, 'Finals'),
(59, 30, 1, 0.00, NULL, 'Midterm'),
(60, 30, 1, 0.00, NULL, 'Finals'),
(61, 31, 1, 0.00, NULL, 'Midterm'),
(62, 31, 1, 0.00, NULL, 'Finals'),
(63, 32, 1, 0.00, NULL, 'Midterm'),
(64, 32, 1, 0.00, NULL, 'Finals'),
(65, 33, 1, 0.00, NULL, 'Midterm'),
(66, 33, 1, 0.00, NULL, 'Finals'),
(67, 34, 1, 0.00, NULL, 'Midterm'),
(68, 34, 1, 0.00, NULL, 'Finals'),
(69, 35, 1, 0.00, NULL, 'Midterm'),
(70, 35, 1, 0.00, NULL, 'Finals'),
(71, 36, 1, 0.00, NULL, 'Midterm'),
(72, 36, 1, 0.00, NULL, 'Finals');

-- --------------------------------------------------------

--
-- Table structure for table `recitation`
--

CREATE TABLE IF NOT EXISTS `recitation` (
`Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `RecNum` int(11) NOT NULL,
  `Score` float(5,2) NOT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recitation`
--

INSERT INTO `recitation` (`Id`, `StudId`, `RecNum`, `Score`, `Rating`, `Sem`) VALUES
(1, 1, 1, 0.00, NULL, 'Midterm'),
(2, 1, 1, 0.00, NULL, 'Finals'),
(3, 2, 1, 0.00, NULL, 'Midterm'),
(4, 2, 1, 0.00, NULL, 'Finals'),
(5, 3, 1, 0.00, NULL, 'Midterm'),
(6, 3, 1, 0.00, NULL, 'Finals'),
(7, 4, 1, 0.00, NULL, 'Midterm'),
(8, 4, 1, 0.00, NULL, 'Finals'),
(9, 5, 1, 0.00, NULL, 'Midterm'),
(10, 5, 1, 0.00, NULL, 'Finals'),
(11, 6, 1, 0.00, NULL, 'Midterm'),
(12, 6, 1, 0.00, NULL, 'Finals'),
(13, 7, 1, 0.00, NULL, 'Midterm'),
(14, 7, 1, 0.00, NULL, 'Finals'),
(15, 8, 1, 0.00, NULL, 'Midterm'),
(16, 8, 1, 0.00, NULL, 'Finals'),
(17, 9, 1, 0.00, NULL, 'Midterm'),
(18, 9, 1, 0.00, NULL, 'Finals'),
(19, 10, 1, 0.00, NULL, 'Midterm'),
(20, 10, 1, 0.00, NULL, 'Finals'),
(21, 11, 1, 0.00, NULL, 'Midterm'),
(22, 11, 1, 0.00, NULL, 'Finals'),
(23, 12, 1, 0.00, NULL, 'Midterm'),
(24, 12, 1, 0.00, NULL, 'Finals'),
(25, 13, 1, 0.00, NULL, 'Midterm'),
(26, 13, 1, 0.00, NULL, 'Finals'),
(27, 14, 1, 0.00, NULL, 'Midterm'),
(28, 14, 1, 0.00, NULL, 'Finals'),
(29, 15, 1, 0.00, NULL, 'Midterm'),
(30, 15, 1, 0.00, NULL, 'Finals'),
(31, 16, 1, 0.00, NULL, 'Midterm'),
(32, 16, 1, 0.00, NULL, 'Finals'),
(33, 17, 1, 0.00, NULL, 'Midterm'),
(34, 17, 1, 0.00, NULL, 'Finals'),
(35, 18, 1, 0.00, NULL, 'Midterm'),
(36, 18, 1, 0.00, NULL, 'Finals'),
(37, 19, 1, 0.00, NULL, 'Midterm'),
(38, 19, 1, 0.00, NULL, 'Finals'),
(39, 20, 1, 0.00, NULL, 'Midterm'),
(40, 20, 1, 0.00, NULL, 'Finals'),
(41, 21, 1, 0.00, NULL, 'Midterm'),
(42, 21, 1, 0.00, NULL, 'Finals'),
(43, 22, 1, 0.00, NULL, 'Midterm'),
(44, 22, 1, 0.00, NULL, 'Finals'),
(45, 23, 1, 0.00, NULL, 'Midterm'),
(46, 23, 1, 0.00, NULL, 'Finals'),
(47, 24, 1, 0.00, NULL, 'Midterm'),
(48, 24, 1, 0.00, NULL, 'Finals'),
(49, 25, 1, 0.00, NULL, 'Midterm'),
(50, 25, 1, 0.00, NULL, 'Finals'),
(51, 26, 1, 0.00, NULL, 'Midterm'),
(52, 26, 1, 0.00, NULL, 'Finals'),
(53, 27, 1, 0.00, NULL, 'Midterm'),
(54, 27, 1, 0.00, NULL, 'Finals'),
(55, 28, 1, 0.00, NULL, 'Midterm'),
(56, 28, 1, 0.00, NULL, 'Finals'),
(57, 29, 1, 0.00, NULL, 'Midterm'),
(58, 29, 1, 0.00, NULL, 'Finals'),
(59, 30, 1, 0.00, NULL, 'Midterm'),
(60, 30, 1, 0.00, NULL, 'Finals'),
(61, 31, 1, 0.00, NULL, 'Midterm'),
(62, 31, 1, 0.00, NULL, 'Finals'),
(63, 32, 1, 0.00, NULL, 'Midterm'),
(64, 32, 1, 0.00, NULL, 'Finals'),
(65, 33, 1, 0.00, NULL, 'Midterm'),
(66, 33, 1, 0.00, NULL, 'Finals'),
(67, 34, 1, 0.00, NULL, 'Midterm'),
(68, 34, 1, 0.00, NULL, 'Finals'),
(69, 35, 1, 0.00, NULL, 'Midterm'),
(70, 35, 1, 0.00, NULL, 'Finals'),
(71, 36, 1, 0.00, NULL, 'Midterm'),
(72, 36, 1, 0.00, NULL, 'Finals');

-- --------------------------------------------------------

--
-- Table structure for table `seatwork`
--

CREATE TABLE IF NOT EXISTS `seatwork` (
`Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `SWNum` int(11) NOT NULL,
  `Score` float(5,2) NOT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `seatwork`
--

INSERT INTO `seatwork` (`Id`, `StudId`, `SWNum`, `Score`, `Rating`, `Sem`) VALUES
(1, 1, 1, 0.00, NULL, 'Midterm'),
(2, 1, 1, 0.00, NULL, 'Finals'),
(3, 2, 1, 0.00, NULL, 'Midterm'),
(4, 2, 1, 0.00, NULL, 'Finals'),
(5, 3, 1, 0.00, NULL, 'Midterm'),
(6, 3, 1, 0.00, NULL, 'Finals'),
(7, 4, 1, 0.00, NULL, 'Midterm'),
(8, 4, 1, 0.00, NULL, 'Finals'),
(9, 5, 1, 0.00, NULL, 'Midterm'),
(10, 5, 1, 0.00, NULL, 'Finals'),
(11, 6, 1, 0.00, NULL, 'Midterm'),
(12, 6, 1, 0.00, NULL, 'Finals'),
(13, 7, 1, 0.00, NULL, 'Midterm'),
(14, 7, 1, 0.00, NULL, 'Finals'),
(15, 8, 1, 0.00, NULL, 'Midterm'),
(16, 8, 1, 0.00, NULL, 'Finals'),
(17, 9, 1, 0.00, NULL, 'Midterm'),
(18, 9, 1, 0.00, NULL, 'Finals'),
(19, 10, 1, 0.00, NULL, 'Midterm'),
(20, 10, 1, 0.00, NULL, 'Finals'),
(21, 11, 1, 0.00, NULL, 'Midterm'),
(22, 11, 1, 0.00, NULL, 'Finals'),
(23, 12, 1, 0.00, NULL, 'Midterm'),
(24, 12, 1, 0.00, NULL, 'Finals'),
(25, 13, 1, 0.00, NULL, 'Midterm'),
(26, 13, 1, 0.00, NULL, 'Finals'),
(27, 14, 1, 0.00, NULL, 'Midterm'),
(28, 14, 1, 0.00, NULL, 'Finals'),
(29, 15, 1, 0.00, NULL, 'Midterm'),
(30, 15, 1, 0.00, NULL, 'Finals'),
(31, 16, 1, 0.00, NULL, 'Midterm'),
(32, 16, 1, 0.00, NULL, 'Finals'),
(33, 17, 1, 0.00, NULL, 'Midterm'),
(34, 17, 1, 0.00, NULL, 'Finals'),
(35, 18, 1, 0.00, NULL, 'Midterm'),
(36, 18, 1, 0.00, NULL, 'Finals'),
(37, 19, 1, 0.00, NULL, 'Midterm'),
(38, 19, 1, 0.00, NULL, 'Finals'),
(39, 20, 1, 0.00, NULL, 'Midterm'),
(40, 20, 1, 0.00, NULL, 'Finals'),
(41, 21, 1, 0.00, NULL, 'Midterm'),
(42, 21, 1, 0.00, NULL, 'Finals'),
(43, 22, 1, 0.00, NULL, 'Midterm'),
(44, 22, 1, 0.00, NULL, 'Finals'),
(45, 23, 1, 0.00, NULL, 'Midterm'),
(46, 23, 1, 0.00, NULL, 'Finals'),
(47, 24, 1, 0.00, NULL, 'Midterm'),
(48, 24, 1, 0.00, NULL, 'Finals'),
(49, 25, 1, 0.00, NULL, 'Midterm'),
(50, 25, 1, 0.00, NULL, 'Finals'),
(51, 26, 1, 0.00, NULL, 'Midterm'),
(52, 26, 1, 0.00, NULL, 'Finals'),
(53, 27, 1, 0.00, NULL, 'Midterm'),
(54, 27, 1, 0.00, NULL, 'Finals'),
(55, 28, 1, 0.00, NULL, 'Midterm'),
(56, 28, 1, 0.00, NULL, 'Finals'),
(57, 29, 1, 0.00, NULL, 'Midterm'),
(58, 29, 1, 0.00, NULL, 'Finals'),
(59, 30, 1, 0.00, NULL, 'Midterm'),
(60, 30, 1, 0.00, NULL, 'Finals'),
(61, 31, 1, 0.00, NULL, 'Midterm'),
(62, 31, 1, 0.00, NULL, 'Finals'),
(63, 32, 1, 0.00, NULL, 'Midterm'),
(64, 32, 1, 0.00, NULL, 'Finals'),
(65, 33, 1, 0.00, NULL, 'Midterm'),
(66, 33, 1, 0.00, NULL, 'Finals'),
(67, 34, 1, 0.00, NULL, 'Midterm'),
(68, 34, 1, 0.00, NULL, 'Finals'),
(69, 35, 1, 0.00, NULL, 'Midterm'),
(70, 35, 1, 0.00, NULL, 'Finals'),
(71, 36, 1, 0.00, NULL, 'Midterm'),
(72, 36, 1, 0.00, NULL, 'Finals');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE IF NOT EXISTS `students` (
`Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `FName` varchar(100) NOT NULL,
  `MName` varchar(100) NOT NULL,
  `LName` varchar(100) NOT NULL,
  `StudentNumber` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`Id`, `ClassId`, `FName`, `MName`, `LName`, `StudentNumber`) VALUES
(1, 1, 'marcelo ', 'ragay', 'anzano', '2011-00255-MN-0'),
(2, 1, 'lorenzo ', 'sabadlan', 'arcinue', '2011-03709-MN-0'),
(3, 1, 'joeden ', 'gonzales', 'asuncion', '2011-03478-MN-0'),
(4, 1, 'julius ', 'parnay', 'balais', '2011-02830-MN-0'),
(5, 1, 'angelica mae ', 'aquino', 'banaag', '2011-03161-MN-0'),
(6, 1, 'mark oliver ', 'esteban', 'cahinde', '2011-00064-MN-0'),
(7, 1, 'noel ', 'almaden', 'cambel jr.', '2011-00616-MN-0'),
(8, 1, 'jess ', 'jonilas', 'canaway', '2011-00245-MN-0'),
(9, 1, 'claire ', 'tumbaga', 'capio', '2011-01989-MN-0'),
(10, 1, 'jherick ', 'bacagan', 'daso', '2011-06816-MN-0'),
(11, 1, 'rhia joyce ', 'ortiz', 'eden', '2011-03796-MN-0'),
(12, 1, 'lara mae ', 'domingo', 'edles', '2011-01918-MN-0'),
(13, 1, 'joanna marie ', 'abule', 'ellarina', '2011-01858-MN-0'),
(14, 1, 'carol shanti ', 'garcia', 'estolas', '2011-02357-MN-0'),
(15, 1, 'justin ', 'cornelio', 'flores', '2011-00090-MN-0'),
(16, 1, 'micah mariel ', 'visto', 'garcia', '2011-04453-MN-0'),
(17, 1, 'athanasios ', 'sabado', 'go', '2008-00242-MN-0'),
(18, 1, 'romulo ', 'baltazar', 'jaravata jr.', '2011-01709-MN-0'),
(19, 1, 'genesis yeshua ', 'carreon', 'lim', '2011-02165-MN-0'),
(20, 1, 'ralph ', 'tadia', 'llaguno', '2011-03127-MN-0'),
(21, 1, 'romelia ', 'agustin', 'lutrania', '2012-11229-MN-1'),
(22, 1, 'jose mari ', 'cruz', 'manio', '2011-05187-MN-0'),
(23, 1, 'christine ', 'rubante', 'manrique', '2011-00049-MN-0'),
(24, 1, 'karolyn ', 'amaya', 'maquilan', '2011-04515-MN-0'),
(25, 1, 'john paul ', 'veral', 'mayo', '2011-03256-MN-0'),
(26, 1, 'arian ', 'sario', 'nolasco', '2011-01115-MN-0'),
(27, 1, 'john michael ', 'gonzales', 'nolasco', '2011-00043-MN-0'),
(28, 1, 'jerome ', 'laserna', 'olavario', '2011-05554-MN-0'),
(29, 1, 'gellie ', 'tiburcio', 'quiatchon', '2011-01241-MN-0'),
(30, 1, 'beatrice nicole ', 'ramos', 'quindoyos', '2011-03262-MN-0'),
(31, 1, 'lee arvi ', 'banaag', 'real', '2011-00045-MN-0'),
(32, 1, 'john paul ', 'cruz', 'resuello', '2011-00046-MN-0'),
(33, 1, 'rafael john ', 'boltron', 'surnet', '2011-05609-MN-0'),
(34, 1, 'luisito jr. ', 'nebab', 'tamone', '2011-04053-MN-0'),
(35, 1, 'ramil ', 'lucot', 'villanueva', '2011-02005-MN-0'),
(36, 1, 'wilfredo ', 'panis', 'villanueva iii', '2011-01971-MN-0'),
(37, 2, 'marcelo ', 'ragay', 'anzano', '2011-00255-MN-0'),
(38, 2, 'lorenzo ', 'sabadlan', 'arcinue', '2011-03709-MN-0'),
(39, 2, 'joeden ', 'gonzales', 'asuncion', '2011-03478-MN-0'),
(40, 2, 'julius ', 'parnay', 'balais', '2011-02830-MN-0'),
(41, 2, 'angelica mae ', 'aquino', 'banaag', '2011-03161-MN-0'),
(42, 2, 'mark oliver ', 'esteban', 'cahinde', '2011-00064-MN-0'),
(43, 2, 'noel ', 'almaden', 'cambel jr.', '2011-00616-MN-0'),
(44, 2, 'jess ', 'jonilas', 'canaway', '2011-00245-MN-0'),
(45, 2, 'claire ', 'tumbaga', 'capio', '2011-01989-MN-0'),
(46, 2, 'jherick ', 'bacagan', 'daso', '2011-06816-MN-0'),
(47, 2, 'rhia joyce ', 'ortiz', 'eden', '2011-03796-MN-0'),
(48, 2, 'lara mae ', 'domingo', 'edles', '2011-01918-MN-0'),
(49, 2, 'joanna marie ', 'abule', 'ellarina', '2011-01858-MN-0'),
(50, 2, 'carol shanti ', 'garcia', 'estolas', '2011-02357-MN-0'),
(51, 2, 'justin ', 'cornelio', 'flores', '2011-00090-MN-0'),
(52, 2, 'micah mariel ', 'visto', 'garcia', '2011-04453-MN-0'),
(53, 2, 'athanasios ', 'sabado', 'go', '2008-00242-MN-0'),
(54, 2, 'romulo ', 'baltazar', 'jaravata jr.', '2011-01709-MN-0'),
(55, 2, 'genesis yeshua ', 'carreon', 'lim', '2011-02165-MN-0'),
(56, 2, 'ralph ', 'tadia', 'llaguno', '2011-03127-MN-0'),
(57, 2, 'romelia ', 'agustin', 'lutrania', '2012-11229-MN-1'),
(58, 2, 'jose mari ', 'cruz', 'manio', '2011-05187-MN-0'),
(59, 2, 'christine ', 'rubante', 'manrique', '2011-00049-MN-0'),
(60, 2, 'karolyn ', 'amaya', 'maquilan', '2011-04515-MN-0'),
(61, 2, 'john paul ', 'veral', 'mayo', '2011-03256-MN-0'),
(62, 2, 'arian ', 'sario', 'nolasco', '2011-01115-MN-0'),
(63, 2, 'john michael ', 'gonzales', 'nolasco', '2011-00043-MN-0'),
(64, 2, 'jerome ', 'laserna', 'olavario', '2011-05554-MN-0'),
(65, 2, 'gellie ', 'tiburcio', 'quiatchon', '2011-01241-MN-0'),
(66, 2, 'beatrice nicole ', 'ramos', 'quindoyos', '2011-03262-MN-0'),
(67, 2, 'lee arvi ', 'banaag', 'real', '2011-00045-MN-0'),
(68, 2, 'john paul ', 'cruz', 'resuello', '2011-00046-MN-0'),
(69, 2, 'rafael john ', 'boltron', 'surnet', '2011-05609-MN-0'),
(70, 2, 'luisito jr. ', 'nebab', 'tamone', '2011-04053-MN-0'),
(71, 2, 'ramil ', 'lucot', 'villanueva', '2011-02005-MN-0'),
(72, 2, 'wilfredo ', 'panis', 'villanueva iii', '2011-01971-MN-0');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE IF NOT EXISTS `subjects` (
`Id` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `SubjectTitle` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`Id`, `UserId`, `SubjectTitle`) VALUES
(1, 12, 'BSCOE Elec4 Bscoe Elective 4'),
(2, 12, 'BSCOE Elec4 Bscoe Elective 4');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`Id` int(11) NOT NULL,
  `Username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `UserType` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `UserDept` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `LoginHist` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`Id`, `Username`, `Password`, `UserType`, `UserDept`, `LoginHist`) VALUES
(2, 'administrator', '200ceb26807d6bf99fd6f4f0d1ca54d4', 'Administrator', 'Computer Engineering', '0000-00-00 00:00:00'),
(12, 'faculty', 'd561c7c03c1f2831904823a95835ff5f', 'Faculty', 'Computer Engineering', '0000-00-00 00:00:00'),
(14, 'chairperson', '37cc87d2e99db3a0535f891ba0d3f1e9', 'Chairperson', 'Computer Engineering', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assignment`
--
ALTER TABLE `assignment`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `calendar`
--
ALTER TABLE `calendar`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `class`
--
ALTER TABLE `class`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `exercises`
--
ALTER TABLE `exercises`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
 ADD PRIMARY KEY (`UserId`);

--
-- Indexes for table `final_exam`
--
ALTER TABLE `final_exam`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `lab_act`
--
ALTER TABLE `lab_act`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `long_exam`
--
ALTER TABLE `long_exam`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `midterm_exam`
--
ALTER TABLE `midterm_exam`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `mod_assign`
--
ALTER TABLE `mod_assign`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `mod_att`
--
ALTER TABLE `mod_att`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `mod_ex`
--
ALTER TABLE `mod_ex`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `mod_fe`
--
ALTER TABLE `mod_fe`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `mod_lab`
--
ALTER TABLE `mod_lab`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `mod_le`
--
ALTER TABLE `mod_le`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `mod_me`
--
ALTER TABLE `mod_me`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `mod_prac`
--
ALTER TABLE `mod_prac`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `mod_proj`
--
ALTER TABLE `mod_proj`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `mod_quiz`
--
ALTER TABLE `mod_quiz`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `mod_rec`
--
ALTER TABLE `mod_rec`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `mod_sw`
--
ALTER TABLE `mod_sw`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `prac_exam`
--
ALTER TABLE `prac_exam`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `quizzes`
--
ALTER TABLE `quizzes`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `recitation`
--
ALTER TABLE `recitation`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `seatwork`
--
ALTER TABLE `seatwork`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`Id`), ADD KEY `Id` (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assignment`
--
ALTER TABLE `assignment`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=73;
--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=73;
--
-- AUTO_INCREMENT for table `calendar`
--
ALTER TABLE `calendar`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `exercises`
--
ALTER TABLE `exercises`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=73;
--
-- AUTO_INCREMENT for table `final_exam`
--
ALTER TABLE `final_exam`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=37;
--
-- AUTO_INCREMENT for table `lab_act`
--
ALTER TABLE `lab_act`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=73;
--
-- AUTO_INCREMENT for table `long_exam`
--
ALTER TABLE `long_exam`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=73;
--
-- AUTO_INCREMENT for table `midterm_exam`
--
ALTER TABLE `midterm_exam`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=37;
--
-- AUTO_INCREMENT for table `mod_assign`
--
ALTER TABLE `mod_assign`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `mod_att`
--
ALTER TABLE `mod_att`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `mod_ex`
--
ALTER TABLE `mod_ex`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `mod_fe`
--
ALTER TABLE `mod_fe`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `mod_lab`
--
ALTER TABLE `mod_lab`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `mod_le`
--
ALTER TABLE `mod_le`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `mod_me`
--
ALTER TABLE `mod_me`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `mod_prac`
--
ALTER TABLE `mod_prac`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `mod_proj`
--
ALTER TABLE `mod_proj`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `mod_quiz`
--
ALTER TABLE `mod_quiz`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `mod_rec`
--
ALTER TABLE `mod_rec`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `mod_sw`
--
ALTER TABLE `mod_sw`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `prac_exam`
--
ALTER TABLE `prac_exam`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=73;
--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=73;
--
-- AUTO_INCREMENT for table `quizzes`
--
ALTER TABLE `quizzes`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=73;
--
-- AUTO_INCREMENT for table `recitation`
--
ALTER TABLE `recitation`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=73;
--
-- AUTO_INCREMENT for table `seatwork`
--
ALTER TABLE `seatwork`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=73;
--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=73;
--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
