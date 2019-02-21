var Thing = {
   doStuff: function() {
      this.myFunction();
   }
}

var OtherThing = {
   myFunction: function() {
      this.doStuff();
   }
}

Thing.myFunction = OtherThing.myFunction;

Thing.doStuff();