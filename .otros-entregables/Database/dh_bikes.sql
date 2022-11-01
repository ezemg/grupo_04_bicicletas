CREATE DATABASE  IF NOT EXISTS `dh_bikes` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `dh_bikes`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dh_bikes
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

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
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1001 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Bicicletas'),(2,'Accesorios'),(3,'Indumentaria');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id_products` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` mediumtext DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id_products`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (4591323,'Specialized Tarmac SL6','Cuando desarrollamos la Tarmac, no sólo queríamos que fuese rápida. Queríamos que fuese rápida en todas partes. Subidas largas, llanos con viento, etapas de grandes vueltas, marchas… fabricamos una bici de competición más completa del mercado. ¿Cómo lo hicimos? Comenzamos por nuestro cuadro Rider-First Engineered™ cuyo comportamiento está perfectamente adaptado a cada talla, incorporamos importante tecnología ‘aero’ para hacerla 30 segundos más rápida que la Tarmac SL5 sobre una distancia de 40 kilómetros, y después la aligeramos un 20%. No hay otra más ligera, rápida y con mejor comportamiento. Esta Tarmac se equipa con unos componentes fiables que incluye transmisión mecánica Shimano Tiagra de 10 velocidades, potentes frenos de disco hidráulicos, resistentes ruedas Axis Sport Disc, y nuestro sillín Power, el preferido de nuestros clientes ','1667344591322specializedtarmacsl6.jpeg',990000,1),(4716468,'Specialized Tarmac SL4','Bicicleta de ruta Specialized Tarmac SL4 Sport modelo 2018. Marco en carbono, Talla 56 (L), configurada con grupo Shimano 105 de 11 velocidades, frenos Axis de herradura, Ruedas DT Swiss, corazas Spoir Elite, Accesorios Specialized, cintas Lizard Skin. Peso total de 8.5kg. Se entrega sin pedales.','1667344716465Specialized-tarmac-SL4-rojo-Xl-A-comision1.webp',759000,1),(4997234,'Luz Trasera Van Halen VAN049','La luz Globe de Van Halen con buena potencia para que te vean a la noche y a la vez permite que te vean desde los costados también, algo clave en las esquinas de noche. Es una luz de gran calidad y de recarga rápida. Posee varios modos de iluminación. – Color: Negro – Posición: Trasera – Color del LED: Rojo – Lumens: 200lm – Luz Led de alto brillo – Batería recargable por USB de polimero de litio (250mAh) – Carga Rápida – Indicador de bateria baja – Resistente al agua – Rápido montaje a la vela portasilla de la bici, universal se adapta de 19 a 52mm gracias a su soporte de silicona. – Modos de iluminación: Máximo / Medio / Constante / Flash / Flash / Flash Lateral / Disco Flash – Incluye cable de carga Micro USB y soporte de silicona – Tamaño: 41x35x25mm','1667345052743WhatsApp-Image-2021-08-12-at-15.54.53.webp',8499,2),(5135869,'Casco Airstar Matt ','El mejor casco que vas a usar en tu vida','1667345135860airstar_matt_white_min.png',17500,2),(5201140,'Jersey Cosy','Un Jersey muy lindo','1667345201138jersey cozy.png',11000,3),(5267223,'Jersey Escalador Magenta','JERSEY 8.9 Tratando de atender las demandas de los corredores el Departamento de Ingeniería de Magenta puso manos a la obra en el desarrollo de una gama de jerseys que puedan ser usados en las condiciones más extremas. Por un lado se trabajó en la composición de los materiales, para hacerlo lo más cómodo, liviano, aerodinámico, y respirable posible. Después de poner a prueba varios tejidos, se llegó a una combinación optima de dos tipos diferentes a usar en áreas específicas. Los principales paneles del jersey están confeccionados en un tejido de estructura enrejada (MESHO2) para maximizar la evacuación de la transpiración. Los bolsillos están confeccionados en un tejido de gran elongación (Leggero) pero no tan liviano como las mangas, para poder darle estabilidad al panel trasero, de manera de evitar que se estiren demasiado los bolsillos cuando están cargados. La cintura fue tejida especialmente para acomodarse a la forma del cuerpo y proporcionar una sujeción confortable. Gracias a la combinación de estos factores se obtuvo como resultado un jersey que se adapta al cuerpo de la mejor manera.   Marca: Magenta Modelo: Jersey 8.9 Color: Escalador RF (Rosa Fluo) Talles: (PARA CALCULAR TU TALLE POR FAVOR CHEQUEAR LA TABLA EN LAS FOTOS DE LA PUBLICACIÓN Y LUEGO FIJARSE SI FIGURA DISPONIBLE) El talle sugerido en la tabla de talles, corresponde a calce ajustado al cuerpo (Fit) como se utiliza en competición, se sugiere 1 o 2 talles más del representado en la tabla si le gusta la prenda más holgada o suelta. Liviano y Aerodinámico Respirable Nuevo cuello Los principales paneles del jersey están confeccionados en un tejido de estructura enrejada (MESHO2) para maximizar la evacuación de la transpiración. Cintura elástica tejida y siliconada para mejor confort y agarre. Bandas reflectivas en bolsillo trasero (especial para aquellos momentos donde tenemos menor visibilidad y necesitamos ser vistos) Orificio para mp3 en bolsillo trasero nos permite esconder el cable dentro del jersey evitando que se enganche con algún objeto. Tira cierre para facilitar el agarre del mismo. Excelente calidad de terminación y materiales. 3 bolsillos en la espalda Industria Argentina','1667345267222jersey-8.9-rf-1.webp',25000,3);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_shopping`
--

DROP TABLE IF EXISTS `products_shopping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_shopping` (
  `id_products_shopping` int(11) NOT NULL AUTO_INCREMENT,
  `id_products` int(11) NOT NULL,
  `id_shopping` int(11) NOT NULL,
  PRIMARY KEY (`id_products_shopping`),
  KEY `id_products` (`id_products`),
  KEY `id_shopping` (`id_shopping`),
  CONSTRAINT `products_shopping_ibfk_1` FOREIGN KEY (`id_products`) REFERENCES `products` (`id_products`),
  CONSTRAINT `products_shopping_ibfk_2` FOREIGN KEY (`id_shopping`) REFERENCES `shopping` (`id_shopping`)
) ENGINE=InnoDB AUTO_INCREMENT=1001 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_shopping`
--

LOCK TABLES `products_shopping` WRITE;
/*!40000 ALTER TABLE `products_shopping` DISABLE KEYS */;
INSERT INTO `products_shopping` VALUES (1,1,1),(2,1,2),(3,1,3),(4,2,4),(5,2,5),(6,2,6),(7,2,8),(8,2,8),(9,2,7),(10,3,1),(11,3,8),(12,4,9),(13,5,9),(14,6,8),(15,5,8),(16,4,8),(17,4,7),(18,6,2),(19,5,2),(20,4,2),(21,4,3),(22,6,3),(23,5,3),(24,5,4),(25,3,4),(26,2,4),(27,2,5),(28,1,6),(29,3,6);
/*!40000 ALTER TABLE `products_shopping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping`
--

DROP TABLE IF EXISTS `shopping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopping` (
  `id_shopping` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (`id_shopping`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `shopping_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1001 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping`
--

LOCK TABLES `shopping` WRITE;
/*!40000 ALTER TABLE `shopping` DISABLE KEYS */;
INSERT INTO `shopping` VALUES (1,'Compra',125,5,4),(2,'Compra',126,3,4),(3,'Compra',245,16,4),(4,'Compra',1650,9,5),(5,'Compra',1250,9,5),(6,'Compra',34123,29,6),(7,'Compra',21123,28,6),(8,'Compra',123456,28,7),(9,'Compra',179,28,7);
/*!40000 ALTER TABLE `shopping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `id_user_category` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user_category` (`id_user_category`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_user_category`) REFERENCES `user_category` (`id_user_category`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,1,'Jeane','Jeannon','jjeannon0@prweb.com','aAvDO5DFV0','https://robohash.org/similiquequasiaperiam.png?size=50x50&set=set1'),(2,2,'Ezequiel','Grynberg','ezequielmatiasgr@gmail.com','hola123','https://robohash.org/similiquequasiaperiam.png?size=50x50&set=set1'),(3,2,'Fernando','Nogues','fernando@gmail.com','hola123','https://robohash.org/similiquequasiaperiam.png?size=50x50&set=set1'),(4,2,'Cosme','Fulanito','cosme@gmail.com','hola123','https://robohash.org/similiquequasiaperiam.png?size=50x50&set=set1'),(5,1,'Homero','Simpson','homero@gmail.com','hola123','https://robohash.org/similiquequasiaperiam.png?size=50x50&set=set1'),(6,1,'Michael','Scott','michael@dundermifflin.com','hola123','https://robohash.org/similiquequasiaperiam.png?size=50x50&set=set1'),(7,1,'Jim','Halpert','jim@dundermifflin.com','hola123','https://robohash.org/similiquequasiaperiam.png?size=50x50&set=set1'),(2589252,1,'pruebanode3','pruebanode3','pruebanode3@gmail.com','$2a$10$1Xdj2ZkDqDxWGrskV7gZvefaW3Y4PoI4CDIzWG6zc8mPb.lH2ATOG','1667322589183_img.jpg'),(7152413,1,'Homerito El Niño','Maraviiiillaaaa','alfamaster@gmail.com','$2a$10$edfyytspHgxD7mWaADn5fuFz.uPt2uVcUuUyju8NMsxfLC.nSZVCq','1667317152327_img.jpg'),(7336845,1,'Otra Prueba','Otra Prueba','otraprueba@gmail.com','$2a$10$htmJG9LdAZ4Z7vEdSxolE.0ItfUgEZT8GKYLx26qIhu0NURqcLAP2','1667317336837_img.png'),(7487415,1,'Prureba validaciones','Prueba validaciones','pruebavalidaciones@gmail.com','$2a$10$Lcuj5jLwtjtFppRhQSLfCOxlKgM60o2qHG/7.CEctY1U1Y7nR40by','1667317487337_img.jpeg'),(8700357,1,'Prueba login','Pruebalogin','pruebalogin@gmail.com','$2a$10$YQjoHXNt/mR7sp8ky5aATuIWaT/VXuzAW5ySRLmtqk6acPqObF5se','1667318700317_img.jpg'),(9307212,1,'Prueba Node','Prueba Node','pruebanode@gmail.com','$2a$10$Xf.U0QG1LRdpppsIcJZij.bRxocratrTJmrhvJzPpxZjXkpN76WIq','1667319307198_img.png'),(9440860,2,'Pruebanode2','Pruebanode2','Pruebanode2@gmail.com','$2a$10$NQqnMswEzw6vh6TZtKNkFuEfR7DIMtO16U5v5RNnK/MDnlNKNwEKa','1667319440817_img.jpg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_category`
--

DROP TABLE IF EXISTS `user_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_category` (
  `id_user_category` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_user_category`)
) ENGINE=InnoDB AUTO_INCREMENT=1002 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_category`
--

LOCK TABLES `user_category` WRITE;
/*!40000 ALTER TABLE `user_category` DISABLE KEYS */;
INSERT INTO `user_category` VALUES (1,'comprador'),(2,'administrador');
/*!40000 ALTER TABLE `user_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'dh_bikes'
--

--
-- Dumping routines for database 'dh_bikes'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-01 20:33:48
