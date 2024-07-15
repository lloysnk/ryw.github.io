"use strict";

//loysnk


const fetchUserData1 = async () => {
  try {
    const response = await fetch("https://discord-web-api.glitch.me/discord/user/997244108156444722", {
      method: "GET",
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Something went wrong:", error);
    throw error;
  }
};

const displayUserData1 = async () => {
  try {
    const userData = await fetchUserData1();
    console.log(userData.url);
    console.log(userData.username);
    document.getElementById("loysnk").src = userData.url;
    document.getElementById("username1").textContent = userData.username;
  } catch (error) {
    console.warn("Error while loading user information:", error);
    document.getElementById("username1").textContent = "Erro ao carregar informações do usuário.";
  }
};

//sazky


const fetchUserData2 = async () => {
  try {
    const response = await fetch("https://discord-web-api.glitch.me/discord/user/1222720183307735210", {
      method: "GET",
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Something went wrong:", error);
    throw error;
  }
};

const displayUserData2 = async () => {
  try {
    const userData = await fetchUserData2();
    console.log(userData.url);
    console.log(userData.username);
    document.getElementById("gui1st").src = userData.url;
    document.getElementById("username2").textContent = userData.username;
  } catch (error) {
    console.warn("Error while loading user information:", error);
    document.getElementById("username2").textContent = "Erro ao carregar informações do usuário.";
  }
}; 

displayUserData1();
displayUserData2(); 

  