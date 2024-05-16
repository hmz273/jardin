import React, { useEffect, useState } from "react";
import TestiModel from "../Models/TestiModel";
import { commentData } from "@/constants";
import { useTranslation } from "react-i18next";

const Testimonial = () => {


  const { t } = useTranslation('common');
  const [filterByType, setFilterByType] = useState(null);

  const commentTypes = Array.from(new Set(commentData.map(comment => comment.typeId)));

  // Set default filter to the first tab ID
  if (!filterByType && commentTypes.length > 0) {
    setFilterByType(commentTypes[0]);
  }

  const handleFilterChange = (typeId) => {
    setFilterByType(typeId);
  };

  const filteredComments = filterByType
    ? commentData.filter(comment => comment.typeId === filterByType)
    : commentData;





  return (
    <>
    
    
    
    
{/* <div>
      <div className="filter">
        {commentTypes.map(typeId => (
          <button className="mx-12" key={typeId} onClick={() => handleFilterChange(typeId)}>
            {t(`commentTypes.${typeId}`)}
          </button>
        ))}
      </div>
      
      <div className="comment-list">
        {filteredComments.map(comment => (
          <div key={comment.id}>
            <h3>{t(`comments.${comment.id}.title`)}</h3>
            <p>{t(`comments.${comment.id}.text`)}</p>
          </div>
        ))}
      </div>
    </div> */}
    
    
    
    <section className="bg-[#F4F1E8] md:h-[836.87px] md:mt-[26px]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center">
          <svg
            className="h-12 mx-auto md:mb-12 text-gray-400 dark:text-gray-600"
            width="39"
            height="38"
            viewBox="0 0 39 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.77992 26.4108C7.77992 26.4108 8.52992 25.4708 10.9799 25.4708C13.4199 25.4708 16.6199 26.7208 16.6199 31.6808C16.6199 36.6408 11.3799 37.8708 9.57992 37.8708C5.67992 37.8708 0.169922 36.1708 0.169922 23.4508C0.169922 10.7308 11.9199 0.320786 11.9199 0.320786C12.7999 -0.559214 12.6099 0.570786 11.9199 1.32079C11.2299 2.08079 3.51992 13.2408 7.77992 26.4108ZM29.9899 26.4108C29.9899 26.4108 30.7399 25.4708 33.1899 25.4708C35.6299 25.4708 38.8299 26.7208 38.8299 31.6808C38.8299 36.6408 33.5899 37.8708 31.7899 37.8708C27.8899 37.8708 22.3799 36.1708 22.3799 23.4508C22.3799 10.7308 34.1299 0.320786 34.1299 0.320786C35.0099 -0.559214 34.8199 0.570786 34.1299 1.32079C33.4399 2.08079 25.7299 13.2408 29.9899 26.4108Z"
              fill="#13191D" />
          </svg>
          <h2 className="mb-4 tracking-normal capitalize font-normal text-[58px] leading-[63.8px]">
            {t(`comments.title`)}
          </h2>
        </div>

        <div className="p-4 mx-auto mt-[26px] mb-8 md:w-[68rem] lg:mb-16">
          <div className="mb-4">
            <div className="flex flex-col m-auto p-auto">
              <div className="flex overflow-x-scroll pb-[21px] hide-scroll-bar">
                <div
                  className="flex flex-nowrap lg:ml-20 md:ml-20 ml-10 m-0"
                  data-tabs-active-classes="text-[#13191D] hover:text-[#13191D]"
                  data-tabs-inactive-classes="text-gray-500 hover:text-gray-600"
                  id="default-tab"
                  data-tabs-toggle="#default-tab-content"
                  role="tablist"
                >
{commentTypes.map(typeId => (
                  <div key={typeId} className="inline-block px-3 md:w-[408px]" role="presentation">
                    <button
                    onClick={() => handleFilterChange(typeId)}
                      className="text-gray-400 inline-block p-4 font-quicksand focus:text-[#13191D] font-normal uppercase text-[20px] leading-[20px]"
                      id={`${t(`commentTypes.${typeId}`)}-tab`}
                      data-tabs-target={`#${t(`commentTypes.${typeId}`)}`}
                      type="button"
                      role="tab"
                      aria-controls={t(`commentTypes.${typeId}`)}
                      aria-selected="false"
                    >
                      {t(`commentTypes.${typeId}`)}
                    </button>
                  </div>
))}

                </div>
              </div>
            </div>
          </div>
          <div id="default-tab-content">

          {commentTypes.map(typeId => (
            <div
              key={typeId}
              className="hidden  rounded-lg w-full bg-[#F4F1E8]"
              id={t(`commentTypes.${typeId}`)}
              role="tabpanel"
              aria-labelledby={`${t(`commentTypes.${typeId}`)}-tab`}
            >
              <div
                id="controls-carousel"
                className="relative w-full bg-[#F4F1E8] z-0"
                data-carousel="static"
              >
                {/* <!-- Carousel wrapper --> */}
                <div className="relative overflow-hidden rounded-lg md:h-[28rem]">
                  {/* <!-- Item 1 --> */}
                  {filteredComments.map(comment => (

                  <div
                    className="hidden duration-700 ease-in-out bg-transparent"
                    data-carousel-item
                  >
                    <div
                    key={comment.id} className="max-w-screen-xl px-4  mx-auto text-center">
                      <figure className="max-w-screen-md mx-auto">
                        <p className="md:mt-[6px] md:mb-[17px] font-normal text-[30px] leading-[17.33px] text-[#3C3A34]">
                        {t(`commentTypes.${comment.typeId}`) === "Commentaire-De-Booking" ? <span>{t(`comments.${comment.id}.score`)}/10</span> : <span>{t(`comments.${comment.id}.score`)}/5</span>}
                        </p>
                        <p className="tracking-normal md:mb-[16px] font-normal text-[28px] leading-[30.8px] text-[#3C3A34] py-4">
                        {t(`comments.${comment.id}.name`)} - {t(`commentTypes.${typeId}`)}
                        </p>
                        <blockquote className="md:mb-[45px]">
                          <p

                            className="text-center line-clamp-4 font-normal text-[22px] leading-[39.6px] font-quicksand text-[#3C3A34]"
                          >
{t(`comments.${comment.id}.text`)}                          </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                          <div className="flex items-center divide-gray-500 dark:divide-gray-700">
                            <div
                              data-modal-target="testi" data-modal-toggle="testi"
                              className="tracking-normal text-center uppercase font-normal text-[18px] leading-[19.8px] font-quicksand text-[#AD936D]"
                            >
                              {t(`comments.button`)}
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                ))}
                </div>
                {/* <!-- Slider controls --> */}
                <button
                  type="button"
                  className="absolute top-60 md:-top-[75px] left-30  start-0 z-30 flex items-center justify-center mt-60 px-4 cursor-pointer group focus:outline-none"
                  data-carousel-prev
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full ">
                    <svg
                    className="rtl:rotate-180"
                      width="23"
                      height="18"
                      viewBox="0 0 23 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.1304 0.715649C10.306 0.891432 10.4046 1.12971 10.4046 1.37815C10.4046 1.62659 10.306 1.86487 10.1304 2.04065L3.91792 8.25315L21.9679 8.25315C22.2166 8.25315 22.455 8.35192 22.6308 8.52774C22.8067 8.70355 22.9054 8.94201 22.9054 9.19065C22.9054 9.43929 22.8067 9.67775 22.6308 9.85356C22.455 10.0294 22.2166 10.1281 21.9679 10.1281L3.91792 10.1281L10.1304 16.3406C10.2538 16.4552 10.344 16.601 10.3916 16.7626C10.4391 16.9241 10.4421 17.0955 10.4004 17.2587C10.3587 17.4218 10.2738 17.5707 10.1545 17.6896C10.0353 17.8085 9.88619 17.8931 9.72293 17.9344C9.55996 17.9762 9.38874 17.9733 9.22729 17.926C9.06583 17.8787 8.9201 17.7887 8.80543 17.6656L0.992925 9.85315C0.817362 9.67737 0.71875 9.43909 0.71875 9.19065C0.71875 8.94221 0.817362 8.70393 0.992925 8.52815L8.80543 0.715649C8.98121 0.540087 9.21949 0.441475 9.46793 0.441475C9.71636 0.441475 9.95464 0.540087 10.1304 0.715649Z"
                        fill="#13191D" />
                    </svg>

                    <span className="sr-only">Previous</span>
                  </span>
                </button>
                <button
                  type="button"
                  className="absolute top-60 md:-top-[75px]  right-30 end-0 z-30 flex items-center justify-center mt-60 px-4 cursor-pointer group focus:outline-none"
                  data-carousel-next
                >
                  <span className="inline-flex items-center justify-center w-10 h-10">
                    <svg
                    className="rtl:rotate-180"
                      width="23"
                      height="18"
                      viewBox="0 0 23 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4936 17.6895C13.318 17.5137 13.2194 17.2755 13.2194 17.027C13.2194 16.7786 13.318 16.5403 13.4936 16.3645L19.7061 10.152L1.6561 10.152C1.40746 10.152 1.169 10.0533 0.993185 9.87744C0.817369 9.70163 0.718597 9.46317 0.718597 9.21453C0.718597 8.96589 0.817369 8.72744 0.993185 8.55162C1.169 8.3758 1.40746 8.27703 1.6561 8.27703L19.7061 8.27703L13.4936 2.06453C13.3702 1.94994 13.28 1.80419 13.2325 1.64263C13.1849 1.48107 13.1819 1.30968 13.2236 1.14653C13.2653 0.983371 13.3503 0.834489 13.4695 0.715564C13.5887 0.596639 13.7378 0.512076 13.9011 0.470783C14.0641 0.429012 14.2353 0.431927 14.3967 0.479219C14.5582 0.526512 14.7039 0.616435 14.8186 0.739533L22.6311 8.55203C22.8067 8.72781 22.9053 8.96609 22.9053 9.21453C22.9053 9.46297 22.8067 9.70125 22.6311 9.87703L14.8186 17.6895C14.6428 17.8651 14.4045 17.9637 14.1561 17.9637C13.9077 17.9637 13.6694 17.8651 13.4936 17.6895Z"
                        fill="#13191D" />
                    </svg>

                    <span className="sr-only">Next</span>
                  </span>
                </button>
              </div>

            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
    
    <TestiModel /></>
  );
};

export default Testimonial;
