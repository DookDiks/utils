import { awesome } from '../src';
describe("test async awesome funtion", () => {

  const asyncTestFunc = async () => {
    return "Success"
  }

  awesome("asdasd")
  it("should return success", async () => {
    // expect()
  })
})