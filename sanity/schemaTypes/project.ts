export default {
  title: "Project Document",
  name: "project",
  type: "document",
  fields: [
    { title: "Project tag", name: "tag", type: "string" },
    {
      title: "Title of the project",
      name: "title",
      type: "string",
    },
    {
      title: "Cover image of the project",
      name: "cover",
      type: "image",
    },
    {
      title: "id of the project",
      name: "id",
      type: "string",
    },
    {
      title: "Mockup image of the project",
      name: "mockup",
      type: "image",
    },
    {
      title: "Description of the project",
      name: "projectDescription",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "logo image of the project",
      name: "logo",
      type: "image",
    },
    {
      title: "Description of the logo",
      name: "logoDescription",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
