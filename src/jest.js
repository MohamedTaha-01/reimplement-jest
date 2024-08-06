const test = (description, fn) => {
  try {
    fn();
    console.log(`✅${description}`);
  } catch (error) {
    console.log(`❌${description}`);
    console.log(error);
    return;
  }
};

const expect = (actual) => {
  return {
    toBe(expected) {
      if (actual !== expected) throw new Error(`${actual} is not equal to ${expected}`);
    },
  };
};

export default { test, expect };
