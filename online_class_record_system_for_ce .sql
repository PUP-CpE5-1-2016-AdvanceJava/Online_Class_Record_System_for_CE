-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2016 at 03:12 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 7.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `online_class_record_system_for_ce`
--

-- --------------------------------------------------------

--
-- Table structure for table `assignment`
--

CREATE TABLE `assignment` (
  `Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `AssignNum` int(11) NOT NULL,
  `Score` float(5,2) NOT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `AttNum` int(11) NOT NULL,
  `Status` varchar(50) DEFAULT NULL,
  `Score` varchar(10) DEFAULT NULL,
  `Rating` float DEFAULT NULL,
  `Sem` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `calendar`
--

CREATE TABLE `calendar` (
  `Id` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `Date` date NOT NULL,
  `Event` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `exercises`
--

CREATE TABLE `exercises` (
  `Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `ExNum` int(11) NOT NULL,
  `Score` float(5,2) NOT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
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
(2, 'Admin', 'Admin', 'Admin', 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `final_exam`
--

CREATE TABLE `final_exam` (
  `Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `Score` float(5,2) NOT NULL,
  `Rating` float(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `grades`
--

CREATE TABLE `grades` (
  `StudId` int(11) NOT NULL,
  `MidTermGrade` float NOT NULL,
  `FinalGrade` float NOT NULL,
  `TotalGrade` float NOT NULL,
  `GradeRemarks` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `labmodperc`
--

CREATE TABLE `labmodperc` (
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

CREATE TABLE `lab_act` (
  `Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `LabNum` int(11) NOT NULL,
  `Score` float(5,2) NOT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `lectmodperc`
--

CREATE TABLE `lectmodperc` (
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

CREATE TABLE `long_exam` (
  `Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `LExamNum` int(11) NOT NULL,
  `Score` float(5,2) NOT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `midterm_exam`
--

CREATE TABLE `midterm_exam` (
  `Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `Score` float(5,2) NOT NULL,
  `Rating` float(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_assign`
--

CREATE TABLE `mod_assign` (
  `Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `AssignNum` int(11) NOT NULL,
  `AssignItems` int(11) DEFAULT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_att`
--

CREATE TABLE `mod_att` (
  `Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `AttNum` int(11) NOT NULL,
  `AttDate` date DEFAULT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_ex`
--

CREATE TABLE `mod_ex` (
  `Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `ExNum` int(11) NOT NULL,
  `ExItems` int(11) DEFAULT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_fe`
--

CREATE TABLE `mod_fe` (
  `Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `FExamItems` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_lab`
--

CREATE TABLE `mod_lab` (
  `Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `LabNum` int(11) NOT NULL,
  `LabItems` int(11) DEFAULT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_le`
--

CREATE TABLE `mod_le` (
  `Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `LExamNum` int(11) NOT NULL,
  `LExamItems` int(11) DEFAULT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_me`
--

CREATE TABLE `mod_me` (
  `Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `MExamItems` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_prac`
--

CREATE TABLE `mod_prac` (
  `Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `PracExamNum` int(11) NOT NULL,
  `PracExamItems` int(11) DEFAULT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_proj`
--

CREATE TABLE `mod_proj` (
  `Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `ProjNum` int(11) NOT NULL,
  `ProjItems` int(11) DEFAULT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_quiz`
--

CREATE TABLE `mod_quiz` (
  `Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `QuizNum` int(11) NOT NULL,
  `QuizItems` int(11) DEFAULT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_rec`
--

CREATE TABLE `mod_rec` (
  `Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `RecNum` int(11) NOT NULL,
  `RecItems` int(11) DEFAULT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mod_sw`
--

CREATE TABLE `mod_sw` (
  `Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `SWNum` int(11) NOT NULL,
  `SWItems` int(11) DEFAULT NULL,
  `Sem` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `prac_exam`
--

CREATE TABLE `prac_exam` (
  `Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `PracNum` int(11) NOT NULL,
  `Score` float(5,2) NOT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `ProjNum` int(11) NOT NULL,
  `Score` float(5,2) NOT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `quizzes`
--

CREATE TABLE `quizzes` (
  `Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `QuizNum` int(11) NOT NULL,
  `Score` float(5,2) NOT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `recitation`
--

CREATE TABLE `recitation` (
  `Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `RecNum` int(11) NOT NULL,
  `Score` float(5,2) NOT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `seatwork`
--

CREATE TABLE `seatwork` (
  `Id` int(11) NOT NULL,
  `StudId` int(11) NOT NULL,
  `SWNum` int(11) NOT NULL,
  `Score` float(5,2) NOT NULL,
  `Rating` float(5,2) DEFAULT NULL,
  `Sem` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `Id` int(11) NOT NULL,
  `ClassId` int(11) NOT NULL,
  `FName` varchar(100) NOT NULL,
  `MName` varchar(100) NOT NULL,
  `LName` varchar(100) NOT NULL,
  `StudentNumber` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `Id` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `SubjectTitle` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `Id` int(11) NOT NULL,
  `Username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `UserType` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `UserDept` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `LoginHist` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`Id`, `Username`, `Password`, `UserType`, `UserDept`, `LoginHist`) VALUES
(2, 'administrator', '200ceb26807d6bf99fd6f4f0d1ca54d4', 'Administrator', 'Computer Engineering', '0000-00-00 00:00:00');

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
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Id` (`Id`);

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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
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
-- AUTO_INCREMENT for table `lab_act`
--
ALTER TABLE `lab_act`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `quizzes`
--
ALTER TABLE `quizzes`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `recitation`
--
ALTER TABLE `recitation`
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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
