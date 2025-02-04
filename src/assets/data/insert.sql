-- DATOS DE ZONAS
INSERT INTO
    zona (nombre)
VALUES
    ('Cartuja'),
    ('Centro'),
    ('Los Remedios'),
    ('Parque María Luisa'),
    ('Viapol-Nervión'),
    ('Zona Este'),
    ('Los Bermejales');

-- Datos de discotecas
INSERT INTO
    DISCOTECA (
        nombre,
        direccion,
        ambiente,
        etiqueta,
        descripcion,
        hora_apertura,
        hora_cierre,
        id_zona,
        imagen1,
        imagen2,
        imagen3,
        terraza,
        reservado,
        parking,
        guardarropa
    )
VALUES
    (
        'Rosso',
        ' C. Matemáticos Rey Pastor y Castro, 41092 Sevilla',
        '+18 Público variado',
        'Prohibido usar zapatillas de deporte. Se recomienda asistir en polo o camisa. ',
        'Situado sobre los pilares del antiguo Pabellón Olímpico en la pasada 
exposición del 92, este espacio cuenta con 2500 metros cuadrados y un gran equipo tecnológico y musical, consiguiendo así ser todo un referente del mundo de la diversión nocturna en la capital hispalense.
',
        '0:00:00',
        '6:00:00',
        1,
        '../../assets/img/discoteca1.webp',
        '../../assets/img/discoteca2.webp',
        '../../assets/img/discoteca3.webp',
        1,
        1,
        1,
        1
    );

INSERT INTO
    DISCOTECA (
        nombre,
        direccion,
        ambiente,
        etiqueta,
        descripcion,
        hora_apertura,
        hora_cierre,
        id_zona,
        imagen1,
        imagen2,
        imagen3,
        terraza,
        reservado,
        parking,
        guardarropa
    )
VALUES
    (
        'Monasterio',
        'C. Amor de Dios, 18, Casco Antiguo, 41002 Sevilla',
        '+18 Público variado',
        'No existen normas de etiqueta.',
        'El Monasterio Sevilla es una renombrada discoteca ubicada en pleno 
corazón de Sevilla, en la calle C. Amor de Dios, 18. Con una amplia oferta de 
servicios y una atención de primera calidad, esta discoteca ofrece una
experiencia nocturna inigualable. Con su ambiente vibrante y su excelente selección musical, Monasterio Sevilla se ha ganado el reconocimiento como uno de los mejores clubes nocturnos de la ciudad. Sin duda, es el lugar perfecto para pasar una noche llena de diversión y baile en la emocionante ciudad de Sevilla 
',
        '0:00:00',
        '6:00:00',
        2,
        '../../assets/img/discoteca4.webp',
        '../../assets/img/discoteca5.webp',
        '../../assets/img/discoteca6.webp',
        0,
        1,
        0,
        1
    );

INSERT INTO
    DISCOTECA (
        nombre,
        direccion,
        ambiente,
        etiqueta,
        descripcion,
        hora_apertura,
        hora_cierre,
        id_zona,
        imagen1,
        imagen2,
        imagen3,
        terraza,
        reservado,
        parking,
        guardarropa
    )
VALUES
    (
        'Holiday',
        'Jesús del Gran Poder, 73, Casco Antiguo',
        '+18 Público variado',
        'No existen normas de etiqueta.',
        'Se encuentra en pleno centro de Sevilla, en la Calle Jesús del Gran Poder, 73, paralela a la Alameda de Hércules. Cuenta con más de 350 asientos, pantallas audiovisuales, escenario,2 pistas de baile, zonas vips, dos barras y totalmente climatizado.',
        '0:00:00',
        '6:00:00',
        2,
        '../../assets/img/discoteca7.webp',
        '../../assets/img/discoteca8.webp',
        '../../assets/img/discoteca9.webp',
        0,
        1,
        0,
        1
    );

INSERT INTO
    DISCOTECA (
        nombre,
        direccion,
        ambiente,
        etiqueta,
        descripcion,
        hora_apertura,
        hora_cierre,
        id_zona,
        imagen1,
        imagen2,
        imagen3,
        terraza,
        reservado,
        parking,
        guardarropa
    )
VALUES
    (
        'Koko',
        'Pl. de la Encarnación, 38, Casco Antiguo, 41003 Sevilla',
        '+18 Público joven',
        'Prohibido ir en zapatillas de deporte. Se recomienda ir en polo o camisa.',
        'En el corazón de Sevilla, nuestras puertas se abren para revelar un escenario vibrante y ecléctico. Desde las enérgicas noches de reggaetón hasta los pulsantes ritmos de la electrónica, cada día es una nueva oportunidad para sumergirse en la esencia de la vida nocturna de Sevilla.',
        '23:00:00',
        '7:00:00',
        2,
        '../../assets/img/discoteca1.webp',
        '../../assets/img/discoteca2.webp',
        '../../assets/img/discoteca3.webp',
        0,
        1,
        0,
        1
    );

INSERT INTO
    DISCOTECA (
        nombre,
        direccion,
        ambiente,
        etiqueta,
        descripcion,
        hora_apertura,
        hora_cierre,
        id_zona,
        imagen1,
        imagen2,
        imagen3,
        terraza,
        reservado,
        parking,
        guardarropa
    )
VALUES
    (
        'Bestiario',
        'C. Zaragoza, 33, Casco Antiguo, 41001 Sevilla',
        '+18 Público variado',
        'Obligatorio ir en camisa y zapatos.',
        'Conocido por su variada y extensa selección de bebidas alcohólicas, que incluyen desde cócteles clásicos hasta cervezas artesanales locales. Además, el establecimiento también ofrece una selección de aperitivos y bocadillos que complementan perfectamente las bebidas. Con un ambiente animado y música de moda, el club es el escenario perfecto para disfrutar de una noche de baile y diversión con amigos. ',
        '23:00:00',
        '5:00:00',
        2,
        '../../assets/img/discoteca4.webp',
        '../../assets/img/discoteca5.webp',
        '../../assets/img/discoteca6.webp',
        1,
        1,
        1,
        1
    );

INSERT INTO
    DISCOTECA (
        nombre,
        direccion,
        ambiente,
        etiqueta,
        descripcion,
        hora_apertura,
        hora_cierre,
        id_zona,
        imagen1,
        imagen2,
        imagen3,
        terraza,
        reservado,
        parking,
        guardarropa
    )
VALUES
    (
        'Gran Vía',
        'Av. Blas Infante, 6, 41011 Sevilla',
        '+18 Público joven',
        'Obligatorio ir en polo o camisa',
        'Se trata de una discoteca que promete ser la digna sucesora de las emblemáticas terrazas. Aunque este local de ocio nocturno se abrió al público a finales de 2023, ha sido ahora cuando los universitarios se están decantando por ella.',
        '0:00:00',
        '7:00:00',
        3,
        '../../assets/img/discoteca7.webp',
        '../../assets/img/discoteca8.webp',
        '../../assets/img/discoteca9.webp',
        0,
        1,
        1,
        1
    );

INSERT INTO
    DISCOTECA (
        nombre,
        direccion,
        ambiente,
        etiqueta,
        descripcion,
        hora_apertura,
        hora_cierre,
        id_zona,
        imagen1,
        imagen2,
        imagen3,
        terraza,
        reservado,
        parking,
        guardarropa
    )
VALUES
    (
        'Terraza Alfonso',
        'P.º de las Delicias, 13, 41013 Sevilla',
        '+18 Público joven',
        'Polo o camisa y náuticos',
        ' La Terraza Alfonso es una de las más famosas de Sevilla en su temporada de verano. Situada en el Parque de Maria Luisa tiene la ventaja de poder disfrutar varios ambientes: discoteca, chill out o reservados. En invierno se abren los fines de semana con cervecita y tapitas según necesidades de los diferentes grupos.
',
        '23:00:00',
        '7:00:00',
        4,
        '../../assets/img/discoteca1.webp',
        '../../assets/img/discoteca2.webp',
        '../../assets/img/discoteca3.webp',
        1,
        1,
        1,
        0
    );

INSERT INTO
    DISCOTECA (
        nombre,
        direccion,
        ambiente,
        etiqueta,
        descripcion,
        hora_apertura,
        hora_cierre,
        id_zona,
        imagen1,
        imagen2,
        imagen3,
        terraza,
        reservado,
        parking,
        guardarropa
    )
VALUES
    (
        'Bar Líbano Terraza',
        'P.º de las Delicias, 151, 41013 Sevilla',
        '+18 Dirigida a ERASMUS',
        'Uso de camisa obligatorio',
        'Terraza Líbano, también conocida como Kiosco Líbano, está ubicada en el precioso Jardín de las Delicias en Sevilla. En el entorno de un paraje maravilloso entre el río y el parque Mª Luisa. La mejor terraza de copas para disfrutar de las noches de verano más divertidas en Sevilla y del mejor ambiente de fiesta cualquier día de la semana.',
        '23:00:00',
        '7:00:00',
        4,
        '../../assets/img/discoteca4.webp',
        '../../assets/img/discoteca5.webp',
        '../../assets/img/discoteca6.webp',
        1,
        1,
        1,
        1
    );

INSERT INTO
    DISCOTECA (
        nombre,
        direccion,
        ambiente,
        etiqueta,
        descripcion,
        hora_apertura,
        hora_cierre,
        id_zona,
        imagen1,
        imagen2,
        imagen3,
        terraza,
        reservado,
        parking,
        guardarropa
    )
VALUES
    (
        'Bilindo',
        'P.º de las Delicias, s/n, 41001 Sevilla',
        'Público de mediana edad',
        'Camisa y náuticos',
        'Descubre la vibrante discoteca Bilindo Sevilla, en el Parque María Luisa de Sevilla, el lugar ideal para celebrar despedidas de solteros y solteras en un entorno único y emocionante! Situada en uno de los parques más emblemáticos de la ciudad, Bilindo ofrece una experiencia incomparable que combina la belleza natural del entorno con la diversión y la emoción de una noche inolvidable. Por otro lado, con su decoración moderna y elegante, Bilindo crea un ambiente sofisticado y festivo que te hará sentirte como en casa desde el momento en que entras por la puerta.',
        '22:00:00',
        '7:00:00',
        4,
        '../../assets/img/discoteca7.webp',
        '../../assets/img/discoteca8.webp',
        '../../assets/img/discoteca9.webp',
        1,
        1,
        1,
        1
    );

INSERT INTO
    DISCOTECA (
        nombre,
        direccion,
        ambiente,
        etiqueta,
        descripcion,
        hora_apertura,
        hora_cierre,
        id_zona,
        imagen1,
        imagen2,
        imagen3,
        terraza,
        reservado,
        parking,
        guardarropa
    )
VALUES
    (
        'Casino',
        'Av. de María Luisa, 4, Casco Antiguo, 41013 Sevilla',
        '+18 Dirigida a ERASMUS',
        'Camisa o polo',
        'Con un sinfín de ideas y ganas de pasarlo bien, hemos conseguido estar siempre a la vanguardia del mundo de la diversión nocturna en la capital hispalense. Casino se ha convertido en una cita obligada para el ocio de la noche sevillana. Nuestros clientes son tratados como merecen en cada visita a nuestra discoteca y hacen a Casino tener un encanto único.',
        '1:00:00',
        '7:00:00',
        4,
        '../../assets/img/discoteca1.webp',
        '../../assets/img/discoteca2.webp',
        '../../assets/img/discoteca3.webp',
        1,
        1,
        1,
        1
    );

INSERT INTO
    DISCOTECA (
        nombre,
        direccion,
        ambiente,
        etiqueta,
        descripcion,
        hora_apertura,
        hora_cierre,
        id_zona,
        imagen1,
        imagen2,
        imagen3,
        terraza,
        reservado,
        parking,
        guardarropa
    )
VALUES
    (
        'Bakú Viapol',
        'C Viapol Center, C. Pirotecnia, 1, 41013 Sevilla',
        '+18 Público joven',
        'Camisa o polo',
        'Con su moderno diseño, Baku ofrece una experiencia de vida nocturna que no tiene comparación. Los ritmos contagiosos y las mezclas magistrales de los DJs residentes mantienen la pista de baile siempre animada. ¡Los jueves y los viernes son de Baku! Ya sea que busques compartir risas y momentos con amigos en los espacios lounge o quieras danzar al ritmo de la música más candente en la pista, nuestra discoteca garantiza una experiencia que te hará olvidar el estrés de la rutina diaria.',
        '22:00:00',
        '5:00:00',
        5,
        '../../assets/img/discoteca4.webp',
        '../../assets/img/discoteca5.webp',
        '../../assets/img/discoteca6.webp',
        1,
        1,
        1,
        1
    );

INSERT INTO
    DISCOTECA (
        nombre,
        direccion,
        ambiente,
        etiqueta,
        descripcion,
        hora_apertura,
        hora_cierre,
        id_zona,
        imagen1,
        imagen2,
        imagen3,
        terraza,
        reservado,
        parking,
        guardarropa
    )
VALUES
    (
        'Vizzio Club Sevilla',
        'C. Pirotecnia, 1, 41013 Sevilla',
        '+18 Público joven',
        'Camisa o polo',
        'Se emerge como un emocionante protagonista en el vibrante escenario del ocio nocturno en Sevilla, desafiando las convenciones y brindando una alternativa fresca y emocionante. Este nuevo espacio está diseñado específicamente para satisfacer los gustos de todas las generaciones, aquellos que buscan más que una simple noche de diversión. Aquí, la exclusividad es la norma, y se ha convertido en nuestro sello distintivo.',
        '22:00:00',
        '5:00:00',
        5,
        '../../assets/img/discoteca7.webp',
        '../../assets/img/discoteca8.webp',
        '../../assets/img/discoteca9.webp',
        1,
        1,
        1,
        1
    );

INSERT INTO
    DISCOTECA (
        nombre,
        direccion,
        ambiente,
        etiqueta,
        descripcion,
        hora_apertura,
        hora_cierre,
        id_zona,
        imagen1,
        imagen2,
        imagen3,
        terraza,
        reservado,
        parking,
        guardarropa
    )
VALUES
    (
        'Voulezbar',
        'Edificio Viapol, C. Balbino Marrón, s/n, 41018 Sevilla',
        'Público de mediana edad',
        'No existen normas de etiqueta.',
        'Es una discoteca y club nocturno muy popular situado en la zona de Viapol de Sevilla. Es un lugar conocido por su música variada y su buen ambiente para cualquier edad. Todo un clásico en las noches de fiesta sevillanas y es uno de los mejores sitios de la capital hispalense para pasar un buen rato entre amigos. La sala dispone de zona de baile, terraza y zona de reservados para disfrutar de copas o cócteles.',
        '22:00:00',
        '8:00:00',
        5,
        '../../assets/img/discoteca1.webp',
        '../../assets/img/discoteca2.webp',
        '../../assets/img/discoteca3.webp',
        1,
        1,
        0,
        1
    );

INSERT INTO
    DISCOTECA (
        nombre,
        direccion,
        ambiente,
        etiqueta,
        descripcion,
        hora_apertura,
        hora_cierre,
        id_zona,
        imagen1,
        imagen2,
        imagen3,
        terraza,
        reservado,
        parking,
        guardarropa
    )
VALUES
    (
        'LeChic',
        'Balbino Marrón, Seville, Spain, 41018',
        '+18 Público variado',
        'Polo o camisa',
        'Discoteca dedicada al ocio sevillano situada en pleno Viapol. Un entorno mágico en la noche sevillana, ven a descubrir el mejor ambiente universitario y disfruta de nuestras maravillosas instalaciones para vivir una noche inolvidable.',
        '22:30:00',
        '8:00:00',
        5,
        '../../assets/img/discoteca4.webp',
        '../../assets/img/discoteca5.webp',
        '../../assets/img/discoteca6.webp',
        1,
        1,
        0,
        1
    );

INSERT INTO
    DISCOTECA (
        nombre,
        direccion,
        ambiente,
        etiqueta,
        descripcion,
        hora_apertura,
        hora_cierre,
        id_zona,
        imagen1,
        imagen2,
        imagen3,
        terraza,
        reservado,
        parking,
        guardarropa
    )
VALUES
    (
        'Abril',
        'C. Luis Montoto, 118, 41018 Sevilla',
        '+18 Público joven',
        'Se recoimenda ir en polo o camisa',
        '¡Bienvenidos a la discoteca Abril, el lugar perfecto para celebrar despedidas de soltero y soltera en Sevilla! Situada en el corazón de la ciudad, Abril ofrece una experiencia única y emocionante para aquellos que buscan una noche inolvidable. Con su ambiente vibrante, música contagiosa y una amplia variedad de bebidas, esta discoteca es el destino ideal para celebrar este momento tan especial. En la discoteca Abril Sevilla, disfrutaras y terminarás tu despedida a lo grande.',
        '0:00:00',
        '6:00:00',
        5,
        '../../assets/img/discoteca7.webp',
        '../../assets/img/discoteca8.webp',
        '../../assets/img/discoteca9.webp',
        1,
        1,
        1,
        1
    );

INSERT INTO
    DISCOTECA (
        nombre,
        direccion,
        ambiente,
        etiqueta,
        descripcion,
        hora_apertura,
        hora_cierre,
        id_zona,
        imagen1,
        imagen2,
        imagen3,
        terraza,
        reservado,
        parking,
        guardarropa
    )
VALUES
    (
        'Occo',
        'Av. de Montes Sierra, 24, 41007 Sevilla',
        '+18 Público joven',
        'Se recoimenda ir en polo o camisa',
        'Soñábamos con algo que se alejara del simple concepto de discoteca, que fuera más, mucho más. Un recinto con una calidad musical exquisita, proporcionando noches inolvidables a miles de personas que atraviesan sus puertas para disfrutar del sonido de los mejores hits nacionales e internacionales. Mientras que los latidos hipnotizan a una multitud llena de energía, la mezcla de nuestros innovadores espectáculos, un fascinante sistema de iluminación único y los mejores efectos visuales de la pantalla gigante LED, le harán vivir en primera persona ese sueño que un día tuvimos. Las mesas VIP rodean la pista de baile, lo que ofrece una grata experiencia para los clientes que deseen estar en el centro de la acción desde una ubicación privilegiada.',
        '22:00:00',
        '9:00:00',
        6,
        '../../assets/img/discoteca1.webp',
        '../../assets/img/discoteca2.webp',
        '../../assets/img/discoteca3.webp',
        1,
        1,
        1,
        1
    );

INSERT INTO
    DISCOTECA (
        nombre,
        direccion,
        ambiente,
        etiqueta,
        descripcion,
        hora_apertura,
        hora_cierre,
        id_zona,
        imagen1,
        imagen2,
        imagen3,
        terraza,
        reservado,
        parking,
        guardarropa
    )
VALUES
    (
        'Ginger',
        'Av. de la Innovación, 3, 41020 Sevilla',
        'Público de mediana edad',
        'Se recoimenda ir en polo o camisa',
        'Magnifica sala para disfrutar de un rato agradable con tus amigos, pareja, familia...etc Contamos con una terraza para disfrutar de los mejores momentos. Especialistas en Gin tonics, cócteles, infusiones y café.',
        '1:00:00',
        '8:00:00',
        6,
        '../../assets/img/discoteca4.webp',
        '../../assets/img/discoteca5.webp',
        '../../assets/img/discoteca6.webp',
        1,
        1,
        1,
        1
    );

INSERT INTO
    DISCOTECA (
        nombre,
        direccion,
        ambiente,
        etiqueta,
        descripcion,
        hora_apertura,
        hora_cierre,
        id_zona,
        imagen1,
        imagen2,
        imagen3,
        terraza,
        reservado,
        parking,
        guardarropa
    )
VALUES
    (
        'Euphoria',
        'C. Aviación, 25, Norte, 41007 Sevilla',
        '+18 Público de Hispanoamérica',
        'No existen normas de etiqueta.',
        'La Sala Euphoria es una discoteca ubicada en la calle C. Aviación, 25 de Seville. Con una amplia variedad de servicios de calidad, esta discoteca se ha convertido en uno de los destinos preferidos de los amantes de la música y el baile. Desde su apertura, la Sala Euphoria ha destacado por su ambiente vibrante y sus espectaculares fiestas temáticas, que hacen que los clientes se sumerjan en una experiencia única y emocionante.',
        '0:00:00',
        '9:00:00',
        6,
        '../../assets/img/discoteca7.webp',
        '../../assets/img/discoteca8.webp',
        '../../assets/img/discoteca9.webp',
        1,
        1,
        1,
        1
    );

INSERT INTO
    DISCOTECA (
        nombre,
        direccion,
        ambiente,
        etiqueta,
        descripcion,
        hora_apertura,
        hora_cierre,
        id_zona,
        imagen1,
        imagen2,
        imagen3,
        terraza,
        reservado,
        parking,
        guardarropa
    )
VALUES
    (
        'IpaIpa',
        'C. Paleontologia, 14, Norte, 41015 Sevilla',
        '+18 Público de Hispanoamérica',
        'No existen normas de etiqueta.',
        'Con servicios de alta calidad, ofrece una experiencia única y vibrante para todos los amantes de la música y el baile. Con el ambiente más moderno y las mejores instalaciones, IPAIPA SEVILLA garantiza una noche llena de diversión y entretenimiento sin igual en la ciudad de Sevilla. No te pierdas la oportunidad de disfrutar de una experiencia inolvidable en esta increíble discoteca.',
        '20:00:00',
        '8:00:00',
        6,
        '../../assets/img/discoteca1.webp',
        '../../assets/img/discoteca2.webp',
        '../../assets/img/discoteca3.webp',
        1,
        1,
        0,
        1
    );

INSERT INTO
    DISCOTECA (
        nombre,
        direccion,
        ambiente,
        etiqueta,
        descripcion,
        hora_apertura,
        hora_cierre,
        id_zona,
        imagen1,
        imagen2,
        imagen3,
        terraza,
        reservado,
        parking,
        guardarropa
    )
VALUES
    (
        'Newman',
        'Avenida de Finlandia, 1, 41012 Sevilla',
        '+18 Público variado',
        'No existen normas de etiqueta.',
        'En Sala NEWMAN proponemos un clima agradable, buen ambiente, conciertos en vivo, monólogos, y actividades sorpresa, fiestas temáticas, desde la hora del café hasta la madrugada. Todo tipo de copas con las marcas de moda, y cocktails de la casa. Nuestro objetivo, que estés a gusto',
        '0:00:00',
        '11:00:00',
        7,
        '../../assets/img/discoteca4.webp',
        '../../assets/img/discoteca5.webp',
        '../../assets/img/discoteca6.webp',
        0,
        1,
        1,
        0
    );

-- Insert de la comision
INSERT INTO
    comision (porcentaje, fecha_inicio)
VALUES
    (3.00, '2018-01-29');

-- Insert de las entradas
INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('individual', 20, 1);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('reservado', 160, 1);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('individual', 15, 2);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('reservado', 85, 2);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('individual', 20, 3);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('reservado', 120, 3);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('individual', 10, 4);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('reservado', 110, 4);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('individual', 15, 5);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('reservado', 140, 5);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('individual', 10, 6);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('reservado', 120, 6);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('individual', 12, 7);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('reservado', 100, 7);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('individual', 12, 8);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('reservado', 130, 8);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('individual', 20, 9);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('reservado', 180, 9);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('individual', 12, 10);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('reservado', 140, 10);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('individual', 12, 11);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('reservado', 150, 11);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('individual', 12, 12);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('reservado', 140, 12);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('individual', 7, 13);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('reservado', 100, 13);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('individual', 10, 14);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('reservado', 130, 14);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('individual', 10, 15);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('reservado', 100, 15);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('individual', 20, 16);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('reservado', 130, 16);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('individual', 15, 17);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('reservado', 100, 17);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('individual', 15, 18);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('reservado', 90, 18);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('individual', 20, 19);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('reservado', 100, 19);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('individual', 10, 20);

INSERT INTO
    ENTRADA (tipo_entrada, precio, id_discoteca)
VALUES
    ('reservado', 90, 20);