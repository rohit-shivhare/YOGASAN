document.getElementById("edit-button").onclick = function () {
  document.getElementById("edit-modal").style.display = "block";
};

document.getElementById("close-button").onclick = function () {
  document.getElementById("edit-modal").style.display = "none";
};

window.onclick = function (event) {
  if (event.target == document.getElementById("edit-modal")) {
    document.getElementById("edit-modal").style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", async function () {
  await fetchProfileData();
});

async function fetchProfileData() {
  try {
    const response = await fetch("profile.php");
    const data = await response.json();

    if (data.error) {
      console.error(data.error);
    } else {
      document.getElementById("name").innerText = data.name || "N/A";
      document.getElementById("email").innerText = data.email || "N/A";
      document.getElementById("phone").innerText = data.phone || "N/A";
      document.getElementById("dob").innerText = data.dob || "N/A";
      document.getElementById("gender").innerText = data.gender || "N/A";
      document.getElementById("country").innerText = data.country || "N/A";
    }
  } catch (error) {
    console.error("Error fetching profile data:", error);
  }
}

document.getElementById("edit-form").onsubmit = async function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  try {
    const response = await fetch("profile.php", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();

    if (result.success) {
      alert(result.success);
      document.getElementById("edit-modal").style.display = "none";
      await fetchProfileData(); // Refresh profile details
    } else {
      alert(result.error);
    }
  } catch (error) {
    console.error("Error updating profile:", error);
  }
};