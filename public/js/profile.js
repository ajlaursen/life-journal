const newFormHandler = async (event) => {
  event.preventDefault();
  console.log("we have made it")
  const title = document.querySelector("#title-name").value.trim();
  const body = document.querySelector("#entry-body").value.trim();
  

  if (title && body) {
    
    const response = await fetch(`/api/entry` , {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create project")
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/entry/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete project");
    }
  }
};

document
  .querySelector(".new-entry-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".entry-list")
  .addEventListener("click", delButtonHandler);
