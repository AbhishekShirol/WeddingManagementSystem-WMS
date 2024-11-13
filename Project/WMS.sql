CREATE Database WMS;

use WMS;


-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: wms
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
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `admin_id` int NOT NULL AUTO_INCREMENT,
  `adminname` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`admin_id`),
  UNIQUE KEY `adminname` (`adminname`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (9,'admin','admin','admin@gmail.com','$2b$10$tBA5/ni1tY1NORx06PyhRuv3gjJUQq/haQSd9dejVg43Fla4/dT7K',NULL,'9844230635'),(10,'admin1','admin1','admin1@gmail.com','$2b$10$Hg4A1AbUdy1CQFg57Op13OqGrTWP7Uqr9LYG/dwQrOF5Zp5aZly0K',NULL,'9988442302');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings_log`
--

LOCK TABLES `bookings_log` WRITE;
/*!40000 ALTER TABLE `bookings_log` DISABLE KEYS */;
INSERT INTO `bookings_log` VALUES (82,14,'Venue','2024-11-13 14:24:00'),(83,14,'Catering','2024-11-13 14:24:08'),(84,14,'Decoration','2024-11-13 14:24:18'),(85,15,'Catering','2024-11-13 14:24:25'),(86,17,'Decoration','2024-11-13 14:29:41'),(87,17,'Music','2024-11-13 14:29:46');
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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caterings`
--

LOCK TABLES `caterings` WRITE;
/*!40000 ALTER TABLE `caterings` DISABLE KEYS */;
INSERT INTO `caterings` VALUES (7,'Classic Buffet',300,'A wide selection of classic dishes with vegetarian options'),(8,'Gourmet Platter',450,'Premium selection of gourmet food, ideal for fine dining events'),(9,'BBQ Feast',350,'A delicious BBQ spread with meats and sides, perfect for outdoor weddings'),(10,'Vegetarian Delight',280,'A range of healthy and tasty vegetarian dishes for a wholesome meal'),(11,'International Cuisine',400,'An array of dishes from different cuisines around the world');
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `decorations`
--

LOCK TABLES `decorations` WRITE;
/*!40000 ALTER TABLE `decorations` DISABLE KEYS */;
INSERT INTO `decorations` VALUES (5,'Floral Wedding Arch Canopy',300,'A beautifully crafted and elegantly decorated floral wedding arch canopy, adorned with an abundant display of pink and white blooms, complemented by delicate pink drapery and a set of luxurious gold chiavari chairs','https://gallery.theweddingcompany.com/cdn/shop/files/87c70a1b9a05be046e998325e696bba6_550x.jpg?v=1709882504'),(6,'Royal Red Backdrop',414,'An extravagant, gold-framed wedding arch adorned with an opulent floral display, accented by a rich red velvet backdrop, ornate candelabras, and a plush red carpet aisle, creating a lavishly romantic and regal ceremonial setting.','https://gallery.theweddingcompany.com/cdn/shop/files/6588b82cb232cca554dbd49da9b0c344_550x.jpg?v=1711971655'),(7,'Pastel Floral Backdrop',770,'A breathtaking floral wedding arch canopy framing a plush blush velvet tufted sofa, surrounded by an opulent display of hanging floral installations, ornate chandeliers, and lush potted floral arrangements, creating a lavishly romantic ceremony setting.','https://gallery.theweddingcompany.com/cdn/shop/files/7da01695091d77a7abf7ff140d2a2e13_550x.jpg?v=1709894990'),(8,'Ivory Elegance Arch',710,'Make a grand entrance for your wedding ceremony with this elegant hallway adorned with flowers and candles. The long hallway creates a beautiful walkway for the couple, leading them to the white flowering plant at the end. The candles scattered around provide a romantic touch to the scene. The chandelier hanging from the ceiling adds to the overall elegance.','https://gallery.theweddingcompany.com/cdn/shop/files/5_4a9ddcd4-8792-4699-8e23-4ece5ae2e97d_576x.jpg?v=1707394832'),(9,'Moroccan White Pathway',1125,'A stunning, intricately designed white archway adorned with floral details leads the way through a lush, tropical landscape, creating an enchanting, picturesque pathway for a wedding ceremony.','https://gallery.theweddingcompany.com/cdn/shop/files/9a41011035aa29f62675b09224edbcae_1_550x.jpg?v=1709546891');
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `music`
--

LOCK TABLES `music` WRITE;
/*!40000 ALTER TABLE `music` DISABLE KEYS */;
INSERT INTO `music` VALUES (6,'Classical Ensemble','A sophisticated classical music performance, ideal for elegant weddings',500),(7,'Jazz Band','Live jazz performance to bring a lively and sophisticated atmosphere',600),(8,'DJ Service','Professional DJ with a wide range of music genres for the ultimate party experience',400),(9,'Acoustic Duo','A relaxed acoustic performance, perfect for intimate wedding ceremonies',350),(10,'Rock Band','Energetic rock band for a fun and lively celebration',700);
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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registrations`
--

LOCK TABLES `registrations` WRITE;
/*!40000 ALTER TABLE `registrations` DISABLE KEYS */;
INSERT INTO `registrations` VALUES (14,38,'Aarav Patel','Ananya Sharma','2024-11-30',1000,38,NULL,10,5),(15,38,'Manish Yadav','Sakshi Agarwal','2024-11-20',1500,NULL,NULL,9,NULL),(17,51,'Arjun Singh','Pooja Iyer','2024-11-15',1500,NULL,8,NULL,8);
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
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (38,'user','user','user@gmail.com','$2b$10$XKy7vKoxnV9DzB/24MxiceHSv0tAMA3oiQcomDJlGGAAmaJDhWLe2','1234567890'),(51,'user1','user1','user1@gmail.com','$2b$10$VmCwQDlsZbQpEbO5YvE7fe1tN59UYrRpH.fXlyKlLaBu8bf2XtfhS','1234565890');
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
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venues`
--

LOCK TABLES `venues` WRITE;
/*!40000 ALTER TABLE `venues` DISABLE KEYS */;
INSERT INTO `venues` VALUES (32,'4/1, Vaderahalli, Vidyaranyapura, Bengaluru, Karnataka, 560097, Bengaluru, Karnataka','The image shows a beautiful building with intricate lighting and architectural details, surrounded by a festive display of lights. The overall scene appears to be a festive and inviting venue.',2000,3555,'https://weddingimage.betterhalf.ai/weddings/225e8de1-5bc1-4ff8-87c8-abdd27e5d8a2/admin_uploads/5abba790-2c7c-4c3b-bf44-61f2975ef049None','Available'),(33,'Avalahalli Village, IVRI Road, 560064, Bengaluru, Karnataka','The image depicts a grand, decorated event space with a red velvet curtain backdrop, a chandelier, and various floral arrangements, creating an elegant and formal atmosphere.\n',850,6517,'https://gallery.theweddingcompany.com/cdn/shop/files/6588b82cb232cca554dbd49da9b0c344_550x.jpg?v=1711971655','Available'),(34,'Glass Factory Layout, Taluk, 560100, Bengaluru, Karnataka','The image shows a tranquil resort setting with rows of wooden chalets or cottages overlooking a central pond or waterway, surrounded by lush greenery, suggesting a peaceful and nature-inspired environment.',1500,3000,'https://weddingimage.betterhalf.ai/weddings/a5cc2e58-9931-4ef6-b2c7-6aa26e5fc0cb/admin_uploads/587e24b0-1bc2-4a78-bab5-12d27f138ec7.jpg','Available'),(35,'Doddadunnasandra, Karnataka 562114, Karnataka 562114, 562114, Bengaluru, Karnataka',' The image presents a luxurious tropical resort with a grand, ornately decorated building surrounded by palm trees and a well-manicured garden, conveying a sense of luxury and relaxation.',1500,3500,'https://weddingimage.betterhalf.ai/weddings/d872106b-89f7-4934-b7fe-1b8360ef0379/admin_uploads/5e3e1f90-0a88-4254-91b9-91f3c3fb277f.jpg','Available'),(36,'Ashvem Beach, Mandrem, 403527, Goa, Goa','The image depicts a modern, stylish resort complex with several multi-story buildings arranged around a central swimming pool, suggesting a contemporary and amenity-rich vacation destination.',2000,4000,'https://weddingimage.betterhalf.ai/weddings/94e7b1e4-362e-47fc-9f8d-0e654f62b810/admin_uploads/6af9d66d-b565-4168-8a1d-98c68fa61a95.jpg','Available'),(37,'SYNO.211-2A GROUND FLOOR, Ashvem Beach, Road, Mandrem, 403527, Goa, Goa','A cozy and inviting resort with wooden chalets overlooking a central pond and surrounded by lush greenery.',1000,2000,'https://weddingimage.betterhalf.ai/weddings/52c428d5-8716-4ec1-ad73-2144dc73b820/admin_uploads/6b3acb80-69cc-41a0-9ee6-aa9b851e9cfe.jpg','Available'),(38,'Ashok Nagar Society, Nahur Road, Vaithara Nagar, 400080, Mumbai, Maharashtra','A grand, ornately decorated event venue with a red velvet backdrop, chandeliers, and elegant floral arrangements.',1500,2000,'https://weddingimage.betterhalf.ai/weddings/d9ff5b9b-d451-4781-8554-9a98d697f4ff/gmap/d90d925c-8234-4218-884e-9d71826185d2.jpg','Unavailable'),(39,'CTS No. 145 A, NS C-04,, Skycity, Chhatrapati Shivaji Maharaj Int\'l Airport Rd, 400099, Mumbai, Maharashtra',' luxurious tropical resort with a grand, ornate building surrounded by palm trees and a well-manicured garden.',1000,4000,'https://weddingimage.betterhalf.ai/weddings/eb85efc4-1410-4c5b-90e4-e2016271f81f/admin_uploads/ad3dc0d6-bc08-4523-8e6d-3a47154dc8e6.jpg','Available'),(40,'Main G.T. Karnal Road, Oppt. Gurudwara Siraspur Village, Grand Trunk Road, 110036, Delhi, Delhi','A modern, sophisticated resort complex with multi-story buildings arranged around a central swimming pool.',1500,3000,'https://weddingimage.betterhalf.ai/weddings/8e8de01c-53a0-4663-890f-8a7eb533dfb5/admin_uploads/2a6f586a-e6ca-4335-b1cd-2de9ecd71ea6.jpg','Available'),(41,'National Highway 48, Rajokri Rd, D Block, 6:Samalkha, New Delhi, Delhi 110037, Rajokri Road, D Block, 110037, Delhi, Delhi','A beautifully illuminated and elaborately decorated event venue with a vibrant and festive atmosphere.',1700,5000,'https://weddingimage.betterhalf.ai/weddings/53800df6-bebf-4de9-a89a-8fa8ad71bbbe/admin_uploads/dcce84b0-c827-4ec2-827f-92a0675cfeef.jpg','Available');
/*!40000 ALTER TABLE `venues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'wms'
--

--
-- Dumping routines for database 'wms'
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

-- Dump completed on 2024-11-13 20:02:35
