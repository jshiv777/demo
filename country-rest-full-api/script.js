fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });