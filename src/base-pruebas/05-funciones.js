
export const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

export const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
export const saludar4 = () => `Hola Mundo`;

export const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});

export const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');



