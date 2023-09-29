"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        // split string into array of characters
        const characters = this.data.split('');
        // swap characters
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        // join array of characters back into a string
        this.data = characters.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
