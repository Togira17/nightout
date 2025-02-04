DELIMITER //

CREATE PROCEDURE reponer_stock_semanal()
BEGIN
    -- Iniciamos una transacción para asegurar la atomicidad
    START TRANSACTION;

    -- Actualizamos el stock de todas las entradas usando una subconsulta
    UPDATE entrada e
    JOIN discoteca d ON e.id_discoteca = d.id_discoteca
    SET e.stock_actual = d.stock_inicial
    WHERE d.stock_inicial IS NOT NULL;

    -- Confirmamos la transacción
    COMMIT;
END //

DELIMITER ;