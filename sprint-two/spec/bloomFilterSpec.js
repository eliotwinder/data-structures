describe('bloomFilter', function() {
  var bloomFilter;

  beforeEach(function() {
    bloomFilter = BloomFilter(18);
  });

  it('should add a number to the filter', function(){
    bloomFilter.add('corey');
    var allNumbers = function(set) {
      var result = true;
      for (var i = 0; i < set.length; i++) {
        if(set[i]) {
          result = false;
        }
      }
      console.log(set);
      return result;
    };
    expect(allNumbers(bloomFilter.add('wedagfadsgsdagadsgsdags'))).to.equal(true);
    // linkedList.addToTail(5);
    // linkedList.removeHead();
    // expect(linkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList
});
