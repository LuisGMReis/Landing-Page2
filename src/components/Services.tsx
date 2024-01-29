import Reels from "../assets/reels.svg";
import Heart from "../assets/heart.svg";
import Mallet from "../assets/mallet.svg";

import {ArrowRight} from 'lucide-react';

const Services = () => {
    return ( 
        <div id="" className="flex flex-col min-h-screen bg-white px-32 py-12">
        <div className="flex flex-col gap-2 w-[400px]">
          <h1 className="text-primary font-medium uppercase">O que nós fazemos?</h1>
          <p className="font-semibold text-2xl">Fornecemos a solução perfeita para o crescimento do seu negócio.</p>
        </div>
        <div className="grid grid-cols-3 gap-12 items-center mt-20">
          <div className="items-center flex flex-col gap-3">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-green-100">
              <img src={Reels} alt="" />  
            </div>
            <div className="flex flex-col gap-22 w-[200px]">
              <h1 className="font-semibold">Expanda seu negócio</h1>
              <p className="text-xs mt-4">Ajudamos a identificar as melhores maneiras de melhorar seu negócio</p>
            </div>
            <a href="" className="flex items-center gap-3 mt-8">Saiba mais <ArrowRight size={18}/></a>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-green-100">
              <img src={Heart} alt="" />  
            </div>
            <div className="flex flex-col gap-22 w-[200px]">
              <h1 className="font-semibold">Melhorar a fidelidade</h1>
              <p className="text-xs mt-4">Ajudamos a melhorar a fidelidade de sua marca junto aos seus clientes</p>
            </div>
            <a href="" className="flex items-center gap-3 mt-8">Saiba mais <ArrowRight size={18}/></a>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-green-100">
              <img src={Mallet} alt="" />  
            </div>
            <div className="flex flex-col gap-22 w-[200px]">
              <h1 className="font-semibold">Modelo de negócios</h1>
              <p className="text-xs mt-4">Ajudamos você a planejar e melhorar os seus modelos de negócios.</p>
            </div>
            <a href="" className="flex items-center gap-3 mt-8">Saiba mais <ArrowRight size={18}/></a>
          </div>

        </div>
      </div>
     );
}
 
export default Services;