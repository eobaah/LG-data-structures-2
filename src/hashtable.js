'use strict'

export default class Hashtable{
  constructor(string) {
      let arrlength = 13
      this.table = [];
      this.values = [];
      for (let i = 0; i < arrlength; ++i) {
        this.table.push([])
        this.values.push([])
      }
    }


    betterHash(string) {
      const primeNum = 37;
      let total = 0;
      for (let i = 0; i < string.length; ++i) {
        total += primeNum * total + string.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0 ) {
          total += this.table.length-1
        }
        return parseInt(total);
    }

      put(key, data) {
      let position = this.betterHash(key);
      let index = 0;

      if (this.table[position][index] === undefined) {
        this.table[position][index] = key;
        this.values[position][index++] = data;
      } else {
        while (this.table[position][index] !== undefined) {
          index++;
        }

        this.table[position][index] = key;
        this.values[position][index] = data;
      }
    }

    get(key) {
      let hash = -1;
      hash = this.betterHash(key);
      if (hash > -1) {
        for( let i = hash; this.table[hash] !== undefined; i ++) {
          if (this.table[hash] == key) {
            return this.values[hash];
          }
        }
      }
      return undefined;
    }

      buildChains() {
      for (var i = 0; i < this.table.length; ++i) {
      this.table[i] = new Array([]);
      }
    }

      showDistro() {
      var n = 0;
      for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i] !== undefined) {
        return i + ": " + this.table[i];
        }
      }
    }

  } 
