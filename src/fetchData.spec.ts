import { fetchData } from "./fetchData";

it("Fetching data from api", async () => {
  const result = await fetchData(1);
  expect(result.id).toBe(1);
});
