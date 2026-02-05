import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemaTypes";
import { apiVersion, dataset, projectId } from "./env";

export default defineConfig({
  name: "luxos-capital",
  title: "Luxos Capital CMS",
  projectId,
  dataset,
  apiVersion,
  basePath: "/studio",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
