import { moveToAt } from './index'
import { expect } from 'chai'
import 'mocha';

describe('moveToAt', () => {
  it('should return expected array', () => {
    const filteredArray = [{
      name: 'PARK',
      gender: 'FEMALE',
    }, {
      name: 'KIM',
      gender: 'MALE',
    }, {
      name: 'LEE',
      gender: 'MALE',
    }]
    const originalArray = [{
      name: 'KIM',
      gender: 'MALE',
    }, {
      name: 'LEE',
      gender: 'MALE',
    }, {
      name: 'PARK',
      gender: 'FEMALE',
    }]
    const ladyFirst = moveToAt(originalArray, 0, human => human.gender === 'FEMALE')
    expect(JSON.stringify(ladyFirst)).to.equal(JSON.stringify(filteredArray))
  })
})
