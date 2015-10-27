describe ("Triangolo", function() {
  describe(".isTriangle", function() {
    it("should properly identify valid triangles", function() {
      var value1 = TryAngle.isTriangle(1,1,1);
      var value1 = TryAngle.isTriangle(1,2,3);
      var value1 = TryAngle.isTriangle(2,3,4);
      expect(value1).toBe(true);
      expect(value2).toBe(true);
      expect(value3).toBe(true);
    });
      
    it("should properly identify non-valid triangles", function() {
      var value = TryAngle.isTriangle(1,1,100);
      expect(value).toBe(false);
    });
  });
    
  describe(".getTypeBySideLength", function() {
    it ("should properly identify scalene triangles", function() {
      var value = TryAngle.getTypeBySidesLength(2,3,4);
      expect(value).toBe(TryAngle.SIDE_SCALENE);
    });
      
    it ("should properly identify isosceles triangles", function() {
      var value = TryAngle.getTypeBySidesLength(2,4,2);
      expect(value).toBe(TryAngle.SIDE_ISOSCELES);
    });
      
    it ("should properly identify equilateral triangles", function() {
      var value = TryAngle.getTypeBySidesLength(2,2,2);
      expect(value).toBe(TryAngle.SIDE_EQUILATERAL);
    });
  });
    
  describe(".getTypeByAngles", function() {
    it ("should properly identify acute triangles", function() {
      var value = TryAngle.getTypeByAngles(60,60,60);
      expect(value).toBe(TryAngle.ANGLE_ACUTE);
    });
      
    it ("should properly identify obtuse triangles", function() {
      var value = TryAngle.getTypeByAngles(100,40,40);
      expect(value).toBe(TryAngle.ANGLE_OBTUSE);
    });
      
    it ("should properly identify right triangles", function() {
      var value = TryAngle.getTypeByAngles(90,60,30);
      expect(value).toBe(TryAngle.ANGLE_RIGHT);
    });
  });
});
