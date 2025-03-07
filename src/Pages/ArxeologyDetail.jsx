import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTittle";
import { useNavigate, useParams } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import { motion, useAnimation } from "framer-motion";
import { ImLink } from "react-icons/im";
import { RiExternalLinkLine } from "react-icons/ri";
import { GiPaintedPottery } from "react-icons/gi";
import { IoShield } from "react-icons/io5";
import { GiTwoCoins } from "react-icons/gi";
import { GiBoneMace } from "react-icons/gi";
import { GiStonePile } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function ArxeologyDetail() {
  const navigate = useNavigate();
  const route = useParams();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const [passportUrl, setPassportUrl] = useState(null); // Pasport uchun state

  const fetchData = async () => {
    const response = await DataService.get(endpoints.arxeologyById(route?.id));
    setApiData(response);

    if (response?.archaeologyPicture?.length > 0) {
      setActiveImage(response?.archaeologyPicture[0]?.image);
    }

    if (response?.pasport) {
      setPassportUrl(response.pasport); // Backenddan pasport PDF URL olamiz
    }

    // let x = document.querySelector("title");
    // x.textContent = `Voqealar / Yigʻinlar / ${response.title}`;
  };
  useEffect(() => {
    fetchData();
  }, []);
  //

  // vide function
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };
  // video link 
  function convertToEmbedLink(link) {
    const videoId = link?.split("v=")[1];
    console.log(videoId);
    if (videoId != undefined) {
      const embedLink = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      return embedLink;
    } else return `${link}?autoplay=1`;
  }

  const [activeImage, setActiveImage] = useState(
    apiData?.archaeologyPicture[0]?.image
  );
  const controls = useAnimation();

  const handleClick = (image) => {
    controls.start({ opacity: 0 }).then(() => {
      setActiveImage(image);
      controls.start({ opacity: 1 });
    });
  };

  console.log(apiData, "sssssssssss");

  return (
    <div className="arxeology_detail_container">
      <PageTitle title={apiData?.title_uz} />
      <div className="arxeology_detail_content">
        {/* <!-- component --> */}
        <div className="bg-white w-[60%] mx-auto p-5 rounded-lg shadow-xl">
          <div className="h-[500px]">
            <img src={apiData?.image} className="h-full w-full" alt="img" />
          </div>
          <div className="space-y-6">
            <div className="mt-4 flex">
              <div>
                {/* <div className="flex items-center h-16 border-l-4 border-blue-600"></div> */}
                {/* <div className="flex items-center h-16 border-l-4 border-gray-400"></div> */}
              </div>

              <div style={{ paddingLeft: "30px" }}>
                <div className="flex items-center py-2">
                  <span
                    // className="text-gray-500 font-bold text-[20px]"
                    dangerouslySetInnerHTML={{ __html: apiData?.context_uz }}
                  ></span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => navigate(`/yodgorlikAshyolari/${apiData.id}`)}
                className="text-[20px] bg-gradient-to-tl from-[#101040]  to-[blue] active:scale-[0.7] transition-all ease-linear py-2 px-5  rounded-lg text-[white]"
              >
                Ashyolar
              </button>
              {passportUrl && (
                <button
                  className="ml-4 text-[20px] bg-gradient-to-tl from-[#101040] to-[blue] active:scale-[0.7] transition-all ease-linear py-2 px-5 rounded-lg text-white"
                  onClick={() => window.open(passportUrl, "_blank")}
                >
                  Passport
                </button>
              )}
            </div>

            <div className="ashyolar_video_container">
              <div className="ashyolar_video_content">
                <div className="video">
                  {isVideoPlaying ? (
                    <iframe
                      width="100%"
                      height="300"
                      src={convertToEmbedLink(apiData?.video_link)}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  ) : (
                    <div>
                      <img
                        src={apiData?.image}
                        className="w-full h-[500px]"
                        alt="Video Thumbnail"
                      />
                      <button
                        className="mt-[12px]"
                        onClick={handlePlayButtonClick}
                      >
                        ▶️
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-10 flex flex-col space-y-8 pb-[50px]">
            <div className="w-full">
              <h3 className="text-[24px] pr-[25px] py-[10px] border-[#5050bb72] border-b-[2px] font-black">
                Belgilangan davrdagi yodgorlik ko'rinishi
              </h3>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-[10%]">
              <div className="w-full lg:w-1/3 lg:pr-[10%]">
                <div className="flex flex-col gap-5">
                  {apiData?.archaeologyPicture?.map((e) => (
                    <div
                      key={e?.id}
                      className="flex items-center p-2 bg-white hover:text-[#585898] cursor-pointer transition duration-300"
                      onClick={() => handleClick(e?.image)}
                    >
                      <img
                        src={e?.thumbnail || e?.image}
                        alt={"img manba"}
                        className="w-[70px] h-16 object-cover bg-[grey] text-[white] text-[10px] flex items-center justify-center rounded-lg"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-700">
                          {e?.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-2/3">
                <motion.div
                  className="relative h-[600px] w-full flex justify-center items-center bg-center bg-cover"
                  style={{ backgroundImage: `url(${activeImage})` }}
                  animate={controls}
                  transition={{ duration: 0.5 }}
                >
                  {activeImage ? (
                    <div
                      id="ramka"
                      className="flex p-5 items-center justify-center bg-[#00000060] w-full h-full"
                    >
                      <img
                        src={activeImage}
                        alt="img alt"
                        className="w-3/5 h-[480px]"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[grey]">
                      No Image Available
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import PageTitle from "../Components/PageTittle";
// import { useNavigate, useParams } from "react-router-dom";
// import { DataService } from "../config/dataService";
// import { endpoints } from "../config/endpoints";
// import { motion, useAnimation } from "framer-motion";

// export default function ArxeologyDetail() {
//   const navigate = useNavigate();
//   const route = useParams();

//   const [apiData, setApiData] = useState();
//   const [passportUrl, setPassportUrl] = useState(null); // Pasport uchun state

//   const fetchData = async () => {
//     const response = await DataService.get(endpoints.arxeologyById(route?.id));
//     setApiData(response);

//     if (response?.archaeologyPicture?.length > 0) {
//       setActiveImage(response?.archaeologyPicture[0]?.image);
//     }

//     if (response?.pasport) {
//       setPassportUrl(response.pasport); // Backenddan pasport PDF URL olamiz
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [route.id]);

//   const [activeImage, setActiveImage] = useState(null);
//   const controls = useAnimation();

//   const handleClick = (image) => {
//     controls.start({ opacity: 0 }).then(() => {
//       setActiveImage(image);
//       controls.start({ opacity: 1 });
//     });
//   };

//   return (
//     <div className="arxeology_detail_container">
//       <PageTitle title={apiData?.title_uz} />
//       <div className="arxeology_detail_content">
//         <div className="bg-white w-[85%] mx-auto p-5 rounded-lg shadow-xl">
//           <div className="h-[500px]">
//             <img src={apiData?.image} className="h-full w-full" alt="img" />
//           </div>

//           <div className="text-center">
//             <button
//               onClick={() => navigate(`/yodgorlikAshyolari/${apiData?.id}`)}
//               className="text-[20px] bg-gradient-to-tl from-[#101040] to-[blue] active:scale-[0.7] transition-all ease-linear py-2 px-5 rounded-lg text-white"
//             >
//               Ashyolar
//             </button>

//             {/* Pasport tugmasi */}
//             {passportUrl && (
//               <button
//                 className="ml-4 text-[20px] bg-gradient-to-tl from-[#101040] to-[blue] active:scale-[0.7] transition-all ease-linear py-2 px-5 rounded-lg text-white"
//                 onClick={() => window.open(passportUrl, "_blank")}
//               >
//                 Pasport
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
