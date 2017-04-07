import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hashtable'

chai.use(chaiChange)

describe('hastable', () => {
  'use strict'

  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  context('put()', () => {
    it.only('Adds key-value pair to the hastable.', () => {
      const myHashTable = new Hashtable()
      myHashTable.put("lname","clayton")
      myHashTable.put("lname","Fred")


      expect((myHashTable.table.data)).to.equal("foo")
    })
  })

})
