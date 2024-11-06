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
-- Table structure for table `bookings_log`
--

DROP TABLE IF EXISTS `bookings_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookings_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reg_id` int NOT NULL,
  `service_type` varchar(50) NOT NULL,
  `booking_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `reg_id` (`reg_id`),
  CONSTRAINT `bookings_log_ibfk_1` FOREIGN KEY (`reg_id`) REFERENCES `registrations` (`reg_id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings_log`
--

LOCK TABLES `bookings_log` WRITE;
/*!40000 ALTER TABLE `bookings_log` DISABLE KEYS */;
INSERT INTO `bookings_log` VALUES (2,3,'Music','2024-11-05 21:18:41'),(3,4,'Music','2024-11-05 21:24:55'),(5,8,'Music','2024-11-05 21:29:42'),(6,8,'Music','2024-11-05 21:29:48'),(7,8,'Music','2024-11-05 21:30:49'),(8,6,'Music','2024-11-05 21:31:34'),(10,3,'Decoration','2024-11-05 21:37:42'),(12,4,'Decoration','2024-11-05 21:39:05'),(14,6,'Decoration','2024-11-05 21:39:21'),(15,8,'Decoration','2024-11-05 21:39:29'),(16,4,'Catering','2024-11-05 21:45:00'),(19,6,'Catering','2024-11-06 09:53:51'),(23,3,'Venue','2024-11-06 10:44:02'),(24,4,'Venue','2024-11-06 10:44:12'),(31,8,'Venue','2024-11-06 10:56:24'),(32,8,'Venue','2024-11-06 10:56:33'),(48,3,'Venue','2024-11-06 11:19:23'),(49,3,'Venue','2024-11-06 11:19:34'),(50,3,'Venue','2024-11-06 11:19:49'),(51,3,'Venue','2024-11-06 11:19:52'),(52,3,'Venue','2024-11-06 11:19:59'),(53,3,'Venue','2024-11-06 11:20:04'),(63,4,'Venue','2024-11-06 11:34:34'),(64,4,'Venue','2024-11-06 11:34:43'),(65,4,'Venue','2024-11-06 11:34:49'),(66,4,'Venue','2024-11-06 11:35:23'),(67,3,'Venue','2024-11-06 11:35:33'),(68,3,'Venue','2024-11-06 11:35:37'),(69,3,'Venue','2024-11-06 11:35:40'),(75,3,'Venue','2024-11-06 14:05:32'),(76,3,'Music','2024-11-06 14:39:38'),(77,10,'Venue','2024-11-06 14:40:07'),(78,10,'Music','2024-11-06 14:40:19'),(79,10,'Decoration','2024-11-06 14:40:27');
/*!40000 ALTER TABLE `bookings_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `caterings`
--

DROP TABLE IF EXISTS `caterings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `caterings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caterings`
--

LOCK TABLES `caterings` WRITE;
/*!40000 ALTER TABLE `caterings` DISABLE KEYS */;
INSERT INTO `caterings` VALUES (5,'1111121212121221212121',11,'00008848400'),(6,'klajkfldas',151,'afdDA');
/*!40000 ALTER TABLE `caterings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `decorations`
--

DROP TABLE IF EXISTS `decorations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `decorations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `description` text,
  `imageUrl` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `decorations`
--

LOCK TABLES `decorations` WRITE;
/*!40000 ALTER TABLE `decorations` DISABLE KEYS */;
INSERT INTO `decorations` VALUES (4,'',11,'11','11');
/*!40000 ALTER TABLE `decorations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `music`
--

DROP TABLE IF EXISTS `music`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `music` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `price` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `music`
--

LOCK TABLES `music` WRITE;
/*!40000 ALTER TABLE `music` DISABLE KEYS */;
INSERT INTO `music` VALUES (4,'11','11',1111),(5,'aa','11',11);
/*!40000 ALTER TABLE `music` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registrations`
--

LOCK TABLES `registrations` WRITE;
/*!40000 ALTER TABLE `registrations` DISABLE KEYS */;
INSERT INTO `registrations` VALUES (3,38,'dfdfsa','faa','2024-11-07',11,25,5,NULL,NULL),(4,38,'afsdf','fadf','2024-11-07',11,NULL,4,5,4),(6,38,'kajfkd','fjda','2024-11-16',2,NULL,5,6,4),(8,38,'afdaf','afda','2024-11-23',222,NULL,5,NULL,4),(10,41,'user 11111','userr 1111','2024-11-15',11111111,27,5,NULL,4);
/*!40000 ALTER TABLE `registrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `after_venue_update` AFTER UPDATE ON `registrations` FOR EACH ROW BEGIN
  
  IF NEW.venue_id IS NOT NULL AND NEW.venue_id != OLD.venue_id THEN
    
    UPDATE venues
    SET availability = 'Unavailable'
    WHERE id = NEW.venue_id;
    
    
    IF OLD.venue_id IS NOT NULL THEN
      UPDATE venues
      SET availability = 'Available'
      WHERE id = OLD.venue_id;
    END IF;
  END IF;

  
  IF NEW.venue_id IS NOT NULL AND OLD.venue_id IS NULL THEN
    
    UPDATE venues
    SET availability = 'Unavailable'
    WHERE id = NEW.venue_id;
  END IF;

  
  IF NEW.venue_id IS NULL AND OLD.venue_id IS NOT NULL THEN
    
    UPDATE venues
    SET availability = 'Available'
    WHERE id = OLD.venue_id;
  END IF;

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(60) DEFAULT NULL,
  `mobile` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `mobile` (`mobile`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (38,'user','user','user@gmail.com','$2b$10$XKy7vKoxnV9DzB/24MxiceHSv0tAMA3oiQcomDJlGGAAmaJDhWLe2','1234567890'),(39,'','','','$2b$10$ekTfyMDW4RUV9yLd3IeBxOJmpRpyV0yhQJS.i7yktA4FCTYK0e67S',''),(41,'user1','user1','user1@gmail.com','$2b$10$U/DRBsXPdx9xW4SCgSL5yOOJ6OTBc4rZaoPL0Dd4zbrhSjtV3hSA.','1231231231');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venues`
--

DROP TABLE IF EXISTS `venues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venues` (
  `id` int NOT NULL AUTO_INCREMENT,
  `location` varchar(255) NOT NULL,
  `description` text,
  `capacity` int NOT NULL,
  `price` float NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `availability` enum('Available','Unavailable') DEFAULT 'Available',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venues`
--

LOCK TABLES `venues` WRITE;
/*!40000 ALTER TABLE `venues` DISABLE KEYS */;
INSERT INTO `venues` VALUES (25,'Grand Ballroom, Hotel Luxe','Updated description for the venue, now offering new services.',600,3000.75,'http://example.com/images/grand_ballroom_updated.jpg','Unavailable'),(27,'The Royal Palace','',500,4500,'http://example.com/images/royal_palace.jpg','Unavailable');
/*!40000 ALTER TABLE `venues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'wedding_management'
--

--
-- Dumping routines for database 'wedding_management'
--
/*!50003 DROP PROCEDURE IF EXISTS `book_service` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `book_service`(
    IN p_registrationId INT,
    IN p_serviceType VARCHAR(50),
    IN p_serviceId INT
)
BEGIN
    
    IF p_serviceType = 'music' THEN
        UPDATE registrations SET music_id = p_serviceId WHERE reg_id = p_registrationId;
        INSERT INTO bookings_log (reg_id, service_type) VALUES (p_registrationId, 'Music');

    ELSEIF p_serviceType = 'venue' THEN
        UPDATE registrations SET venue_id = p_serviceId WHERE reg_id = p_registrationId;
        INSERT INTO bookings_log (reg_id, service_type) VALUES (p_registrationId, 'Venue');

    ELSEIF p_serviceType = 'catering' THEN
        UPDATE registrations SET catering_id = p_serviceId WHERE reg_id = p_registrationId;
        INSERT INTO bookings_log (reg_id, service_type) VALUES (p_registrationId, 'Catering');

    ELSEIF p_serviceType = 'decoration' THEN
        UPDATE registrations SET decoration_id = p_serviceId WHERE reg_id = p_registrationId;
        INSERT INTO bookings_log (reg_id, service_type) VALUES (p_registrationId, 'Decoration');

    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `cancel_service` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `cancel_service`(
    IN registration_id INT,
    IN service_type VARCHAR(50),
    IN service_id INT
)
BEGIN
    DECLARE venue_id INT;
    DECLARE music_id INT;
    DECLARE catering_id INT;
    DECLARE decoration_id INT;
    
    
    SELECT venue_id, music_id, catering_id, decoration_id
    INTO venue_id, music_id, catering_id, decoration_id
    FROM registrations
    WHERE reg_id = registration_id;

    
    IF service_type = 'venue' THEN
        
        UPDATE venues
        SET availability = 'Available'
        WHERE id = service_id;

        
        UPDATE registrations
        SET venue_id = NULL
        WHERE reg_id = registration_id;
        
    ELSEIF service_type = 'music' THEN
        
        UPDATE registrations
        SET music_id = NULL
        WHERE reg_id = registration_id;
        
    ELSEIF service_type = 'catering' THEN
        
        UPDATE registrations
        SET catering_id = NULL
        WHERE reg_id = registration_id;
        
    ELSEIF service_type = 'decoration' THEN
        
        UPDATE registrations
        SET decoration_id = NULL
        WHERE reg_id = registration_id;
    END IF;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-06 20:26:59
