const fakeUser = {
    username: "anh288",
    loggedIn: false,
}

export const trending = (req, res) => res.render("home", {pageTitle: "Home", fakeUser: fakeUser});
export const see = (req, res) => res.render("watch", {pageTitle: "Watch Video"});
export const edit = (req, res) => res.render("edit", {pageTitle: "Edit Video"});
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
    return res.send(`Delete Video #${req.params.id}`);
}