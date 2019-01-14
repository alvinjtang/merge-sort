// describe('Merge Sort', function(){
//   it('handles an empty array', function(){
//     expect( mergeSort([]) ).toEqual( [] );
//   });
// });

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,2])).toEqual([[1],[2]]);
  });
  it('is able to split an array with odd number of elements', function() {
    expect(split(['apple','pear','grapes','orange','pineapples'])).toEqual([['apple','pear'],['grapes','orange','pineapples']]);
  });
});
describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge(['aardvark'],['liger'])).toEqual(['aardvark','liger'])
  });
});
describe('Merge Sort function', function(){
  it('merge sorts elements in the array', function(){
    expect(mergeSort([5,2,1,4,3])).toEqual([1,2,3,4,5])
  });
});
