import { awesome } from '../src';
describe("test async awesome funtion", () => {

  const asyncTestFunc = async () => {
    return "Success"
  }

  it("should return success", async () => {
    expect(await awesome.async(asyncTestFunc)).toStrictEqual({ data: "Success", error: null })
  })
})