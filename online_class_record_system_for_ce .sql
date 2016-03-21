-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 21, 2016 at 10:54 AM
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
  `StudGradeId` int(11) NOT NULL,
  `Score` float NOT NULL,
  `Rating` float NOT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE IF NOT EXISTS `attendance` (
`Id` int(11) NOT NULL,
  `StudGradeId` int(11) NOT NULL,
  `Status` varchar(50) NOT NULL,
  `Score` float NOT NULL,
  `Rating` float NOT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `calendar`
--

CREATE TABLE IF NOT EXISTS `calendar` (
`Id` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `Date` date NOT NULL,
  `Event` varchar(300) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `calendar`
--

INSERT INTO `calendar` (`Id`, `UserId`, `Date`, `Event`) VALUES
(59, 2, '2016-03-04', 'Practical #3 on Computer Networks'),
(60, 2, '2016-03-12', 'Game Dev Project Submission'),
(61, 2, '2016-03-09', 'TQM Project Submission'),
(62, 2, '2016-03-21', 'Start of Holy Week'),
(63, 2, '2016-11-28', 'My Birthdaaaay :D'),
(65, 2, '2016-04-29', 'Graduation');

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
  `Filename` varchar(100) DEFAULT NULL,
  `IsUploaded` tinyint(1) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`Id`, `SubjectId`, `ClassBlock`, `ModuleType`, `NumOfStudents`, `Passers`, `YrSem`, `Schedule`, `Filename`, `IsUploaded`) VALUES
(4, 4, 'BSCOE 5-1', 'Lec', 36, NULL, 'Second Semester 2015-16', 'W 07:30AM-10:30AM', NULL, 1),
(5, 5, 'BSCOE 2-3', 'Lab', 45, NULL, 'Second Semester 2015-16', 'S/S 07:30AM-10:30AM/10:30AM-01:30PM', NULL, 1),
(6, 6, 'BSCOE 3-5', 'Lec', 50, NULL, 'Second Semester 2015-16', 'T/F 02:00PM-05:00PM/02:00PM-05:00PM', NULL, 0),
(7, 7, 'BSCOE 5-3', 'Lab', 49, NULL, 'Second Semester 2015-16', 'M 03:00PM-06:00PM', NULL, 1),
(8, 8, 'BSCOE 4-3', 'Lec', 31, NULL, 'Second Semester 2015-16', 'T/F 07:30AM-10:30AM/07:30AM-10:30AM', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `exercises`
--

CREATE TABLE IF NOT EXISTS `exercises` (
`Id` int(11) NOT NULL,
  `StudGradeId` int(11) NOT NULL,
  `Score` float NOT NULL,
  `Rating` float NOT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(8, 'Outstanding', 'Remedios', 'Gggggg', 'Ado'),
(9, 'Decisive,Smart', 'Pedrito Jr', 'Nnnn', 'Tenerife'),
(10, 'Cute', 'Arian', 'Sario', 'Nolasco'),
(11, 'Smart', 'Julian', 'Ffff', 'Lorico'),
(12, 'Handsome', 'Ferdinand', 'Ooooo', 'Natividad');

-- --------------------------------------------------------

--
-- Table structure for table `final_exam`
--

CREATE TABLE IF NOT EXISTS `final_exam` (
`Id` int(11) NOT NULL,
  `StudGradeId` int(11) NOT NULL,
  `Score` float NOT NULL,
  `Rating` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `grades`
--

CREATE TABLE IF NOT EXISTS `grades` (
`Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `MidTermGrade` int(11) NOT NULL,
  `FinalGrade` int(11) NOT NULL,
  `TotalGrade` int(11) NOT NULL,
  `GradeRemarks` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `grading_system`
--

CREATE TABLE IF NOT EXISTS `grading_system` (
`Id` int(11) NOT NULL,
  `1_00` varchar(10) NOT NULL,
  `1_25` varchar(10) NOT NULL,
  `1_50` varchar(10) NOT NULL,
  `1_75` varchar(10) NOT NULL,
  `2_00` varchar(10) NOT NULL,
  `2_25` varchar(10) NOT NULL,
  `2_50` varchar(10) NOT NULL,
  `2_75` varchar(10) NOT NULL,
  `3_00` varchar(10) NOT NULL,
  `5_00` varchar(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `grading_system`
--

INSERT INTO `grading_system` (`Id`, `1_00`, `1_25`, `1_50`, `1_75`, `2_00`, `2_25`, `2_50`, `2_75`, `3_00`, `5_00`) VALUES
(1, '97-100', '94-96', '91-93', '88-90', '85-87', '82-84', '79-81', '76-78', '75-75', '0-74');

-- --------------------------------------------------------

--
-- Table structure for table `labmodperc`
--

CREATE TABLE IF NOT EXISTS `labmodperc` (
`Id` tinyint(4) NOT NULL,
  `PracExam` tinyint(4) NOT NULL,
  `Project` tinyint(4) NOT NULL,
  `Lab_MachineEx` tinyint(4) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

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
  `StudGradeId` int(11) NOT NULL,
  `Score` float NOT NULL,
  `Rating` float NOT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

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
  `StudGradeId` int(11) NOT NULL,
  `Score` float NOT NULL,
  `Rating` float NOT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `midterm_exam`
--

CREATE TABLE IF NOT EXISTS `midterm_exam` (
`Id` int(11) NOT NULL,
  `StudGradeId` int(11) NOT NULL,
  `Score` float NOT NULL,
  `Rating` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `moduleitems`
--

CREATE TABLE IF NOT EXISTS `moduleitems` (
`Id` int(11) NOT NULL,
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
  `FExamItems` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `prac_exam`
--

CREATE TABLE IF NOT EXISTS `prac_exam` (
`Id` int(11) NOT NULL,
  `StudGradeId` int(11) NOT NULL,
  `Score` float NOT NULL,
  `Rating` float NOT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE IF NOT EXISTS `project` (
  `Id` int(11) NOT NULL,
  `StudGradeId` int(11) NOT NULL,
  `Score` float NOT NULL,
  `Rating` float NOT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `quizzes`
--

CREATE TABLE IF NOT EXISTS `quizzes` (
`Id` int(11) NOT NULL,
  `StudGradeId` int(11) NOT NULL,
  `Score` float NOT NULL,
  `Rating` float NOT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `recitation`
--

CREATE TABLE IF NOT EXISTS `recitation` (
  `Id` int(11) NOT NULL,
  `StudGradeId` int(11) NOT NULL,
  `Score` float NOT NULL,
  `Rating` float NOT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `seatwork`
--

CREATE TABLE IF NOT EXISTS `seatwork` (
`Id` int(11) NOT NULL,
  `StudGradeId` int(11) NOT NULL,
  `Score` float NOT NULL,
  `Rating` float NOT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB AUTO_INCREMENT=343 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`Id`, `ClassId`, `FName`, `MName`, `LName`, `StudentNumber`) VALUES
(1, 1, 'marrynel ', 'maglasang', 'abonalla', '2014-02145-MN-0'),
(2, 1, 'john paul ', 'flores', 'avila', '2014-00767-MN-0'),
(3, 1, 'mitzi ', 'pascual', 'balbaboco', '2014-07793-MN-0'),
(4, 1, 'jasmine jaya ', 'sesbreÑo', 'belo', '2014-00681-MN-0'),
(5, 1, 'jonnel ', 'exclamado', 'bernal', '2014-01498-MN-0'),
(6, 1, 'rexc paul ', 'delmoro', 'bordeos', '2014-01916-MN-0'),
(7, 1, 'roma bethany ', 'cantila', 'callora', '2014-02750-MN-0'),
(8, 1, 'venmar ', 'cayangyang', 'cantilado', '2014-03737-MN-0'),
(9, 1, 'john lawrence ', 'aguilar', 'cernal', '2014-02285-MN-0'),
(10, 1, 'christine joyce ', 'beltran', 'cillo', '2014-03594-MN-0'),
(11, 1, 'jerome ', 'cerbito', 'colapo', '2014-03201-MN-0'),
(12, 1, 'james rowel ', 'bautista', 'corpuz', '2014-01339-MN-0'),
(13, 1, 'chelsea kaitlyn ', 'cruz', 'cruz', '2014-03263-MN-0'),
(14, 1, 'ma. aubrey ', 'alvaran', 'danga', '2014-02196-MN-0'),
(15, 1, 'niÑo ', 'pineda', 'diaz', '2014-00570-MN-0'),
(16, 1, 'james angelo ', 'suarez', 'ergina', '2014-06233-MN-0'),
(17, 1, 'christian alvin ', 'fontarum', 'fadera', '2014-07577-MN-0'),
(18, 1, 'mark julius ', 'fernando', 'galauran', '2014-00572-MN-0'),
(19, 1, 'stephanie lorraine ', 'torres', 'garcia', '2014-04513-MN-0'),
(20, 1, 'ernest philip ', 'aguilar', 'guevara', '2014-03951-MN-0'),
(21, 1, 'vicheartzel rose ', 'linguis', 'jayson', '2014-02878-MN-0'),
(22, 1, 'jonathan ', 'ente', 'jimenez', '2014-00637-MN-0'),
(23, 1, 'justine lloyd ', 'salva', 'jose', '2014-02838-MN-0'),
(24, 1, 'patrick ', 'bueno', 'lara', '2014-01836-MN-0'),
(25, 1, 'bryan keith ', 'parreÑo', 'layderos', '2014-03628-MN-0'),
(26, 1, 'maria geneda ', 'lascano', 'layno', '2014-03116-MN-0'),
(27, 1, 'angelo joshua ', 'nibut', 'lomboy', '2014-03979-MN-0'),
(28, 1, 'john benedict ', 'aguirre', 'maculada', '2014-00640-MN-0'),
(29, 1, 'trixie shane ', 'gabriel', 'maningding', '2014-00396-MN-0'),
(30, 1, 'rex cedric ', 'sagat', 'manuel', '2014-06525-MN-0'),
(31, 1, 'joshua ', 'reyes', 'medina', '2014-03877-MN-0'),
(32, 1, 'james ', 'soliva', 'mendoza', '2014-06111-MN-0'),
(33, 1, 'jared ', 'barrameda', 'ochoa', '2014-00232-MN-0'),
(34, 1, 'marco ', 'realuyo', 'orencia', '2013-05811-MN-0'),
(35, 1, 'elaiza mae ', 'diaz', 'ortega', '2014-01909-MN-0'),
(36, 1, 'al rey ', 'gutierrez', 'panilagao', '2014-00380-MN-0'),
(37, 1, 'christian ', 'nesta', 'paralejas', '2014-02728-MN-0'),
(38, 1, 'aldwin ', 'cadusale', 'pelayo', '2014-00842-MN-0'),
(39, 1, 'ernest nicole ', 'villaro', 'penales', '2014-07591-MN-0'),
(40, 1, 'halen dave ', 'untalan', 'perez', '2014-05798-MN-0'),
(41, 1, 'rusell jane ', 'sacdalan', 'quitain', '2014-01701-MN-0'),
(42, 1, 'steven joe ', 'lomeda', 'rebullido', '2014-01078-MN-0'),
(43, 1, 'clarisse ann ', 'sending', 'temporosa', '2014-02062-MN-0'),
(44, 1, 'ryan jasper ', 'villapando', 'tupaz', '2014-01306-MN-0'),
(45, 1, 'philip nathan ', 'paler', 'yaun', '2014-03599-MN-0'),
(46, 2, 'eleazar ', 'rueda', 'aÑo', '2013-06388-MN-0'),
(47, 2, 'rafael christian sto. ', 'domingo', 'aguilar', '2013-07302-MN-0'),
(48, 2, 'jazz joel de ', 'guzman', 'alvarez', '2013-00782-MN-0'),
(49, 2, 'jon vincent ', 'austria', 'angat', '2013-01169-MN-0'),
(50, 2, 'daryl don ', 'armenion', 'arce', '2013-03923-MN-0'),
(51, 2, 'michael eugene ', 'maquiÑana', 'asinas', '2013-05973-MN-0'),
(52, 2, 'kimberly ', 'medina', 'azul', '2013-01565-MN-0'),
(53, 2, 'princess nicole ', '', 'bacay', '2013-06954-MN-0'),
(54, 2, 'ryan ', 'ginez', 'baronia', '2013-00912-MN-0'),
(55, 2, 'john jerald ', 'gutierrez', 'bautista', '2013-06258-MN-0'),
(56, 2, 'jason edward ', 'vergara', 'bio', '2013-04376-MN-0'),
(57, 2, 'vince orvhict ', 'villena', 'blando', '2013-07806-MN-0'),
(58, 2, 'reynell ', 'cortiguierra', 'bobihis', '2013-05528-MN-0'),
(59, 2, 'francess marie ', 'amis', 'busalpa', '2013-06206-MN-0'),
(60, 2, 'humphrey ', 'buan', 'calalin jr.', '2013-03512-MN-0'),
(61, 2, 'ephraim joel ', 'martinez', 'capistrano', '2013-03669-MN-0'),
(62, 2, 'jon rhozze ', 'panlaqui', 'de jesus', '2013-03756-MN-0'),
(63, 2, 'aldrin ', 'nadres', 'de ramos', '2013-02290-MN-0'),
(64, 2, 'neil carlo ', 'baluyot', 'del mundo', '2013-00900-MN-0'),
(65, 2, 'jessieca ', 'baldonado', 'diano', '2013-01442-MN-0'),
(66, 2, 'maria aubrey ', 'almiï¿½e', 'eleria', '2013-02476-MN-0'),
(67, 2, 'jerwin russell ', '', 'esmalla', '2013-03169-MN-0'),
(68, 2, 'prince deozel ', 'mercado', 'espiritu', '2013-03132-MN-0'),
(69, 2, 'mark joshua ', 'olegario', 'francisco', '2013-02256-MN-0'),
(70, 2, 'judylene ', 'umali', 'gabia', '2013-06070-MN-0'),
(71, 2, 'lloyd ', 'gomez', 'gabriel', '2013-01450-MN-0'),
(72, 2, 'clarisse ', 'ibasco', 'ibasco', '2013-03193-MN-0'),
(73, 2, 'reynaldo ', 'acilo', 'ilagan', '2013-01364-MN-0'),
(74, 2, 'sonny boy de ', 'luna', 'italio', '2013-06398-MN-0'),
(75, 2, 'joseph ', 'rojas', 'lat', '2013-07452-MN-0'),
(76, 2, 'christine  joyce ', 'pastrana', 'llanes', '2013-03144-MN-0'),
(77, 2, 'kenneth ', 'marin', 'lobaton', '2013-03563-MN-0'),
(78, 2, 'florevi dela ', 'cruz', 'lopez', '2013-02641-MN-0'),
(79, 2, 'merynelle ', 'dichoso', 'lopez', '2013-03358-MN-0'),
(80, 2, 'abigail dela ', 'torre', 'macasinag', '2013-01451-MN-0'),
(81, 2, 'john karl ', 'labiste', 'malabanan', '2013-00817-MN-0'),
(82, 2, 'john peter ', 'falculan', 'mendoza', '2013-06330-MN-0'),
(83, 2, 'dale ivan ', 'mora', 'merza', '2013-01445-MN-0'),
(84, 2, 'john israel ', 'mellendrez', 'mesajon', '2013-03008-MN-0'),
(85, 2, 'miguelito ', 'labrador', 'mullion', '2013-05440-MN-0'),
(86, 2, 'rollen joy ', 'sarmiento', 'nabia', '2013-03336-MN-0'),
(87, 2, 'jennilene ', 'ausa', 'pol', '2013-01726-MN-0'),
(88, 2, 'rick anthony ', 'espino', 'policarpio', '2013-07420-MN-0'),
(89, 2, 'kevin red ', 'bersamina', 'salamat', '2013-05800-MN-0'),
(90, 2, 'rofherson ', 'canones', 'suzon', '2013-00785-MN-0'),
(91, 2, 'mary mariel ', 'martinez', 'teodoro', '2013-02176-MN-0'),
(92, 2, 'miguel san ', 'buenaventura', 'turqueza', '2013-04658-MN-0'),
(93, 2, 'rovien ', 'palmes', 'vargas', '2013-03581-MN-0'),
(94, 2, 'nica chloie ', 'garcia', 'yecla', '2013-04190-MN-0'),
(95, 2, 'hanah mae ', 'pilapil', 'zamora', '2013-00734-MN-0'),
(96, 3, 'marcelo ', 'ragay', 'anzano', '2011-00255-MN-0'),
(97, 3, 'lorenzo ', 'sabadlan', 'arcinue', '2011-03709-MN-0'),
(98, 3, 'joeden ', 'gonzales', 'asuncion', '2011-03478-MN-0'),
(99, 3, 'julius ', 'parnay', 'balais', '2011-02830-MN-0'),
(100, 3, 'angelica mae ', 'aquino', 'banaag', '2011-03161-MN-0'),
(101, 3, 'mark oliver ', 'esteban', 'cahinde', '2011-00064-MN-0'),
(102, 3, 'noel ', 'almaden', 'cambel jr.', '2011-00616-MN-0'),
(103, 3, 'jess ', 'jonilas', 'canaway', '2011-00245-MN-0'),
(104, 3, 'claire ', 'tumbaga', 'capio', '2011-01989-MN-0'),
(105, 3, 'jherick ', 'bacagan', 'daso', '2011-06816-MN-0'),
(106, 3, 'rhia joyce ', 'ortiz', 'eden', '2011-03796-MN-0'),
(107, 3, 'lara mae ', 'domingo', 'edles', '2011-01918-MN-0'),
(108, 3, 'joanna marie ', 'abule', 'ellarina', '2011-01858-MN-0'),
(109, 3, 'carol shanti ', 'garcia', 'estolas', '2011-02357-MN-0'),
(110, 3, 'justin ', 'cornelio', 'flores', '2011-00090-MN-0'),
(111, 3, 'micah mariel ', 'visto', 'garcia', '2011-04453-MN-0'),
(112, 3, 'athanasios ', 'sabado', 'go', '2008-00242-MN-0'),
(113, 3, 'romulo ', 'baltazar', 'jaravata jr.', '2011-01709-MN-0'),
(114, 3, 'genesis yeshua ', 'carreon', 'lim', '2011-02165-MN-0'),
(115, 3, 'ralph ', 'tadia', 'llaguno', '2011-03127-MN-0'),
(116, 3, 'romelia ', 'agustin', 'lutrania', '2012-11229-MN-1'),
(117, 3, 'jose mari ', 'cruz', 'manio', '2011-05187-MN-0'),
(118, 3, 'christine ', 'rubante', 'manrique', '2011-00049-MN-0'),
(119, 3, 'karolyn ', 'amaya', 'maquilan', '2011-04515-MN-0'),
(120, 3, 'john paul ', 'veral', 'mayo', '2011-03256-MN-0'),
(121, 3, 'arian ', 'sario', 'nolasco', '2011-01115-MN-0'),
(122, 3, 'john michael ', 'gonzales', 'nolasco', '2011-00043-MN-0'),
(123, 3, 'jerome ', 'laserna', 'olavario', '2011-05554-MN-0'),
(124, 3, 'gellie ', 'tiburcio', 'quiatchon', '2011-01241-MN-0'),
(125, 3, 'beatrice nicole ', 'ramos', 'quindoyos', '2011-03262-MN-0'),
(126, 3, 'lee arvi ', 'banaag', 'real', '2011-00045-MN-0'),
(127, 3, 'john paul ', 'cruz', 'resuello', '2011-00046-MN-0'),
(128, 3, 'rafael john ', 'boltron', 'surnet', '2011-05609-MN-0'),
(129, 3, 'luisito jr. ', 'nebab', 'tamone', '2011-04053-MN-0'),
(130, 3, 'ramil ', 'lucot', 'villanueva', '2011-02005-MN-0'),
(131, 3, 'wilfredo ', 'panis', 'villanueva iii', '2011-01971-MN-0'),
(132, 4, 'marcelo ', 'ragay', 'anzano', '2011-00255-MN-0'),
(133, 4, 'lorenzo ', 'sabadlan', 'arcinue', '2011-03709-MN-0'),
(134, 4, 'joeden ', 'gonzales', 'asuncion', '2011-03478-MN-0'),
(135, 4, 'julius ', 'parnay', 'balais', '2011-02830-MN-0'),
(136, 4, 'angelica mae ', 'aquino', 'banaag', '2011-03161-MN-0'),
(137, 4, 'mark oliver ', 'esteban', 'cahinde', '2011-00064-MN-0'),
(138, 4, 'noel ', 'almaden', 'cambel jr.', '2011-00616-MN-0'),
(139, 4, 'jess ', 'jonilas', 'canaway', '2011-00245-MN-0'),
(140, 4, 'claire ', 'tumbaga', 'capio', '2011-01989-MN-0'),
(141, 4, 'jherick ', 'bacagan', 'daso', '2011-06816-MN-0'),
(142, 4, 'rhia joyce ', 'ortiz', 'eden', '2011-03796-MN-0'),
(143, 4, 'lara mae ', 'domingo', 'edles', '2011-01918-MN-0'),
(144, 4, 'joanna marie ', 'abule', 'ellarina', '2011-01858-MN-0'),
(145, 4, 'carol shanti ', 'garcia', 'estolas', '2011-02357-MN-0'),
(146, 4, 'justin ', 'cornelio', 'flores', '2011-00090-MN-0'),
(147, 4, 'micah mariel ', 'visto', 'garcia', '2011-04453-MN-0'),
(148, 4, 'athanasios ', 'sabado', 'go', '2008-00242-MN-0'),
(149, 4, 'romulo ', 'baltazar', 'jaravata jr.', '2011-01709-MN-0'),
(150, 4, 'genesis yeshua ', 'carreon', 'lim', '2011-02165-MN-0'),
(151, 4, 'ralph ', 'tadia', 'llaguno', '2011-03127-MN-0'),
(152, 4, 'romelia ', 'agustin', 'lutrania', '2012-11229-MN-1'),
(153, 4, 'jose mari ', 'cruz', 'manio', '2011-05187-MN-0'),
(154, 4, 'christine ', 'rubante', 'manrique', '2011-00049-MN-0'),
(155, 4, 'karolyn ', 'amaya', 'maquilan', '2011-04515-MN-0'),
(156, 4, 'john paul ', 'veral', 'mayo', '2011-03256-MN-0'),
(157, 4, 'arian ', 'sario', 'nolasco', '2011-01115-MN-0'),
(158, 4, 'john michael ', 'gonzales', 'nolasco', '2011-00043-MN-0'),
(159, 4, 'jerome ', 'laserna', 'olavario', '2011-05554-MN-0'),
(160, 4, 'gellie ', 'tiburcio', 'quiatchon', '2011-01241-MN-0'),
(161, 4, 'beatrice nicole ', 'ramos', 'quindoyos', '2011-03262-MN-0'),
(162, 4, 'lee arvi ', 'banaag', 'real', '2011-00045-MN-0'),
(163, 4, 'john paul ', 'cruz', 'resuello', '2011-00046-MN-0'),
(164, 4, 'rafael john ', 'boltron', 'surnet', '2011-05609-MN-0'),
(165, 4, 'luisito jr. ', 'nebab', 'tamone', '2011-04053-MN-0'),
(166, 4, 'ramil ', 'lucot', 'villanueva', '2011-02005-MN-0'),
(167, 4, 'wilfredo ', 'panis', 'villanueva iii', '2011-01971-MN-0'),
(168, 5, 'marrynel ', 'maglasang', 'abonalla', '2014-02145-MN-0'),
(169, 5, 'john paul ', 'flores', 'avila', '2014-00767-MN-0'),
(170, 5, 'mitzi ', 'pascual', 'balbaboco', '2014-07793-MN-0'),
(171, 5, 'jasmine jaya ', 'sesbreño', 'belo', '2014-00681-MN-0'),
(172, 5, 'jonnel ', 'exclamado', 'bernal', '2014-01498-MN-0'),
(173, 5, 'rexc paul ', 'delmoro', 'bordeos', '2014-01916-MN-0'),
(174, 5, 'roma bethany ', 'cantila', 'callora', '2014-02750-MN-0'),
(175, 5, 'venmar ', 'cayangyang', 'cantilado', '2014-03737-MN-0'),
(176, 5, 'john lawrence ', 'aguilar', 'cernal', '2014-02285-MN-0'),
(177, 5, 'christine joyce ', 'beltran', 'cillo', '2014-03594-MN-0'),
(178, 5, 'jerome ', 'cerbito', 'colapo', '2014-03201-MN-0'),
(179, 5, 'james rowel ', 'bautista', 'corpuz', '2014-01339-MN-0'),
(180, 5, 'chelsea kaitlyn ', 'cruz', 'cruz', '2014-03263-MN-0'),
(181, 5, 'ma. aubrey ', 'alvaran', 'danga', '2014-02196-MN-0'),
(182, 5, 'niño ', 'pineda', 'diaz', '2014-00570-MN-0'),
(183, 5, 'james angelo ', 'suarez', 'ergina', '2014-06233-MN-0'),
(184, 5, 'christian alvin ', 'fontarum', 'fadera', '2014-07577-MN-0'),
(185, 5, 'mark julius ', 'fernando', 'galauran', '2014-00572-MN-0'),
(186, 5, 'stephanie lorraine ', 'torres', 'garcia', '2014-04513-MN-0'),
(187, 5, 'ernest philip ', 'aguilar', 'guevara', '2014-03951-MN-0'),
(188, 5, 'vicheartzel rose ', 'linguis', 'jayson', '2014-02878-MN-0'),
(189, 5, 'jonathan ', 'ente', 'jimenez', '2014-00637-MN-0'),
(190, 5, 'justine lloyd ', 'salva', 'jose', '2014-02838-MN-0'),
(191, 5, 'patrick ', 'bueno', 'lara', '2014-01836-MN-0'),
(192, 5, 'bryan keith ', 'parreño', 'layderos', '2014-03628-MN-0'),
(193, 5, 'maria geneda ', 'lascano', 'layno', '2014-03116-MN-0'),
(194, 5, 'angelo joshua ', 'nibut', 'lomboy', '2014-03979-MN-0'),
(195, 5, 'john benedict ', 'aguirre', 'maculada', '2014-00640-MN-0'),
(196, 5, 'trixie shane ', 'gabriel', 'maningding', '2014-00396-MN-0'),
(197, 5, 'rex cedric ', 'sagat', 'manuel', '2014-06525-MN-0'),
(198, 5, 'joshua ', 'reyes', 'medina', '2014-03877-MN-0'),
(199, 5, 'james ', 'soliva', 'mendoza', '2014-06111-MN-0'),
(200, 5, 'jared ', 'barrameda', 'ochoa', '2014-00232-MN-0'),
(201, 5, 'marco ', 'realuyo', 'orencia', '2013-05811-MN-0'),
(202, 5, 'elaiza mae ', 'diaz', 'ortega', '2014-01909-MN-0'),
(203, 5, 'al rey ', 'gutierrez', 'panilagao', '2014-00380-MN-0'),
(204, 5, 'christian ', 'nesta', 'paralejas', '2014-02728-MN-0'),
(205, 5, 'aldwin ', 'cadusale', 'pelayo', '2014-00842-MN-0'),
(206, 5, 'ernest nicole ', 'villaro', 'penales', '2014-07591-MN-0'),
(207, 5, 'halen dave ', 'untalan', 'perez', '2014-05798-MN-0'),
(208, 5, 'rusell jane ', 'sacdalan', 'quitain', '2014-01701-MN-0'),
(209, 5, 'steven joe ', 'lomeda', 'rebullido', '2014-01078-MN-0'),
(210, 5, 'clarisse ann ', 'sending', 'temporosa', '2014-02062-MN-0'),
(211, 5, 'ryan jasper ', 'villapando', 'tupaz', '2014-01306-MN-0'),
(212, 5, 'philip nathan ', 'paler', 'yaun', '2014-03599-MN-0'),
(213, 6, 'eleazar ', 'rueda', 'año', '2013-06388-MN-0'),
(214, 6, 'rafael christian sto. ', 'domingo', 'aguilar', '2013-07302-MN-0'),
(215, 6, 'jazz joel de ', 'guzman', 'alvarez', '2013-00782-MN-0'),
(216, 6, 'jon vincent ', 'austria', 'angat', '2013-01169-MN-0'),
(217, 6, 'daryl don ', 'armenion', 'arce', '2013-03923-MN-0'),
(218, 6, 'michael eugene ', 'maquiñana', 'asinas', '2013-05973-MN-0'),
(219, 6, 'kimberly ', 'medina', 'azul', '2013-01565-MN-0'),
(220, 6, 'princess nicole ', '', 'bacay', '2013-06954-MN-0'),
(221, 6, 'ryan ', 'ginez', 'baronia', '2013-00912-MN-0'),
(222, 6, 'john jerald ', 'gutierrez', 'bautista', '2013-06258-MN-0'),
(223, 6, 'jason edward ', 'vergara', 'bio', '2013-04376-MN-0'),
(224, 6, 'vince orvhict ', 'villena', 'blando', '2013-07806-MN-0'),
(225, 6, 'reynell ', 'cortiguierra', 'bobihis', '2013-05528-MN-0'),
(226, 6, 'francess marie ', 'amis', 'busalpa', '2013-06206-MN-0'),
(227, 6, 'humphrey ', 'buan', 'calalin jr.', '2013-03512-MN-0'),
(228, 6, 'ephraim joel ', 'martinez', 'capistrano', '2013-03669-MN-0'),
(229, 6, 'jon rhozze ', 'panlaqui', 'de jesus', '2013-03756-MN-0'),
(230, 6, 'aldrin ', 'nadres', 'de ramos', '2013-02290-MN-0'),
(231, 6, 'neil carlo ', 'baluyot', 'del mundo', '2013-00900-MN-0'),
(232, 6, 'jessieca ', 'baldonado', 'diano', '2013-01442-MN-0'),
(233, 6, 'maria aubrey ', 'almiï¿½e', 'eleria', '2013-02476-MN-0'),
(234, 6, 'jerwin russell ', '', 'esmalla', '2013-03169-MN-0'),
(235, 6, 'prince deozel ', 'mercado', 'espiritu', '2013-03132-MN-0'),
(236, 6, 'mark joshua ', 'olegario', 'francisco', '2013-02256-MN-0'),
(237, 6, 'judylene ', 'umali', 'gabia', '2013-06070-MN-0'),
(238, 6, 'lloyd ', 'gomez', 'gabriel', '2013-01450-MN-0'),
(239, 6, 'clarisse ', 'ibasco', 'ibasco', '2013-03193-MN-0'),
(240, 6, 'reynaldo ', 'acilo', 'ilagan', '2013-01364-MN-0'),
(241, 6, 'sonny boy de ', 'luna', 'italio', '2013-06398-MN-0'),
(242, 6, 'joseph ', 'rojas', 'lat', '2013-07452-MN-0'),
(243, 6, 'christine  joyce ', 'pastrana', 'llanes', '2013-03144-MN-0'),
(244, 6, 'kenneth ', 'marin', 'lobaton', '2013-03563-MN-0'),
(245, 6, 'florevi dela ', 'cruz', 'lopez', '2013-02641-MN-0'),
(246, 6, 'merynelle ', 'dichoso', 'lopez', '2013-03358-MN-0'),
(247, 6, 'abigail dela ', 'torre', 'macasinag', '2013-01451-MN-0'),
(248, 6, 'john karl ', 'labiste', 'malabanan', '2013-00817-MN-0'),
(249, 6, 'john peter ', 'falculan', 'mendoza', '2013-06330-MN-0'),
(250, 6, 'dale ivan ', 'mora', 'merza', '2013-01445-MN-0'),
(251, 6, 'john israel ', 'mellendrez', 'mesajon', '2013-03008-MN-0'),
(252, 6, 'miguelito ', 'labrador', 'mullion', '2013-05440-MN-0'),
(253, 6, 'rollen joy ', 'sarmiento', 'nabia', '2013-03336-MN-0'),
(254, 6, 'jennilene ', 'ausa', 'pol', '2013-01726-MN-0'),
(255, 6, 'rick anthony ', 'espino', 'policarpio', '2013-07420-MN-0'),
(256, 6, 'kevin red ', 'bersamina', 'salamat', '2013-05800-MN-0'),
(257, 6, 'rofherson ', 'canones', 'suzon', '2013-00785-MN-0'),
(258, 6, 'mary mariel ', 'martinez', 'teodoro', '2013-02176-MN-0'),
(259, 6, 'miguel san ', 'buenaventura', 'turqueza', '2013-04658-MN-0'),
(260, 6, 'rovien ', 'palmes', 'vargas', '2013-03581-MN-0'),
(261, 6, 'nica chloie ', 'garcia', 'yecla', '2013-04190-MN-0'),
(262, 6, 'hanah mae ', 'pilapil', 'zamora', '2013-00734-MN-0'),
(263, 7, 'jeadalyn ', 'penoliar', 'adique', '2011-03257-MN-0'),
(264, 7, 'lexter james ', 'madrigal', 'alegre', '2011-01392-MN-0'),
(265, 7, 'randell ', 'onia', 'arga', '2011-02368-MN-0'),
(266, 7, 'harold ', 'taroy', 'asuncion', '2011-02404-MN-0'),
(267, 7, 'kevin jasper ', 'callejas', 'bahia', '2011-02178-MN-0'),
(268, 7, 'krizza mae ', 'almirañez', 'baterina', '2011-01121-MN-0'),
(269, 7, 'eljun ', 'dizon', 'belen', '2011-01069-MN-0'),
(270, 7, 'grace loraine ', 'magturo', 'borres', '2011-03486-MN-0'),
(271, 7, 'noel ', 'bagual', 'cabullo jr.', '2011-00102-MN-0'),
(272, 7, 'liezel ', 'escanilla', 'castro', '2011-01765-MN-0'),
(273, 7, 'allan paolo ', 'virly', 'ching', '2011-01305-MN-0'),
(274, 7, 'gilbert ', 'formoso', 'clemente', '2011-03580-MN-0'),
(275, 7, 'christopher justine ', 'asuncion', 'cunanan', '2011-01400-MN-0'),
(276, 7, 'julius ', 'corpus', 'dacanay', '2011-02069-MN-0'),
(277, 7, 'jayson ', 'flores', 'dacumos', '2011-04842-MN-0'),
(278, 7, 'patricia ', 'sison', 'dela cruz', '2011-01973-MN-0'),
(279, 7, 'john james nixon ', 'rellosa', 'dolliente', '2011-03163-MN-0'),
(280, 7, 'veron emil ', 'almiñe', 'eleria', '2011-07801-MN-0'),
(281, 7, 'michael joshua ', 'gervacio', 'eresuela', '2011-04344-MN-0'),
(282, 7, 'nia bernise ', 'fulgosino', 'fabay', '2011-00590-MN-0'),
(283, 7, 'jhon jourel ', 'miranda', 'flores', '2011-01303-MN-0'),
(284, 7, 'angela ', 'concepcion', 'gener', '2011-02821-MN-0'),
(285, 7, 'kenneth uriel ', 'manaluz', 'gomez', '2011-03815-MN-0'),
(286, 7, 'niccolo san ', 'miguel', 'huidem', '2010-06237-MN-0'),
(287, 7, 'jeff ray ', 'llarenas', 'largo', '2011-05172-MN-0'),
(288, 7, 'jeffsey ', 'corre', 'legaspi', '2011-00068-MN-0'),
(289, 7, 'jeff levie ', 'edejer', 'leona', '2011-00579-MN-0'),
(290, 7, 'john franz ', 'mansalapus', 'logmao', '2011-03164-MN-0'),
(291, 7, 'edsel roldan ', 'estrada', 'magura', '2011-02670-MN-0'),
(292, 7, 'marie carissa ', 'begonte', 'mantala', '2011-02786-MN-0'),
(293, 7, 'christelle arissa ', 'adalim', 'montales', '2011-04068-MN-0'),
(294, 7, 'michael angelo ', 'bauding', 'natanawan', '2011-04887-MN-0'),
(295, 7, 'joey aries ', 'aglibot', 'nera', '2011-03813-MN-0'),
(296, 7, 'gladys ', 'tapar', 'obmerga', '2011-04544-MN-0'),
(297, 7, 'renzo ', 'ignacio', 'orpiada', '2011-03543-MN-0'),
(298, 7, 'pinky ', 'solas', 'pal-lingayan', '2011-01942-MN-0'),
(299, 7, 'gerome adriane ', 'manikad', 'prianes', '2011-08784-MN-0'),
(300, 7, 'jehrliten ', 'felicilda', 'salvador', '2011-00866-MN-0'),
(301, 7, 'mae antonette ', 'reyes', 'sanoy', '2011-02379-MN-0'),
(302, 7, 'gabrielle anne san ', 'luis', 'silvestre', '2010-04784-MN-0'),
(303, 7, 'yrick storme ', 'leopoldo', 'son', '2011-05188-MN-0'),
(304, 7, 'jenrie ', 'ladimora', 'subaran', '2011-02832-MN-0'),
(305, 7, 'gadfrey ajerico ', 'tamesis', 'sumague', '2011-02632-MN-0'),
(306, 7, 'jennifer ', 'jamon', 'tolentino', '2011-02803-MN-0'),
(307, 7, 'emmanuel daryl ', 'espera', 'umali', '2011-04353-MN-0'),
(308, 7, 'ynah carrielle ', 'rosal', 'umayam', '2011-03717-MN-0'),
(309, 7, 'ervin miguel ', 'lozada', 'varias', '2011-00491-MN-0'),
(310, 7, 'sunshine ', 'babon', 'venus', '2011-02355-MN-0'),
(311, 7, 'janet ', 'labodit', 'visaya', '2011-01360-MN-0'),
(312, 8, 'cyrille ', 'tiangco', 'ablaza', '2012-09082-MN-0'),
(313, 8, 'darwin ', 'pascual', 'arandilla', '2012-05331-MN-0'),
(314, 8, 'jay jasper ', 'roslin', 'bagay', '2012-02680-MN-0'),
(315, 8, 'janine ', 'darlo', 'buarao', '2012-06236-MN-0'),
(316, 8, 'ryan gabriel ', 'salvani', 'bunquin', '2012-08268-MN-0'),
(317, 8, 'roselyn ', 'rezano', 'cañete', '2012-03743-MN-0'),
(318, 8, 'william jr. ', 'benitez', 'caballero', '2012-04079-MN-0'),
(319, 8, 'francisc jerhone ', 'esguerra', 'camillo', '2012-01236-MN-0'),
(320, 8, 'shella may ', 'bautista', 'cantos', '2012-03474-MN-0'),
(321, 8, 'zoren eleazar ', 'calos', 'caspe', '2012-02535-MN-0'),
(322, 8, 'jhoffer vincent ', 'atencio', 'castillo', '2012-03988-MN-0'),
(323, 8, 'justin christopher ', 'bordon', 'estorga', '2012-01882-MN-0'),
(324, 8, 'nathaniel lewis ', '', 'galang', '2012-03321-MN-0'),
(325, 8, 'joshua ', '', 'hermosura', '2012-08447-MN-0'),
(326, 8, 'rose suzette ', 'mirabueno', 'lapitan', '2012-00740-MN-0'),
(327, 8, 'allison dwight ', 'rosales', 'malto', '2012-00730-MN-0'),
(328, 8, 'benito jr. ', 'sanchez', 'mascariñas', '2012-01522-MN-0'),
(329, 8, 'charisse mariel ', 'villar', 'medina', '2012-01844-MN-0'),
(330, 8, 'christian ashley ', 'pangilinan', 'mones', '2012-04296-MN-0'),
(331, 8, 'niña geralyn ', 'reyes', 'palambiano', '2012-08052-MN-0'),
(332, 8, 'johnston ', 'tiania', 'perocho', '2012-03403-MN-0'),
(333, 8, 'ivy marie ', 'gordo', 'porras', '2012-03505-MN-0'),
(334, 8, 'rommel jr. ', 'rañosa', 'reyes', '2012-01805-MN-0'),
(335, 8, 'mary andrea ', 'latore', 'ricafrente', '2012-03548-MN-0'),
(336, 8, 'rollyn john ', 'ardeï¿½o', 'romero', '2012-04961-MN-0'),
(337, 8, 'paul aldrin ', 'parel', 'roque', '2012-01419-MN-0'),
(338, 8, 'john paolo ', 'caperiña', 'samson', '2012-00225-MN-0'),
(339, 8, 'shanilyn louise ', 'garcia', 'santiago', '2012-00250-MN-0'),
(340, 8, 'lleur ', 'rull', 'tan', '2012-03823-MN-0'),
(341, 8, 'jefferson ', 'tamayo', 'tonic', '2012-01962-MN-0'),
(342, 8, 'michael ', 'balubal', 'villaverde', '2012-03200-MN-0');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE IF NOT EXISTS `subjects` (
`Id` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `SubjectTitle` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`Id`, `UserId`, `SubjectTitle`) VALUES
(4, 8, 'BSCOE Elec4 Bscoe Elective 4'),
(5, 8, 'COEN 3054 Data Structures And Algorithm Analysis'),
(6, 11, 'COEN 3134 Logic Circuits And Switching Theory'),
(7, 11, 'COEN 3291 Computer Seminar And Field Trips'),
(8, 12, 'COEN 3414 Operating Systems');

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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`Id`, `Username`, `Password`, `UserType`, `UserDept`, `LoginHist`) VALUES
(8, 'faculty', 'd561c7c03c1f2831904823a95835ff5f', 'Faculty', 'Computer Engineering', '0000-00-00 00:00:00'),
(9, 'chairperson', '37cc87d2e99db3a0535f891ba0d3f1e9', 'Chairperson', 'Computer Engineering', '0000-00-00 00:00:00'),
(10, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'Administrator', 'CpE', '0000-00-00 00:00:00'),
(11, 'faculty2', '9095a17ed07b9a53cd951db509606a70', 'Faculty', 'Computer Engineering', '0000-00-00 00:00:00'),
(12, 'faculty3', '7001ba9ee8f8fd53a8e3b625c899dd9a', 'Faculty', 'Computer Engineering', '0000-00-00 00:00:00');

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
-- Indexes for table `grades`
--
ALTER TABLE `grades`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `grading_system`
--
ALTER TABLE `grading_system`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `labmodperc`
--
ALTER TABLE `labmodperc`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `lab_act`
--
ALTER TABLE `lab_act`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `lectmodperc`
--
ALTER TABLE `lectmodperc`
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
-- Indexes for table `moduleitems`
--
ALTER TABLE `moduleitems`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `prac_exam`
--
ALTER TABLE `prac_exam`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `quizzes`
--
ALTER TABLE `quizzes`
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
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `calendar`
--
ALTER TABLE `calendar`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=66;
--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `exercises`
--
ALTER TABLE `exercises`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `final_exam`
--
ALTER TABLE `final_exam`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `grades`
--
ALTER TABLE `grades`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `grading_system`
--
ALTER TABLE `grading_system`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `labmodperc`
--
ALTER TABLE `labmodperc`
MODIFY `Id` tinyint(4) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `lab_act`
--
ALTER TABLE `lab_act`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `lectmodperc`
--
ALTER TABLE `lectmodperc`
MODIFY `Id` tinyint(4) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `long_exam`
--
ALTER TABLE `long_exam`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `midterm_exam`
--
ALTER TABLE `midterm_exam`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `moduleitems`
--
ALTER TABLE `moduleitems`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `prac_exam`
--
ALTER TABLE `prac_exam`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `quizzes`
--
ALTER TABLE `quizzes`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `seatwork`
--
ALTER TABLE `seatwork`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=343;
--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
