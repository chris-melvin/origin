import { DocumentIcon } from "@sanity/icons";

export default {
  name: "card",
  title: "Card",
  icon: DocumentIcon,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "class",
      title: "Class",
      type: "reference",
      to: { type: "axieClass" },
    },
    {
      name: "part",
      title: "Part",
      type: "reference",
      to: { type: "part" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tier",
      title: "Tier",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      part: "part.title",
      class: "class.title",
      media: "mainImage",
    },
  },
};
