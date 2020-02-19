describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('returns an array with a single element', function(){
        expect( bubbleSort([512]) ).toEqual( [512] )
    })

    it('sorts an array with multiple items', function(){
        expect( bubbleSort([0, 5, 3, 1]) ).toEqual( [0, 1, 3, 5] )
        expect( bubbleSort([9, 5, 3, 6, 4, 1]) ).toEqual( [1, 3, 4, 5, 6, 9] )
    })
});

