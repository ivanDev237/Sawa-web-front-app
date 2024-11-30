import React from "react";
import logozara from "../../../Assets/imgs/logozara.png";
import ikea from "../../../Assets/imgs/ikea.png";
import addidas from "../../../Assets/imgs/addidas.png";
import lvlogo from "../../../Assets/imgs/lvlogo.png";
import rabana from "../../../Assets/imgs/rabana.png";
import rose from "../../../Assets/imgs/rose.jpg"
import perruque  from "../../../Assets/imgs/perruque.jpg"
import lunette  from "../../../Assets/imgs/lunette.jpg"


import rolx from "../../../Assets/imgs/rolx.png";
import { MapPinHouseIcon, Phone } from "lucide-react";

const Shops = () => {
  return (
    <>
      <section className=" h-auto w-auto ">
        <h2 className="text-md font-extrabold p-5 "> My Shops</h2>

        <div className="w-auto h-auto flex ">
          <div className="w-[300px] h-auto bg-white py-2  flex items-center justify-center flex-col rounded-md ml-7">
            <div className="w-auto h-auto flex space-x-5 ">
              <img
                src={logozara}
                alt="Description de l'image"
                style={{ width: "95px", height: "90px", borderRadius: "50%" }}
                className="border-primary_Green border-2"
              />
              <div className="w-auto h-auto flex flex-col space-y-2 ">
                <span className="font-bold text-[15px] text-primary_Green">
                  shop clothes
                </span>
                <div className="w-auto h-auto flex items-center gap-2 text-gray-700">
                  <MapPinHouseIcon color="gray" size={15} />
                  <span>DLA Yassa</span>
                </div>
                <div className="w-auto h-auto flex items-center gap-2 text-gray-700">
                  <Phone color="gray" size={15} />
                  <span>(+237) 654783209 </span>
                </div>
              </div>
            </div>
            <div className="w-auto h-auto flex items-center justify-center space-x-2 mt-3">
              <div className="w-auto h-auto   flex flex-col text-[12px]">
                <span>2000 fcf</span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  commission
                </span>
              </div>

              <div className="w-auto h-auto  border-r-[1px] flex flex-col text-[12px]">
                <span>30 </span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  sales
                </span>
              </div>

              <div className="w-auto h-auto  flex flex-col text-[12px]">
                <span>0 </span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  Withdraw
                </span>
              </div>

              <div className="w-auto h-auto   flex flex-col text-[12px]">
                <span>20000 fcf</span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  Balance
                </span>
              </div>
            </div>
          </div>

          <div className="w-[300px] h-auto bg-white py-2  flex items-center justify-center flex-col rounded-md ml-7">
            <div className="w-auto h-auto flex space-x-5 ">
              <img
                src={ikea}
                alt="Description de l'image"
                style={{ width: "95px", height: "90px", borderRadius: "50%" }}
                className="border-blue_BgTheme border-2  object-center "
              />
              <div className="w-auto h-auto flex flex-col space-y-2 ">
                <span className="font-bold text-[15px] text-blue_BgTheme">
                  shop clothes
                </span>
                <div className="w-auto h-auto flex items-center gap-2 text-gray-700">
                  <MapPinHouseIcon color="gray" size={15} />
                  <span>DLA Yassa</span>
                </div>
                <div className="w-auto h-auto flex items-center gap-2 text-gray-700">
                  <Phone color="gray" size={15} />
                  <span>(+237) 654783209 </span>
                </div>
              </div>
            </div>
            <div className="w-auto h-auto flex items-center justify-center space-x-2 mt-3">
              <div className="w-auto h-auto   flex flex-col text-[12px]">
                <span>2000 fcf</span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  commission
                </span>
              </div>

              <div className="w-auto h-auto  border-r-[1px] flex flex-col text-[12px]">
                <span>30 </span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  sales
                </span>
              </div>

              <div className="w-auto h-auto  flex flex-col text-[12px]">
                <span>0 </span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  Withdraw
                </span>
              </div>

              <div className="w-auto h-auto   flex flex-col text-[12px]">
                <span>20000 fcf</span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  Balance
                </span>
              </div>
            </div>
          </div>

          <div className="w-[300px] h-auto bg-white py-2 flex items-center justify-center flex-col rounded-md ml-7">
            <div className="w-auto h-auto flex space-x-5 ">
              <img
                src={addidas}
                alt="Description de l'image"
                style={{
                  width: "95px",
                  height: "90px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="border-purple-700 border-2"
              />
              <div className="w-auto h-auto flex flex-col space-y-2 ">
                <span className="font-bold text-[15px] text-purple-700">
                  shop clothes
                </span>
                <div className="w-auto h-auto flex items-center gap-2 text-gray-700">
                  <MapPinHouseIcon color="gray" size={15} />
                  <span>DLA Yassa</span>
                </div>
                <div className="w-auto h-auto flex items-center gap-2 text-gray-700">
                  <Phone color="gray" size={15} />
                  <span>(+237) 654783209 </span>
                </div>
              </div>
            </div>
            <div className="w-auto h-auto flex items-center justify-center space-x-2 mt-3">
              <div className="w-auto h-auto   flex flex-col text-[12px]">
                <span>2000 fcf</span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  commission
                </span>
              </div>

              <div className="w-auto h-auto  border-r-[1px] flex flex-col text-[12px]">
                <span>30 </span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  sales
                </span>
              </div>

              <div className="w-auto h-auto  flex flex-col text-[12px]">
                <span>0 </span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  Withdraw
                </span>
              </div>

              <div className="w-auto h-auto   flex flex-col text-[12px]">
                <span>20000 fcf</span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  Balance
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-auto h-auto flex mt-[15px]">
          <div className="w-[300px] h-auto bg-white py-2  flex items-center justify-center flex-col rounded-md ml-7">
            <div className="w-auto h-auto flex space-x-5 ">
              <img
                src={addidas}
                alt="Description de l'image"
                style={{
                  width: "95px",
                  height: "90px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="border-yellow-600 border-2  object-center "
              />
              <div className="w-auto h-auto flex flex-col space-y-2 ">
                <span className="font-bold text-[15px] text-yellow-600">
                  shop clothes
                </span>
                <div className="w-auto h-auto flex items-center gap-2 text-gray-700">
                  <MapPinHouseIcon color="gray" size={15} />
                  <span>DLA Yassa</span>
                </div>
                <div className="w-auto h-auto flex items-center gap-2 text-gray-700">
                  <Phone color="gray" size={15} />
                  <span>(+237) 654783209 </span>
                </div>
              </div>
            </div>
            <div className="w-auto h-auto flex items-center justify-center space-x-2 mt-3">
              <div className="w-auto h-auto   flex flex-col text-[12px]">
                <span>2000 fcf</span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  commission
                </span>
              </div>

              <div className="w-auto h-auto  border-r-[1px] flex flex-col text-[12px]">
                <span>30 </span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  sales
                </span>
              </div>

              <div className="w-auto h-auto  flex flex-col text-[12px]">
                <span>0 </span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  Withdraw
                </span>
              </div>

              <div className="w-auto h-auto   flex flex-col text-[12px]">
                <span>20000 fcf</span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  Balance
                </span>
              </div>
            </div>
          </div>

          <div className="w-[300px] h-auto bg-white py-2  flex items-center justify-center flex-col rounded-md ml-7">
            <div className="w-auto h-auto flex space-x-5 ">
              <img
                src={lvlogo}
                alt="Description de l'image"
                style={{ width: "95px", height: "90px", borderRadius: "50%" }}
                className="border-pink-600 border-2  object-center "
              />
              <div className="w-auto h-auto flex flex-col space-y-2 ">
                <span className="font-bold text-[15px] text-pink-600">
                  shop clothes
                </span>
                <div className="w-auto h-auto flex items-center gap-2 text-gray-700">
                  <MapPinHouseIcon color="gray" size={15} />
                  <span>DLA Yassa</span>
                </div>
                <div className="w-auto h-auto flex items-center gap-2 text-gray-700">
                  <Phone color="gray" size={15} />
                  <span>(+237) 654783209 </span>
                </div>
              </div>
            </div>
            <div className="w-auto h-auto flex items-center justify-center space-x-2 mt-3">
              <div className="w-auto h-auto   flex flex-col text-[12px]">
                <span>2000 fcf</span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  commission
                </span>
              </div>

              <div className="w-auto h-auto  border-r-[1px] flex flex-col text-[12px]">
                <span>30 </span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  sales
                </span>
              </div>

              <div className="w-auto h-auto  flex flex-col text-[12px]">
                <span>0 </span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  Withdraw
                </span>
              </div>

              <div className="w-auto h-auto   flex flex-col text-[12px]">
                <span>20000 fcf</span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  Balance
                </span>
              </div>
            </div>
          </div>

          <div className="w-[300px] h-auto bg-white py-2 flex items-center justify-center flex-col rounded-md ml-7">
            <div className="w-auto h-auto flex space-x-5 ">
              <img
                src={rabana}
                alt="Description de l'image"
                style={{
                  width: "95px",
                  height: "90px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="border-orange-700 border-2 px-1"
              />
              <div className="w-auto h-auto flex flex-col space-y-2 ">
                <span className="font-bold text-[15px] text-orange-700">
                  shop clothes
                </span>
                <div className="w-auto h-auto flex items-center gap-2 text-gray-700">
                  <MapPinHouseIcon color="gray" size={15} />
                  <span>DLA Yassa</span>
                </div>
                <div className="w-auto h-auto flex items-center gap-2 text-gray-700">
                  <Phone color="gray" size={15} />
                  <span>(+237) 654783209 </span>
                </div>
              </div>
            </div>
            <div className="w-auto h-auto flex items-center justify-center space-x-2 mt-3">
              <div className="w-auto h-auto   flex flex-col text-[12px]">
                <span>2000 fcf</span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  commission
                </span>
              </div>

              <div className="w-auto h-auto  border-r-[1px] flex flex-col text-[12px]">
                <span>30 </span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  sales
                </span>
              </div>

              <div className="w-auto h-auto  flex flex-col text-[12px]">
                <span>0 </span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  Withdraw
                </span>
              </div>

              <div className="w-auto h-auto   flex flex-col text-[12px]">
                <span>20000 fcf</span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  Balance
                </span>
              </div>
            </div>
          </div>
        </div>

		<div className="w-auto h-auto flex  mt-[15px]">
          <div className="w-[300px] h-auto bg-white py-2  flex items-center justify-center flex-col rounded-md ml-7">
            <div className="w-auto h-auto flex space-x-5 ">
              <img
                src={perruque}
                alt="Description de l'image"
                style={{ width: "95px", height: "90px", borderRadius: "50%" }}
                className="border-primary_Green border-2"
              />
              <div className="w-auto h-auto flex flex-col space-y-2 ">
                <span className="font-bold text-[15px] text-primary_Green">
                  shop clothes
                </span>
                <div className="w-auto h-auto flex items-center gap-2 text-gray-700">
                  <MapPinHouseIcon color="gray" size={15} />
                  <span>DLA Yassa</span>
                </div>
                <div className="w-auto h-auto flex items-center gap-2 text-gray-700">
                  <Phone color="gray" size={15} />
                  <span>(+237) 654783209 </span>
                </div>
              </div>
            </div>
            <div className="w-auto h-auto flex items-center justify-center space-x-2 mt-3">
              <div className="w-auto h-auto   flex flex-col text-[12px]">
                <span>2000 fcf</span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  commission
                </span>
              </div>

              <div className="w-auto h-auto  border-r-[1px] flex flex-col text-[12px]">
                <span>30 </span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  sales
                </span>
              </div>

              <div className="w-auto h-auto  flex flex-col text-[12px]">
                <span>0 </span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  Withdraw
                </span>
              </div>

              <div className="w-auto h-auto   flex flex-col text-[12px]">
                <span>20000 fcf</span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  Balance
                </span>
              </div>
            </div>
          </div>

          <div className="w-[300px] h-auto bg-white py-2  flex items-center justify-center flex-col rounded-md ml-7">
            <div className="w-auto h-auto flex space-x-5 ">
              <img
                src={lunette}
                alt="Description de l'image"
                style={{ width: "95px", height: "90px", borderRadius: "50%" }}
                className="border-red-600 border-2  object-center "
              />
              <div className="w-auto h-auto flex flex-col space-y-2 ">
                <span className="font-bold text-[15px] text-red-600">
                  shop clothes
                </span>
                <div className="w-auto h-auto flex items-center gap-2 text-gray-700">
                  <MapPinHouseIcon color="gray" size={15} />
                  <span>DLA Yassa</span>
                </div>
                <div className="w-auto h-auto flex items-center gap-2 text-gray-700">
                  <Phone color="gray" size={15} />
                  <span>(+237) 654783209 </span>
                </div>
              </div>
            </div>
            <div className="w-auto h-auto flex items-center justify-center space-x-2 mt-3">
              <div className="w-auto h-auto   flex flex-col text-[12px]">
                <span>2000 fcf</span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  commission
                </span>
              </div>

              <div className="w-auto h-auto  border-r-[1px] flex flex-col text-[12px]">
                <span>30 </span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  sales
                </span>
              </div>

              <div className="w-auto h-auto  flex flex-col text-[12px]">
                <span>0 </span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  Withdraw
                </span>
              </div>

              <div className="w-auto h-auto   flex flex-col text-[12px]">
                <span>20000 fcf</span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  Balance
                </span>
              </div>
            </div>
          </div>

          <div className="w-[300px] h-auto bg-white py-2 flex items-center justify-center flex-col rounded-md ml-7">
            <div className="w-auto h-auto flex space-x-5 ">
              <img
                src={rose}
                alt="Description de l'image"
                style={{
                  width: "95px",
                  height: "90px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="border-purple-700 border-2"
              />
              <div className="w-auto h-auto flex flex-col space-y-2 ">
                <span className="font-bold text-[15px] text-purple-700">
                  shop clothes
                </span>
                <div className="w-auto h-auto flex items-center gap-2 text-gray-700">
                  <MapPinHouseIcon color="gray" size={15} />
                  <span>DLA Yassa</span>
                </div>
                <div className="w-auto h-auto flex items-center gap-2 text-gray-700">
                  <Phone color="gray" size={15} />
                  <span>(+237) 654783209 </span>
                </div>
              </div>
            </div>
            <div className="w-auto h-auto flex items-center justify-center space-x-2 mt-3">
              <div className="w-auto h-auto   flex flex-col text-[12px]">
                <span>2000 fcf</span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  commission
                </span>
              </div>

              <div className="w-auto h-auto  border-r-[1px] flex flex-col text-[12px]">
                <span>30 </span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  sales
                </span>
              </div>

              <div className="w-auto h-auto  flex flex-col text-[12px]">
                <span>0 </span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  Withdraw
                </span>
              </div>

              <div className="w-auto h-auto   flex flex-col text-[12px]">
                <span>20000 fcf</span>
                <span className=" border-r-[1px] border-gray-700 pr-2">
                  Balance
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="h-[calc(100%-42px)]  px-2 overflow-y-hidden">Shops list</section> */}
    </>
  );
};

export default Shops;
