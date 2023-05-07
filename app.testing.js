it('should do math correctly', function () {
    // ...
    const values = {
        amount: 1000,
        years: 89,
        rate: 9.1
      };
      expect(calculateMonthlyPayment(values)).toEqual('7.59');
  });
  
  
  it("should have 2 decimals", function() {
    // ..
    const values = {
        amount: 1000,
        years: 5,
        rate: 9.9999
      };
      expect(calculateMonthlyPayment(values)).toEqual('21.25');
  });
  
  it("should handle high interest rates", function() {
    const values = {
      amount: 22000,
      years: 40,
      rate: 110
    };
    expect(calculateMonthlyPayment(values)).toEqual('2016.67');
  });


  it("should handle decimal in the years and loan amount", function() {
    const values = {
        amount: 1000.25222,
        years: 5.5,
        rate: 7
    }
    expect(calculateMonthlyPayment(values)).toEqual('18.30');
  })

  /// etc
  