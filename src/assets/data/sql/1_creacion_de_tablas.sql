CREATE DATABASE NightoutSevilla;

USE NightoutSevilla;

-- Tabla ZONA
CREATE TABLE
    zona (
        id_zona INT PRIMARY KEY AUTO_INCREMENT,
        nombre VARCHAR(100) NOT NULL UNIQUE
         );

-- Tabla DISCOTECA
CREATE TABLE
    discoteca (
        id_discoteca INT PRIMARY KEY AUTO_INCREMENT,
        nombre VARCHAR(100) NOT NULL UNIQUE,
        direccion VARCHAR(255) NOT NULL,
        ambiente VARCHAR(100),
        etiqueta VARCHAR(100),
        descripcion VARCHAR(1000),
        terraza TINYINT NOT NULL DEFAULT 0,
        reservado TINYINT NOT NULL DEFAULT 0,
        parking TINYINT NOT NULL DEFAULT 0,
        guardarropa TINYINT NOT NULL DEFAULT 0,
        id_zona INT NOT NULL,
        imagen1 VARCHAR(255) NOT NULL,
        imagen2 VARCHAR(255),
        imagen3 VARCHAR(255),
        stock_inicial INT NOT NULL,
        FOREIGN KEY (id_zona) REFERENCES ZONA (id_zona) ON DELETE CASCADE
    );

-- Tabla días de la semana
CREATE TABLE
    dias_semana (
        id_dia INT AUTO_INCREMENT PRIMARY KEY,
        nombre_dia ENUM ('lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo') UNIQUE
    );

-- Tabla de horarios
CREATE TABLE
    horarios_discoteca (
        id_horario INT AUTO_INCREMENT PRIMARY KEY,
        discoteca_id INT,
        dia_id INT,
        hora_apertura TIME NOT NULL,
        hora_cierre TIME NOT NULL,
        FOREIGN KEY (discoteca_id) REFERENCES discoteca (id_discoteca),
        FOREIGN KEY (dia_id) REFERENCES dias_semana (id_dia),
        CONSTRAINT unique_dia_horario UNIQUE (discoteca_id, dia_id)
    );

-- Tabla USUARIO
CREATE TABLE
    usuario (
        id_usuario INT PRIMARY KEY AUTO_INCREMENT,
        dni VARCHAR(9) UNIQUE NOT NULL,
        nombre_usuario VARCHAR(20) NOT NULL,
        nombre VARCHAR(100) NOT NULL,
        apellidos VARCHAR(100),
        correo_electronico VARCHAR(100) UNIQUE NOT NULL,
        contraseña VARCHAR(255) NOT NULL
    );


-- Tabla ENTRADA con restricción para evitar precios negativos
CREATE TABLE
    entrada (
        id_entrada INT PRIMARY KEY AUTO_INCREMENT,
        tipo_entrada ENUM ('individual', 'reservado') NOT NULL,
        precio DECIMAL(10, 2) NOT NULL,
        id_discoteca INT NOT NULL,
        dia_semana_id INT NOT NULL,
        stock_actual INT DEFAULT 0,
        FOREIGN KEY (dia_semana_id) REFERENCES dias_semana (id_dia),
        FOREIGN KEY (id_discoteca) REFERENCES DISCOTECA (id_discoteca) ON DELETE CASCADE
    );

-- Tabla PEDIDO con restricciones en total y fecha por defecto
CREATE TABLE
    pedido (
        id_pedido INT PRIMARY KEY AUTO_INCREMENT,
        fecha_pedido TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        total DECIMAL(9, 2) NOT NULL,
        id_usuario INT NOT NULL,
        FOREIGN KEY (id_usuario) REFERENCES USUARIO (id_usuario) ON DELETE CASCADE
    );

-- Tabla DETALLES_PEDIDO
CREATE TABLE
    detalles_pedido (
        id_pedido INT NOT NULL,
        id_entrada INT NOT NULL,
        cantidad INT NOT NULL,
        PRIMARY KEY (id_pedido, id_entrada),
        FOREIGN KEY (id_pedido) REFERENCES PEDIDO (id_pedido) ON DELETE CASCADE,
        FOREIGN KEY (id_entrada) REFERENCES ENTRADA (id_entrada) ON DELETE CASCADE
    );

-- Crear la vista para detalles_pedido
CREATE OR REPLACE VIEW detalles_pedido_view AS 
SELECT 
    CONCAT(id_pedido, '-', id_entrada) COLLATE utf8mb4_0900_ai_ci AS id,  -- Clave primaria virtual con intercalación
    id_pedido COLLATE utf8mb4_0900_ai_ci AS id_pedido,
    id_entrada COLLATE utf8mb4_0900_ai_ci AS id_entrada,
    cantidad COLLATE utf8mb4_0900_ai_ci AS cantidad
FROM detalles_pedido;
