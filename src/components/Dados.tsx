import Project from "../assets/Projectplan.svg"
import Money from "../assets/money.svg"
import Satisf from "../assets/StarC.svg"
import Calendar from "../assets/calendar.svg"

const Dados = () => {
    return ( 
        <div className="flex flex-col py-12 bg-green-100 items-center justify-center ">
        <div className=" flex items-center gap-5">
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-1">
            <img src={Project} className="w-14" alt="" />
            <p className="font-medium">Projetos Realizados</p>
          </div>
          <h1 className="text-primary text-xl font-bold">250 +</h1>
        </div>

        <div className="w-[1px] h-44 bg-zinc-300"></div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-1">
            <img src={Satisf} className="w-14" alt="" />
            <p className="font-medium">Satisfação dos Clientes</p>
          </div>
          <h1 className="text-primary text-xl font-bold">85 %</h1>
        </div>

        <div className="w-[1px] h-44 bg-zinc-300"></div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-1">
            <img src={Money} className="w-14" alt="" />
            <p className="font-medium">Levantados por clientes</p>
          </div>
          <h1 className="text-primary text-xl font-bold"> R$10 M</h1>
        </div>

        <div className="w-[1px] h-44 bg-zinc-300"></div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-1">
            <img src={Calendar} className="w-14" alt="" />
            <p className="font-medium">Anos no mercado</p>
          </div>
          <h1 className="text-primary text-xl font-bold">2 anos</h1>
        </div>
        </div>
      </div>
     );
}
 
export default Dados;