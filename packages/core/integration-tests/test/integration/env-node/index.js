module.exports = function () {
  return process.env.NODE_ENV + test(process.env.NODE_ENV) + ":" + process.env.FOO;
};

function test(str) {
  return ':' + str;
}
