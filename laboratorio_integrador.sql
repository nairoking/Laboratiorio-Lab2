-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-11-2023 a las 02:19:07
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `laboratorio_integrador`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bioquimicos`
--

CREATE TABLE `bioquimicos` (
  `id` int(11) NOT NULL,
  `contrasena` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `dni` varchar(255) DEFAULT NULL,
  `fechaNacimiento` datetime DEFAULT NULL,
  `genero` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `rol` int(11) DEFAULT NULL,
  `numeroMatricula` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `bioquimicos`
--

INSERT INTO `bioquimicos` (`id`, `contrasena`, `email`, `nombre`, `apellido`, `dni`, `fechaNacimiento`, `genero`, `telefono`, `direccion`, `rol`, `numeroMatricula`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, '4321', 'juan@mail.com', 'juan', 'lopez', '38755899', '1994-10-02 17:56:36', 'Hombre', '2665455889', 'la casa de juan', 3, 'bqm166', '2023-10-31 21:56:36', '2023-10-31 21:56:36', NULL),
(3, '9876', 'marcos@mail.com', 'marcos', 'perez', '39899788', '1995-07-19 18:03:01', 'Hombre', '2665825865', '25 de mayo', 3, 'bqm999', '2023-10-31 22:03:00', '2023-10-31 22:03:00', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `determinacions`
--

CREATE TABLE `determinacions` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `unidadMedida` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `determinacions`
--

INSERT INTO `determinacions` (`id`, `nombre`, `unidadMedida`, `createdAt`, `updatedAt`) VALUES
(1, 'Hemoglobina', 'g/dL', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Hematocrito', '%', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Glóbulos Rojos', 'millones/mm³', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Glóbulos Blancos', 'mil/mm³', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Plaquetas', 'mil/mm³', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados`
--

CREATE TABLE `estados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estados`
--

INSERT INTO `estados` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES
(1, 'Analítica', '2023-11-01 01:06:15', '2023-11-01 01:06:15'),
(2, 'Pre Informe', '2023-11-01 01:06:15', '2023-11-01 01:06:15'),
(3, 'Para Validar', '2023-11-01 01:08:11', '2023-11-01 01:08:11'),
(4, 'Informada', '2023-11-01 01:08:11', '2023-11-01 01:08:11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `examendeterminacions`
--

CREATE TABLE `examendeterminacions` (
  `id` int(11) NOT NULL,
  `examenId` int(11) DEFAULT NULL,
  `determinacionId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `examendeterminacions`
--

INSERT INTO `examendeterminacions` (`id`, `examenId`, `determinacionId`, `createdAt`, `updatedAt`) VALUES
(5, 1, 1, '2023-10-19 23:15:36', '2023-10-19 23:15:36'),
(8, 1, 2, '2023-10-19 23:31:38', '2023-10-19 23:31:38'),
(9, 1, 3, '2023-10-19 23:31:47', '2023-10-19 23:31:47'),
(10, 1, 4, '2023-10-19 23:31:54', '2023-10-19 23:31:54'),
(11, 1, 5, '2023-10-19 23:32:08', '2023-10-19 23:32:08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `examens`
--

CREATE TABLE `examens` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `tipoMuestraId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `examens`
--

INSERT INTO `examens` (`id`, `nombre`, `createdAt`, `updatedAt`, `tipoMuestraId`) VALUES
(1, 'Hemograma Completo', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(5, 'examen 8', '2023-10-31 12:11:12', '2023-10-31 12:11:12', 2),
(6, 'examen 10', '2023-10-31 13:24:44', '2023-10-31 13:24:44', 1),
(12, 'examen 20', '2023-10-31 13:48:35', '2023-10-31 13:48:35', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `muestras`
--

CREATE TABLE `muestras` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `pacienteId` int(11) NOT NULL,
  `fechaToma` datetime DEFAULT NULL,
  `tipoMuestraId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `muestras`
--

INSERT INTO `muestras` (`id`, `createdAt`, `updatedAt`, `pacienteId`, `fechaToma`, `tipoMuestraId`) VALUES
(1, '2023-11-01 01:05:14', '2023-11-01 01:05:14', 1, '2023-10-31 21:05:14', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordentrabajos`
--

CREATE TABLE `ordentrabajos` (
  `id` int(11) NOT NULL,
  `pacienteId` int(11) DEFAULT NULL,
  `estadoId` int(11) DEFAULT NULL,
  `bioquimicoId` int(11) DEFAULT NULL,
  `examenId` int(11) DEFAULT NULL,
  `muestraId` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ordentrabajos`
--

INSERT INTO `ordentrabajos` (`id`, `pacienteId`, `estadoId`, `bioquimicoId`, `examenId`, `muestraId`, `fecha`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 1, 1, 1, '2023-10-31 00:00:00', '2023-11-01 00:43:09', '2023-11-01 00:43:09'),
(2, 4, 2, 3, 12, 1, '2023-10-31 00:00:00', '2023-11-01 01:05:11', '2023-11-01 01:05:11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `id` int(11) NOT NULL,
  `contrasena` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `dni` varchar(255) DEFAULT NULL,
  `fechaNacimiento` datetime DEFAULT NULL,
  `genero` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `rol` int(11) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`id`, `contrasena`, `email`, `nombre`, `apellido`, `dni`, `fechaNacimiento`, `genero`, `telefono`, `rol`, `direccion`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, '1234', 'miguel@mail.com', 'miguel', 'quintana', '12345678', '0000-00-00 00:00:00', 'hombre', '2665107439', 0, 'mi casa', '2023-10-18 03:28:14', '2023-10-18 06:27:57', NULL),
(3, '33333', 'mail3@mail.com', 'marcos', 'lopez', '88999777', '2003-05-13 01:44:04', 'hombre', '2665112233', 0, 'su casa', '2023-10-18 06:44:03', '2023-10-18 06:44:03', NULL),
(4, NULL, 'pedro@mail.com', 'pedro', 'picapiedra', '11222333', NULL, NULL, '2664454545', NULL, 'la casa de piedra', '2023-10-18 05:54:34', '2023-10-18 05:54:34', NULL),
(5, NULL, 'antonio@mail.com', 'antonio', 'picapiedra', '11222334', NULL, NULL, '2664454545', NULL, 'la casa de piedra', '2023-10-18 05:56:19', '2023-10-18 05:56:19', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rols`
--

CREATE TABLE `rols` (
  `id` int(11) NOT NULL,
  `rol` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rols`
--

INSERT INTO `rols` (`id`, `rol`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'administrador', '2023-10-17 23:08:50', '2023-10-17 23:08:50', NULL),
(2, 'paciente', '2023-10-17 23:11:42', '2023-10-17 23:11:42', NULL),
(3, 'bioquimico', '2023-10-17 23:10:12', '2023-10-17 23:10:12', NULL),
(4, 'recepcionista', '2023-10-17 23:10:29', '2023-10-17 23:10:29', NULL),
(5, 'tecnico', '2023-10-17 23:10:29', '2023-10-17 23:10:29', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20231017140005-create-paciente.cjs'),
('20231017202608-create-bioquimico.js'),
('20231017202912-create-rol.js'),
('20231017205603-update-foreingkey.js'),
('20231019192726-create-determinacion.js'),
('20231019192828-create-valores-referencia.js'),
('20231019192849-create-examen.js'),
('20231019192910-create-muestra.js'),
('20231019194857-create-examen-determinacion.js'),
('20231019195659-agregar-claves-foraneas.js'),
('20231031110110-create-tipo-muestra.js'),
('20231031111324-create-estado.js'),
('20231031112018-create-orden-trabajo.js'),
('20231031133847-add_nuevoAtributo_to_examen.js'),
('20231031205200-modificar-muestra.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipomuestras`
--

CREATE TABLE `tipomuestras` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipomuestras`
--

INSERT INTO `tipomuestras` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES
(1, 'sangre', '2023-10-31 13:16:08', '2023-10-31 13:16:08'),
(2, 'orina', '2023-10-31 13:16:08', '2023-10-31 13:16:08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valoresreferencia`
--

CREATE TABLE `valoresreferencia` (
  `id` int(11) NOT NULL,
  `rango_min` float DEFAULT NULL,
  `rango_max` float DEFAULT NULL,
  `descripcion` varchar(30) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `determinacionId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `valoresreferencia`
--

INSERT INTO `valoresreferencia` (`id`, `rango_min`, `rango_max`, `descripcion`, `createdAt`, `updatedAt`, `determinacionId`) VALUES
(6, 12, 18, '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1),
(7, 36, 54, '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 2),
(8, 4.2, 6.3, '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 3),
(9, 4.5, 11, '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 4),
(10, 150, 450, '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bioquimicos`
--
ALTER TABLE `bioquimicos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `determinacions`
--
ALTER TABLE `determinacions`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estados`
--
ALTER TABLE `estados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `examendeterminacions`
--
ALTER TABLE `examendeterminacions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `determinacionId` (`determinacionId`),
  ADD KEY `examenId` (`examenId`) USING BTREE;

--
-- Indices de la tabla `examens`
--
ALTER TABLE `examens`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `muestras`
--
ALTER TABLE `muestras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pacienteId` (`pacienteId`),
  ADD KEY `tipoMuestra` (`tipoMuestraId`);

--
-- Indices de la tabla `ordentrabajos`
--
ALTER TABLE `ordentrabajos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rol` (`rol`);

--
-- Indices de la tabla `rols`
--
ALTER TABLE `rols`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `tipomuestras`
--
ALTER TABLE `tipomuestras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `valoresreferencia`
--
ALTER TABLE `valoresreferencia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `determinacionId` (`determinacionId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bioquimicos`
--
ALTER TABLE `bioquimicos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `determinacions`
--
ALTER TABLE `determinacions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `estados`
--
ALTER TABLE `estados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `examendeterminacions`
--
ALTER TABLE `examendeterminacions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `examens`
--
ALTER TABLE `examens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `muestras`
--
ALTER TABLE `muestras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `ordentrabajos`
--
ALTER TABLE `ordentrabajos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `rols`
--
ALTER TABLE `rols`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `tipomuestras`
--
ALTER TABLE `tipomuestras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `valoresreferencia`
--
ALTER TABLE `valoresreferencia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `examendeterminacions`
--
ALTER TABLE `examendeterminacions`
  ADD CONSTRAINT `examendeterminacions_ibfk_1` FOREIGN KEY (`examenId`) REFERENCES `examens` (`id`),
  ADD CONSTRAINT `examendeterminacions_ibfk_2` FOREIGN KEY (`determinacionId`) REFERENCES `determinacions` (`id`);

--
-- Filtros para la tabla `muestras`
--
ALTER TABLE `muestras`
  ADD CONSTRAINT `muestras_ibfk_2` FOREIGN KEY (`pacienteId`) REFERENCES `pacientes` (`id`),
  ADD CONSTRAINT `muestras_ibfk_3` FOREIGN KEY (`tipoMuestraId`) REFERENCES `tipomuestras` (`id`);

--
-- Filtros para la tabla `valoresreferencia`
--
ALTER TABLE `valoresreferencia`
  ADD CONSTRAINT `valoresreferencia_ibfk_1` FOREIGN KEY (`determinacionId`) REFERENCES `determinacions` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
