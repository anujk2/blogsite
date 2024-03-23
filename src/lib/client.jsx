import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "oxnzhk5c",
  dataset: "production",
  apiVersion: "2024-03-23",
  useCdn: true,
});
