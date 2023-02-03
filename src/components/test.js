const btnSet = document.getElementById("btn-set");
const btnGet = document.getElementById("btn-get");
const inputSet = document.getElementById("input-set");
const valueDisplay = document.getElementById("value");

btnSet.addEventListener("click", () => {
  setWithExpiry("myKey", inputSet.value, 5000);
});

btnGet.addEventListener("click", () => {
  const value = getWithExpiry("myKey");
  valueDisplay.innerHTML = value;
});

function setWithExpiry(key, value, ttl) {
  const now = new Date();

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key);

  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}
