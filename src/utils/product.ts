export function handlePrice(number: number) {
  return number.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  });
}
