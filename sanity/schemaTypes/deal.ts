import { defineField, defineType } from "sanity";

export default defineType({
  name: "deal",
  title: "Deal",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Investment Open", value: "Investment Open" },
          { title: "Coming Soon", value: "Coming Soon" },
          { title: "Closed", value: "Closed" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "dealDetail" }],
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
      title: "name",
      subtitle: "status",
      media: "image",
    },
  },
});
