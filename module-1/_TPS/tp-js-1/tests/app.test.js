const {
  demoFunction1,
  demoFunction2,
  dummyFunction,
  sayHelloWorld,
  isNumberBig,
  sum,
  greetingUser,
  makeOpposite,
  createACat,
  getTheWinner
} = require("./../src/app.soluce.js");


describe("demoFunction1 - Should return a motivation message", () => {
  test("demoFunction1 should be a function", () => {
    expect(typeof demoFunction1).toBe("function");
  });

  test("Should return the appropriate message", () => {
    const test = demoFunction1();
    expect(test).toBe("Wax on, off");
  });
});

describe("demoFunction2 - Should return a motivation message", () => {
  test("demoFunction2 should be a function", () => {
    expect(typeof demoFunction2).toBe("function");
  });

  test("Should return a string with the 3 parameters concatenated", () => {
    const test = demoFunction2("foo", "bar", "baz");
    expect(test).toBe("foo-bar-baz");
  });

  test("Should return a string with the 3 parameters concatenated", () => {
    const test = demoFunction2(1, 2, 3);
    expect(test).toBe("1-2-3");
  });
});

/*
 ### Iteration 1 ###
*/

describe("dummyFunction - Should return the sum of two numbers", () => {
  test("dummyFunction should be a function", () => {
    expect(typeof dummyFunction).toBe("function");
  });

  test("should return undefined", () => {
    expect(dummyFunction()).toBeUndefined();
  });
});

/*
 ### Iteration 2 ###
*/

describe("sayHelloWorld - Should return a simple hello world message", () => {
  test("sayHelloWorld should be a function", () => {
    expect(typeof sayHelloWorld).toBe("function");
  });

  test("Should return the appropriate message", () => {
    const test = sayHelloWorld();
    expect(test).toBe("hello, world");
  });
});

/*
 ### Iteration 3 ###
*/

describe("isNumberBig - Should return a string", () => {
  test("isNumberBig should be a function", () => {
    expect(typeof isNumberBig).toBe("function");
  });

  if (typeof isNumberBig === "function") {
    test("Should throw an error : the parameter should be a number", () => {
      expect(() => isNumberBig("pas cool")).toThrow(TypeError);
    });

    test("Should throw an error the parameter n should not be NaN", () => {
      expect(() => isNumberBig(NaN)).toThrow(TypeError);
    });

    test("Should return 'It's a small number !'", () => {
      const test = isNumberBig(1);
      expect(test).toBe("It's a small number !");
    });

    test("Should return 'It's a big number !'", () => {
      const test = isNumberBig(10000);
      expect(test).toBe("It's a big number !");
    });

    test("Should return 'It's a big number !'", () => {
      const test = isNumberBig(100000);
      expect(test).toBe("It's a big number !");
    });
  }
});

/*
 ### Iteration 4 ###
*/

describe("sum - Should return the sum of two numbers", () => {
  test("sum should be a function", () => {
    expect(typeof sum).toBe("function");
  });

  test("The sum of 1 + 1 should be 2", () => {
    const test = sum(1, 1);
    expect(test).toBe(2);
  });

  test("The sum of  1 + 10 should be 11", () => {
    const test = sum(1, 10);
    expect(test).toBe(11);
  });

  test("The sum of 100 + -200 should be -100", () => {
    const test = sum(100, -200);
    expect(test).toBe(-100);
  });

  if (typeof sum === "function") {
    test("Should throw an error: all parameters must be of type number", () => {
      expect(() => sum("foo", "bar")).toThrow(TypeError);
    });

    test("Should throw an error: all parameters must not be NaN", () => {
      expect(() => sum(20, NaN)).toThrow(TypeError);
    });

    test("Should throw an error: all parameters must not be NaN", () => {
      expect(() => sum(NaN, 20)).toThrow(TypeError);
    });
  }
});

/*
 ### Iteration 5 ###
*/

describe("greetingUser - Should print a nice greeting message", () => {
  test("greetingUser should be a function", () => {
    expect(typeof greetingUser).toBe("function");
  });

  test("Should greet Guillaume Amg", () => {
    const test = greetingUser("Guillaume", "Amg");
    expect(test).toBe("Hello Guillaume Amg");
  });

  test("Should greet Yannick Boullala", () => {
    const test = greetingUser("Yannick", "Boullala");
    expect(test).toBe("Hello Yannick Boullala");
  });

  if (typeof greetingUser === "function") {
    test("Should throw an error: firstname should be a string", () => {
      expect(() => greetingUser(13, "Dialo")).toThrow(TypeError);
    });

    test("Should throw an error: lastname must be a string", () => {
      expect(() => greetingUser("Jim", 23)).toThrow(TypeError);
    });

    test("Should throw an error: firstname and lastname must be string", () => {
      expect(() => greetingUser(NaN, false)).toThrow(TypeError);
    });

    test("Should throw an error: firstname must be at least of length 2", () => {
      expect(() => greetingUser("", "")).toThrow(TypeError);
    });

    test("Should throw an error: lastname should be at least of length 2", () => {
      expect(() => greetingUser("Max", "")).toThrow(Error);
    });

    test("Should throw an error: firstname and lastname should be at least of length 2", () => {
      expect(() => greetingUser("a", "b")).toThrow(Error);
    });
  }
});

/*
 ### Iteration 6 ###
*/

describe("makeOpposite - Should return the opposite of a given boolean value", () => {
  test("makeOpposite should be a function", () => {
    expect(typeof makeOpposite).toBe("function");
  });

  test("Should return false", () => {
    expect(makeOpposite(true)).toBe(false);
  });

  test("Should return false", () => {
    expect(makeOpposite(true)).toBe(false);
  });

  test("Should return true", () => {
    expect(makeOpposite(2 === "2")).toBe(true);
  });

  if (typeof makeOpposite === "function") {
    test("Should throw an error: b must be a boolean", () => {
      expect(() => makeOpposite()).toThrow(TypeError);
    });
  }
});

/*
 ### Iteration 7 ###
*/

describe("Should return an object literal containing 5 property/value pairs", () => {
  test("createACat should be a function", () => {
    expect(typeof createACat).toBe("function");
  });

  test("The returned cat (Kitty) must be equal to this result", () => {
    expect(createACat("Kitty", 2, "black", "blue", true)).toEqual({
      name: "Kitty",
      age: 2,
      color: "black",
      eyeColor: "blue",
      isCute: true
    });
  });

  test("The returned cat (Felix) must be equal to this result", () => {
    expect(createACat("Felix", "8", "grey", "green", true)).toEqual({
      name: "Felix",
      age: 8,
      color: "grey",
      eyeColor: "green",
      isCute: true
    });
  });

  if (typeof createACat === "function") {
    test("Should throw an error: age must be a number", () => {
      expect(() => createACat("Felix", "eight", "grey", "green", true)).toThrow(
        TypeError
      );
    });

    test("Should throw an error: isCute must be a boolean", () => {
      expect(() => createACat("Felix", "8", "grey", "green")).toThrow(
        TypeError
      );
    });
  }
});

/*
 ### Iteration 8 ###
*/


describe("Should return the name of the player with the greater score", () => {
  test("Kim should be the winner", () => {
    expect(
      getTheWinner({ name: "Kim", score: 10 }, { name: "Bill", score: 6 })
    ).toBe("The winner is: Kim");
  });

  test("Haroon should be the winner", () => {
    expect(
      getTheWinner({ name: "Fabady", score: 1 }, { name: "Haroon", score: 5 })
    ).toBe("The winner is: Haroon");
  });
});
