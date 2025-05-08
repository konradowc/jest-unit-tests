import mut from "./module.js"; // MUT = Module Under Test

test("Testing sum -- success", () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test("Testing div -- success1", () => {
  const expected = 5;
  const got = mut.div(10, 2);
  expect(got).toBe(expected);
});

test("Testing div -- success2", () => {
  const expected = 4.5;
  const got = mut.div(9, 2);
  expect(got).toBe(expected);
});

test("Testing div -- success3", () => {
  const expected = 0;
  const got = mut.div(0, 10);
  expect(got).toBe(expected);
});

test("Testing div -- success4", () => {
  const expected = Infinity;
  const got = mut.div(10, 0);
  expect(got).toBe(expected);
});

test("Testing containsNumber -- success1", () => {
  const expected = false;
  const got = mut.containsNumbers("nonumber");
  expect(got).toBe(expected);
});

test("Testing containsNumber -- success2", () => {
  const expected = true;
  const got = mut.containsNumbers("hasanumber1");
  expect(got).toBe(expected);
});

test("Testing containsNumber -- success3", () => {
  const expected = true;
  const got = mut.containsNumbers("1234");
  expect(got).toBe(expected);
});

test("Testing containsNumber -- success4", () => {
  const expected = false;
  const got = mut.containsNumbers("hello there");
  expect(got).toBe(expected);
});
