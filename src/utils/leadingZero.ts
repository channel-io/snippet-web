function leadingZero(n: number): string {
  return (n < 10) ? `0${n}` : `${n}`
}

export default leadingZero
