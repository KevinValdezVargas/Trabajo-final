const filters = document.querySelector("#filters");

filters.addEventListener("input", filterGoods);

function filterGoods() {
  const tipo_viaje = filters.querySelector("#tipo_viaje").value,
    diass = [...filters.querySelectorAll("#dias input:checked")].map(
      (n) => n.value
    ),
    priceMin = document.querySelector("#price-min").value,
    priceMax = document.querySelector("#price-max").value;

  outputGoods(
    DATA.filter(
      (n) =>
        (!tipo_viaje || n.tipo_viaje === tipo_viaje) &&
        (!diass.length || diass.includes(n.dias)) &&
        (!priceMin || priceMin <= n.cost) &&
        (!priceMax || priceMax >= n.cost)
    )
  );
}

function outputGoods(goods) {
  document.getElementById("goods").innerHTML = goods
    .map(
      (n) => `
      <div class="single-goods">
      <div class="">
        <div class="card shadow-sm">
          <h3 class="text-center mt-3 mb-3">${n.name}</h3>
          <img src="${n.image}" class="img-fluid mx-auto" alt="travel image product>
          <div class="card-body">
            <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto repellat amet in corrupti aspernatur, quam maxime qui, ducimus eius ad vel odio commodi perferendis rem excepturi consequuntur rerum neque placeat.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a class="btn btn-sm btn-success" href="#">Comprar</a>
                  <a class="btn btn-sm btn-primary" href="recomendaciones.html">Ver más</a>
                </div>
                <p class="text-muted">Costo: S/ ${n.cost}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

const DATA = [
  {
    name: "Viaje en Grupo1",
    cost: 499,
    tipo_viaje: "grupo",
    image:
      "img/group-travel.jpg",
    dias: "4"
  },
  {
    name: "Viaje en Grupo2",
    cost: 2199,
    tipo_viaje: "grupo",
    image:
      "img/group-travel.jpg",
    dias: "3"
  },
  {
    name: "Viaje en Grupo3",
    cost: 3999,
    tipo_viaje: "grupo",
    image:
      "img/group-travel.jpg",
    dias: "3"
  },
  {
    name: "Excursiones1",
    cost: 1899,
    tipo_viaje: "excursiones",
    image:
      "img/excursiones.jpg",
    dias: "5"
  },
  {
    name: "Excursiones2",
    cost: 599,
    tipo_viaje: "excursiones",
    image:
      "img/excursiones.jpg",
    dias: "4"
  },
  {
    name: "Tour1",
    cost: 799,
    tipo_viaje: "tour",
    image:
      "img/tour-travel.jpg",
    dias: "4"
  },
  {
    name: "Tour2",
    cost: 899,
    tipo_viaje: "tour",
    image:
      "img/tour-travel.jpg",
    dias: "6"
  },
  {
    name: "Viaje de verano",
    cost: 799,
    tipo_viaje: "verano",
    image:
      "img/sun-travel.jpg",
    dias: "3"
  },
  {
    name: "Viaje de verano",
    cost: 699,
    tipo_viaje: "verano",
    image:
      "img/sun-travel.jpg",
    dias: "5"
  }

];

outputGoods(DATA);
