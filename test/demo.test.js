test

test('Esta prueba no debe de fallar', () => {
    
    // Pasos para crear pruebas.
    // 1. Inicialización.
    const message1 = 'Hola Mundo';
    // 2. Estimulo. 
    const message2 = message1.trim();
    // 3. Observar el comportamiento... esperado.
    expect( message1 ).toBe( message2 );
});
