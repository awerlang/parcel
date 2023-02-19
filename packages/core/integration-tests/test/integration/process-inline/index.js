module.exports = function () {
  console.log(
    process.env.NODE_ENV)
  console.log(
    typeof process === 'object',
    process.env,
    process.env.NODE_DEBUG)
  console.log(
    typeof process === 'object' &&
    process.env)
  console.log(
    typeof process === 'object' &&
    (process.env &&
      process.env.NODE_DEBUG))
  console.log(
    typeof process === 'object' &&
    process.env &&
    process.env.NODE_DEBUG)
  console.log(
    process.env &&
    process.env.NODE_DEBUG)
  console.log(
    process.env &&
    process.env["NODE_DEBUG"])
};

// module.exports = function () {
//   console.log(
//     typeof require === 'function',
//     typeof process === 'object',
//     process.env,
//     process.env.NODE_DEBUG)
//   console.log(
//     typeof process === 'object' &&
//     process.env)
//   console.log(
//     typeof process === 'object' &&
//     process.env &&
//     process.env.NODE_DEBUG)
//   console.log(
//     process.env &&
//     process.env.NODE_DEBUG)
//   console.log(
//     process.env &&
//     process.env["NODE_DEBUG"])
//   return typeof process === 'object' &&
//     process.env &&
//     process.env.NODE_DEBUG &&
//     test('Hello World')
// };

// const test = (
//   typeof process === 'object' &&
//   process.env &&
//   process.env.NODE_DEBUG &&
//   /\bsemver\b/i.test(process.env.NODE_DEBUG)
// ) ? (...args) => console.error('SEMVER', ...args)
//   : () => { }
