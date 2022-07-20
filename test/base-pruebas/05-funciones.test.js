import { getUser, getUsuarioActivo, saludar2, saludar3, saludar4 } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser(testUser);
        expect(testUser).toStrictEqual(user);

    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        
        const name = 'Rodrigo';
        
        const activeUser = getUsuarioActivo(name);
        expect(activeUser).toStrictEqual({
            uid: 'ABC567',
            username: name
        });

    });

    test('saludar2 debe retornar un string', () => {

        const nombre = 'pedro';

        const stringName = saludar2(nombre);
        expect(stringName).toEqual(`Hola, ${nombre}`);

    });

    test('saludar3 debe retornar un string', () => {

        const nombre = 'Armando';

        const stringName = saludar3(nombre);
        expect(stringName).toEqual(`Hola, ${nombre}`);

    });

    test('saludar4 debe retornar un string', () => {
        
        const stringName = saludar4();
        expect(stringName).toEqual('Hola Mundo');

    });

});