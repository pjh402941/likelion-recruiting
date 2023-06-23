const passName = decodeURIComponent(location.href.split("?")[1]);

document.getElementById("name").innerText = passName;
