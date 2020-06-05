const bcrypt = require("bcryptjs");

const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const user = await User.create({
      name: "Vínicius Monteiro Arjonas",
      email: "viniciusmonteiroarjonas@outlook.com",
      password: "260692",
    });

    const compareHash = await bcrypt.compare("260692", user.password_hash);

    expect(compareHash).toBe(true);
  });
});
