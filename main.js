let words = [];

// Load wordlist.json
fetch("wordlist.json")
  .then(res => res.json())
  .then(data => words = data)
  .catch(err => console.error("Gagal load wordlist:", err));

function generate() {
  const jumlah = parseInt(document.getElementById("jumlah").value);
  let passphrase = [];

  for (let i = 0; i < jumlah; i++) {
    const word = words[Math.floor(Math.random() * words.length)];
    passphrase.push(word);
  }

  document.getElementById("result").innerText = passphrase.join("-");
}

function copyPassphrase() {
  const text = document.getElementById("result").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Passphrase disalin ke clipboard!");
  });
}
