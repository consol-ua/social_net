type MapArrayCondition = (
  items: Array<any>,
  itemProp: string,
  checkProp: any,
  changeProp: string,
  applyProp: any) => Array<any>

export const mapArrayCondition: MapArrayCondition = (items, itemProp, checkProp, changeProp, applyProp) => (
  items.map((el) => {
    if (el[itemProp] === checkProp) {
      el[changeProp] = applyProp
    }
    return el
  })
)