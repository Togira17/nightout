USE nightoutSevilla;

INSERT INTO
    zona (id_zona, nombre)
VALUES
    (1, 'Cartuja'),
    (2, 'Centro'),
    (3, 'Los Remedios'),
    (4, 'Parque María Luisa'),
    (5, 'Viapol'),
    (6, 'Zona Este'),
    (7, 'Bermejales');

INSERT INTO
    dias_semana (id_dia, nombre_dia)
VALUES
    (1, 'lunes'),
    (2, 'martes'),
    (3, 'miércoles'),
    (4, 'jueves'),
    (5, 'viernes'),
    (6, 'sábado'),
    (7, 'domingo');

INSERT INTO
    discoteca (
        id_discoteca,
        nombre,
        id_zona,
        direccion,
        ambiente,
        etiqueta,
        terraza,
        reservado,
        parking,
        guardarropa,
        descripcion,
        imagen1,
        imagen2,
        imagen3,
        stock_inicial
    )
VALUES
    (
        '1',
        'Rosso',
        '1',
        ' C. Matemáticos Rey Pastor y Castro, 41092 Sevilla',
        '/+18 Público variado',
        'Prohibido usar zapatillas de deporte. Se recomienda asistir en polo o camisa. ',
        1,
        1,
        1,
        1,
        'Situado sobre los pilares del antiguo Pabellón Olímpico en la pasada 
exposición del 92, este espacio cuenta con 2500 metros cuadrados y un gran equipo tecnológico y musical, consiguiendo así ser todo un referente del mundo de la diversión nocturna en la capital hispalense.
',
        '../../assets/img/discoteca1.webp',
        '../../assets/img/discoteca2.webp',
        '../../assets/img/discoteca3.webp',
        '100'
    ),
    (
        '2',
        'Monasterio',
        '2',
        'C. Amor de Dios, 18, Casco Antiguo, 41002 Sevilla',
        '/+18 Público variado',
        'No existen normas de etiqueta.',
        0,
        1,
        0,
        1,
        'El Monasterio Sevilla es una renombrada discoteca ubicada en pleno 
corazón de Sevilla, en la calle C. Amor de Dios, 18. Con una amplia oferta de 
servicios y una atención de primera calidad, esta discoteca ofrece una
experiencia nocturna inigualable. Con su ambiente vibrante y su excelente selección musical, Monasterio Sevilla se ha ganado el reconocimiento como uno de los mejores clubes nocturnos de la ciudad. Sin duda, es el lugar perfecto para pasar una noche llena de diversión y baile en la emocionante ciudad de Sevilla 
',
        '../../assets/img/discoteca4.webp',
        '../../assets/img/discoteca5.webp',
        '../../assets/img/discoteca6.webp',
        '100'
    ),
    (
        '3',
        'Holiday',
        '2',
        'Jesús del Gran Poder, 73, Casco Antiguo',
        '/+18 Público variado',
        'No existen normas de etiqueta.',
        0,
        1,
        0,
        1,
        'Se encuentra en pleno centro de Sevilla, en la Calle Jesús del Gran Poder, 73, paralela a la Alameda de Hércules. Cuenta con más de 350 asientos, pantallas audiovisuales, escenario,2 pistas de baile, zonas vips, dos barras y totalmente climatizado.',
        '../../assets/img/discoteca7.webp',
        '../../assets/img/discoteca8.webp',
        '../../assets/img/discoteca9.webp',
        '100'
    ),
    (
        '4',
        'Koko',
        '2',
        'Pl. de la Encarnación, 38, Casco Antiguo, 41003 Sevilla',
        '/+18 Público joven',
        'Prohibido ir en zapatillas de deporte. Se recomienda ir en polo o camisa.',
        0,
        1,
        0,
        1,
        'En el corazón de Sevilla, nuestras puertas se abren para revelar un escenario vibrante y ecléctico. Desde las enérgicas noches de reggaetón hasta los pulsantes ritmos de la electrónica, cada día es una nueva oportunidad para sumergirse en la esencia de la vida nocturna de Sevilla.',
        '../../assets/img/discoteca1.webp',
        '../../assets/img/discoteca2.webp',
        '../../assets/img/discoteca3.webp',
        '100'
    ),
    (
        '5',
        'Bestiario',
        '2',
        'C. Zaragoza, 33, Casco Antiguo, 41001 Sevilla',
        '/+18 Público variado',
        'Obligatorio ir en camisa y zapatos.',
        1,
        1,
        1,
        1,
        'Conocido por su variada y extensa selección de bebidas alcohólicas, que incluyen desde cócteles clásicos hasta cervezas artesanales locales. Además, el establecimiento también ofrece una selección de aperitivos y bocadillos que complementan perfectamente las bebidas. Con un ambiente animado y música de moda, el club es el escenario perfecto para disfrutar de una noche de baile y diversión con amigos. ',
        '../../assets/img/discoteca4.webp',
        '../../assets/img/discoteca5.webp',
        '../../assets/img/discoteca6.webp',
        '100'
    ),
    (
        '6',
        'Gran Vía',
        '3',
        'Av. Blas Infante, 6, 41011 Sevilla',
        '/+18 Público joven',
        'Obligatorio ir en polo o camisa',
        0,
        1,
        1,
        1,
        'Se trata de una discoteca que promete ser la digna sucesora de las emblemáticas terrazas. Aunque este local de ocio nocturno se abrió al público a finales de 2023, ha sido ahora cuando los universitarios se están decantando por ella.',
        '../../assets/img/discoteca7.webp',
        '../../assets/img/discoteca8.webp',
        '../../assets/img/discoteca9.webp',
        '100'
    ),
    (
        '7',
        'Terraza Alfonso',
        '4',
        'P.º de las Delicias, 13, 41013 Sevilla',
        '/+18 Público joven',
        'Polo o camisa y náuticos',
        1,
        1,
        1,
        0,
        ' La Terraza Alfonso es una de las más famosas de Sevilla en su temporada de verano. Situada en el Parque de Maria Luisa tiene la ventaja de poder disfrutar varios ambientes: discoteca, chill out o reservados. En invierno se abren los fines de semana con cervecita y tapitas según necesidades de los diferentes grupos.
',
        '../../assets/img/discoteca1.webp',
        '../../assets/img/discoteca2.webp',
        '../../assets/img/discoteca3.webp',
        '100'
    ),
    (
        '8',
        'Bar Líbano Terraza',
        '4',
        'P.º de las Delicias, 151, 41013 Sevilla',
        '/+18 Dirigida a ERASMUS',
        'Uso de camisa obligatorio',
        1,
        1,
        1,
        1,
        'Terraza Líbano, también conocida como Kiosco Líbano, está ubicada en el precioso Jardín de las Delicias en Sevilla. En el entorno de un paraje maravilloso entre el río y el parque Mª Luisa. La mejor terraza de copas para disfrutar de las noches de verano más divertidas en Sevilla y del mejor ambiente de fiesta cualquier día de la semana.',
        '../../assets/img/discoteca4.webp',
        '../../assets/img/discoteca5.webp',
        '../../assets/img/discoteca6.webp',
        '100'
    ),
    (
        '9',
        'Bilindo',
        '4',
        'P.º de las Delicias, s/n, 41001 Sevilla',
        'Público de mediana edad',
        'Camisa y náuticos',
        1,
        1,
        1,
        1,
        'Descubre la vibrante discoteca Bilindo Sevilla, en el Parque María Luisa de Sevilla, el lugar ideal para celebrar despedidas de solteros y solteras en un entorno único y emocionante! Situada en uno de los parques más emblemáticos de la ciudad, Bilindo ofrece una experiencia incomparable que combina la belleza natural del entorno con la diversión y la emoción de una noche inolvidable. Por otro lado, con su decoración moderna y elegante, Bilindo crea un ambiente sofisticado y festivo que te hará sentirte como en casa desde el momento en que entras por la puerta.',
        '../../assets/img/discoteca7.webp',
        '../../assets/img/discoteca8.webp',
        '../../assets/img/discoteca9.webp',
        '100'
    ),
    (
        '10',
        'Casino',
        '4',
        'Av. de María Luisa, 4, Casco Antiguo, 41013 Sevilla',
        '/+18 Dirigida a ERASMUS',
        'Camisa o polo',
        1,
        1,
        1,
        1,
        'Con un sinfín de ideas y ganas de pasarlo bien, hemos conseguido estar siempre a la vanguardia del mundo de la diversión nocturna en la capital hispalense. Casino se ha convertido en una cita obligada para el ocio de la noche sevillana. Nuestros clientes son tratados como merecen en cada visita a nuestra discoteca y hacen a Casino tener un encanto único.',
        '../../assets/img/discoteca1.webp',
        '../../assets/img/discoteca2.webp',
        '../../assets/img/discoteca3.webp',
        '100'
    ),
    (
        '11',
        'Bakú Viapol',
        '5',
        'C Viapol Center, C. Pirotecnia, 1, 41013 Sevilla',
        '/+18 Público joven',
        'Camisa o polo',
        1,
        1,
        1,
        1,
        'Con su moderno diseño, Baku ofrece una experiencia de vida nocturna que no tiene comparación. Los ritmos contagiosos y las mezclas magistrales de los DJs residentes mantienen la pista de baile siempre animada. ¡Los jueves y los viernes son de Baku! Ya sea que busques compartir risas y momentos con amigos en los espacios lounge o quieras danzar al ritmo de la música más candente en la pista, nuestra discoteca garantiza una experiencia que te hará olvidar el estrés de la rutina diaria.',
        '../../assets/img/discoteca4.webp',
        '../../assets/img/discoteca5.webp',
        '../../assets/img/discoteca6.webp',
        '100'
    ),
    (
        '12',
        'Vizzio Club Sevilla',
        '5',
        'C. Pirotecnia, 1, 41013 Sevilla',
        '/+18 Público joven',
        'Camisa o polo',
        1,
        1,
        1,
        1,
        'Se emerge como un emocionante protagonista en el vibrante escenario del ocio nocturno en Sevilla, desafiando las convenciones y brindando una alternativa fresca y emocionante. Este nuevo espacio está diseñado específicamente para satisfacer los gustos de todas las generaciones, aquellos que buscan más que una simple noche de diversión. Aquí, la exclusividad es la norma, y se ha convertido en nuestro sello distintivo.',
        '../../assets/img/discoteca7.webp',
        '../../assets/img/discoteca8.webp',
        '../../assets/img/discoteca9.webp',
        '100'
    ),
    (
        '13',
        'Voulezbar',
        '5',
        'Edificio Viapol, C. Balbino Marrón, s/n, 41018 Sevilla',
        'Público de mediana edad',
        'No existen normas de etiqueta.',
        1,
        1,
        0,
        1,
        'Es una discoteca y club nocturno muy popular situado en la zona de Viapol de Sevilla. Es un lugar conocido por su música variada y su buen ambiente para cualquier edad. Todo un clásico en las noches de fiesta sevillanas y es uno de los mejores sitios de la capital hispalense para pasar un buen rato entre amigos. La sala dispone de zona de baile, terraza y zona de reservados para disfrutar de copas o cócteles.',
        '../../assets/img/discoteca1.webp',
        '../../assets/img/discoteca2.webp',
        '../../assets/img/discoteca3.webp',
        '100'
    ),
    (
        '14',
        'LeChic',
        '5',
        'Balbino Marrón, Seville, Spain, 41018',
        '/+18 Público variado',
        'Polo o camisa',
        1,
        1,
        0,
        1,
        'Discoteca dedicada al ocio sevillano situada en pleno Viapol. Un entorno mágico en la noche sevillana, ven a descubrir el mejor ambiente universitario y disfruta de nuestras maravillosas instalaciones para vivir una noche inolvidable.',
        '../../assets/img/discoteca4.webp',
        '../../assets/img/discoteca5.webp',
        '../../assets/img/discoteca6.webp',
        '100'
    ),
    (
        '15',
        'Abril',
        '5',
        'C. Luis Montoto, 118, 41018 Sevilla',
        '/+18 Público joven',
        'Se recoimenda ir en polo o camisa',
        1,
        1,
        1,
        1,
        '¡Bienvenidos a la discoteca Abril, el lugar perfecto para celebrar despedidas de soltero y soltera en Sevilla! Situada en el corazón de la ciudad, Abril ofrece una experiencia única y emocionante para aquellos que buscan una noche inolvidable. Con su ambiente vibrante, música contagiosa y una amplia variedad de bebidas, esta discoteca es el destino ideal para celebrar este momento tan especial. En la discoteca Abril Sevilla, disfrutaras y terminarás tu despedida a lo grande.',
        '../../assets/img/discoteca7.webp',
        '../../assets/img/discoteca8.webp',
        '../../assets/img/discoteca9.webp',
        '100'
    ),
    (
        '16',
        'Occo',
        '6',
        'Av. de Montes Sierra, 24, 41007 Sevilla',
        '/+18 Público joven',
        'Se recoimenda ir en polo o camisa',
        1,
        1,
        1,
        1,
        'Soñábamos con algo que se alejara del simple concepto de discoteca, que fuera más, mucho más. Un recinto con una calidad musical exquisita, proporcionando noches inolvidables a miles de personas que atraviesan sus puertas para disfrutar del sonido de los mejores hits nacionales e internacionales. Mientras que los latidos hipnotizan a una multitud llena de energía, la mezcla de nuestros innovadores espectáculos, un fascinante sistema de iluminación único y los mejores efectos visuales de la pantalla gigante LED, le harán vivir en primera persona ese sueño que un día tuvimos. Las mesas VIP rodean la pista de baile, lo que ofrece una grata experiencia para los clientes que deseen estar en el centro de la acción desde una ubicación privilegiada.',
        '../../assets/img/discoteca1.webp',
        '../../assets/img/discoteca2.webp',
        '../../assets/img/discoteca3.webp',
        '100'
    ),
    (
        '17',
        'Ginger',
        '6',
        'Av. de la Innovación, 3, 41020 Sevilla',
        'Público de mediana edad',
        'Se recoimenda ir en polo o camisa',
        1,
        1,
        1,
        1,
        'Magnifica sala para disfrutar de un rato agradable con tus amigos, pareja, familia...etc Contamos con una terraza para disfrutar de los mejores momentos. Especialistas en Gin tonics, cócteles, infusiones y café.',
        '../../assets/img/discoteca4.webp',
        '../../assets/img/discoteca5.webp',
        '../../assets/img/discoteca6.webp',
        '100'
    ),
    (
        '18',
        'Euphoria',
        '6',
        'C. Aviación, 25, Norte, 41007 Sevilla',
        '/+18 Público de Hispanoamérica',
        'No existen normas de etiqueta.',
        1,
        1,
        1,
        1,
        'La Sala Euphoria es una discoteca ubicada en la calle C. Aviación, 25 de Seville. Con una amplia variedad de servicios de calidad, esta discoteca se ha convertido en uno de los destinos preferidos de los amantes de la música y el baile. Desde su apertura, la Sala Euphoria ha destacado por su ambiente vibrante y sus espectaculares fiestas temáticas, que hacen que los clientes se sumerjan en una experiencia única y emocionante.',
        '../../assets/img/discoteca7.webp',
        '../../assets/img/discoteca8.webp',
        '../../assets/img/discoteca9.webp',
        '100'
    ),
    (
        '19',
        'IpaIpa',
        '6',
        'C. Paleontologia, 14, Norte, 41015 Sevilla',
        '/+18 Público de Hispanoamérica',
        'No existen normas de etiqueta.',
        1,
        1,
        0,
        1,
        'Con servicios de alta calidad, ofrece una experiencia única y vibrante para todos los amantes de la música y el baile. Con el ambiente más moderno y las mejores instalaciones, IPAIPA SEVILLA garantiza una noche llena de diversión y entretenimiento sin igual en la ciudad de Sevilla. No te pierdas la oportunidad de disfrutar de una experiencia inolvidable en esta increíble discoteca.',
        '../../assets/img/discoteca1.webp',
        '../../assets/img/discoteca2.webp',
        '../../assets/img/discoteca3.webp',
        '100'
    ),
    (
        '20',
        'Newman',
        '7',
        'Avenida de Finlandia, 1, 41012 Sevilla',
        '/+18 Público variado',
        'No existen normas de etiqueta.',
        0,
        1,
        1,
        0,
        'En Sala NEWMAN proponemos un clima agradable, buen ambiente, conciertos en vivo, monólogos, y actividades sorpresa, fiestas temáticas, desde la hora del café hasta la madrugada. Todo tipo de copas con las marcas de moda, y cocktails de la casa. Nuestro objetivo, que estés a gusto',
        '../../assets/img/discoteca4.webp',
        '../../assets/img/discoteca5.webp',
        '../../assets/img/discoteca6.webp',
        '100'
    );

INSERT INTO
    horarios_discoteca (id_horario, discoteca_id, dia_id, hora_apertura, hora_cierre)
VALUES
    ('1', '1', '1', TIME '00:00:00', TIME '06:00:00'),
    ('2', '1', '2', TIME '00:00:00', TIME '06:00:00'),
    ('3', '1', '3', TIME '00:00:00', TIME '06:00:00'),
    ('4', '1', '4', TIME '00:00:00', TIME '06:00:00'),
    ('5', '1', '5', TIME '00:00:00', TIME '06:00:00'),
    ('6', '1', '6', TIME '00:00:00', TIME '06:00:00'),
    ('7', '2', '1', TIME '00:00:00', TIME '06:00:00'),
    ('8', '2', '2', TIME '00:00:00', TIME '06:00:00'),
    ('9', '2', '5', TIME '00:00:00', TIME '06:00:00'),
    ('10', '3', '6', TIME '00:00:00', TIME '06:00:00'),
    ('11', '4', '1', TIME '23:00:00', TIME '07:00:00'),
    ('12', '4', '2', TIME '23:00:00', TIME '07:00:00'),
    ('13', '4', '3', TIME '23:00:00', TIME '07:00:00'),
    ('14', '4', '5', TIME '23:00:00', TIME '07:00:00'),
    ('15', '4', '6', TIME '23:00:00', TIME '07:00:00'),
    ('16', '5', '1', TIME '23:00:00', TIME '05:00:00'),
    ('17', '5', '6', TIME '23:00:00', TIME '05:00:00'),
    ('18', '5', '7', TIME '23:00:00', TIME '05:00:00'),
    ('19', '6', '1', TIME '23:00:00', TIME '06:00:00'),
    ('20', '6', '2', TIME '23:00:00', TIME '06:00:00'),
    ('21', '7', '6', TIME '00:00:00', TIME '07:00:00'),
    ('22', '7', '2', TIME '00:00:00', TIME '07:00:00'),
    ('23', '8', '1', TIME '23:00:00', TIME '07:00:00'),
    ('24', '8', '3', TIME '23:00:00', TIME '07:00:00'),
    ('25', '8', '6', TIME '23:00:00', TIME '07:00:00'),
    ('26', '9', '1', TIME '22:00:00', TIME '07:00:00'),
    ('27', '9', '6', TIME '22:00:00', TIME '07:00:00'),
    ('28', '10', '1', TIME '01:00:00', TIME '07:00:00'),
    ('29', '10', '2', TIME '01:00:00', TIME '07:00:00'),
    ('30', '10', '3', TIME '01:00:00', TIME '07:00:00'),
    ('31', '10', '4', TIME '01:00:00', TIME '07:00:00'),
    ('32', '11', '4', TIME '01:00:00', TIME '07:00:00'),
    ('33', '12', '3', TIME '22:00:00', TIME '05:00:00'),
    ('34', '12', '4', TIME '22:00:00', TIME '05:00:00'),
    ('35', '12', '5', TIME '22:00:00', TIME '05:00:00'),
    ('36', '12', '6', TIME '22:00:00', TIME '05:00:00'),
    ('37', '13', '2', TIME '22:00:00', TIME '08:00:00'),
    ('38', '13', '3', TIME '22:00:00', TIME '08:00:00'),
    ('39', '13', '4', TIME '22:00:00', TIME '08:00:00'),
    ('40', '13', '5', TIME '22:00:00', TIME '08:00:00'),
    ('41', '13', '6', TIME '22:00:00', TIME '08:00:00'),
    ('42', '14', '7', TIME '22:30:00', TIME '08:00:00'),
    ('43', '14', '1', TIME '22:30:00', TIME '08:00:00'),
    ('44', '14', '6', TIME '22:30:00', TIME '08:00:00'),
    ('45', '14', '4', TIME '22:30:00', TIME '08:00:00'),
    ('46', '15', '1', TIME '00:00:00', TIME '06:00:00'),
    ('47', '15', '6', TIME '00:00:00', TIME '06:00:00'),
    ('48', '15', '4', TIME '00:00:00', TIME '06:00:00'),
    ('49', '15', '7', TIME '00:00:00', TIME '06:00:00'),
    ('50', '16', '1', TIME '22:00:00', TIME '09:00:00'),
    ('51', '16', '2', TIME '22:00:00', TIME '09:00:00'),
    ('52', '16', '3', TIME '22:00:00', TIME '09:00:00'),
    ('53', '16', '4', TIME '22:00:00', TIME '09:00:00'),
    ('54', '16', '5', TIME '22:00:00', TIME '09:00:00'),
    ('55', '16', '6', TIME '22:00:00', TIME '09:00:00'),
    ('56', '16', '7', TIME '22:00:00', TIME '09:00:00'),
    ('57', '17', '1', TIME '01:00:00', TIME '08:00:00'),
    ('58', '17', '3', TIME '01:00:00', TIME '08:00:00'),
    ('59', '17', '4', TIME '01:00:00', TIME '08:00:00'),
    ('60', '17', '6', TIME '01:00:00', TIME '08:00:00'),
    ('61', '18', '2', TIME '00:00:00', TIME '09:00:00'),
    ('62', '18', '3', TIME '00:00:00', TIME '09:00:00'),
    ('63', '18', '4', TIME '00:00:00', TIME '09:00:00'),
    ('64', '18', '5', TIME '00:00:00', TIME '09:00:00'),
    ('65', '18', '6', TIME '00:00:00', TIME '09:00:00'),
    ('66', '19', '1', TIME '20:00:00', TIME '08:00:00'),
    ('67', '19', '2', TIME '20:00:00', TIME '08:00:00'),
    ('68', '19', '4', TIME '20:00:00', TIME '08:00:00'),
    ('69', '19', '5', TIME '20:00:00', TIME '08:00:00'),
    ('70', '19', '6', TIME '20:00:00', TIME '08:00:00'),
    ('71', '19', '3', TIME '20:00:00', TIME '08:00:00'),
    ('72', '20', '6', TIME '00:00:00', TIME '11:00:00');

INSERT INTO
    entrada (id_entrada, id_discoteca, dia_semana_id, precio, tipo_entrada, stock_actual)
VALUES
    ('1', '1', '1', '20', 'individual', '100'),
    ('2', '1', '2', '20', 'individual', '100'),
    ('3', '1', '3', '20', 'individual', '100'),
    ('4', '1', '4', '20', 'individual', '100'),
    ('5', '1', '5', '20', 'individual', '100'),
    ('6', '1', '6', '20', 'individual', '100'),
    ('7', '1', '1', '160', 'reservado', '100'),
    ('8', '1', '2', '160', 'reservado', '100'),
    ('9', '1', '3', '160', 'reservado', '100'),
    ('10', '1', '4', '160', 'reservado', '100'),
    ('11', '1', '5', '160', 'reservado', '100'),
    ('12', '1', '6', '160', 'reservado', '100'),
    ('13', '2', '1', '15', 'individual', '100'),
    ('14', '2', '2', '15', 'individual', '100'),
    ('15', '2', '5', '15', 'individual', '100'),
    ('16', '2', '1', '85', 'reservado', '100'),
    ('17', '2', '2', '85', 'reservado', '100'),
    ('18', '2', '5', '85', 'reservado', '100'),
    ('19', '3', '6', '20', 'individual', '100'),
    ('20', '3', '6', '120', 'reservado', '100'),
    ('21', '4', '1', '10', 'individual', '100'),
    ('22', '4', '2', '10', 'individual', '100'),
    ('23', '4', '3', '10', 'individual', '100'),
    ('24', '4', '5', '10', 'individual', '100'),
    ('25', '4', '6', '10', 'individual', '100'),
    ('26', '4', '1', '110', 'reservado', '100'),
    ('27', '4', '2', '110', 'reservado', '100'),
    ('28', '4', '3', '110', 'reservado', '100'),
    ('29', '4', '5', '110', 'reservado', '100'),
    ('30', '4', '6', '110', 'reservado', '100'),
    ('31', '5', '1', '15', 'individual', '100'),
    ('32', '5', '6', '15', 'individual', '100'),
    ('33', '5', '7', '15', 'individual', '100'),
    ('34', '5', '1', '140', 'reservado', '100'),
    ('35', '5', '6', '140', 'reservado', '100'),
    ('36', '5', '7', '140', 'reservado', '100'),
    ('37', '6', '1', '10', 'individual', '100'),
    ('38', '6', '2', '10', 'individual', '100'),
    ('39', '6', '1', '120', 'reservado', '100'),
    ('40', '6', '2', '120', 'reservado', '100'),
    ('41', '7', '6', '12', 'individual', '100'),
    ('42', '7', '2', '12', 'individual', '100'),
    ('43', '7', '6', '100', 'reservado', '100'),
    ('44', '7', '2', '100', 'reservado', '100'),
    ('45', '8', '1', '12', 'individual', '100'),
    ('46', '8', '3', '12', 'individual', '100'),
    ('47', '8', '6', '12', 'individual', '100'),
    ('48', '8', '1', '130', 'reservado', '100'),
    ('49', '8', '3', '130', 'reservado', '100'),
    ('50', '8', '6', '130', 'reservado', '100'),
    ('51', '9', '1', '20', 'individual', '100'),
    ('52', '9', '6', '20', 'individual', '100'),
    ('53', '9', '1', '180', 'reservado', '100'),
    ('54', '9', '6', '180', 'reservado', '100'),
    ('55', '10', '1', '12', 'individual', '100'),
    ('56', '10', '2', '12', 'individual', '100'),
    ('57', '10', '3', '12', 'individual', '100'),
    ('58', '10', '4', '12', 'individual', '100'),
    ('59', '10', '1', '140', 'reservado', '100'),
    ('60', '10', '2', '140', 'reservado', '100'),
    ('61', '10', '3', '140', 'reservado', '100'),
    ('62', '10', '4', '140', 'reservado', '100'),
    ('63', '11', '4', '12', 'individual', '100'),
    ('64', '11', '4', '150', 'reservado', '100'),
    ('65', '12', '3', '12', 'individual', '100'),
    ('66', '12', '4', '12', 'individual', '100'),
    ('67', '12', '5', '12', 'individual', '100'),
    ('68', '12', '6', '12', 'individual', '100'),
    ('69', '12', '3', '140', 'reservado', '100'),
    ('70', '12', '4', '140', 'reservado', '100'),
    ('71', '12', '5', '140', 'reservado', '100'),
    ('72', '12', '6', '140', 'reservado', '100'),
    ('73', '13', '2', '7', 'individual', '100'),
    ('74', '13', '3', '7', 'individual', '100'),
    ('75', '13', '4', '7', 'individual', '100'),
    ('76', '13', '5', '7', 'individual', '100'),
    ('77', '13', '6', '7', 'individual', '100'),
    ('78', '13', '2', '100', 'reservado', '100'),
    ('79', '13', '3', '100', 'reservado', '100'),
    ('80', '13', '4', '100', 'reservado', '100'),
    ('81', '13', '5', '100', 'reservado', '100'),
    ('82', '13', '6', '100', 'reservado', '100'),
    ('83', '14', '7', '10', 'individual', '100'),
    ('84', '14', '1', '10', 'individual', '100'),
    ('85', '14', '6', '10', 'individual', '100'),
    ('86', '14', '4', '10', 'individual', '100'),
    ('87', '14', '7', '130', 'reservado', '100'),
    ('88', '14', '1', '130', 'reservado', '100'),
    ('89', '14', '6', '130', 'reservado', '100'),
    ('90', '14', '4', '130', 'reservado', '100'),
    ('91', '15', '1', '10', 'individual', '100'),
    ('92', '15', '6', '10', 'individual', '100'),
    ('93', '15', '4', '10', 'individual', '100'),
    ('94', '15', '7', '10', 'individual', '100'),
    ('95', '15', '1', '100', 'reservado', '100'),
    ('96', '15', '6', '100', 'reservado', '100'),
    ('97', '15', '4', '100', 'reservado', '100'),
    ('98', '15', '7', '100', 'reservado', '100'),
    ('99', '16', '1', '20', 'individual', '100'),
    ('100', '16', '2', '20', 'individual', '100'),
    ('101', '16', '3', '20', 'individual', '100'),
    ('102', '16', '4', '20', 'individual', '100'),
    ('103', '16', '5', '20', 'individual', '100'),
    ('104', '16', '6', '20', 'individual', '100'),
    ('105', '16', '7', '20', 'individual', '100'),
    ('106', '16', '1', '130', 'reservado', '100'),
    ('107', '16', '2', '130', 'reservado', '100'),
    ('108', '16', '3', '130', 'reservado', '100'),
    ('109', '16', '4', '130', 'reservado', '100'),
    ('110', '16', '5', '130', 'reservado', '100'),
    ('111', '16', '6', '130', 'reservado', '100'),
    ('112', '16', '7', '130', 'reservado', '100'),
    ('113', '17', '1', '15', 'individual', '100'),
    ('114', '17', '3', '15', 'individual', '100'),
    ('115', '17', '4', '15', 'individual', '100'),
    ('116', '17', '6', '15', 'individual', '100'),
    ('117', '17', '1', '100', 'reservado', '100'),
    ('118', '17', '3', '100', 'reservado', '100'),
    ('119', '17', '4', '100', 'reservado', '100'),
    ('120', '17', '6', '100', 'reservado', '100'),
    ('121', '18', '2', '15', 'individual', '100'),
    ('122', '18', '3', '15', 'individual', '100'),
    ('123', '18', '4', '15', 'individual', '100'),
    ('124', '18', '5', '15', 'individual', '100'),
    ('125', '18', '6', '15', 'individual', '100'),
    ('126', '18', '2', '90', 'reservado', '100'),
    ('127', '18', '3', '90', 'reservado', '100'),
    ('128', '18', '4', '90', 'reservado', '100'),
    ('129', '18', '5', '90', 'reservado', '100'),
    ('130', '18', '6', '90', 'reservado', '100'),
    ('131', '19', '1', '20', 'individual', '100'),
    ('132', '19', '2', '20', 'individual', '100'),
    ('133', '19', '4', '20', 'individual', '100'),
    ('134', '19', '5', '20', 'individual', '100'),
    ('135', '19', '6', '20', 'individual', '100'),
    ('136', '19', '3', '20', 'individual', '100'),
    ('137', '19', '1', '100', 'reservado', '100'),
    ('138', '19', '2', '100', 'reservado', '100'),
    ('139', '19', '4', '100', 'reservado', '100'),
    ('140', '19', '5', '100', 'reservado', '100'),
    ('141', '19', '6', '100', 'reservado', '100'),
    ('142', '19', '3', '100', 'reservado', '100'),
    ('143', '20', '6', '10', 'individual', '100'),
    ('144', '20', '6', '90', 'reservado', '100');


    -- INSERTAR EN USUARIO
--INSERT INTO usuario (id_usuario, dni, nombre_usuario, nombre, apellidos, correo_electronico, contraseña) 
--VALUES (1, '41750503Y', 'Leman29', 'Juan', 'Blanco Moyano', 'juanblancomoyano@gmail.com', 'admin');

-- INSERTAR EN PEDIDO
--INSERT INTO pedido (id_pedido, total, id_usuario) 
--VALUES (1, 24, 1);

-- INSERTAR EN DETALLES_PEDIDO
--INSERT INTO detalles_pedido (id_detalle, id_pedido, id_entrada, cantidad) 
--VALUES (1, 1, 45, 2);