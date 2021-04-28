function getFirstProject(u) {
    if (u.type === "member")
        return u.currentProject;
    return u.projects[0];
}
