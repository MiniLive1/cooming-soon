import Image from "next/image";
function loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image src={"/loadingI.gif"} alt="loading" height={70} width={70} />
    </div>
  );
}

export default loading;
