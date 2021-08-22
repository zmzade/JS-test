fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    for (let i = 0; i < 3; i++) {
      const li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML = data.data[i].first_name;
    }
  });
