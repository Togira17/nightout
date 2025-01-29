CREATE DATABASE IF NOT EXISTS NightoutSevilla;

USE NightoutSevilla;

-- Tabla ZONA
CREATE TABLE
    ZONA (id_zona INT PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(100) NOT NULL UNIQUE);

-- Tabla DISCOTECA
CREATE TABLE
    DISCOTECA (
        id_discoteca INT PRIMARY KEY AUTO_INCREMENT,
        nombre VARCHAR(100) NOT NULL UNIQUE,
        direccion VARCHAR(255) NOT NULL,
        ambiente VARCHAR(100),
        etiqueta VARCHAR(100),
        descripcion VARCHAR(500),
        hora_apertura TIME NOT NULL,
        hora_cierre TIME NOT NULL,
        terraza TINYINT (1) NOT NULL DEFAULT 0,
        reservado TINYINT (1) NOT NULL DEFAULT 1,
        parking TINYINT (1) NOT NULL DEFAULT 0,
        guardarropa TINYINT (1) NOT NULL DEFAULT 0,
        id_zona INT NOT NULL,
        imagen1 VARCHAR(255) NOT NULL,
        imagen2 VARCHAR(255),
        imagen3 VARCHAR(255),
        FOREIGN KEY (id_zona) REFERENCES ZONA (id_zona) ON DELETE CASCADE
    );

-- Tabla USUARIO
CREATE TABLE
    USUARIO (
        id_usuario INT PRIMARY KEY AUTO_INCREMENT,
        dni VARCHAR(9) UNIQUE NOT NULL CHECK (dni REGEXP '^[0-9]{8}[A-Za-z]$'),
        nombre_usuario VARCHAR(20) NOT NULL,
        nombre VARCHAR(100) NOT NULL,
        apellidos VARCHAR(100),
        correo_electronico VARCHAR(100) UNIQUE NOT NULL,
        contraseña VARCHAR(255) NOT NULL
    );

-- Tabla COMISION con restricción para evitar solapamientos
CREATE TABLE
    COMISION (
        id_comision INT PRIMARY KEY AUTO_INCREMENT,
        porcentaje DECIMAL(5, 2) NOT NULL CHECK (porcentaje >= 0),
        fecha_inicio DATE NOT NULL,
        fecha_fin DATE NULL,
        CONSTRAINT chk_fecha_fin CHECK (
            fecha_inicio < fecha_fin
            OR fecha_fin IS NULL
        )
    );

-- Tabla ENTRADA con restricción para evitar precios negativos
CREATE TABLE
    ENTRADA (
        id_producto INT PRIMARY KEY AUTO_INCREMENT,
        tipo_entrada ENUM ('individual', 'reservado') NOT NULL,
        precio DECIMAL(9, 2) NOT NULL CHECK (precio > 0),
        id_discoteca INT NOT NULL,
        FOREIGN KEY (id_discoteca) REFERENCES DISCOTECA (id_discoteca) ON DELETE CASCADE
    );

-- Tabla PEDIDO con restricciones en total y fecha por defecto
CREATE TABLE
    PEDIDO (
        id_pedido INT PRIMARY KEY AUTO_INCREMENT,
        id_comision INT NOT NULL,
        fecha_pedido DATE NOT NULL DEFAULT CURRENT_DATE,
        total DECIMAL(9, 2) NOT NULL CHECK (total >= 0),
        id_usuario INT NOT NULL,
        FOREIGN KEY (id_usuario) REFERENCES USUARIO (id_usuario) ON DELETE CASCADE,
        FOREIGN KEY (id_comision) REFERENCES COMISION (id_comision) ON DELETE CASCADE
    );

-- Tabla DETALLES_PEDIDO
CREATE TABLE
    DETALLES_PEDIDO (
        id_pedido INT NOT NULL,
        id_producto INT NOT NULL,
        cantidad INT NOT NULL CHECK (cantidad > 0),
        PRIMARY KEY (id_pedido, id_producto),
        FOREIGN KEY (id_pedido) REFERENCES PEDIDO (id_pedido) ON DELETE CASCADE,
        FOREIGN KEY (id_producto) REFERENCES ENTRADA (id_producto) ON DELETE CASCADE
    );
