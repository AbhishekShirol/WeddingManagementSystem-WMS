-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: wedding_management
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `registrations`
--

DROP TABLE IF EXISTS `registrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registrations` (
  `reg_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `groom_name` varchar(100) NOT NULL,
  `bride_name` varchar(100) NOT NULL,
  `wedding_date` date NOT NULL,
  `number_of_guests` int NOT NULL,
  `venue_id` int DEFAULT NULL,
  `music_id` int DEFAULT NULL,
  `catering_id` int DEFAULT NULL,
  `decoration_id` int DEFAULT NULL,
  PRIMARY KEY (`reg_id`),
  KEY `user_id` (`user_id`),
  KEY `venue_id` (`venue_id`),
  KEY `music_id` (`music_id`),
  KEY `catering_id` (`catering_id`),
  KEY `decoration_id` (`decoration_id`),
  CONSTRAINT `registrations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `registrations_ibfk_2` FOREIGN KEY (`venue_id`) REFERENCES `venues` (`id`) ON DELETE CASCADE,
  CONSTRAINT `registrations_ibfk_3` FOREIGN KEY (`music_id`) REFERENCES `music` (`id`) ON DELETE CASCADE,
  CONSTRAINT `registrations_ibfk_4` FOREIGN KEY (`catering_id`) REFERENCES `caterings` (`id`) ON DELETE CASCADE,
  CONSTRAINT `registrations_ibfk_5` FOREIGN KEY (`decoration_id`) REFERENCES `decorations` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registrations`
--

LOCK TABLES `registrations` WRITE;
/*!40000 ALTER TABLE `registrations` DISABLE KEYS */;
INSERT INTO `registrations` VALUES (2,38,'kajfkd','fjda','2024-11-15',1,NULL,NULL,NULL,NULL),(3,38,'dfdfsa','faa','2024-11-07',11,NULL,NULL,NULL,NULL),(4,38,'afsdf','fadf','2024-11-07',11,NULL,NULL,NULL,NULL),(5,38,'admin','admin','2024-11-05',11,NULL,NULL,NULL,NULL),(6,38,'kajfkd','fjda','2024-11-16',2,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `registrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-05  1:30:04
