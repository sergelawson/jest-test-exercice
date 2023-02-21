import { getSwapi } from "./fetchData";
import mockAxios from "axios";

jest.mock("axios");
//console.log(mockAxios);

/* mockAxios.get.mockImplementation(() =>
  Promise.resolve({ data: { name: "Luke Skywalker" } })
);
 */

mockAxios.get.mockResolvedValue({ data: { name: "Luke Skywalker" } });

afterEach(() => {
  jest.clearAllMocks();
});

describe("Mock axios example", () => {
  test("Check element of id i should be loke shown", async () => {
    const result = await getSwapi(1);
    //console.log(result);
    expect(result.name).toBe("Luke Skywalker");
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
