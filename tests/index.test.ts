import { awesome, awesomeInstant, type AwesomeOptions } from '../src';
describe("test async awesome funtion", () => {

  const options: AwesomeOptions = {}
  
  const customAwesome = awesomeInstant(options)

  const asyncTestFunc = async () => {
    return "Success"
  }

  const asyncTestFuncErr = async (err: string) => {
    throw new Error(err)
  }

  it("should return success - package", async () => {
    expect(await awesome.async(asyncTestFunc)).toStrictEqual({ data: "Success", error: null })
  })

  it("should return success - custom", async () => {
    expect(await customAwesome.async(asyncTestFunc)).toStrictEqual({ data: "Success", error: null })
  })

  it("should return error - package", async () => {
    expect(await awesome.async(() => asyncTestFuncErr("error"))).toStrictEqual({ data: null, error: new Error("error") })
  })

  it("should return error - custom", async () => {
    expect(await customAwesome.async(() => asyncTestFuncErr("error"))).toStrictEqual({ data: null, error: new Error("error") })
  })
})