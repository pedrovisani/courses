export const nome = 'Luiz';
export const sobrenome = 'Miranda';
const idade = 30;

export function soma(x, y) {
    return x + y;
};

// or export { nome };
// export default ... --> import qualquer from ...
// só é possível exportar 1 default
// export { nome as default }