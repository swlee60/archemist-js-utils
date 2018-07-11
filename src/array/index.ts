export function moveToAt(array: any[], index: number, predicate: (item:any) => boolean) {
  const movingItems = array.filter(predicate)
  if (movingItems.length === 0) return array

  const filteredArray = array.filter(item => !predicate(item))
  return [
    ...filteredArray.slice(0, index),
    ...movingItems,
    ...filteredArray.slice(index + movingItems.length),
  ]
}
