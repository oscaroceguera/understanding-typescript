type Member = {
  type: "member";
  currentProject: string;
};

type Admin = {
  type: "admin";
  projects: string[];
};

type User = Member | Admin;

function getFirstProject(u: User) {
  if (u.type === "member") return u.currentProject;
  return u.projects[0];
}
