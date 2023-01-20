let frame = (data) => {
  // Menambahkan data pada tabel
  // return `
  //   <tr>
  //     <td>${data.name}</td>
  //     <td>${data.site}</td>
  //     <td>${data.start_time}</td>
  //     <td>${data.end_time}</td>
  //     <td>${data.url}</td>
  //   </tr>
  // `

  // Menambahkan data pada dropdown
  $(document).ready(function () {
    $('.js-data-example-ajax').select2({
      data: data
    });
  });
}

fetch('https://indonesia-public-static-api.vercel.app/api/heroes', {
  method: "GET"
}).then(response => response.json()).then(data => {
  // console.log(data)

  // Menambahkan data pada tabel
  // let node = ''
  // data.forEach(element => {
  //   // frame(element)
  // });
  // content.innerHTML = node

  // Menambahkan data pada dropdown
  let arr = []
  for (let index = 0; index < data.length; index++) {
    // const element = data[index];
    arr.push({ id: index, text: data[index].name })
    // console.log(data[index]);
  }
  frame(arr)
})
