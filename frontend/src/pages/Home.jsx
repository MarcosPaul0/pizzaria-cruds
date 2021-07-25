import pizzaMakerImg from '../assets/images/pizzaMaker.svg';
import pixImg from '../assets/images/pixImg.png';

export function Home() {
  return (
    <main className="main bg-projectGray-25 flex justify-around items-center">
      {/* <div className="flex flex-row items-center bg-white rounded-3xl shadow-lg h-96"> */}
      <div className="pl-8 py-5 flex flex-col text-gray-700">
        <h1 className="text-4xl font-bold">Gerencie os recursos de sua pizzaria</h1>
        <div className="mt-5 flex flex-col items-center rounded-xl">
          <h1 className="p-px text-md font-bold">Realize vendas com:</h1>
          <img src={pixImg} alt="Logo do PIX" className="h-16 p-px" />
        </div>
      </div>
      <img src={pizzaMakerImg} alt="Pizzaiolo" />
      {/* </div> */}
    </main>
  );
}
