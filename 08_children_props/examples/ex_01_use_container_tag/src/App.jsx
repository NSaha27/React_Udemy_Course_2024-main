import "./App.css";
// import Container from "./components/Container";
import ProductList from "./components/ProductList";

function App() {
  const productList = [
    {
      id: 1,
      name: "MacBook Air 13 (M4)",
      type: "Notebook",
      description: [
        `System on Chip (SoC)
M4 chip
10-core CPU with 4 performance cores and 6 efficiency cores
Up to 10-core GPU
Hardware-accelerated ray tracing
16-core Neural Engine
120GB/s memory bandwidth`,
        `Media Engine
Hardware-accelerated H.264, HEVC, ProRes and ProRes RAW
Video decode engine
Video encode engine
ProRes encode and decode engine
AV1 decode`,
      ],
      price: 99900.0,
      imgUrl: "images/mb-air-13.jpg",
    },
    {
      id: 2,
      name: "MacBook Air 15 (M4)",
      type: "Notebook",
      description: [
        `System on Chip (SoC)
M4 chip
10-core CPU with 4 performance cores and 6 efficiency cores
10-core GPU
Hardware-accelerated ray tracing
16-core Neural Engine
120GB/s memory bandwidth`,
        `Media Engine
Hardware-accelerated H.264, HEVC, ProRes and ProRes RAW
Video decode engine
Video encode engine
ProRes encode and decode engine
AV1 decode`,
      ],
      price: 124900.0,
      imgUrl: "images/mb-air-15.jpg",
    },
    {
      id: 3,
      name: "MacBook Pro 14 (M4 Pro)",
      type: "Notebook",
      description: [
        `System on Chip (SoC)
M4 Pro chip
Up to 14-core CPU with 10 performance cores and 4 efficiency cores
Up to 20-core GPU
Hardware-accelerated ray tracing
16-core Neural Engine
273GB/s memory bandwidth
`,
        `Media Engine
Hardware-accelerated H.264, HEVC, ProRes and ProRes RAW
Video decode engine
Video encode engine
ProRes encode and decode engine
AV1 decode`,
      ],
      price: 199900.0,
      imgUrl: "images/mb-pro-14.jpg",
    },
  ];

  return (
    <>
      {/* <Container>
        <h1 className="">Children Props</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          quis optio dolore nobis quos quasi labore aliquid mollitia et eum!
          Deleniti perspiciatis inventore doloribus aut alias ad magnam qui
          voluptatum obcaecati labore maxime, nesciunt a animi. Assumenda,
          accusamus. Laudantium ducimus reprehenderit inventore eius! Magnam non
          iusto blanditiis voluptate nam cupiditate?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
          aliquid nemo quae temporibus. Totam quam inventore error quas id
          sapiente!
        </p>
      </Container>
      <Container>
        <h1 className="">Use of Container Tag</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          quod veniam totam praesentium incidunt perferendis minima nulla
          dolorum in sed! Ut quo quam, magnam quas optio illo enim nisi corporis
          voluptates rerum nobis quaerat corrupti! Debitis, officiis iure?
          Minima aliquid magnam ad, libero quis doloribus officia quo obcaecati
          possimus officiis!
        </p>
      </Container> */}
      <ProductList productList={productList} />
    </>
  );
}

export default App;
