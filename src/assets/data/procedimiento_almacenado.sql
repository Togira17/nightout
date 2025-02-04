DELIMITER //

CREATE PROCEDURE reponer_stock_semanal()
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE v_discoteca_id INT;
    DECLARE v_stock_inicial INT;
    
    -- Cursor para recorrer las discotecas y obtener el stock inicial
    DECLARE discoteca_cursor CURSOR FOR
        SELECT id_discoteca, stock_inicial FROM discotecas;
    
    -- Handler para salir del bucle del cursor
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;
    
    -- Abrimos el cursor
    OPEN discoteca_cursor;
    
    loop_discotecas: LOOP
        -- Obtener el id y stock inicial de cada discoteca
        FETCH discoteca_cursor INTO v_discoteca_id, v_stock_inicial;
        IF done THEN
            LEAVE loop_discotecas;
        END IF;

        -- Actualizamos el stock de todas las entradas de la discoteca actual
        UPDATE entradas
        SET stock_actual = v_stock_inicial
        WHERE discoteca_id = v_discoteca_id;
    END LOOP;
    
    -- Cerramos el cursor
    CLOSE discoteca_cursor;
END;
//

DELIMITER ;