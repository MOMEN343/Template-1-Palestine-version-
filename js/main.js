function list() {
  if (document.getElementsByClassName("list")[0].style.display == "flex") {
    document.getElementsByClassName("list")[0].style.display = "none";
    document.getElementsByTagName("span")[1].style.width = "100%";
    document.getElementsByTagName("span")[5].style.width = "100%";
    document.getElementsByTagName("span")[2].style.width = "1000%";
    document.getElementsByTagName("span")[4].style.width = "100%";
    document.getElementsByClassName("flag")[0].style.height = "30px"
  } else {
    document.getElementsByClassName("list")[0].style.display = "flex";
    document.getElementsByTagName("span")[1].style.width = "0";
    document.getElementsByTagName("span")[5].style.width = "0";
    document.getElementsByTagName("span")[2].style.width = "80%";
    document.getElementsByTagName("span")[4].style.width = "80%";
    document.getElementsByClassName("flag")[0].style.height = "15px"
  }
}

