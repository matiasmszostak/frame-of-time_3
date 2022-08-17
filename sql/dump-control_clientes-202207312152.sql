-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: control_clientes
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

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
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(60) NOT NULL,
  `mensaje` varchar(1000) NOT NULL,
  `motivo_de_consulta` varchar(60) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_1c96wv36rk2hwui7qhjks3mvg` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'matiasszostak@gmail.com','Quería conocer el precio de este servicio.','Servicio fotográfico','Matias Szostak'),(2,'therealbatman@gmail.com','Necesito unas buenas tomas desde el cielo de Ciudad Gótica','Servicio de Drone','Batman'),(3,'albertosamid@gmail.com','Quiero una sesión de fotos para Mac Rey.','Servicio fotográfico','Alberto Samid'),(4,'carlitosbala@gmail.com','Quiero saber cuánto sale la licencia.','Licencia de imágenes','Carlitos Balá'),(5,'horaciooneto@gmail.com','Quiero una sesión de fotos con mis hackers en Cadore','Servicio fotográfico','Horacio Oneto'),(6,'kanyewest@gmail.com','Quiero comprar todas las fotos que tengas','Comprar fotografías','Kanye West'),(7,'robertomyangar@gmail.com','probando formulario','Comprar fotografías','Roberto Myangar'),(8,'lukeskywaker@gmail.com','0000000000002345','Servicio de Drone','Luke Skywaker'),(10,'mario@gmail.com','sfgagasdag','Servicio fotográfico','mario'),(11,'prueba1@gmail.com','Esto es una prueba','Servicio audiovisual','Prueba1'),(12,'prueba2@gmail.com','esto es otra prueba','Servicio de Drone','prueba2'),(13,'prueba3@gmail.com','Esto es una prueba','Comprar fotografías','Prueba3'),(14,'prueba4@gmail.com','Esto es una prueba','Servicio de Drone','Prueba4'),(15,'prueba5@gmail.com','Esto es una prueba','Comprar fotografías','Prueba5'),(16,'darthvader@gmail.com','Necesito una sesión de fotos','Servicio fotográfico','Darth Vader');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'control_clientes'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-31 21:52:41
