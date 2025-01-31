
const { nullAddress, treasuryExports } = require("../helper/treasury");

const treasury = "0x60ede4402a34762d608ad9ba7bd3797f5bfe544c";

module.exports = treasuryExports({
  arbitrum: {
    owners: [treasury, ],
    ownTokens: [    ],
    tokens: [
      nullAddress,
    ],
  },
  bsc: {
    owners: [treasury],
    ownTokens:['0x78f5d389f5cdccfc41594abab4b0ed02f31398b3'],
    tokens: [
      '0x55d398326f99059ff775485246999027b3197955',
    ]
  }
});