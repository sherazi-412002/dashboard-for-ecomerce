

import { defineType } from "sanity";

export default defineType({
  name: "user",
  title: "Users",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      options: {
        list: [
          { title: "Admin", value: "admin" },
          { title: "Customer", value: "customer" },
        ],
      },
      initialValue: "customer",
    },
  ],
});
