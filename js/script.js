const content = document.querySelector("tBody")

const frame = (datas) => {
  let node = ''
  datas.forEach(data => {
    node += `
    <tr>
    <td>${data.name}</td>
    <td class="text-center">${data.birth_year}</td>
    <td class="text-center">${data.death_year}</td>
    <td class="text-center">${data.ascension_year}</td>
    <td>${data.description}</td>
    </tr>
    `
  });
  content.innerHTML = node
}

const search = document.querySelector("#search")

fetch('https://indonesia-public-static-api.vercel.app/api/heroes', {
  method: "GET"
}).then(response => response.json()).then(data => {
  // console.log(data)

  // Pilihan
  const pilih = document.querySelector('.pilihan')
  pilih.addEventListener('change', (e) => {
    // console.log(e.target.value);

    let pilihan = e.target.value.toLowerCase()

    switch (pilihan) {
      case "dropdown":
        document.querySelector(".dropdown").style.display = "block"
        document.querySelector(".table").style.display = "none"
        break;
        case "table":
          document.querySelector(".table").style.display = "block"
          document.querySelector(".dropdown").style.display = "none"
        break;
      default:
        break;
    }
  })

  // Menambahkan data pada tabel
  search.addEventListener("keyup", (e) => {
    let keyword = e.target.value.toLowerCase()

    const filterName = data.filter(function (data) {
      const name = data.name.toLowerCase();
      return name.indexOf(keyword) > -1;
    });
    // console.log(filterName);

    frame(filterName)
  })
  frame(data)

  let arr = []
  for (let index = 0; index < data.length; index++) {
    // const element = data[index];
    arr.push({ id: index, text: data[index].name })
    // console.log(data[index]);
  }

  $(document).ready(function () {
    $('.js-data-example-ajax').select2({
      placeholder: 'Cari Nama...',
      data: arr,
      width: 'resolve'
    });
  });
})