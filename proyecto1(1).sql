-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-06-2018 a las 06:58:31
-- Versión del servidor: 10.1.30-MariaDB
-- Versión de PHP: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE `noticias` (
  `id` int(11) NOT NULL,
  `title` varchar(70) COLLATE utf8_spanish_ci NOT NULL,
  `image` varchar(70) COLLATE utf8_spanish_ci NOT NULL,
  `body` text COLLATE utf8_spanish_ci NOT NULL,
  `date` varchar(10) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`id`, `title`, `image`, `body`, `date`) VALUES
(1, 'nokia', 'img/nokia_1.jpg', 'Apariencia. El Nokia 1 es un teléfono ligero, su apariencia externa, como muchos otros dispositivos de su gama, está compuesta por unos marcos, adornados por un bisel blanco, que rodean su pantalla de 4.5 pulgadas.', '10/06/2018'),
(2, 'Una breve introducción al E3 y todas sus novedades', 'http://localhost/proyecto1/img/us-technology.jpg', 'Las empresas dedicadas al diseño de videojuegos están en Los Angeles en este momento, sacando, casi literalmente, todos los fierros. Los portales de videojuegos y las redes sociales están explotando con cada anuncio que se ha presentado en estos días. La E3 comenzó este martes y, sin embargo, desde hace unos días las empresas ya habían estado mostrando los dientes para el placer de todos los jugadores alrededor del mundo. Estos son los anuncios que dieron la largada para la conferencia.', '13/06/2018'),
(3, 'Nokia 1: el celular que quiere popularizarse en el', 'http://localhost/proyecto1/img/nokia_1.jpg', 'Apariencia. El Nokia 1 es un teléfono ligero, su apariencia externa, como muchos otros dispositivos de su gama, está compuesta por unos marcos, adornados por un bisel blanco, que rodean su pantalla de 4.5 pulgadas.', '10/06/2018'),
(4, 'Una breve introducción al E3 y todas sus novedades', 'http://localhost/proyecto1/img/us-technology.jpg', 'Las empresas dedicadas al diseño de videojuegos están en Los Angeles en este momento, sacando, casi literalmente, todos los fierros. Los portales de videojuegos y las redes sociales están explotando con cada anuncio que se ha presentado en estos días. La E3 comenzó este martes y, sin embargo, desde hace unos días las empresas ya habían estado mostrando los dientes para el placer de todos los jugadores alrededor del mundo. Estos son los anuncios que dieron la largada para la conferencia.', '13/06/2018');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
