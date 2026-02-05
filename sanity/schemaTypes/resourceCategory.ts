import { defineField, defineType } from "sanity";

export default defineType({
  name: "resourceCategory",
  title: "Resource Category",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [{ type: "resourceItem" }],
    }),
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
      initialValue: 1,
    }),
  ],
  preview: {
    select: {
      title: "category",
    },
  },
});
