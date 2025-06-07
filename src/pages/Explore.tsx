import {data} from "../assets/data";
import WineCard from "../components/card/WineCard";
import {BottleResponseDto} from "../state/bottle/dto/BottleResponseDto";
import PageLayout from "../components/layouts/PageLayout";

const Explore = () => {
  const bottle = data.bottle as BottleResponseDto[];
  const filteredItems = bottle.filter(
    (s) => s.price !== null && s.img !== null
  );

  const items = filteredItems.map((item) => {
    return { ...item, qty: 1 };
  });

  return (
      <PageLayout>
      <div>
        <h1>Nos produits {bottle.length} résultat(s)</h1>
        <div className="gridContainer">
          {items.map((bottle, idx) => (
              <WineCard key={bottle.id} bottle={bottle}/>
          ))}
        </div>
      </div>
      </PageLayout>
  );
};

export default Explore;
