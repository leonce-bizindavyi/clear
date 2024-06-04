-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 04 juin 2024 à 22:18
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `clear`
--

DELIMITER $$
--
-- Procédures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllServices` (IN `st` INT, IN `lm` INT)   SELECT 
s.id,
s.uuid,
s.title,
s.body,
s.status,
s.image,
s.type,
s.capacity,
p.name as price,
a.avenue,
a.quarter,
a.zone,
a.commune,
a.town,
(SELECT COUNT(photos.id_serv) FROM photos WHERE photos.id_serv = s.id) AS photos
FROM services s
LEFT JOIN prices p ON p.id = s.price
LEFT JOIN addresse a ON a.id = s.lieu
ORDER BY s.update_at DESC LIMIT st,lm$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getAutos` (IN `st` INT, IN `lm` INT)   SELECT 
s.id,
s.uuid,
s.title,
s.body,
s.status,
s.image,
p.name as price,
a.avenue,
a.quarter,
a.zone,
a.commune,
a.town
FROM services s
LEFT JOIN prices p ON p.id = s.price
LEFT JOIN addresse a ON a.id = s.lieu
WHERE type = 1 ORDER BY s.update_at DESC LIMIT st,lm$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getFiltreds` (IN `price` INT, IN `type` INT, IN `location` INT)   BEGIN
  DECLARE p INT;
	SET p = price;
SELECT 
    s.id,
    s.uuid,
    s.title,
    s.body,
    s.type,
    s.lieu,
    s.capacity,
    s.status,
    s.image,
    p.name AS price,
    a.avenue,
    a.quarter,
    a.zone,
    a.commune,
    a.town,
    (SELECT COUNT(photos.id_serv) FROM photos WHERE photos.id_serv = s.id) AS photos
    FROM services s 
    LEFT JOIN prices p ON p.id = s.price
    LEFT JOIN addresse a ON a.id = s.lieu
    WHERE (p=0 OR p.id = p) AND (type = 0 OR s.type = type) 
    AND (location = 0 OR s.lieu = location) ;
  
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getHouses` (IN `st` INT, IN `lm` INT)   SELECT 
s.id,
s.uuid,
s.title,
s.body,
s.status,
s.image,
p.name as price,
a.avenue,
a.quarter,
a.zone,
a.commune,
a.town,
h.capacity
FROM services s
LEFT JOIN prices p ON p.id = s.price
LEFT JOIN addresse a ON a.id = s.lieu
LEFT JOIN maison h ON h.service = s.id
WHERE type = 2 ORDER BY s.update_at DESC LIMIT st,lm$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getOneService` (IN `uuid` VARCHAR(50))   BEGIN
SELECT 
s.id,
s.uuid,
s.title,
s.body,
s.status,
s.image,
s.type AS typeId,
s.capacity,
t.name as type,
p.name as price,
a.avenue,
a.quarter,
a.zone,
a.commune,
a.town
FROM services s
LEFT JOIN prices p ON p.id = s.price
LEFT JOIN addresse a ON a.id = s.lieu
LEFT JOIN type t ON t.id = s.type
WHERE s.uuid = uuid
ORDER BY s.update_at DESC LIMIT 1;
SELECT * FROM photos WHERE photos.id_serv = (SELECT services.id FROM services WHERE services.uuid = uuid LIMIT 1);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getrooms` (IN `st` INT, IN `lm` INT)   SELECT 
s.id,
s.uuid,
s.title,
s.body,
s.status,
s.image,
p.name as price,
a.avenue,
a.quarter,
a.zone,
a.commune,
a.town,
r.capacity
FROM services s
LEFT JOIN prices p ON p.id = s.price
LEFT JOIN addresse a ON a.id = s.lieu
LEFT JOIN salle r ON r.service = s.id
WHERE type = 3 ORDER BY s.update_at DESC LIMIT st,lm$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getSearched` (IN `lm` INT, IN `search` VARCHAR(255), IN `money` INT, IN `st` INT)   SELECT 
    s.id,
    s.uuid,
    s.title,
    s.body,
    s.status,
    s.image,
    s.type,
    s.capacity,
    p.name as price,
    a.avenue,
    a.quarter,
    a.zone,
    a.commune,
    a.town,
    (SELECT COUNT(photos.id_serv) FROM photos WHERE photos.id_serv = s.id) AS photos
FROM 
    services s
LEFT JOIN 
    prices p ON p.id = s.price
LEFT JOIN 
    addresse a ON a.id = s.lieu
WHERE 
        s.title LIKE CONCAT('%',search, '%') OR
        s.body LIKE CONCAT('%',search, '%') OR
        a.quarter LIKE CONCAT('%',search, '%') OR
        a.zone LIKE CONCAT('%',search, '%') OR
        a.commune LIKE CONCAT('%',search, '%') OR
        a.town LIKE CONCAT('%',search, '%')
ORDER BY 
    s.update_at DESC 
LIMIT 
    st, lm$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getTypeServices` (IN `type` INT, IN `st` INT, IN `lm` INT)   SELECT 
s.id,
s.uuid,
s.title,
s.body,
s.status,
s.image,
p.name as price,
a.avenue,
a.quarter,
a.zone,
a.commune,
a.town
FROM services s
LEFT JOIN prices p ON p.id = s.price
LEFT JOIN addresse a ON a.id = s.lieu
WHERE s.type = type ORDER BY s.update_at DESC LIMIT st,lm$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `addresse`
--

CREATE TABLE `addresse` (
  `id` int(11) NOT NULL,
  `avenue` varchar(30) NOT NULL,
  `quarter` varchar(20) NOT NULL,
  `zone` varchar(20) NOT NULL,
  `commune` varchar(20) NOT NULL,
  `town` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `addresse`
--

INSERT INTO `addresse` (`id`, `avenue`, `quarter`, `zone`, `commune`, `town`) VALUES
(1, '2è av', 'Magarama', 'urbaine', 'Gitega', 'Gitega'),
(2, '14è AV', 'Mirango', 'Kamenge', 'Ntahangwa', 'Mairie de Bujumbura'),
(3, 'Muyinga', 'Rohero II', 'Rohero', 'Mukaza', 'Bujumbura'),
(4, '15è Av', 'Buyenzi', 'Buyenzi', 'Mukaza', 'Makamba'),
(5, '10è Av', 'Nyakabiga 2', 'Rohero', 'Mukaza', 'Mairie de Bujumbura'),
(6, 'Mwaro', 'Rohero II', 'Rohero', 'Mukaza', 'Mairie de Bujumbura'),
(7, '1è Av', 'Kinindo', 'Rohero', 'Mukaza', 'Mairie'),
(8, '4è Av', 'Gitega', 'Kinama', 'Ntahangwa', 'Mairie'),
(9, '8è Av', 'Twinyoni', 'Kamenge', 'Ntahangwa', 'Bujumbura Mairie'),
(10, '20è Av', 'Kanyosha', 'Kanyosha', 'Muha', 'Mairie'),
(11, '1è Av', 'Q.2', 'Ngagara', 'Ntahangwa', 'Mairie'),
(12, '14 Av', 'Kiriri', 'Buyenzi', 'Mukaza', 'Ngozi'),
(13, '14 Av', 'Kiriri', 'Buyenzi', 'Mukaza', 'Ngozi'),
(14, '14 Av', 'Kiriri', 'Buyenzi', 'Mukaza', 'Ngozi'),
(15, 'gfbfgfbfgb', 'bgfb', 'Zone Urbaine', 'Gitega', 'Gitega'),
(16, 'gfbfgfbfgb', 'bgfb', 'Zone Urbaine', 'Gitega', 'Gitega'),
(17, 'gfbfgfbfgb', 'bgfb', 'Zone Urbaine', 'Gitega', 'Gitega'),
(18, 'gfbfgfbfgb', 'bgfb', 'Zone Urbaine', 'Gitega', 'Gitega'),
(19, 'Muyinga', 'Rohero 2', 'Buyenzi', 'Mukaza', 'Ngozi'),
(20, '14', 'TeramaFlix', 'Buyenzi', 'Mukaza', 'Ngozi'),
(21, '34', 'Kiriri', 'Buyenzi', 'Mukaza', 'Buja'),
(22, '14, Mwaro', 'Kiriri', 'Rohero', 'Mukaza', 'Bujumbura Mairie');

-- --------------------------------------------------------

--
-- Structure de la table `allocations`
--

CREATE TABLE `allocations` (
  `id` int(11) NOT NULL,
  `uuid` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  `services` int(11) NOT NULL,
  `date_out` datetime NOT NULL,
  `date_in` datetime NOT NULL,
  `checkout` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `Create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `automobile`
--

CREATE TABLE `automobile` (
  `id` int(11) NOT NULL,
  `service` int(11) NOT NULL,
  `marque` int(11) NOT NULL,
  `couleur` int(11) NOT NULL,
  `plaque` varchar(15) NOT NULL,
  `modele` int(11) NOT NULL,
  `serial_number` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `checkouts`
--

CREATE TABLE `checkouts` (
  `id` int(11) NOT NULL,
  `uuid` varchar(50) NOT NULL,
  `total` tinyint(4) NOT NULL,
  `taxe` float NOT NULL,
  `facture` varchar(20) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `contrant`
--

CREATE TABLE `contrant` (
  `id` int(11) NOT NULL,
  `id_prop` int(11) NOT NULL,
  `reference` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `couleurs`
--

CREATE TABLE `couleurs` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `couleurs`
--

INSERT INTO `couleurs` (`id`, `name`) VALUES
(1, 'rouge'),
(2, 'blanche'),
(3, 'gris'),
(4, 'noir');

-- --------------------------------------------------------

--
-- Structure de la table `maison`
--

CREATE TABLE `maison` (
  `id` int(11) NOT NULL,
  `service` int(11) NOT NULL,
  `capacity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `maison`
--

INSERT INTO `maison` (`id`, `service`, `capacity`) VALUES
(1, 7, 5),
(2, 8, 4),
(3, 9, 5),
(4, 10, 7),
(5, 11, 6),
(6, 12, 4);

-- --------------------------------------------------------

--
-- Structure de la table `marques`
--

CREATE TABLE `marques` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `marques`
--

INSERT INTO `marques` (`id`, `name`) VALUES
(1, 'TOYOTA'),
(2, 'TESLA'),
(3, 'UNAI'),
(4, 'RENOT');

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `uuid` varchar(50) NOT NULL,
  `body` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `readed` tinyint(4) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `modeles`
--

CREATE TABLE `modeles` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `modeles`
--

INSERT INTO `modeles` (`id`, `name`) VALUES
(1, 'Ben'),
(2, 'Hiace'),
(3, 'Coster'),
(4, 'Fusso'),
(5, 'Truck'),
(6, 'Porte');

-- --------------------------------------------------------

--
-- Structure de la table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `photos`
--

CREATE TABLE `photos` (
  `id` int(11) NOT NULL,
  `id_serv` int(11) NOT NULL,
  `photo` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `photos`
--

INSERT INTO `photos` (`id`, `id_serv`, `photo`) VALUES
(1, 1, 'room1.png'),
(2, 2, 'room2.jpg'),
(3, 3, 'room3.jpg'),
(4, 4, 'room4.jpg'),
(5, 5, 'room5.jpg'),
(6, 6, 'room6.jpg'),
(7, 7, 'house1.jpg'),
(8, 8, 'house3.jpg'),
(9, 9, 'house4.jpeg'),
(10, 10, 'house6.jpg'),
(11, 11, 'house2.jpeg'),
(12, 12, 'house5.jpg'),
(13, 13, 'auto4.jpg'),
(14, 14, 'auto5.jpeg'),
(15, 15, 'auto6.jpg'),
(16, 16, 'auto1.webp'),
(17, 17, 'auto3.jpg'),
(18, 18, 'auto2.jpg'),
(19, 20, 'kmy8mrx8.jpeg'),
(20, 20, '7fdlbj6y.jpeg'),
(21, 20, '7fq94_tl.jpeg'),
(22, 20, '49nb4a5_.jpeg'),
(23, 20, 'z6hwcyjm.jpeg'),
(24, 21, '791nyyyv.jpg'),
(25, 21, '8gxzn1_z.jpg'),
(26, 21, 'meoaw85j.jpg'),
(27, 21, '23pp_c7b.jpg'),
(28, 21, '_bg_pltp.jpg'),
(29, 21, 'w2rjgtat.jpg'),
(30, 21, '_6l86pif.jpeg'),
(31, 21, 'mr18pnik.jpeg'),
(32, 21, 'r5idzfi2.jpeg'),
(33, 21, '1dqpjl3i.jpg'),
(34, 21, 'ybnym532.jpg'),
(35, 21, 'hzgy7w3m.jpg'),
(36, 21, 'rxhykqtf.jpg'),
(37, 21, '36ag_yc2.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `prices`
--

CREATE TABLE `prices` (
  `id` int(11) NOT NULL,
  `name` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `prices`
--

INSERT INTO `prices` (`id`, `name`) VALUES
(1, 600000),
(2, 80000),
(3, 100000),
(4, 150000),
(5, 10000000),
(6, 12000000),
(7, 5400000),
(8, 700000),
(9, 240000);

-- --------------------------------------------------------

--
-- Structure de la table `providers`
--

CREATE TABLE `providers` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `bank` varchar(15) NOT NULL,
  `account` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `providers`
--

INSERT INTO `providers` (`id`, `user_id`, `bank`, `account`) VALUES
(1, 9, 'BCB', '52314855656'),
(2, 11, 'BCB', '52314855656'),
(3, 12, 'BCB', '52314855656');

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `role`) VALUES
(1, 'Client'),
(2, 'Provider'),
(3, 'Admin');

-- --------------------------------------------------------

--
-- Structure de la table `salle`
--

CREATE TABLE `salle` (
  `id` int(11) NOT NULL,
  `service` int(11) NOT NULL,
  `capacity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `salle`
--

INSERT INTO `salle` (`id`, `service`, `capacity`) VALUES
(1, 1, 256),
(2, 2, 413),
(3, 3, 230),
(4, 4, 314),
(5, 5, 640),
(6, 6, 100),
(7, 21, 215);

-- --------------------------------------------------------

--
-- Structure de la table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `uuid` varchar(50) NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `type` int(11) NOT NULL,
  `lieu` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `capacity` int(11) NOT NULL,
  `proprietaire` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `image` varchar(255) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `services`
--

INSERT INTO `services` (`id`, `uuid`, `title`, `body`, `type`, `lieu`, `price`, `capacity`, `proprietaire`, `status`, `image`, `create_at`, `update_at`) VALUES
(1, 'ro4dmff', 'Parc Astérix', 'Location de salles de réunion | Business Experience Parc Astérix', 3, 1, 1, 200, 12, 1, 'room1.png', '2024-05-04 20:42:49', '2024-05-04 20:42:49'),
(2, 'ro4hf_f', 'visunext', 'Salle de conférence moderne | visunext', 3, 2, 2, 156, 12, 1, 'room2.jpg', '2024-05-04 20:42:49', '2024-05-04 20:42:49'),
(3, 'ro4dzpf', 'ABC Salles', 'Salles de séminaire Paris 7ème (75007) - ABC Salles', 3, 1, 2, 330, 15, 0, 'room3.jpg', '2024-05-04 20:42:49', '2024-05-04 20:42:49'),
(4, 'rovddmcq', 'Ndiambour', 'Salle de Séminaires - Hotel Le Ndiambour', 3, 3, 4, 100, 16, 1, 'room4.jpg', '2024-05-05 09:27:42', '2024-05-05 09:27:42'),
(5, 'rovsxmcq', 'OHINENE', 'SALLE DE CONFÉRENCE PANORAMIQUE ( en style théâtre) - Photo de Residence OHINENE, Abidjan', 3, 2, 3, 50, 17, 0, 'room5.jpg', '2024-05-05 09:27:42', '2024-05-05 09:27:42'),
(6, 'rw8ddytq', 'Seme Beach', 'Salles de Réunions - Hotel Seme Beach', 3, 1, 2, 175, 15, 0, 'room6.jpg', '2024-05-05 09:27:42', '2024-05-05 09:27:42'),
(7, 'h74dmff', 'Bujumbura Maison de passage', 'Bujumbura Maison de passage meublée - www.bujumbura-marketing.com', 2, 5, 5, 5, 15, 0, 'house1.jpg', '2024-05-05 13:12:22', '2024-05-05 13:12:22'),
(8, 'dc49zpf', 'Kinanira maison de passage', 'Kinanira maison de passage - www.bujumbura-marketing.com', 2, 6, 7, 4, 18, 0, 'house3.jpg', '2024-05-05 13:20:10', '2024-05-05 13:20:10'),
(9, 'hy8vdmcq', 'Intare Passage House', 'Intare Passage House - 5 bedrooms ➜ Bujumbura, Rohero. Réserver Intare Passage House - 5', 2, 7, 4, 5, 18, 1, 'house4.jpeg', '2024-05-05 13:20:10', '2024-05-05 13:20:10'),
(10, 'rw811ytq', 'Maison de Passage à Kigobe', 'Maison de Passage à Kigobe - www.bujumbura-marketing.com', 2, 3, 6, 6, 18, 1, 'house6.jpg', '2024-05-05 13:20:10', '2024-05-05 13:20:10'),
(11, 'h94hf_f', 'Tripadvisor', 'Maison de passage bien équipée | Tripadvisor - Bujumbura Location de vacances', 2, 1, 7, 4, 18, 0, 'house2.jpeg', '2024-05-05 13:20:10', '2024-05-05 13:20:10'),
(12, 'ro620xcq', 'Bujumbura professional', 'Bujumbura professional network online | KINANIRA3 : Maison de passage climatisée de 5 chambres à louer', 2, 4, 6, 3, 18, 1, 'house5.jpg', '2024-05-05 13:20:10', '2024-05-05 13:20:10'),
(13, 'aq8vdmcq', 'Tesla\'s rise', 'Tesla\'s rise is unmasking Japan\'s risk of being left behind', 1, 6, 7, 5, 19, 0, 'auto4.jpg', '2024-05-05 13:25:55', '2024-05-05 13:25:55'),
(14, 'a8620xcq', 'GIGAZINE', 'We have carefully checked the low price model \'Model 3\' of Tesla near Japan delivery - GIGAZINE', 1, 7, 8, 4, 19, 1, 'auto5.jpeg', '2024-05-05 13:25:55', '2024-05-05 13:25:55'),
(15, 'a116lytq', 'Tesla Model 3 ', 'Tesla Model 3 gets stellar reviews after initial test drives in Japan', 1, 5, 9, 7, 19, 0, 'auto6.jpg', '2024-05-05 13:25:55', '2024-05-05 13:25:55'),
(16, 'a784df', 'Allow Zero-Emission Trucks', 'California To Only Allow Zero-Emission Trucks In The State By 2045', 1, 6, 7, 2, 19, 1, 'auto1.webp', '2024-05-05 13:27:31', '2024-05-05 13:27:31'),
(17, 'ax49zpf', 'The Hill', 'House rejects highway bill amendment to allow heavier trucks | The Hill', 1, 7, 9, 7, 19, 0, 'auto3.jpg', '2024-05-05 13:27:31', '2024-05-05 13:27:31'),
(18, 'ai94hf_f', '1-of-1 Bugatti ', '1-of-1 Bugatti La Voiture Noire finally ready for delivery', 1, 9, 8, 10, 19, 1, 'auto2.jpg', '2024-05-05 13:27:31', '2024-05-05 13:27:31'),
(19, '41xz4Land', 'Land rover', 'HHfihjvj vbfvbklv fvivbvv', 1, 20, 2, 4, 15, 0, '0v_q2ly9.jpg', '2024-05-13 16:53:59', '2024-05-13 16:53:59'),
(20, 'h-jyaBuca', 'Bucatti', 'This is the best car. you can get it', 1, 21, 3, 6, 15, 1, 'kmy8mrx8.jpeg', '2024-05-13 18:24:17', '2024-05-13 18:24:17'),
(21, 'q3k3cWhit', 'White Sands Resort & Conference Centre', 'Location:\nWhite Sands.no Resort & Conference Centre is typically associated with coastal regions, offering breathtaking views of the ocean and often situated on expansive sandy beaches.\n\nAccommodation:\n\nRooms and Suites: The resort likely features a variety of accommodations ranging from standard rooms to luxury suites, all designed to provide comfort and a sense of relaxation.\nAmenities: Modern amenities such as air conditioning, Wi-Fi, flat-screen TVs, minibars, and room service are standard. Many rooms probably offer balconies or terraces with stunning sea views.\nDining:\n\nRestaurants and Bars: Multiple dining options are likely available, including fine dining restaurants, casual cafes, and beachfront bars. The cuisine typically ranges from local specialties to international dishes, ensuring a diverse culinary experience.\nConference Facilities:\n\nMeeting Rooms: The conference centre would be equipped with state-of-the-art meeting rooms and event spaces, suitable for business meetings, conferences, and social events.\nTechnology: Facilities such as high-speed internet, audio-visual equipment, and professional event planning services are likely offered to ensure successful events.\nRecreational Activities:\n\nWater Sports: Given its coastal location, activities like snorkeling, scuba diving, windsurfing, and sailing are probably popular among guests.\nPools and Spas: Multiple swimming pools, including infinity pools, and a full-service spa offering a range of treatments would be common features.\nFitness Center: A well-equipped fitness center to cater to health-conscious guests.\nFamily-Friendly Features:\n\nKids Club: Programs and activities designed for children to ensure a family-friendly environment.\nFamily Activities: Organized excursions and on-site activities that families can enjoy together.\nAdditional Services:\n\nAirport Transfers: Shuttle services to and from the nearest airport.\nTour Desk: Assistance with booking local tours and excursions.\nConcierge Services: To help guests with reservations, recommendations, and any other needs.\nNearby Attractions:\n\nLocal tourist attractions, cultural sites, shopping areas, and nightlife spots are often within convenient distance from the resort, providing guests with plenty of options for exploration.\nIdeal For:\n\nBusiness travelers seeking a productive yet relaxing environment.\nFamilies looking for a fun and safe vacation spot.\nCouples and honeymooners in search of a romantic getaway.\nEvent planners hosting conferences, weddings, or other large gatherings.\nThis overview encapsulates the typical offerings and features of a resort and #conference centre named White Sands, ensuring a comprehensive understanding for potential guests or event organizers.', 2, 22, 8, 215, 0, 0, '791nyyyv.jpg', '2024-05-27 16:31:27', '2024-05-27 16:31:27');

-- --------------------------------------------------------

--
-- Structure de la table `towns`
--

CREATE TABLE `towns` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `towns`
--

INSERT INTO `towns` (`id`, `name`) VALUES
(1, 'Bubanza'),
(2, 'Bururi'),
(3, 'Bujumbura'),
(4, 'Gitega'),
(5, 'Kayanza'),
(6, 'Cibitoke'),
(7, 'Mairie'),
(8, 'Mwaro'),
(9, 'Muramvya'),
(10, 'Karuzi'),
(11, 'Muyinga'),
(12, 'Ngozi'),
(13, 'Ruyigi'),
(14, 'Cankuzo'),
(15, 'Makamba'),
(16, 'Rumonge'),
(17, 'Kirundo');

-- --------------------------------------------------------

--
-- Structure de la table `type`
--

CREATE TABLE `type` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `type`
--

INSERT INTO `type` (`id`, `name`) VALUES
(1, 'Automobile'),
(2, 'Salle de conférence'),
(3, 'Maison de passage');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(30) NOT NULL,
  `name` varchar(50) NOT NULL,
  `passcode` text NOT NULL,
  `town` varchar(15) NOT NULL,
  `adresse` varchar(255) NOT NULL DEFAULT '0',
  `phone` varchar(50) NOT NULL,
  `role` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `actif` tinyint(4) NOT NULL DEFAULT 0,
  `admin` tinyint(4) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `passcode`, `town`, `adresse`, `phone`, `role`, `email`, `actif`, `admin`, `create_at`, `update_at`) VALUES
(12, 'leonceionzy', 'Bizindavyi Léonce', '$2a$10$0CUfl9b2tNuz.q/cx2QZoeuwsfd7FhS1ObU0A2tI9dvr9.Gs/e4Iy', 'Buja', 'Kiriri,mukaza', '+25761291137', 2, 'leonceb900@gmail.com', 1, 0, '2024-05-01 05:50:53', '2024-05-01 05:50:53'),
(15, 'gameshod9s', 'Foot Games', '$2a$10$UPdIMxhYIid1Z5wTXRVPlupRdK4tciWEqgNvXbSkNArvdOf7LeC8y', 'Gitega', 'mushasha', '+25761291137', 1, 'fgams900@gmail.com', 1, 0, '2024-05-01 17:05:16', '2024-05-01 17:05:16');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `addresse`
--
ALTER TABLE `addresse`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `allocations`
--
ALTER TABLE `allocations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `automobile`
--
ALTER TABLE `automobile`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `checkouts`
--
ALTER TABLE `checkouts`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `couleurs`
--
ALTER TABLE `couleurs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `maison`
--
ALTER TABLE `maison`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `marques`
--
ALTER TABLE `marques`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `modeles`
--
ALTER TABLE `modeles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `prices`
--
ALTER TABLE `prices`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `providers`
--
ALTER TABLE `providers`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `salle`
--
ALTER TABLE `salle`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `towns`
--
ALTER TABLE `towns`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `addresse`
--
ALTER TABLE `addresse`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `allocations`
--
ALTER TABLE `allocations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `automobile`
--
ALTER TABLE `automobile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `checkouts`
--
ALTER TABLE `checkouts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `couleurs`
--
ALTER TABLE `couleurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `maison`
--
ALTER TABLE `maison`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `marques`
--
ALTER TABLE `marques`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `modeles`
--
ALTER TABLE `modeles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT pour la table `prices`
--
ALTER TABLE `prices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `providers`
--
ALTER TABLE `providers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `salle`
--
ALTER TABLE `salle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT pour la table `towns`
--
ALTER TABLE `towns`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `type`
--
ALTER TABLE `type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
